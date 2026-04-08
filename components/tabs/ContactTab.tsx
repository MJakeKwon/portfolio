'use client';

import { Mail, Github, ArrowRight } from 'lucide-react';
import { PORTFOLIO } from '@/lib/portfolio';

export default function ContactTab() {
  const CONTACTS = [
    {
      name: 'Email',
      value: PORTFOLIO.contacts[0].value,
      icon: Mail,
      link: PORTFOLIO.contacts[0].link,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      name: 'GitHub',
      value: PORTFOLIO.contacts[1].value,
      icon: Github,
      link: PORTFOLIO.contacts[1].link,
      color: 'bg-neutral-900 text-white',
    },
  ] as const;

  return (
    <div className="py-10 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900">연락처</h1>
        <p className="text-lg text-neutral-600 leading-relaxed">
          새로운 프로젝트 제안이나 협업 문의를 환영합니다. 편하게 연락 주세요!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {CONTACTS.map((contact) => {
          const Icon = contact.icon;
          return (
            <a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-white/60 backdrop-blur-2xl border border-white/60 rounded-[2rem] shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:bg-white/80 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${contact.color}`}>
                  <Icon size={28} />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">{contact.name}</div>
                  <div className="text-xl font-bold text-neutral-900 break-all">{contact.value}</div>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-apple-blue group-hover:text-white transition-colors duration-300 shrink-0 hidden sm:flex">
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
          );
        })}
      </div>

      <section className="p-8 bg-apple-blue/5 border border-apple-blue/10 rounded-[2.5rem] text-center space-y-4">
        <h2 className="text-xl font-bold text-apple-blue">프로젝트 문의</h2>
        <p className="text-neutral-600 leading-relaxed max-w-sm mx-auto">
          현재 새로운 프로젝트 참여가 가능합니다. 아이디어를 현실로 만들고 싶으시다면 언제든 이메일로 문의해 주세요.
        </p>
      </section>
    </div>
  );
}
