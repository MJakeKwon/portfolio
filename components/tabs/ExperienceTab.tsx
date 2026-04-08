'use client';

import { motion } from 'motion/react';

const EXPERIENCES = [
  {
    company: '독립 개발자 / 인디 해커',
    role: 'Founder & Full-stack Developer',
    period: '2024.01 - 현재',
    description: 'Micro SaaS 프로덕트를 기획부터 개발, 운영까지 전담하며, 개발 경험을 바탕으로 도서를 집필하고 콘텐츠를 제작합니다.',
    details: [
      '프로덕트로그(ProductLog), 인디로그(IndieLog) 등 다수의 Micro SaaS 기획 및 풀스택 개발',
      'Next.js, Convex, Clerk 등 모던 웹 기술 스택을 활용한 빠른 프로토타이핑 및 서비스 런칭',
      '길벗 출판사 IT 전문서적 2권 집필 ("커서×AI로 완성하는 나만의 웹 서비스", "제미나이로 일 잘하는 법")',
      'AI 도구를 활용한 개발 생산성 향상 방법론 연구 및 커뮤니티 공유'
    ]
  },
  {
    company: '(주) 휴머닉스',
    role: 'Frontend Developer',
    period: '2024.08 - 2025.11',
    description: '헬스케어 스타트업 소프트웨어팀에서 프론트엔드 개발을 담당하며, 사용자 친화적인 웹 서비스를 구축했습니다.',
    details: [
      '의료 데이터 시각화 대시보드 프론트엔드 아키텍처 설계 및 개발',
      'React, TypeScript 기반의 재사용 가능한 UI 컴포넌트 시스템 구축',
      'RESTful API 연동 및 전역 상태 관리를 통한 클라이언트 성능 최적화',
      '기획 및 디자인 팀과의 긴밀한 협업을 통한 애자일 개발 프로세스 참여'
    ]
  }
];

export default function ExperienceTab() {
  return (
    <div className="py-10 space-y-12">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900">경험</h1>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-200 before:to-transparent">
        {EXPERIENCES.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-apple-blue text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white/60 backdrop-blur-2xl border border-white/60 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-300 hover:bg-white/80 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]">
              <div className="flex flex-col gap-1 mb-4">
                <span className="text-sm font-bold text-apple-blue uppercase tracking-wider">{exp.period}</span>
                <h3 className="text-xl font-bold text-neutral-900">{exp.role}</h3>
                <h4 className="text-base font-medium text-neutral-500">{exp.company}</h4>
              </div>
              
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                {exp.description}
              </p>
              
              <ul className="space-y-2">
                {exp.details.map((detail, i) => (
                  <li key={i} className="text-sm text-neutral-500 flex gap-2">
                    <span className="text-apple-blue mt-0.5">•</span>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
