'use client';

import Image from 'next/image';
import { PORTFOLIO } from '@/lib/portfolio';

interface HeaderProps {
  onHome: () => void;
}

export default function Header({ onHome }: HeaderProps) {
  return (
    <button onClick={onHome} className="pointer-events-auto transition-transform active:scale-95">
      <div className="flex items-center gap-3 rounded-full border border-white/70 bg-white/75 px-3 py-2 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
        <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-black/5">
          <Image src="/profile-photo.png" alt={`${PORTFOLIO.profile.name} 프로필 사진`} fill className="object-cover" sizes="40px" priority />
        </div>
        <div className="hidden text-left sm:block">
          <div className="text-xs font-semibold tracking-[0.18em] text-neutral-400">BACKEND PORTFOLIO</div>
          <div className="text-sm font-semibold text-neutral-800">{PORTFOLIO.profile.name}</div>
        </div>
      </div>
    </button>
  );
}
