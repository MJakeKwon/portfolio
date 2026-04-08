'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const PROJECTS = [
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
];

export default function ProjectsTab() {
  return (
    <div className="py-10 space-y-12">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900">프로젝트</h1>
      
      <div className="grid grid-cols-1 gap-12">
        {PROJECTS.map((project, index) => (
          <div key={index} className="group flex flex-col gap-6 p-4 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-300 hover:bg-white/60 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]">
            <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-neutral-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
            
            <div className="px-4 pb-4 space-y-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-apple-blue uppercase tracking-wider">{project.category}</span>
                  {project.publisher && (
                    <span className="text-xs font-medium text-neutral-400">· {project.publisher}</span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-neutral-900">{project.title}</h2>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/50 hover:bg-white transition-colors text-neutral-400 hover:text-apple-blue shadow-sm"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <p className="text-neutral-600 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[11px] font-semibold bg-white/80 border border-white text-neutral-500 px-3 py-1 rounded-full shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
