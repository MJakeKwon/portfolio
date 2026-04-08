'use client';

import { motion } from 'motion/react';
import { PORTFOLIO } from '@/lib/portfolio';

export default function ExperienceTab() {
  return (
    <div className="space-y-12 py-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900">경력</h1>
        <p className="text-lg leading-7 text-neutral-600">기능 개발뿐 아니라 운영 이슈를 줄이고 배포 흐름을 정리한 경험을 중심으로 정리했습니다.</p>
      </div>

      <div className="relative space-y-8 before:absolute before:left-5 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-neutral-200 before:to-transparent md:before:left-1/2">
        {PORTFOLIO.experiences.map((experience, index) => (
          <motion.section
            key={experience.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
          >
            <div className="absolute left-5 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-apple-blue ring-8 ring-[#f5f5f7] md:left-1/2" />

            <div className="md:w-[calc(50%-2.5rem)]" />

            <div className="ml-10 rounded-[2.5rem] border border-white/70 bg-white/72 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl md:ml-0 md:w-[calc(50%-2.5rem)]">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">{experience.period}</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900">{experience.company}</h2>
              <p className="mt-1 text-sm font-medium text-sky-700">
                {experience.team} · {experience.role}
              </p>
              <p className="mt-4 text-base leading-7 text-neutral-600">{experience.summary}</p>

              <ul className="mt-6 space-y-3">
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3 text-sm leading-6 text-neutral-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {experience.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-xs font-semibold text-neutral-600">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
