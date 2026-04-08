'use client';

import { motion } from 'motion/react';
import { PORTFOLIO } from '@/lib/portfolio';

export default function ExperienceTab() {
  return (
    <div className="py-10 space-y-12">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900">경험</h1>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-200 before:to-transparent">
        {PORTFOLIO.experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-apple-blue text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white/60 backdrop-blur-2xl border border-white/60 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-300 hover:bg-white/80 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]">
              <div className="flex flex-col gap-1 mb-4">
                <span className="text-sm font-bold text-apple-blue uppercase tracking-wider">{exp.period}</span>
                <h3 className="text-xl font-bold text-neutral-900">{exp.role}</h3>
                <h4 className="text-base font-medium text-neutral-500">{exp.company}</h4>
              </div>
              
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                {exp.description}
              </p>
              
              <ul className="space-y-2">
                {exp.details.map((detail, i) => (
                  <li key={i} className="text-sm text-neutral-500 flex gap-2">
                    <span className="text-apple-blue mt-0.5">•</span>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
