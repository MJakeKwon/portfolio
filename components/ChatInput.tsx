'use client';

import { ArrowUp, Sparkles } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { TabType } from '@/app/page';
import { PORTFOLIO } from '@/lib/portfolio';
import { useChatStore } from '@/hooks/use-chat-store';

interface ChatInputProps {
  activeTab?: TabType;
  onNavigate?: (tab: TabType) => void;
}

export default function ChatInput({ activeTab, onNavigate }: ChatInputProps) {
  const [value, setValue] = useState('');
  const [countdown, setCountdown] = useState<number | null>(null);
  const { sendMessage, isLoading, error, waitTime, clearError } = useChatStore();

  useEffect(() => {
    let resetTimer: number | undefined;

    if (!waitTime) {
      resetTimer = window.setTimeout(() => setCountdown(null), 0);
      return () => {
        if (resetTimer) {
          window.clearTimeout(resetTimer);
        }
      };
    }

    resetTimer = window.setTimeout(() => setCountdown(waitTime), 0);

    const intervalId = window.setInterval(() => {
      setCountdown((current) => {
        if (!current || current <= 1) {
          window.clearInterval(intervalId);
          return null;
        }

        return current - 1;
      });
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
      if (resetTimer) {
        window.clearTimeout(resetTimer);
      }
    };
  }, [waitTime]);

  useEffect(() => {
    if (countdown === null && (error === 'RATE_LIMIT_EXCEEDED' || error === 'DAILY_LIMIT_EXCEEDED')) {
      clearError();
    }
  }, [clearError, countdown, error]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!value.trim() || isLoading || countdown) {
      return;
    }

    const message = value.trim();
    setValue('');

    if (activeTab !== 'chat' && onNavigate) {
      onNavigate('chat');
    }

    await sendMessage(message);
  }

  const placeholder = (() => {
    if (countdown) return `${countdown}초 후 다시 질문할 수 있습니다.`;
    if (error === 'DAILY_LIMIT_EXCEEDED') return '오늘 Q&A 사용 한도에 도달했습니다. 내일 다시 시도해주세요.';
    if (error === 'TOTAL_LIMIT_EXCEEDED') return '현재 포트폴리오 Q&A 전체 사용 한도에 도달했습니다.';
    if (error === 'QUOTA_EXCEEDED') return '현재 AI 응답 한도에 도달했습니다. 잠시 후 다시 시도해주세요.';
    if (error === 'AUTH_ERROR') return 'AI 설정을 확인한 뒤 다시 시도해주세요.';
    if (error === 'SERVER_ERROR') return '일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
    return '프로젝트나 경험에 대해 질문해보세요.';
  })();

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 px-1 text-xs font-medium text-neutral-500">
        <Sparkles size={14} className="text-sky-500" />
        <span>{PORTFOLIO.chat.description}</span>
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <div
          className={`flex items-center gap-3 rounded-[2rem] border px-4 py-3 shadow-[0_14px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-300 ${
            error ? 'border-red-200 bg-red-50/80' : 'border-white/70 bg-white/80 focus-within:border-sky-300'
          }`}
        >
          <input
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            disabled={isLoading || !!countdown}
            placeholder={placeholder}
            className="flex-1 bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={!value.trim() || isLoading || !!countdown}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-apple-blue text-white transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="질문 보내기"
          >
            <ArrowUp size={18} strokeWidth={2.6} />
          </button>
        </div>

        {error && !countdown ? (
          <button
            type="button"
            onClick={clearError}
            className="absolute -top-8 right-2 text-[11px] font-medium text-neutral-400 transition-colors hover:text-neutral-600"
          >
            메시지 지우기
          </button>
        ) : null}
      </form>
    </div>
  );
}
