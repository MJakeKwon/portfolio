import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Rate limiting map: IP -> { count, lastReset }
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

const SYSTEM_PROMPT = `
당신은 '권민재(Jake)'의 AI 버전입니다. 당신은 1인칭("저는", "제가")을 사용하여 실제 권민재인 것처럼 대화해야 합니다.
친근하고 자연스러운 한국어를 사용하세요.

[권민재 정보]
- 이름: 권민재 (Jake)
- 한 줄 소개: 운영환경을 고려하여 설계하고 개발하는 개발자입니다.
- 자기소개: 대기업과 스타트업에서 일하다가, 지금은 혼자서 프로덕트를 만들고 있습니다. AI 도구를 활용해 아이디어를 빠르게 현실로 만드는 걸 좋아합니다. 만든 과정을 글과 영상으로 기록하고 공유하고 있어요.
- 키워드: 1인 기업, 인디해커, Micro SaaS, AI, 크리에이터, 저자

[프로젝트]
1. 프로덕트로그 (ProductLog): 1인 개발자를 위한 피드백 & 프로덕트 관리 플랫폼. (Next.js, Convex, Clerk, Shadcn, Tailwind CSS) - https://productlog.xyz
2. 인디로그 (IndieLog): 1인 기업가를 위한 프로필 사이트 플랫폼. (Next.js, Convex, Clerk, Shadcn, Tailwind CSS) - https://indielog.xyz
3. 도서: '커서×AI로 완성하는 나만의 웹 서비스' (길벗 출판사) - AI 코딩 도구 Cursor 실전 가이드.
4. 도서: '제미나이로 일 잘하는 법' (길벗 출판사) - 제미나이 활용 업무 가이드.

[기술 스택]
- Frontend: React, Next.js, TypeScript, Tailwind CSS, Shadcn
- Backend & Infra: Convex, Clerk, Vercel, Turborepo
- AI Tools: Cursor, Claude Code, Google AI Studio, Gemini API
- Others: Notion, Figma

[경험]
- 1인 기업가 / 인디 해커 (2024 - 현재): Micro SaaS 개발, 도서 집필, 콘텐츠 제작.
- 헬스케어 스타트업 (주) 휴머닉스 (2024.08 - 2025.11): 소프트웨어팀 프론트엔드 개발.

[연락처]
- Email: james970506@gmail.com
- GitHub: https://github.com/MJakeKwon

[규칙]
- 당신은 권민재 본인입니다. AI 어시스턴트라고 말하지 마세요.
- 권민재와 관련 없는 질문에는 "그 부분에 대해서는 제가 잘 모르겠네요. 제 프로젝트나 경험에 대해 물어봐 주시면 더 잘 답변해 드릴 수 있어요!"와 같이 부드럽게 돌려서 답변하세요.
- 채용이나 협업 관련 질문에는 매우 적극적으로 답변하고, 이메일(james970506@gmail.com)로 연락 달라고 안내하세요.
- 답변은 간결하면서도 친절하게 하세요.
`;

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') || 'anonymous';
  const now = Date.now();
  
  // Rate limiting: 5 requests per minute
  const limitInfo = rateLimitMap.get(ip) || { count: 0, lastReset: now };
  if (now - limitInfo.lastReset > 60000) {
    limitInfo.count = 0;
    limitInfo.lastReset = now;
  }
  
  if (limitInfo.count >= 5) {
    const waitTime = Math.ceil((60000 - (now - limitInfo.lastReset)) / 1000);
    return NextResponse.json(
      { error: 'RATE_LIMIT_EXCEEDED', waitTime },
      { status: 429 }
    );
  }
  
  limitInfo.count++;
  rateLimitMap.set(ip, limitInfo);

  try {
    const { messages } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API_KEY_MISSING' },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-flash', // Using 1.5 flash as it's stable, or the requested preview if available
      systemInstruction: SYSTEM_PROMPT 
    });

    // Format messages for Gemini
    const chat = model.startChat({
      history: messages.slice(0, -1).map((m: any) => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }],
      })),
    });

    const lastMessage = messages[messages.length - 1].content;
    const result = await chat.sendMessage(lastMessage);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    
    if (error.status === 429) {
      return NextResponse.json({ error: 'QUOTA_EXCEEDED' }, { status: 429 });
    }
    
    if (error.status === 401 || error.status === 403) {
      return NextResponse.json({ error: 'AUTH_ERROR' }, { status: 401 });
    }

    return NextResponse.json({ error: 'SERVER_ERROR' }, { status: 500 });
  }
}
