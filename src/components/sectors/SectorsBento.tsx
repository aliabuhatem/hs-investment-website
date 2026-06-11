'use client';

import { motion } from 'framer-motion';
import { sectors } from '@/content/sectors';
import { SectorCard } from './SectorCard';
import { staggerContainer, fadeUp } from '@/lib/motion';

const spanClass: Record<string, string> = {
  wide: 'sm:col-span-2',
  tall: 'sm:row-span-2',
  normal: '',
};

export function SectorsBento() {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-8%' }}
      className="grid auto-rows-[minmax(190px,1fr)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {sectors.map((s) => (
        <motion.div
          key={s.slug}
          variants={fadeUp}
          className={spanClass[s.span ?? 'normal']}
        >
          <SectorCard sector={s} />
        </motion.div>
      ))}
    </motion.div>
  );
}
