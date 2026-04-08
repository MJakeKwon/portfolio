import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { buildSystemPrompt } from '@/lib/system-prompt';

// Rate limiting map: IP -> { count, lastReset }
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

function getClientIp(req: Request) {
  const xff = req.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0]?.trim() || 'anonymous';
  return req.headers.get('x-real-ip') || 'anonymous';
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
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

    const systemPrompt = buildSystemPrompt();
    const client = new GoogleGenAI({ apiKey });

    const history = (Array.isArray(messages) ? messages : [])
      .slice(0, -1)
      .map((m: any) => ({
        role: m?.role === 'user' ? 'user' : 'model',
        parts: [{ text: String(m?.content ?? '') }],
      }));

    const lastMessage = String(messages?.[messages.length - 1]?.content ?? '');

    const result = await client.models.generateContent({
      model: 'gemini-3.1-flash-lite-preview',
      contents: [
        { role: 'user', parts: [{ text: `${systemPrompt}\n\n[대화 기록]\n(아래는 참고용 대화 기록입니다)\n` }] },
        ...history,
        { role: 'user', parts: [{ text: lastMessage }] },
      ],
    });

    const text = result.text ?? '';

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    
    const status = error?.status || error?.response?.status;

    if (status === 429) {
      return NextResponse.json({ error: 'QUOTA_EXCEEDED' }, { status: 429 });
    }
    
    if (status === 401 || status === 403) {
      return NextResponse.json({ error: 'AUTH_ERROR' }, { status: 401 });
    }

    return NextResponse.json({ error: 'SERVER_ERROR' }, { status: 500 });
  }
}
