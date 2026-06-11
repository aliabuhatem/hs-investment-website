'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MoveDown } from 'lucide-react';
import { HeroGlobe } from '@/components/three/HeroGlobe';
import { Button } from '@/components/ui/Button';
import { company } from '@/content/site';
import { usePrefersReducedMotion } from '@/lib/useReducedMotion';
import { ease } from '@/lib/motion';

const HEADLINE = 'HS INVESTMENT';

export function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative min-h-dvh overflow-hidden bg-ink">
      {/* Ambient gradient depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 70% 30%, rgba(237,82,37,0.10), transparent 60%), radial-gradient(50% 40% at 20% 80%, rgba(21,34,43,0.6), transparent)',
        }}
      />

      {/* Globe — sits right, bleeds behind text on large screens */}
      <div className="absolute inset-0 lg:left-[35%]">
        <HeroGlobe />
      </div>
      {/* Left scrim so headline stays readable over the globe */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent lg:via-ink/40"
      />

      <div className="container-7xl relative flex min-h-dvh flex-col justify-center pt-28 pb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: ease.out }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-[2px] w-10 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-brand text-accent">
              {company.hqCountry} · Multi-Sector Holding
            </span>
          </motion.div>

          {/* Spaced uppercase headline with staggered character entrance */}
          <h1 className="font-display text-sand">
            <span className="sr-only">{HEADLINE} GROUP</span>
            <span
              aria-hidden
              className="flex flex-wrap text-[12vw] font-bold leading-[0.95] tracking-[0.06em] sm:text-7xl lg:text-[5.4rem]"
            >
              {HEADLINE.split('').map((ch, i) => (
                <motion.span
                  key={i}
                  initial={reduced ? false : { opacity: 0, y: '0.5em' }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: ease.out,
                    delay: reduced ? 0 : 0.15 + i * 0.04,
                  }}
                  className={ch === ' ' ? 'w-[0.4em]' : ''}
                >
                  {ch === ' ' ? ' ' : ch}
                </motion.span>
              ))}
            </span>
            <span className="mt-1 flex items-center gap-4">
              <motion.span
                aria-hidden
                initial={reduced ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: ease.out, delay: 0.7 }}
                className="block h-2 w-24 origin-left bg-accent sm:w-32"
              />
              <span className="text-lg font-medium uppercase tracking-brand text-sand-400 sm:text-2xl">
                Group
              </span>
            </span>
          </h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: ease.out, delay: 0.85 }}
            className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-sand-300 sm:text-xl"
          >
            {company.promise}{' '}
            <span className="text-sand">{company.taglines[0]}.</span>
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: ease.out, delay: 0.98 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              href="/investors"
              magnetic
              icon={<ArrowRight size={18} />}
            >
              Invest With Us
            </Button>
            <Button href="/about" variant="secondary">
              Explore the Group
            </Button>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-sand-400 sm:flex"
        >
          <span className="text-[10px] uppercase tracking-brand">Scroll</span>
          <motion.span
            animate={reduced ? undefined : { y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <MoveDown size={16} aria-hidden />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
