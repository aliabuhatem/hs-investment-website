'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/lib/useReducedMotion';
import { duration, ease } from '@/lib/motion';

type Props = {
  eyebrow?: string;
  index?: string; // editorial numeral, e.g. "02"
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  light?: boolean; // for sand sections
  className?: string;
};

export function SectionHeading({
  eyebrow,
  index,
  title,
  intro,
  align = 'left',
  light = false,
  className = '',
}: Props) {
  const reduced = usePrefersReducedMotion();
  const alignCls =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
  const introColor = light ? 'text-ink/70' : 'text-sand-400';
  const eyebrowColor = light ? 'text-accent-deep' : 'text-accent';
  const ruleColor = light ? 'bg-ink/25' : 'bg-sand/30';

  return (
    <div className={`flex max-w-3xl flex-col ${alignCls} ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: duration.base, ease: ease.signature }}
          className={`mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-brand ${eyebrowColor}`}
        >
          {index && (
            <span className="tnum font-display text-sm tabular-nums">{index}</span>
          )}
          <span aria-hidden className={`h-px w-8 ${ruleColor}`} />
          <span className={light ? 'text-ink/70' : 'text-sand/80'}>{eyebrow}</span>
        </motion.div>
      )}
      <span className="block overflow-hidden" style={{ paddingBottom: '0.06em' }}>
        <motion.h2
          initial={{ y: reduced ? '0%' : '115%' }}
          whileInView={{ y: '0%' }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: duration.slow, ease: ease.signature }}
          className={`text-balance font-display text-3xl font-semibold leading-[1.05] tracking-wide2 sm:text-4xl lg:text-5xl ${
            light ? 'text-ink' : 'text-sand'
          }`}
        >
          {title}
        </motion.h2>
      </span>
      {intro && (
        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: duration.base, ease: ease.signature, delay: 0.1 }}
          className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${introColor}`}
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
}
