'use client';

import { ArrowUpRight, Github, Mail, NotebookText } from 'lucide-react';
import { PORTFOLIO } from '@/lib/portfolio';

const ICONS = {
  Email: Mail,
  GitHub: Github,
  'Profile README': NotebookText,
} as const;

export default function ContactTab() {
  return (
    <div className="space-y-12 py-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900">연락처</h1>
        <p className="text-lg leading-7 text-neutral-600">지원, 협업, 프로젝트 관련 연락에 사용할 수 있는 공개 채널만 정리했습니다.</p>
      </div>

      <div className="grid gap-5">
        {PORTFOLIO.contacts.map((contact) => {
          const Icon = ICONS[contact.label as keyof typeof ICONS] ?? Mail;

          return (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[2.3rem] border border-white/70 bg-white/72 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.4rem] bg-neutral-900 text-white">
                    <Icon size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">{contact.label}</div>
                    <div className="mt-2 break-all text-xl font-semibold tracking-tight text-neutral-900">{contact.value}</div>
                    {contact.publicNote ? <p className="mt-2 text-sm leading-6 text-neutral-500">{contact.publicNote}</p> : null}
                  </div>
                </div>

                <div className="rounded-full bg-neutral-100 p-3 text-neutral-400 transition-all duration-300 group-hover:bg-apple-blue group-hover:text-white">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
