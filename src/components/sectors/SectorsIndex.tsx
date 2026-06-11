'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { sectors, sectorImage } from '@/content/sectors';
import { usePrefersReducedMotion } from '@/lib/useReducedMotion';
import { ease } from '@/lib/motion';

// Editorial index: a large numbered type list whose companion visual swaps as
// you move through it — the way a senior designer would present a portfolio of
// sectors, not a grid of icon cards.
export function SectorsIndex() {
  const [active, setActive] = useState(0);
  const reduced = usePrefersReducedMotion();
  const current = sectors[active];
  const img = sectorImage[current.slug];

  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      {/* ── Index list (desktop interactive / always the primary nav) ── */}
      <ul className="order-2 lg:order-1">
        {sectors.map((s, i) => {
          const isActive = i === active;
          return (
            <li key={s.slug}>
              <Link
                href={`/sectors/${s.slug}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group flex items-center gap-5 border-t border-sand/12 py-5 last:border-b sm:gap-7 sm:py-6"
              >
                <span
                  className={`tnum w-8 shrink-0 font-display text-sm tabular-nums transition-colors duration-200 ${
                    isActive ? 'text-accent' : 'text-sand-400'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className="min-w-0 flex-1">
                  <span
                    className={`block font-display text-2xl font-semibold leading-tight tracking-tight transition-all duration-300 ease-out-soft sm:text-3xl lg:text-[2.05rem] ${
                      isActive
                        ? 'text-accent lg:translate-x-1.5'
                        : 'text-sand group-hover:text-sand'
                    }`}
                  >
                    {s.short}
                  </span>
                  {/* tagline reveals only for the active row — restrained */}
                  <span
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out-soft ${
                      isActive
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <span className="overflow-hidden">
                      <span className="block pt-1.5 text-sm text-sand-400 lg:translate-x-1.5">
                        {s.tagline}
                      </span>
                    </span>
                  </span>
                </span>

                <ArrowUpRight
                  size={22}
                  className={`shrink-0 transition-all duration-300 ease-out-soft ${
                    isActive
                      ? 'translate-x-0 text-accent opacity-100'
                      : '-translate-x-2 text-sand-400 opacity-0 group-hover:opacity-60'
                  }`}
                  aria-hidden
                />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* ── Companion visual (decorative; sticky on desktop) ── */}
      <div
        aria-hidden
        className="relative order-1 lg:order-2 lg:sticky lg:top-28 lg:h-[560px] lg:self-start"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-sand/12 lg:h-full">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, scale: reduced ? 1 : 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduced ? 0.2 : 0.6, ease: ease.signature }}
              className="absolute inset-0"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
              <div className="absolute inset-0 bg-ink/20 mix-blend-multiply" />
            </motion.div>
          </AnimatePresence>

          {/* Oversized ghost numeral */}
          <span className="ghost-num pointer-events-none absolute right-5 top-2 font-display text-[9rem] font-bold leading-none">
            {String(active + 1).padStart(2, '0')}
          </span>

          {/* Overlaid editorial caption */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, y: reduced ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduced ? 0 : -10 }}
              transition={{ duration: 0.4, ease: ease.signature }}
              className="absolute inset-x-0 bottom-0 p-7 sm:p-9"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-brand text-accent">
                <span className="h-px w-7 bg-accent" /> Sector {String(active + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-sand sm:text-3xl">
                {current.short}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-sand-300">
                {current.overview}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
