'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/lib/useReducedMotion';
import { duration, ease } from '@/lib/motion';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  light?: boolean; // for sand sections
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  light = false,
  className = '',
}: Props) {
  const reduced = usePrefersReducedMotion();
  const alignCls = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
  const introColor = light ? 'text-ink/70' : 'text-sand-400';
  const eyebrowColor = light ? 'text-accent-deep' : 'text-accent';

  return (
    <div className={`flex max-w-3xl flex-col ${alignCls} ${className}`}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-3 ${eyebrowColor}`}>
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduced ? 0 : 0.5, ease: ease.out }}
            className="block h-[2px] w-10 origin-left bg-accent"
          />
          <span className="text-xs font-semibold uppercase tracking-brand">
            {eyebrow}
          </span>
        </div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: reduced ? 0 : 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: duration.base, ease: ease.out }}
        className={`text-balance font-display text-3xl font-semibold leading-tight tracking-wide2 sm:text-4xl lg:text-5xl ${
          light ? 'text-ink' : 'text-sand'
        }`}
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: duration.base, ease: ease.out, delay: 0.08 }}
          className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${introColor}`}
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
}
