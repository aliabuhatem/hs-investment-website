'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { sectors } from '@/content/sectors';
import { Icon } from '@/components/ui/Icon';
import { TiltCard } from '@/components/ui/TiltCard';
import { staggerContainer, fadeUp, ease } from '@/lib/motion';

// Editorial, intentionally asymmetric: one large feature sector anchored left,
// the rest as a staggered, numbered list with hover-expand detail.
export function SectorsShowcase() {
  const [feature, ...rest] = sectors;

  return (
    <motion.div
      variants={staggerContainer(0, 0.05)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-8%' }}
      className="grid gap-4 lg:grid-cols-12 lg:gap-5"
    >
      {/* Feature tile — large, off-grid emphasis */}
      <motion.div variants={fadeUp} className="lg:col-span-5 lg:row-span-2">
        <TiltCard className="group h-full" intensity={4}>
          <Link
            href={`/sectors/${feature.slug}`}
            className="relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl border border-sand/12 bg-gradient-to-br from-charcoal/80 to-ink/60 p-8 transition-colors duration-200 hover:border-accent/50 lg:min-h-[480px]"
          >
            <span
              aria-hidden
              className="ghost-num pointer-events-none absolute -right-4 -top-10 font-display text-[12rem] font-bold"
            >
              01
            </span>
            <div className="relative flex items-start justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sand/12 bg-ink text-accent transition-transform duration-300 group-hover:scale-110">
                <Icon name={feature.icon} size={28} />
              </span>
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide2 text-accent">
                Flagship Sector
              </span>
            </div>
            <div className="relative mt-10">
              <h3 className="font-display text-2xl font-semibold leading-tight text-sand sm:text-3xl">
                {feature.short}
              </h3>
              <p className="mt-3 max-w-md text-sand-300">{feature.tagline}</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-sand-400">
                {feature.overview}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                Explore sector
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </div>
          </Link>
        </TiltCard>
      </motion.div>

      {/* Staggered numbered list */}
      <div className="lg:col-span-7">
        <ul className="grid gap-4 sm:grid-cols-2">
          {rest.map((s, i) => {
            const n = i + 2;
            // Offset every other item downward for a deliberate stagger.
            const offset = i % 2 === 1 ? 'sm:mt-8' : '';
            return (
              <motion.li key={s.slug} variants={fadeUp} className={offset}>
                <Link
                  href={`/sectors/${s.slug}`}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-sand/10 bg-charcoal/40 p-6 transition-colors duration-200 hover:border-accent/40"
                >
                  <div className="flex items-start justify-between">
                    <span className="tnum font-display text-sm text-accent">
                      {String(n).padStart(2, '0')}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-sand/10 bg-ink text-accent transition-transform duration-200 group-hover:scale-110">
                      <Icon name={s.icon} size={20} />
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="font-display text-base font-semibold leading-snug text-sand">
                      {s.short}
                    </h3>
                    {/* Hover-expand detail — reveals the tagline on intent. */}
                    <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out-soft group-hover:grid-rows-[1fr]">
                      <p className="overflow-hidden text-sm leading-relaxed text-sand-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="block pt-2">{s.tagline}</span>
                      </p>
                    </div>
                  </div>
                  {/* Accent line that grows on hover */}
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-6 h-[2px] w-0 bg-accent transition-all duration-300 ease-out-soft group-hover:w-[calc(100%-3rem)]"
                  />
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}
