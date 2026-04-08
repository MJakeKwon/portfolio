# 권민재 포트폴리오

구조와 운영까지 같이 보는 백엔드 개발자 권민재의 포트폴리오 사이트입니다.

## 프로젝트 소개

- 휴머닉스 실무 경험과 주요 프로젝트를 실제 지원용 포트폴리오 형태로 정리한 Next.js 사이트입니다.
- 홈, 소개, 프로젝트, 기술 스택, 경력, 연락처, 포트폴리오 Q&A 탭으로 구성되어 있습니다.
- Q&A는 포트폴리오에 담긴 정보 범위 안에서만 답변하도록 제한되어 있습니다.

## 사용 기술

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Motion
- Zustand
- Gemini API

## 실행 방법

```powershell
cd C:\Users\lucy\portfolio\portfolio
npm.cmd install
npm.cmd run dev
```

브라우저에서 `http://localhost:3000`으로 접속하면 됩니다.

## 환경 변수

`.env.local` 예시:

```env
GEMINI_API_KEY=
SITE_URL=
CHAT_RPM_LIMIT=5
CHAT_RPD_LIMIT=80
CHAT_TOTAL_LIMIT=500
```

- `GEMINI_API_KEY`: 포트폴리오 Q&A용 Gemini API 키
- `SITE_URL`: 배포 URL
- `CHAT_RPM_LIMIT`: 분당 요청 제한
- `CHAT_RPD_LIMIT`: 하루 요청 제한
- `CHAT_TOTAL_LIMIT`: 전체 누적 요청 제한

## 주요 섹션

- 홈: 이름, 포지션, 한 줄 소개, 핵심 성과, 대표 프로젝트
- 소개: 포지셔닝, 소개 문단, 키워드
- 프로젝트: 문제, 기여, 결과 중심 정리
- 기술 스택: 백엔드 중심 스택 분류
- 경력: 휴머닉스 실무 경험
- 연락처: GitHub, 프로필 README, 이메일
- Q&A: 포트폴리오 기반 질문 응답

## 커스터마이징 포인트

- `lib/portfolio.ts`: 포트폴리오 데이터 소스
- `lib/system-prompt.ts`: Q&A 시스템 프롬프트
- `components/tabs/*`: 섹션별 UI
- `app/layout.tsx`: 메타데이터와 전역 설정
- `app/api/chat/route.ts`: 요청 제한과 Gemini API 호출

## 주의 사항

- 실무 프로젝트는 private 저장소 링크를 노출하지 않고 설명 중심으로만 구성했습니다.
- 공개 링크는 GitHub 프로필과 공개 저장소만 사용합니다.
