export type TabId = 'about' | 'projects' | 'skills' | 'experience' | 'contact' | 'chat';

type LinkItem = {
  label: string;
  href: string;
};

type ContactItem = {
  label: string;
  value: string;
  href: string;
  publicNote?: string;
};

type ProjectMetric = {
  label: string;
  value: string;
};

type Project = {
  category: string;
  title: string;
  problem: string;
  summary: string;
  contributions: readonly string[];
  outcomes: readonly string[];
  tags: readonly string[];
  accent: string;
  links?: readonly LinkItem[];
  linkNote?: string;
};

type Experience = {
  company: string;
  team: string;
  role: string;
  period: string;
  summary: string;
  achievements: readonly string[];
  stack: readonly string[];
};

type SkillGroup = {
  name: string;
  description: string;
  skills: readonly {
    name: string;
    slug: string;
  }[];
};

export const PORTFOLIO = {
  profile: {
    name: '권민재',
    role: 'Backend Engineer',
    oneLiner: '운영과 요구사항을 함께 고려하는 백엔드 개발자입니다.',
    heroSummary:
      '기능 구현에 머무르지 않고 구조, 연동, 운영 흐름까지 함께 설계하며 실제 환경에서 안정적으로 동작하는 시스템을 만드는 데 집중해왔습니다.',
    intro: [
      '휴머닉스에서 세짐 초기 프로그램, 휴머니아 앱 백엔드, OTA 시스템을 맡으며 기기, 서버, 앱이 함께 연결되는 환경을 다뤘습니다.',
      '조회 지연, 배포 실패, 운영 수작업처럼 반복적으로 발생하던 문제를 줄이기 위해 데이터 흐름을 다시 설계하고 운영 도구를 정리해왔습니다.',
      '초기 서버 환경을 직접 구성하며 인증, 프록시, OTA 배포 경로, 접근 통제까지 운영에 필요한 기본 흐름을 잡았습니다.',
      'Java와 Spring Boot를 중심으로 학습을 이어가고 있으며, 실무에서는 Node.js와 Express 기반 백엔드에서 연동과 운영 이슈를 해결해왔습니다.',
    ],
    philosophy:
      '단순히 기능이 돌아가는 상태보다, 실제 현장에서 배포와 장애 대응까지 감당할 수 있는 구조를 더 중요하게 생각합니다.',
    keywords: [
      'Backend',
      '운영 안정성',
      '시스템 연동',
      '데이터 흐름 설계',
      'API 최적화',
      'OTA 자동화',
      '장애 대응',
    ],
  },
  navigation: [
    { id: 'about', label: '소개', icon: '01' },
    { id: 'projects', label: '프로젝트', icon: '02' },
    { id: 'skills', label: '기술 스택', icon: '03' },
    { id: 'experience', label: '경력', icon: '04' },
    { id: 'contact', label: '연락처', icon: '05' },
  ] satisfies readonly { id: TabId; label: string; icon: string }[],
  highlights: {
    metrics: [
      { label: '요약 API 응답 시간', value: '800ms → 200ms대' },
      { label: '요청당 조회 쿼리 수', value: '10회+ → 3~4회' },
      { label: '배포 리드타임', value: '수시간 → 수분' },
      { label: '운영 작업 시간', value: '30분 → 5분' },
    ] satisfies readonly ProjectMetric[],
  },
  projects: [
    {
      category: '실무 프로젝트',
      title: '세짐 플랫폼 / 휴머니아 앱 백엔드',
      problem: '조회 성능과 연동 안정성',
      summary:
        '저장소 역할을 분리하고 조회 구조를 다시 설계해 앱, 서버, 기기 사이의 데이터 흐름을 안정화한 작업입니다.',
      contributions: [
        '원본 센서 데이터는 S3, 스키마 변화가 잦은 데이터는 MongoDB, 조회와 집계 데이터는 MySQL로 분리했습니다.',
        'ORM 중심 조회를 SQL 집계 쿼리 중심으로 재작성해 요약 API 병목을 줄였습니다.',
        '루틴 생성 및 수정 API의 검증 흐름과 트랜잭션 경계를 정리했습니다.',
        'QR 로그인 API와 루틴 전송 기능을 구현하고, 앱과 기기에서 사용하는 공통 필드 규격을 정리했습니다.',
        '포트 재확인과 매핑 방식으로 환경별 통신 불안정성을 완화했습니다.',
      ],
      outcomes: [
        '요약 API 평균 응답 시간을 800ms에서 200ms대로 개선',
        '요청당 조회 쿼리 수를 10회 이상에서 3~4회 수준으로 축소',
        '앱, 서버, 기기 간 필드 정의를 통일해 연동 이슈 감소',
      ],
      tags: [
        'Node.js',
        'Express',
        'MongoDB',
        'MySQL',
        'Redis',
        'AWS EC2',
        'AWS RDS',
        'AWS S3',
        'CloudFront',
        'Socket.IO',
        'Electron',
        'Vue.js',
      ],
      accent: 'from-sky-500/20 via-cyan-400/10 to-transparent',
      linkNote: '실무 프로젝트 특성상 공개 저장소 링크는 노출하지 않았습니다.',
    },
    {
      category: '실무 프로젝트',
      title: 'OTA 업데이트 / 운영도구',
      problem: '수동 배포와 운영 수작업',
      summary:
        '현장 수동 배포 구조를 원격 OTA와 운영 화면으로 전환해 배포 리드타임과 운영 반복 작업을 줄인 작업입니다.',
      contributions: [
        'Electron 기반 런처를 통해 서버 버전 기준 자동 다운로드와 적용 흐름을 구현했습니다.',
        'AppData 기반 경로 고정, 다운로드 재시도, 이전 버전 폴백 구조로 운영 안정성을 높였습니다.',
        '느린 네트워크 환경에서도 동작하도록 배포 흐름을 조정했습니다.',
        '운영자가 웹 화면에서 기기 등록, 버전 지정, 상태 확인을 직접 처리할 수 있게 했습니다.',
        '운영 접근 통제와 배포 경로를 함께 정리했습니다.',
      ],
      outcomes: [
        '배포 리드타임을 수시간에서 수분 수준으로 단축',
        '운영 작업 시간을 30분에서 5분으로 단축',
        '기기 등록, 버전 관리, 상태 확인을 한 화면에서 운영 가능하도록 통합',
      ],
      tags: ['Electron', 'Node.js', 'Express', 'MySQL', 'AWS S3', 'CloudFront', 'WAF', 'Vue.js'],
      accent: 'from-emerald-500/20 via-teal-400/10 to-transparent',
      linkNote: '실무 프로젝트 특성상 공개 링크 없이 경험 설명 중심으로 구성했습니다.',
    },
    {
      category: '팀 프로젝트',
      title: '배리어프리 길찾기',
      problem: '최신성 있는 경로 탐색 구조',
      summary:
        '경로 탐색 구조를 재구성하고 장애물 최신성을 반영하는 흐름을 설계해, 사용자 유형별 가중치와 실시간 장애물 대응을 함께 다룬 프로젝트입니다.',
      contributions: [
        'OSM, PostGIS, GraphHopper 기반의 경로 탐색 구조를 구성했습니다.',
        'GraphHopper Custom Model로 사용자 유형별 경로 가중치를 분리했습니다.',
        '정적 지도 데이터와 동적 장애물 데이터를 분리하고 Kafka 이벤트 기반 반영 구조를 만들었습니다.',
        'JMeter로 100명 × 10회 부하 테스트를 진행했습니다.',
        '외부 엔진 타임아웃과 좌표 재탐색 조건을 조정해 경로 실패율을 낮췄습니다.',
      ],
      outcomes: [
        'JMeter 오류율을 10%에서 1%대로 감소',
        '정적 데이터와 동적 데이터를 분리해 최신성 반영 구조 구축',
      ],
      tags: [
        'Java',
        'Spring Boot',
        'PostgreSQL',
        'PostGIS',
        'OSM',
        'GraphHopper',
        'Kafka',
        'Docker',
        'ECS',
        'NGINX',
        'JMeter',
      ],
      accent: 'from-amber-500/20 via-orange-400/10 to-transparent',
      linkNote: 'TODO: 공개 GitHub 또는 서비스 링크 최종 확인 후 연결 필요',
    },
    {
      category: 'Additional Project',
      title: 'Prography 11th Backend',
      problem: '정책이 많은 출결 도메인 설계',
      summary:
        'Spring Boot 기반 출결 관리 시스템 과제로, 회원, 일정, QR, 출결, 보증금 정책을 API와 문서로 정리한 프로젝트입니다.',
      contributions: [
        '회원, 일정, QR, 출결, 보증금 관리 API를 구현했습니다.',
        'Soft-delete, QR 갱신 정책, 패널티 및 환급 규칙을 서비스 로직에 반영했습니다.',
        'ERD, 시스템 아키텍처, 테스트, 설계 문서를 함께 정리했습니다.',
      ],
      outcomes: [
        '필수 API 16개와 가산점 API 9개 구현',
        '정책, 테스트, 문서화까지 포함해 설계 의도를 명확히 정리',
      ],
      tags: [
        'Java 17',
        'Spring Boot 3.5.11',
        'Spring Data JPA',
        'H2',
        'Bean Validation',
        'BCrypt',
        'JUnit5',
      ],
      accent: 'from-violet-500/20 via-indigo-400/10 to-transparent',
      links: [{ label: 'GitHub', href: 'https://github.com/MJakeKwon/prography-11th-backend' }],
    },
  ] satisfies readonly Project[],
  experiences: [
    {
      company: '휴머닉스',
      team: '소프트웨어팀 연구원',
      role: 'Backend Engineer',
      period: '2024.08 ~ 2025.11',
      summary: '세짐 초기 구조와 API, 휴머니아 앱 백엔드와 서버, 세짐 OTA 시스템 개발을 담당했습니다.',
      achievements: [
        'Node.js와 Express 기반 API 서버를 개발하고 AWS 환경에서 운영',
        '기기, 서버, 앱 사이 데이터 흐름을 설계하고 저장소 분리 구조를 정리',
        'MongoDB, MySQL, S3 역할 분리를 통해 데이터 성격별 저장 전략 구성',
        'Redis 기반 인증과 세션 처리, QR 로그인 API, 루틴 전송 연동 구현',
        '수동 배포 구조를 OTA와 운영 도구로 전환',
        '운영 이슈를 분석하고 현장 환경에 맞춘 대응 흐름을 정리',
      ],
      stack: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Redis', 'AWS', 'Electron', 'Vue.js'],
    },
  ] satisfies readonly Experience[],
  skills: [
    {
      name: 'Backend',
      description: '실무와 학습 모두에서 중심이 되는 백엔드 기술입니다.',
      skills: [
        { name: 'Java', slug: 'openjdk' },
        { name: 'Spring Boot', slug: 'springboot' },
        { name: 'Node.js', slug: 'nodedotjs' },
        { name: 'Express', slug: 'express' },
      ],
    },
    {
      name: 'Database',
      description: '데이터 성격에 따라 저장소 역할을 분리해 사용했습니다.',
      skills: [
        { name: 'MySQL', slug: 'mysql' },
        { name: 'PostgreSQL', slug: 'postgresql' },
        { name: 'MongoDB', slug: 'mongodb' },
        { name: 'Redis', slug: 'redis' },
      ],
    },
    {
      name: 'Infra / DevOps',
      description: '운영 환경 구성과 배포 흐름 정리에 사용한 기술입니다.',
      skills: [
        { name: 'AWS EC2', slug: 'amazonec2' },
        { name: 'RDS', slug: 'amazonrds' },
        { name: 'S3', slug: 'amazons3' },
        { name: 'CloudFront', slug: 'amazoncloudfront' },
        { name: 'ECS', slug: 'amazonecs' },
        { name: 'Docker', slug: 'docker' },
        { name: 'GitHub Actions', slug: 'githubactions' },
      ],
    },
    {
      name: 'Messaging / Integration',
      description: '시스템 간 연결과 이벤트 흐름 구성에 사용했습니다.',
      skills: [
        { name: 'Kafka', slug: 'apachekafka' },
        { name: 'RabbitMQ', slug: 'rabbitmq' },
        { name: 'Socket.IO', slug: 'socketdotio' },
      ],
    },
    {
      name: 'Tools',
      description: '문서화, 테스트, 운영 도구 제작에 사용한 보조 기술입니다.',
      skills: [
        { name: 'Swagger / OpenAPI', slug: 'swagger' },
        { name: 'JMeter', slug: 'apachejmeter' },
        { name: 'Electron', slug: 'electron' },
        { name: 'Git', slug: 'git' },
        { name: 'IntelliJ', slug: 'intellijidea' },
        { name: 'Vue.js', slug: 'vuedotjs' },
        { name: 'React', slug: 'react' },
        { name: 'Next.js', slug: 'nextdotjs' },
        { name: 'TypeScript', slug: 'typescript' },
        { name: 'Tailwind CSS', slug: 'tailwindcss' },
      ],
    },
  ] satisfies readonly SkillGroup[],
  contacts: [
    {
      label: 'Email',
      value: 'james970506@gmail.com',
      href: 'mailto:james970506@gmail.com',
      publicNote: '공개용 이메일로 사용 중인 주소입니다.',
    },
    {
      label: 'GitHub',
      value: 'github.com/MJakeKwon',
      href: 'https://github.com/MJakeKwon',
    },
    {
      label: 'Profile README',
      value: 'github.com/MJakeKwon/MJakeKwon',
      href: 'https://github.com/MJakeKwon/MJakeKwon',
    },
  ] satisfies readonly ContactItem[],
  chat: {
    title: '포트폴리오 Q&A',
    description: '프로젝트나 경험에 대해 질문해보세요. 포트폴리오에 담긴 경험 범위 안에서만 답변합니다.',
    suggestions: [
      '휴머닉스에서 어떤 운영 문제를 해결했나요?',
      '세짐 플랫폼 프로젝트에서 저장소를 왜 분리했나요?',
      '배리어프리 길찾기 프로젝트의 핵심 설계 포인트는 무엇인가요?',
    ],
  },
  todos: [
    '배리어프리 길찾기 공개 링크가 확인되면 프로젝트 링크를 추가할 것',
    '실무 프로젝트의 외부 공개 링크가 있다면 회사 정책 범위 안에서만 추가할 것',
    '공개 포트폴리오에 사용할 이메일 주소를 최종 한 번 더 확인할 것',
  ],
} as const;
