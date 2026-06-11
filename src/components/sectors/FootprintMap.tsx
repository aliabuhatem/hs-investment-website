'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { footprint } from '@/content/site';
import { ease } from '@/lib/motion';

// Approximate positions on a simplified equirectangular canvas (0–100 %).
const pos: Record<string, { x: number; y: number }> = {
  Canada: { x: 18, y: 32 },
  UAE: { x: 60, y: 52 },
  Turkey: { x: 55, y: 38 },
  Egypt: { x: 55, y: 50 },
  Yemen: { x: 62, y: 58 },
  China: { x: 78, y: 44 },
};

const flowColor: Record<string, string> = {
  hub: '#ED5225',
  source: '#F2784F',
  process: '#DCD5CD',
  origin: '#A99C8C',
  market: '#C4BAAE',
};

export function FootprintMap() {
  const [active, setActive] = useState<string>('UAE');
  const current = footprint.find((f) => f.country === active)!;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      {/* Map canvas */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-sand/10 bg-charcoal/40">
        {/* dotted grid backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(220,213,205,0.12) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
        {/* arcs from hub */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 62.5"
          preserveAspectRatio="none"
          aria-hidden
        >
          {footprint
            .filter((f) => f.country !== 'UAE')
            .map((f) => {
              const a = pos['UAE'];
              const b = pos[f.country];
              const mx = (a.x + b.x) / 2;
              const my = Math.min(a.y, b.y) - 8;
              const on = active === f.country || active === 'UAE';
              return (
                <path
                  key={f.country}
                  d={`M${a.x} ${a.y} Q${mx} ${my} ${b.x} ${b.y}`}
                  fill="none"
                  stroke="#ED5225"
                  strokeWidth={0.4}
                  opacity={on ? 0.8 : 0.25}
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
        </svg>

        {/* markers */}
        {footprint.map((f) => {
          const p = pos[f.country];
          const isActive = active === f.country;
          return (
            <button
              key={f.country}
              onMouseEnter={() => setActive(f.country)}
              onFocus={() => setActive(f.country)}
              onClick={() => setActive(f.country)}
              aria-label={`${f.country} — ${f.role}`}
              aria-pressed={isActive}
              className="tap group absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-2"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <span
                className="relative block rounded-full transition-transform duration-200 group-hover:scale-125"
                style={{
                  width: isActive ? 14 : 10,
                  height: isActive ? 14 : 10,
                  background: flowColor[f.flow] ?? '#ED5225',
                  boxShadow: isActive
                    ? '0 0 0 4px rgba(237,82,37,0.25)'
                    : 'none',
                }}
              />
              <span
                className={`pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium uppercase tracking-wide2 transition-opacity ${
                  isActive ? 'text-sand opacity-100' : 'text-sand-400 opacity-70'
                }`}
              >
                {f.country}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div className="flex flex-col rounded-3xl border border-sand/10 bg-ink p-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.country}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: ease.out }}
          >
            <span className="flex items-center gap-2 text-accent">
              <MapPin size={18} aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-brand">
                {current.role}
              </span>
            </span>
            <h3 className="mt-4 font-display text-3xl font-semibold text-sand">
              {current.country}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-sand-300">
              {current.detail}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-auto flex flex-wrap gap-2 pt-8">
          {footprint.map((f) => (
            <button
              key={f.country}
              onClick={() => setActive(f.country)}
              onMouseEnter={() => setActive(f.country)}
              className={`tap rounded-full border px-3 py-1.5 text-xs transition-colors ${
                active === f.country
                  ? 'border-accent/40 bg-accent/10 text-accent'
                  : 'border-sand/15 text-sand-400 hover:text-sand'
              }`}
            >
              {f.country}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
