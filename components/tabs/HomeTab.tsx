'use client';

import Image from 'next/image';
import { ArrowRight, MessageCircleMore } from 'lucide-react';
import { motion } from 'motion/react';
import { TabType } from '@/app/page';
import { PORTFOLIO } from '@/lib/portfolio';

interface HomeTabProps {
  onNavigate: (tab: TabType) => void;
}

export default function HomeTab({ onNavigate }: HomeTabProps) {
  const featuredProjects = PORTFOLIO.projects.slice(0, 3);

  return (
    <div className="relative min-h-[75vh] py-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-14 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute left-0 top-1/3 h-52 w-52 rounded-full bg-cyan-200/30 blur-3xl" />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="relative z-10 space-y-10"
      >
        <div className="space-y-6 text-center">
          <div className="mx-auto h-28 w-28 overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl md:h-32 md:w-32">
            <div className="relative h-full w-full">
              <Image
                src="/profile-photo.png"
                alt={`${PORTFOLIO.profile.name} 프로필 사진`}
                fill
                className="object-cover object-[center_18%] scale-[1.04]"
                sizes="128px"
                priority
              />
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400">{PORTFOLIO.profile.role}</p>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-6xl">{PORTFOLIO.profile.name}</h1>
            <p className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-neutral-700 md:text-2xl">
              {PORTFOLIO.profile.oneLiner}
            </p>
            <p className="mx-auto max-w-2xl text-base leading-7 text-neutral-500 md:text-lg">{PORTFOLIO.profile.heroSummary}</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {PORTFOLIO.highlights.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-[0_14px_50px_rgba(15,23,42,0.06)] backdrop-blur-2xl"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">{metric.label}</div>
              <div className="mt-3 text-xl font-semibold tracking-tight text-neutral-900">{metric.value}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-[2.5rem] border border-white/70 bg-white/72 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">Featured Work</div>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">문제 해결 중심 프로젝트</h2>
              </div>
              <button
                onClick={() => onNavigate('projects')}
                className="hidden items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02] md:flex"
              >
                프로젝트 보기
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="grid gap-4">
              {featuredProjects.map((project) => (
                <button
                  key={project.title}
                  onClick={() => onNavigate('projects')}
                  className={`group rounded-[2rem] border border-white/60 bg-gradient-to-br ${project.accent} p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white/80`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">{project.problem}</div>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-neutral-900">{project.title}</h3>
                    </div>
                    <ArrowRight size={18} className="mt-1 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-neutral-700" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{project.summary}</p>
                </button>
              ))}
            </div>
          </section>

          <div className="grid gap-5">
            <section className="rounded-[2.5rem] border border-white/70 bg-white/72 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">Quick Links</div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {PORTFOLIO.navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className="rounded-[1.5rem] border border-white/70 bg-white/65 px-4 py-4 text-left transition-all duration-300 hover:border-sky-200 hover:bg-white"
                  >
                    <div className="text-xs font-semibold tracking-[0.18em] text-neutral-400">{item.icon}</div>
                    <div className="mt-2 text-sm font-semibold text-neutral-800">{item.label}</div>
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-[2.5rem] border border-sky-100 bg-gradient-to-br from-sky-50/90 to-white/80 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">Portfolio Q&amp;A</div>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">챗은 보조 기능으로 두었습니다</h2>
                </div>
                <MessageCircleMore className="text-sky-500" />
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{PORTFOLIO.chat.description}</p>
              <button
                onClick={() => onNavigate('chat')}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-apple-blue px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
              >
                Q&amp;A 열기
                <ArrowRight size={16} />
              </button>
            </section>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
