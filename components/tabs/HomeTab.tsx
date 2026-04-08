'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { TabType } from '@/app/page';

interface HomeTabProps {
  onNavigate: (tab: TabType) => void;
}

export default function HomeTab({ onNavigate }: HomeTabProps) {
  const quickLinks: { id: TabType; label: string; icon: string }[] = [
    { id: 'about', label: 'Me', icon: '👤' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '🎓' },
    { id: 'contact', label: 'Contact', icon: '✉️' },
    { id: 'experience', label: 'Resume', icon: '📄' },
  ];

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      {/* Background Text Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-black text-neutral-50 opacity-[0.03] select-none">
          PORTFOLIO
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl mb-8 group">
          <Image
            src="/avatar.png"
            alt="Profile Avatar"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-apple-blue flex items-center justify-center text-white text-6xl font-bold">
            K
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg md:text-xl font-medium text-neutral-500">안녕하세요, 권민재입니다.</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-tight">
            운영 환경을 고려하여<br className="hidden md:block" /> 설계하고 개발합니다.
          </h1>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4 max-w-md mx-auto">
          {quickLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="flex flex-col items-center justify-center w-24 h-24 bg-white/60 backdrop-blur-2xl border border-white/60 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:border-apple-blue/30 hover:bg-white/80 hover:shadow-[0_8px_32px_rgba(0,113,227,0.08)] transition-all duration-300 active:scale-95 group"
            >
              <span className="text-2xl mb-1.5 group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
              <span className="text-xs font-medium text-neutral-600 group-hover:text-apple-blue transition-colors">{link.label}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
