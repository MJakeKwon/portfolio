'use client';

import { motion } from 'motion/react';

export default function AboutTab() {
  const keywords = ['1인 기업', '인디해커', 'Micro SaaS', 'AI', '크리에이터', '저자'];

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
            대기업과 스타트업을 거쳐, 현재는 독립적으로 프로덕트를 개발하고 있습니다.
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed">
            AI 도구를 적극적으로 활용하여 아이디어를 신속하게 구현하는 과정에 깊은 흥미를 느낍니다. 
            이러한 개발 여정과 인사이트를 글과 영상으로 꾸준히 기록하며 커뮤니티와 공유하고 있습니다.
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
          단순히 코드를 작성하는 것을 넘어, 실제 운영 환경에서의 안정성과 사용자에게 전달되는 가치를 최우선으로 고려합니다. 
          효율적인 아키텍처 설계와 지속 가능한 개발 문화를 구축하는 것을 지향합니다.
        </p>
      </section>
    </div>
  );
}
