'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { TiltCard } from '@/components/ui/TiltCard';
import { Icon } from '@/components/ui/Icon';
import type { Sector } from '@/content/sectors';

type Props = {
  sector: Sector;
  className?: string;
};

export function SectorCard({ sector, className = '' }: Props) {
  return (
    <TiltCard className={`group h-full ${className}`}>
      <Link
        href={`/sectors/${sector.slug}`}
        className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-sand/10 bg-charcoal/60 p-6 transition-colors duration-200 hover:border-accent/40 sm:p-7"
      >
        {/* Hover glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-colors duration-300 group-hover:bg-accent/20"
        />
        <div className="relative flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sand/10 bg-ink text-accent transition-transform duration-200 group-hover:scale-[1.05]">
            <Icon name={sector.icon} size={24} />
          </span>
          <ArrowUpRight
            size={20}
            className="text-sand-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden
          />
        </div>

        <div className="relative mt-10">
          <h3 className="font-display text-lg font-semibold leading-snug text-sand">
            {sector.short}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-sand-400">
            {sector.tagline}
          </p>
        </div>
      </Link>
    </TiltCard>
  );
}
