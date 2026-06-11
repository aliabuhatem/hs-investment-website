'use client';

import { motion } from 'framer-motion';
import { strengths } from '@/content/site';
import { Icon } from '@/components/ui/Icon';
import { staggerContainer, fadeUp } from '@/lib/motion';

// Deliberate size hierarchy: a hero tile, a wide tile, two compact, two wide —
// asymmetric on purpose, never six equal boxes.
const span = [
  'lg:col-span-2 lg:row-span-2', // 0 hero
  'lg:col-span-2', // 1 wide
  'lg:col-span-1', // 2
  'lg:col-span-1', // 3
  'lg:col-span-2', // 4 wide
  'lg:col-span-2', // 5 wide
];

export function KeyStrengths() {
  return (
    <motion.ul
      variants={staggerContainer(0, 0.05)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-8%' }}
      className="grid auto-rows-[minmax(150px,1fr)] gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {strengths.map((s, i) => {
        const hero = i === 0;
        return (
          <motion.li
            key={s.title}
            variants={fadeUp}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-sand/10 bg-charcoal/40 p-6 transition-colors duration-200 hover:border-accent/40 sm:p-7 ${span[i]}`}
          >
            {hero && (
              <span
                aria-hidden
                className="ghost-num pointer-events-none absolute -right-3 bottom-0 font-display text-[9rem] font-bold"
              >
                01
              </span>
            )}
            <div className="relative flex items-center justify-between">
              <span
                className={`flex items-center justify-center rounded-2xl border border-sand/10 bg-ink text-accent transition-transform duration-200 group-hover:scale-110 ${
                  hero ? 'h-14 w-14' : 'h-11 w-11'
                }`}
              >
                <Icon name={s.icon} size={hero ? 28 : 22} />
              </span>
              {!hero && (
                <span className="tnum font-display text-sm text-sand-400">
                  0{i + 1}
                </span>
              )}
            </div>
            <div className="relative mt-8">
              <h3
                className={`font-display font-semibold text-sand ${
                  hero ? 'text-2xl leading-tight sm:text-3xl' : 'text-base'
                }`}
              >
                {s.title}
              </h3>
              <p
                className={`mt-2 leading-relaxed text-sand-400 ${
                  hero ? 'max-w-sm text-base' : 'text-sm'
                }`}
              >
                {s.body}
              </p>
            </div>
            <span
              aria-hidden
              className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-300 ease-out-soft group-hover:w-full"
            />
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
