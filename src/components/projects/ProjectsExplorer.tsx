'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/content/projects';
import { sectors } from '@/content/sectors';
import { ProjectCard } from './ProjectCard';
import { ease } from '@/lib/motion';

const statuses = ['All', 'Ongoing', 'Completed'] as const;

export function ProjectsExplorer() {
  const [sector, setSector] = useState('All');
  const [status, setStatus] = useState<(typeof statuses)[number]>('All');

  const sectorOptions = useMemo(
    () => ['All', ...sectors.map((s) => ({ slug: s.slug, name: s.short }))],
    [],
  );

  const filtered = projects.filter(
    (p) =>
      (sector === 'All' || p.sectorSlug === sector) &&
      (status === 'All' || p.status === status),
  );

  const chip = (active: boolean) =>
    `tap rounded-full border px-4 py-2 text-sm transition-colors ${
      active
        ? 'border-accent/50 bg-accent/10 text-accent'
        : 'border-sand/15 text-sand-400 hover:border-sand/30 hover:text-sand'
    }`;

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-sand/10 pb-8">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide2 text-sand-400">
            Sector
          </p>
          <div className="flex flex-wrap gap-2">
            {sectorOptions.map((opt) => {
              const value = typeof opt === 'string' ? 'All' : opt.slug;
              const label = typeof opt === 'string' ? opt : opt.name;
              return (
                <button
                  key={value}
                  onClick={() => setSector(value)}
                  className={chip(sector === value)}
                  aria-pressed={sector === value}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide2 text-sand-400">
            Status
          </p>
          <div className="flex flex-wrap gap-2">
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={chip(status === s)}
                aria-pressed={status === s}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 text-sm text-sand-400" aria-live="polite">
        Showing {filtered.length}{' '}
        {filtered.length === 1 ? 'project' : 'projects'}
      </p>

      <motion.div
        layout
        className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: ease.out }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-sand-400">
          No projects match these filters.
        </p>
      )}
    </div>
  );
}
