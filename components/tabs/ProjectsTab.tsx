'use client';

import { ExternalLink, LockKeyhole } from 'lucide-react';
import { PORTFOLIO } from '@/lib/portfolio';

export default function ProjectsTab() {
  return (
    <div className="space-y-12 py-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900">프로젝트</h1>
        <p className="text-lg leading-7 text-neutral-600">무엇을 만들었는지보다 어떤 문제를 해결했는지가 먼저 보이도록 정리했습니다.</p>
      </div>

      <div className="space-y-8">
        {PORTFOLIO.projects.map((project) => (
          <section
            key={project.title}
            className={`overflow-hidden rounded-[2.8rem] border border-white/70 bg-gradient-to-br ${project.accent} shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl`}
          >
            <div className="border-b border-white/60 bg-white/68 p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">{project.category}</div>
                  <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">{project.title}</h2>
                  <p className="text-sm font-medium text-sky-700">{project.problem}</p>
                  <p className="max-w-3xl text-base leading-7 text-neutral-600">{project.summary}</p>
                </div>

                {project.links?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
                      >
                        {link.label}
                        <ExternalLink size={15} />
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-600">
                    <LockKeyhole size={15} />
                    {project.linkNote}
                  </div>
                )}
              </div>
            </div>

            <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
              <div className="bg-white/52 p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">핵심 작업</div>
                <ul className="mt-5 space-y-3">
                  {project.contributions.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-neutral-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/64 p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">성과와 결과</div>
                <div className="mt-5 space-y-3">
                  {project.outcomes.map((outcome) => (
                    <div key={outcome} className="rounded-[1.5rem] border border-white/70 bg-white/80 px-4 py-4 text-sm font-medium leading-6 text-neutral-700">
                      {outcome}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-xs font-semibold text-neutral-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
