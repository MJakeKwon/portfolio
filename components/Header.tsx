'use client';

interface HeaderProps {
  onHome: () => void;
}

export default function Header({ onHome }: HeaderProps) {
  return (
    <button
      onClick={onHome}
      className="pointer-events-auto group transition-transform active:scale-95"
    >
      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.04)] bg-white/60 backdrop-blur-2xl flex items-center justify-center text-sm font-medium text-neutral-500">
        {/* Fallback initials if image fails or is missing */}
        <span className="absolute">성</span>
        <img
          src="/avatar.svg"
          alt="Avatar"
          width={40}
          height={40}
          className="object-cover relative z-10"
          referrerPolicy="no-referrer"
        />
      </div>
    </button>
  );
}
