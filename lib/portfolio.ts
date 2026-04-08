export const PORTFOLIO = {
  profile: {
    name: '성구',
    oneLiner: '운영 환경을 고려하여 설계하고 개발합니다.',
    intro: [
      '대기업과 스타트업을 거쳐, 현재는 독립적으로 프로덕트를 개발하고 있습니다.',
      'AI 도구를 적극적으로 활용하여 아이디어를 신속하게 구현하는 과정에 깊은 흥미를 느낍니다. 이러한 개발 여정과 인사이트를 글과 영상으로 꾸준히 기록하며 커뮤니티와 공유하고 있습니다.',
    ],
    philosophy:
      '단순히 코드를 작성하는 것을 넘어, 실제 운영 환경에서의 안정성과 사용자에게 전달되는 가치를 최우선으로 고려합니다. 효율적인 아키텍처 설계와 지속 가능한 개발 문화를 구축하는 것을 지향합니다.',
    keywords: ['1인 기업', '인디해커', 'Micro SaaS', 'AI', '크리에이터', '저자'],
  },
  projects: [
    {
      category: 'Micro SaaS',
      title: '프로덕트로그',
      description: '1인 개발자를 위한 피드백 및 프로덕트 관리 플랫폼입니다.',
      tags: ['Next.js', 'Convex', 'Clerk', 'Shadcn', 'Tailwind CSS'],
      image: 'https://picsum.photos/seed/productlog/800/600',
      link: 'https://productlog.xyz',
    },
    {
      category: 'Micro SaaS',
      title: '인디로그',
      description: '1인 기업가를 위한 프로필 사이트 구축 플랫폼입니다.',
      tags: ['Next.js', 'Convex', 'Clerk', 'Shadcn', 'Tailwind CSS'],
      image: 'https://picsum.photos/seed/indielog/800/600',
      link: 'https://indielog.xyz',
    },
    {
      category: '도서 집필',
      title: '커서×AI로 완성하는 나만의 웹 서비스',
      description: 'AI 코딩 도구 Cursor를 활용한 실전 웹 서비스 개발 가이드입니다.',
      tags: ['AI', 'Cursor', 'Guide', 'Book'],
      image: 'https://picsum.photos/seed/cursorbook/800/600',
      link: 'https://product.kyobobook.co.kr/detail/S000218729929',
      publisher: '길벗',
    },
    {
      category: '도서 집필',
      title: '제미나이로 일 잘하는 법',
      description: '구글 제미나이(Gemini)를 활용한 실무 업무 효율화 가이드입니다.',
      tags: ['AI', 'Gemini', 'Guide', 'Book'],
      image: 'https://picsum.photos/seed/geminibook/800/600',
      link: 'https://product.kyobobook.co.kr/detail/S000219506535',
      publisher: '길벗',
    },
  ],
  skills: [
    {
      name: 'Frontend',
      skills: [
        { name: 'React', slug: 'react' },
        { name: 'Next.js', slug: 'nextdotjs' },
        { name: 'TypeScript', slug: 'typescript' },
        { name: 'Tailwind CSS', slug: 'tailwindcss' },
        { name: 'Shadcn', slug: 'shadcnui' },
      ],
    },
    {
      name: 'Backend & Infrastructure',
      skills: [
        { name: 'Convex', slug: 'convex' },
        { name: 'Clerk', slug: 'clerk' },
        { name: 'Vercel', slug: 'vercel' },
        { name: 'Turborepo', slug: 'turborepo' },
      ],
    },
    {
      name: 'AI Tools',
      skills: [
        { name: 'Cursor', slug: 'cursor' },
        { name: 'Claude Code', slug: 'anthropic' },
        { name: 'Google AI Studio', slug: 'google' },
        { name: 'Gemini API', slug: 'googlegemini' },
      ],
    },
    {
      name: 'Planning & Design',
      skills: [
        { name: 'Notion', slug: 'notion' },
        { name: 'Figma', slug: 'figma' },
      ],
    },
  ],
  experiences: [
    {
      company: '독립 개발자 / 인디 해커',
      role: 'Founder & Full-stack Developer',
      period: '2024.01 - 현재',
      description:
        'Micro SaaS 프로덕트를 기획부터 개발, 운영까지 전담하며, 개발 경험을 바탕으로 도서를 집필하고 콘텐츠를 제작합니다.',
      details: [
        '프로덕트로그(ProductLog), 인디로그(IndieLog) 등 다수의 Micro SaaS 기획 및 풀스택 개발',
        'Next.js, Convex, Clerk 등 모던 웹 기술 스택을 활용한 빠른 프로토타이핑 및 서비스 런칭',
        '길벗 출판사 IT 전문서적 2권 집필 ("커서×AI로 완성하는 나만의 웹 서비스", "제미나이로 일 잘하는 법")',
        'AI 도구를 활용한 개발 생산성 향상 방법론 연구 및 커뮤니티 공유',
      ],
    },
    {
      company: '(주) 휴머닉스',
      role: 'Frontend Developer',
      period: '2024.08 - 2025.11',
      description:
        '헬스케어 스타트업 소프트웨어팀에서 프론트엔드 개발을 담당하며, 사용자 친화적인 웹 서비스를 구축했습니다.',
      details: [
        '의료 데이터 시각화 대시보드 프론트엔드 아키텍처 설계 및 개발',
        'React, TypeScript 기반의 재사용 가능한 UI 컴포넌트 시스템 구축',
        'RESTful API 연동 및 전역 상태 관리를 통한 클라이언트 성능 최적화',
        '기획 및 디자인 팀과의 긴밀한 협업을 통한 애자일 개발 프로세스 참여',
      ],
    },
  ],
  contacts: [
    {
      name: 'Email',
      value: 'james970506@gmail.com',
      link: 'mailto:james970506@gmail.com',
    },
    {
      name: 'GitHub',
      value: 'github.com/MJakeKwon',
      link: 'https://github.com/MJakeKwon',
    },
  ],
} as const;

