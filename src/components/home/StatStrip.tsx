'use client';

import { motion } from 'framer-motion';
import { KPICounter } from '@/components/ui/KPICounter';
import { kpis } from '@/content/site';
import { staggerContainer, fadeUp } from '@/lib/motion';

const captions = [
  'UAE · China · Turkey · Egypt · Yemen',
  'Backbone of economic development',
  'Active ownership advantages',
  'Across four continents of reach',
];

// Dense, energetic stat band — KPIs with hairline dividers and supporting
// micro-captions, not three lonely numbers in white space.
export function StatStrip() {
  return (
    <motion.div
      variants={staggerContainer(0, 0.05)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10%' }}
      className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-sand/10 bg-sand/10 lg:grid-cols-4"
    >
      {kpis.map((k, i) => (
        <motion.div
          key={k.label}
          variants={fadeUp}
          className="group relative flex flex-col justify-between bg-ink/70 p-6 backdrop-blur-sm transition-colors duration-200 hover:bg-charcoal/60 sm:p-8"
        >
          <span className="tnum mb-6 font-display text-xs text-sand-400">
            0{i + 1}
          </span>
          <KPICounter value={k.value} suffix={k.suffix} label={k.label} />
          <p className="mt-3 text-[11px] leading-relaxed text-sand-400">
            {captions[i]}
          </p>
          <span
            aria-hidden
            className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-300 ease-out-soft group-hover:w-full"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
