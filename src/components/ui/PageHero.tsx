'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/lib/useReducedMotion';
import { ease } from '@/lib/motion';

type Props = {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
};

// Consistent inner-page header with a subtle architectural backdrop.
export function PageHero({ eyebrow, title, intro, children }: Props) {
  const reduced = usePrefersReducedMotion();

  return (
    <header className="relative overflow-hidden pb-16 pt-36 sm:pt-40 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 60% at 80% 10%, rgba(237,82,37,0.10), transparent 60%)',
        }}
      />
      {/* Faint grid lines for architectural feel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #DCD5CD 1px, transparent 1px), linear-gradient(to bottom, #DCD5CD 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="container-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: ease.out }}
          className="mb-5 flex items-center gap-3"
        >
          <span className="h-[2px] w-10 bg-accent" />
          <span className="text-xs font-semibold uppercase tracking-brand text-accent">
            {eyebrow}
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: reduced ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: ease.out, delay: 0.05 }}
          className="max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-wide2 text-sand sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: ease.out, delay: 0.12 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-sand-400"
          >
            {intro}
          </motion.p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  );
}
