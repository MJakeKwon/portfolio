'use client';

import { motion } from 'motion/react';
import { PORTFOLIO } from '@/lib/portfolio';

export default function AboutTab() {
  const keywords = PORTFOLIO.profile.keywords;

  return (
    <div className="py-10 space-y-12">
      <section className="space-y-6">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold tracking-tight text-neutral-900"
        >
          소개
        </motion.h1>
        <div className="space-y-4">
          <p className="text-xl text-neutral-800 leading-relaxed font-medium">
            {PORTFOLIO.profile.intro[0]}
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed">
            {PORTFOLIO.profile.intro[1]}
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Keywords</h2>
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword, index) => (
            <motion.span
              key={keyword}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-4 py-2 bg-white/60 backdrop-blur-xl border border-white/60 rounded-full text-sm font-medium text-neutral-700 shadow-[0_4px_16px_rgba(0,0,0,0.02)]"
            >
              {keyword}
            </motion.span>
          ))}
        </div>
      </section>

      <section className="p-8 bg-white/60 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.04)] space-y-4">
        <h2 className="text-xl font-bold text-neutral-900">나의 철학</h2>
        <p className="text-neutral-600 leading-relaxed">
          {PORTFOLIO.profile.philosophy}
        </p>
      </section>
    </div>
  );
}
