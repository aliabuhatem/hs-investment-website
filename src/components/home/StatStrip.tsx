'use client';

import { motion } from 'framer-motion';
import { KPICounter } from '@/components/ui/KPICounter';
import { Kicker } from '@/components/ui/Kicker';
import { kpis } from '@/content/site';
import { staggerContainer, fadeUp, fadeDir } from '@/lib/motion';

const captions = [
  'UAE · China · Turkey · Egypt · Yemen',
  'Backbone of economic development',
  'Active-ownership advantages',
  'Across four continents of reach',
];

// Asymmetric stat band: an editorial label column, one hero figure, and three
// smaller staggered stats — deliberately uneven, not a row of equal tiles.
export function StatStrip() {
  const [hero, ...rest] = kpis;
  const heroCaption = captions[0];

  return (
    <motion.div
      variants={staggerContainer(0, 0.06)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10%' }}
      className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-10"
    >
      {/* Label column */}
      <motion.div
        variants={fadeDir(-20, 0)}
        className="lg:col-span-3 lg:border-r lg:border-sand/12 lg:pr-8"
      >
        <Kicker>By the Numbers</Kicker>
        <p className="mt-5 font-display text-xl font-medium leading-snug text-sand">
          A platform built for execution across markets.
        </p>
        <span aria-hidden className="mt-6 block h-px w-16 bg-accent" />
      </motion.div>

      {/* Hero figure */}
      <motion.div variants={fadeUp} className="lg:col-span-4">
        <KPICounter
          value={hero.value}
          suffix={hero.suffix}
          label={hero.label}
          size="lg"
        />
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-400">
          {heroCaption}
        </p>
      </motion.div>

      {/* Smaller staggered stats */}
      <div className="lg:col-span-5">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
          {rest.map((k, i) => (
            <motion.div
              key={k.label}
              variants={fadeUp}
              className={`group relative border-t border-sand/12 pt-5 ${
                i === 1 ? 'sm:mt-10' : ''
              }`}
            >
              <span className="tnum mb-3 block font-display text-xs text-sand-400">
                0{i + 2}
              </span>
              <KPICounter value={k.value} suffix={k.suffix} label={k.label} />
              <p className="mt-3 text-[11px] leading-relaxed text-sand-400">
                {captions[i + 1]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
