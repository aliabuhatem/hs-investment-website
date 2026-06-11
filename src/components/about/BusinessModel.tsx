'use client';

import { motion } from 'framer-motion';
import { Building, Layers, ArrowDown } from 'lucide-react';
import { businessModel } from '@/content/site';
import { staggerContainer, fadeUp, ease } from '@/lib/motion';

function Column({
  label,
  items,
  icon,
  accent,
}: {
  label: string;
  items: string[];
  icon: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={`flex flex-col rounded-3xl border p-7 ${
        accent
          ? 'border-accent/30 bg-accent/[0.06]'
          : 'border-sand/10 bg-charcoal/50'
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
            accent ? 'bg-accent text-white' : 'bg-ink text-accent'
          }`}
        >
          {icon}
        </span>
        <h3 className="font-display text-lg font-semibold text-sand">{label}</h3>
      </div>
      <ul className="mt-6 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-sm leading-relaxed text-sand-300">
            <span
              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                accent ? 'bg-accent' : 'bg-sand-400'
              }`}
            />
            {it}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function BusinessModel() {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-8%' }}
      className="relative"
    >
      <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <Column
          label={businessModel.group.label}
          items={businessModel.group.items}
          icon={<Building size={20} aria-hidden />}
          accent
        />
        {/* Connector */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-2 text-sand-400">
            <span className="hidden text-[10px] uppercase tracking-brand lg:block">
              Direction
            </span>
            <motion.span
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: ease.out }}
              className="hidden h-24 w-px origin-top bg-gradient-to-b from-accent to-sand/20 lg:block"
            />
            <ArrowDown size={18} className="text-accent lg:hidden" aria-hidden />
          </div>
        </motion.div>
        <Column
          label={businessModel.subsidiary.label}
          items={businessModel.subsidiary.items}
          icon={<Layers size={20} aria-hidden />}
        />
      </div>
    </motion.div>
  );
}
