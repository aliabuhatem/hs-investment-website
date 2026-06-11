'use client';

import { motion } from 'framer-motion';
import { strengths } from '@/content/site';
import { Icon } from '@/components/ui/Icon';
import { staggerContainer, fadeUp } from '@/lib/motion';

export function KeyStrengths() {
  return (
    <motion.ul
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-8%' }}
      className="grid gap-px overflow-hidden rounded-3xl border border-sand/10 bg-sand/10 sm:grid-cols-2 lg:grid-cols-3"
    >
      {strengths.map((s, i) => (
        <motion.li
          key={s.title}
          variants={fadeUp}
          className="group relative flex flex-col gap-4 bg-ink p-7 transition-colors duration-200 hover:bg-charcoal/70"
        >
          <div className="flex items-center justify-between">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sand/10 bg-charcoal text-accent">
              <Icon name={s.icon} size={24} />
            </span>
            <span className="tnum font-display text-sm text-sand-400">
              0{i + 1}
            </span>
          </div>
          <h3 className="font-display text-lg font-semibold text-sand">
            {s.title}
          </h3>
          <p className="text-sm leading-relaxed text-sand-400">{s.body}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
}
