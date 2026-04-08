'use client';

import Image from 'next/image';
import { PORTFOLIO } from '@/lib/portfolio';

export default function SkillsTab() {
  return (
    <div className="py-10 space-y-12">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900">기술 스택</h1>

      <div className="space-y-10">
        {PORTFOLIO.skills.map((group) => (
          <section key={group.name} className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400">
              {group.name}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 px-4 py-3 bg-white/60 backdrop-blur-xl border border-white/60 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:bg-white/80 transition-all group cursor-default"
                >
                  <div className="w-6 h-6 relative flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                    <img 
                      src={`https://cdn.simpleicons.org/${skill.slug}`} 
                      alt={skill.name}
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-neutral-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="p-8 bg-white/60 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.04)] space-y-4">
        <h2 className="text-xl font-bold text-neutral-900">학습 및 활용 전략</h2>
        <p className="text-neutral-600 text-sm leading-relaxed">
          단순히 기술을 익히는 것에 그치지 않고, AI 도구를 적극적으로 활용하여 개발 생산성을 극대화합니다. 
          특히 Cursor와 Gemini API를 연동하여 복잡한 비즈니스 로직을 빠르게 구현하고 검증하는 방식을 선호합니다.
        </p>
      </section>
    </div>
  );
}
