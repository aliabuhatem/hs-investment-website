import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Tag } from '@/components/ui/Tag';
import type { Project } from '@/content/projects';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-sand/10 bg-charcoal/50 transition-colors duration-200 hover:border-accent/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          <Tag tone={project.status === 'Completed' ? 'success' : 'accent'}>
            {project.status}
          </Tag>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-medium uppercase tracking-wide2 text-accent">
          {project.sector}
        </span>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-sand">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-sand-400">
          {project.summary}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-sand/10 pt-4">
          <div className="flex gap-6">
            <div>
              <p className="tnum font-display text-base font-semibold text-sand">
                {project.investmentSize}
              </p>
              <p className="text-[11px] uppercase tracking-wide2 text-sand-400">
                Investment
              </p>
            </div>
            <div>
              <p className="tnum font-display text-base font-semibold text-accent">
                {project.roi}
              </p>
              <p className="text-[11px] uppercase tracking-wide2 text-sand-400">
                Target ROI
              </p>
            </div>
          </div>
          <ArrowUpRight
            size={20}
            className="text-sand-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden
          />
        </div>
      </div>
    </Link>
  );
}
