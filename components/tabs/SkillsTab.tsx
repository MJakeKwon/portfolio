'use client';

import { PORTFOLIO } from '@/lib/portfolio';

export default function SkillsTab() {
  return (
    <div className="space-y-12 py-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900">기술 스택</h1>
        <p className="text-lg leading-7 text-neutral-600">백엔드를 중심에 두고, 운영과 연동에 필요한 기술을 우선순위에 맞춰 정리했습니다.</p>
      </div>

      <div className="space-y-8">
        {PORTFOLIO.skills.map((group) => (
          <section key={group.name} className="rounded-[2.5rem] border border-white/70 bg-white/72 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">{group.name}</div>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">{group.name}</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-neutral-500">{group.description}</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 rounded-[1.5rem] border border-white/70 bg-white/80 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold tracking-[0.12em] text-neutral-500">
                    {skill.name
                      .split(/[\s./]+/)
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((part) => part[0]?.toUpperCase())
                      .join('')}
                  </div>
                  <span className="text-sm font-medium text-neutral-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
