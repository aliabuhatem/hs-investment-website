'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { ease } from '@/lib/motion';

type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function CTABand({ eyebrow, title, body, primary, secondary }: Props) {
  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 60% at 50% 0%, rgba(237,82,37,0.16), transparent 70%)',
        }}
      />
      <div className="container-7xl relative text-center">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: ease.out }}
            className="mb-5 inline-block text-xs font-semibold uppercase tracking-brand text-accent"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: ease.out }}
          className="mx-auto max-w-3xl text-balance font-display text-3xl font-semibold leading-tight tracking-wide2 text-sand sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h2>
        {body && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: ease.out, delay: 0.08 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-sand-400 sm:text-lg"
          >
            {body}
          </motion.p>
        )}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={primary.href} magnetic icon={<ArrowRight size={18} />}>
            {primary.label}
          </Button>
          {secondary && (
            <Button href={secondary.href} variant="secondary">
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
