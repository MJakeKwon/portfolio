'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useChatStore, Message } from '@/hooks/use-chat-store';

export default function ChatTab() {
  const { messages, isLoading } = useChatStore();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  if (messages.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-20 h-20 rounded-[2rem] bg-apple-blue/10 flex items-center justify-center text-apple-blue">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-1.9a9 9 0 1 1 3.4 3.4L3 21Z"/><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M12 16h.01"/></svg>
          </motion.div>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">성구와 대화해보세요</h1>
          <p className="text-neutral-500 max-w-xs mx-auto text-sm leading-relaxed">
            프로젝트, 기술 스택, 또는 협업에 대해 궁금한 점이 있다면 무엇이든 물어보세요!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 flex flex-col gap-6">
      <AnimatePresence initial={false}>
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full overflow-hidden border border-neutral-200 shrink-0 bg-apple-blue flex items-center justify-center text-[10px] text-white font-bold">
                  <img
                    src="/avatar.svg"
                    alt="AI"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                  <span className="absolute">성</span>
                </div>
              )}
              <div className={`px-4 py-2.5 rounded-[1.5rem] text-sm leading-relaxed shadow-[0_4px_16px_rgba(0,0,0,0.02)] ${
                msg.role === 'user' 
                  ? 'bg-apple-blue text-white rounded-tr-none' 
                  : 'bg-white/60 backdrop-blur-xl border border-white/60 text-neutral-800 rounded-tl-none'
              }`}>
                {msg.content}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-start"
        >
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 rounded-full border border-neutral-200 bg-apple-blue flex items-center justify-center text-[10px] text-white font-bold overflow-hidden">
              <img
                src="/avatar.svg"
                alt="AI"
                width={32}
                height={32}
                className="object-cover"
              />
              <span className="absolute">성</span>
            </div>
            <div className="bg-white/60 backdrop-blur-xl border border-white/60 px-4 py-3 rounded-[1.5rem] rounded-tl-none flex gap-1 shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
              <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
              <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
              <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
            </div>
          </div>
        </motion.div>
      )}
      <div ref={scrollRef} />
    </div>
  );
}
