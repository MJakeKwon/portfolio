'use client';

import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useChatStore } from '@/hooks/use-chat-store';
import { TabType } from '@/app/page';

interface ChatInputProps {
  activeTab?: TabType;
  onNavigate?: (tab: TabType) => void;
}

export default function ChatInput({ activeTab, onNavigate }: ChatInputProps) {
  const [value, setValue] = useState('');
  const { sendMessage, isLoading, error, waitTime, clearError } = useChatStore();
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (waitTime) {
      // Start interval immediately without setting state synchronously
      timer = setInterval(() => {
        setCountdown((prev) => {
          const current = prev ?? waitTime;
          if (current > 1) return current - 1;
          clearInterval(timer);
          return null;
        });
      }, 1000);
      
      // Set initial value in a microtask to avoid synchronous setState warning
      Promise.resolve().then(() => setCountdown(waitTime));
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [waitTime]);

  useEffect(() => {
    if (countdown === null && waitTime) {
      clearError();
    }
  }, [countdown, waitTime, clearError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim() || isLoading || countdown) return;

    const message = value;
    setValue('');

    if (activeTab === 'home' && onNavigate) {
      onNavigate('chat');
    }

    await sendMessage(message);
  };

  const getPlaceholder = () => {
    if (countdown) return `잠시 후 다시 물어봐주세요! (${countdown}초)`;
    if (error === 'QUOTA_EXCEEDED') return "오늘 API 사용량을 초과했어요. 내일 다시 시도해주세요!";
    if (error === 'AUTH_ERROR') return "API 설정을 확인해주세요.";
    if (error === 'SERVER_ERROR') return "일시적인 문제가 발생했어요. 잠시 후 다시 시도해주세요.";
    return "성구에게 물어보세요...";
  };

  return (
    <form onSubmit={handleSubmit} className="relative group">
      <div className={`flex items-center gap-2 bg-white/60 backdrop-blur-2xl border rounded-full px-4 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-300 ${
        error ? 'border-red-200 bg-red-50/50' : 'border-white/60 focus-within:border-apple-blue/50 focus-within:bg-white/80'
      }`}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={isLoading || !!countdown}
          placeholder={getPlaceholder()}
          className="flex-1 bg-transparent border-none outline-none text-sm py-1 placeholder:text-neutral-400 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={!value.trim() || isLoading || !!countdown}
          className="bg-apple-blue text-white p-1.5 rounded-full disabled:opacity-30 disabled:grayscale transition-all active:scale-90"
        >
          <ArrowUp size={18} strokeWidth={3} />
        </button>
      </div>
      {error && !countdown && (
        <button 
          onClick={clearError}
          className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-neutral-400 hover:text-neutral-600 uppercase tracking-widest"
        >
          Clear Error
        </button>
      )}
    </form>
  );
}
