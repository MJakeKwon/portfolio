'use client';

import { Fragment, ReactNode, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { MessageCircleMore } from 'lucide-react';
import { PORTFOLIO } from '@/lib/portfolio';
import { useChatStore } from '@/hooks/use-chat-store';

function renderInline(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-neutral-900">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
  });
}

function normalizeMessage(text: string) {
  return text
    .replace(/\r\n/g, '\n')
    .replace(/\s+\*\s+(?=\*\*|[^\s])/g, '\n* ')
    .replace(/\s+-\s+(?=[^\s])/g, '\n- ')
    .trim();
}

function renderMessageContent(content: string) {
  const normalized = normalizeMessage(content);
  const lines = normalized.split('\n').filter((line) => line.trim().length > 0);
  const blocks: ReactNode[] = [];
  let bulletBuffer: string[] = [];

  const flushBullets = () => {
    if (bulletBuffer.length === 0) {
      return;
    }

    blocks.push(
      <ul key={`list-${blocks.length}`} className="list-disc space-y-2 pl-5">
        {bulletBuffer.map((item, index) => (
          <li key={`${item}-${index}`} className="leading-7">
            {renderInline(item)}
          </li>
        ))}
      </ul>,
    );

    bulletBuffer = [];
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    const bulletMatch = trimmed.match(/^[-*]\s+(.*)$/);

    if (bulletMatch) {
      bulletBuffer.push(bulletMatch[1] ?? '');
      return;
    }

    flushBullets();
    blocks.push(
      <p key={`paragraph-${blocks.length}`} className="whitespace-pre-wrap leading-7">
        {renderInline(trimmed)}
      </p>,
    );
  });

  flushBullets();

  if (blocks.length === 0) {
    return <p className="whitespace-pre-wrap leading-7">{content}</p>;
  }

  return <div className="space-y-3">{blocks}</div>;
}

export default function ChatTab() {
  const { messages, isLoading } = useChatStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const endNode = endRef.current;
    const containerNode = containerRef.current;

    if (!endNode || !containerNode) {
      return;
    }

    endNode.scrollIntoView({ behavior: messages.length > 1 ? 'smooth' : 'auto', block: 'end' });
  }, [isLoading, messages]);

  if (messages.length === 0) {
    return (
      <div className="min-h-[60vh] space-y-6 py-10 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[2rem] bg-sky-100 text-sky-600">
          <MessageCircleMore size={36} />
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">{PORTFOLIO.chat.title}</h1>
          <p className="mx-auto max-w-md text-sm leading-6 text-neutral-500">{PORTFOLIO.chat.description}</p>
        </div>

        <div className="mx-auto grid max-w-xl gap-3 text-left">
          {PORTFOLIO.chat.suggestions.map((question) => (
            <div key={question} className="rounded-[1.5rem] border border-white/70 bg-white/72 px-4 py-4 text-sm leading-6 text-neutral-700 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
              {question}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="space-y-4 py-10">
      {messages.map((message) => (
        <motion.div
          key={message.id}
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[88%] rounded-[1.8rem] px-5 py-4 text-sm shadow-[0_14px_40px_rgba(15,23,42,0.06)] ${
              message.role === 'user'
                ? 'rounded-br-md bg-neutral-900 text-white'
                : 'rounded-bl-md border border-white/70 bg-white/72 text-neutral-700 backdrop-blur-2xl'
            }`}
          >
            {message.role === 'assistant' ? renderMessageContent(message.content) : <p className="whitespace-pre-wrap leading-7">{message.content}</p>}
          </div>
        </motion.div>
      ))}

      {isLoading ? (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
          <div className="rounded-[1.8rem] rounded-bl-md border border-white/70 bg-white/72 px-5 py-4 text-sm text-neutral-500 shadow-[0_14px_40px_rgba(15,23,42,0.06)] backdrop-blur-2xl">
            포트폴리오 범위 안에서 답변을 정리하고 있습니다...
          </div>
        </motion.div>
      ) : null}

      <div ref={endRef} />
    </div>
  );
}
