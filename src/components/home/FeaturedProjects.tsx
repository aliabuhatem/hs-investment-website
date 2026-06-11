'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/content/projects';
import { Tag } from '@/components/ui/Tag';
import { staggerContainer, fadeUp, fadeDir } from '@/lib/motion';

// Editorial split: one large feature project + a stacked list of compact rows.
export function FeaturedProjects() {
  const [feature, ...rest] = projects.slice(0, 4);

  return (
    <motion.div
      variants={staggerContainer(0, 0.06)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-8%' }}
      className="grid gap-5 lg:grid-cols-12"
    >
      {/* Feature */}
      <motion.div variants={fadeDir(-24, 0)} className="lg:col-span-7">
        <Link
          href={`/projects/${feature.id}`}
          className="group relative block h-full overflow-hidden rounded-3xl border border-sand/12"
        >
          <div className="relative aspect-[16/11] w-full overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[480px]">
            <Image
              src={feature.image}
              alt={feature.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-8">
            <div className="flex items-center gap-3">
              <Tag tone={feature.status === 'Completed' ? 'success' : 'accent'}>
                {feature.status}
              </Tag>
              <span className="text-xs font-medium uppercase tracking-wide2 text-sand-300">
                {feature.sector}
              </span>
            </div>
            <h3 className="mt-4 max-w-xl font-display text-2xl font-semibold leading-tight text-sand sm:text-3xl">
              {feature.title}
            </h3>
            <div className="mt-5 flex items-center gap-8">
              <span className="tnum font-display text-lg font-semibold text-sand">
                {feature.investmentSize}
                <span className="ml-2 text-[11px] font-normal uppercase tracking-wide2 text-sand-400">
                  Investment
                </span>
              </span>
              <span className="tnum font-display text-lg font-semibold text-accent">
                {feature.roi}
                <span className="ml-2 text-[11px] font-normal uppercase tracking-wide2 text-sand-400">
                  ROI
                </span>
              </span>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Compact rows */}
      <div className="flex flex-col gap-5 lg:col-span-5">
        {rest.map((p) => (
          <motion.div key={p.id} variants={fadeUp} className="flex-1">
            <Link
              href={`/projects/${p.id}`}
              className="group flex h-full items-stretch gap-4 overflow-hidden rounded-3xl border border-sand/10 bg-charcoal/40 p-3 transition-colors duration-200 hover:border-accent/40"
            >
              <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-2xl sm:w-32">
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  sizes="140px"
                  className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-105"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center py-2 pr-3">
                <span className="text-[11px] font-medium uppercase tracking-wide2 text-accent">
                  {p.sector}
                </span>
                <h4 className="mt-1.5 font-display text-base font-semibold leading-snug text-sand">
                  {p.title}
                </h4>
                <div className="mt-3 flex items-center gap-5 text-xs text-sand-400">
                  <span className="tnum">{p.investmentSize}</span>
                  <span className="tnum text-accent">{p.roi} ROI</span>
                  <ArrowUpRight
                    size={15}
                    className="ml-auto transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
