import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, MapPin, Calendar, TrendingUp, Wallet, Users, Star } from 'lucide-react';
import { projects, getProject, SAMPLE_NOTICE } from '@/content/projects';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { CTABand } from '@/components/ui/CTABand';

type Params = { params: { id: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.id);
  if (!project) return { title: 'Project' };
  return { title: project.title, description: project.summary };
}

export default function ProjectDetailPage({ params }: Params) {
  const project = getProject(params.id);
  if (!project) notFound();

  const facts = [
    { icon: Wallet, label: 'Investment Size', value: project.investmentSize },
    { icon: TrendingUp, label: 'Target ROI', value: project.roi, accent: true },
    { icon: MapPin, label: 'Location', value: project.location },
    { icon: Calendar, label: 'Timeline', value: project.timeline },
  ];

  return (
    <>
      <PageHero eyebrow={project.sector} title={project.title}>
        <div className="flex flex-wrap items-center gap-3">
          <Tag tone={project.status === 'Completed' ? 'success' : 'accent'}>
            {project.status}
          </Tag>
          <Tag tone="neutral">
            <MapPin size={12} aria-hidden /> {project.country}
          </Tag>
        </div>
      </PageHero>

      <Section tone="ink">
        <Link
          href="/projects"
          className="tap mb-10 inline-flex items-center gap-2 text-sm text-sand-400 transition-colors hover:text-sand"
        >
          <ArrowLeft size={16} aria-hidden /> All projects
        </Link>

        <AnimatedReveal className="relative aspect-[16/8] overflow-hidden rounded-3xl border border-sand/10">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 80rem"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </AnimatedReveal>

        {/* Key facts */}
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-sand/10 bg-sand/10 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="bg-ink p-6">
              <f.icon
                size={20}
                className={f.accent ? 'text-accent' : 'text-sand-400'}
                aria-hidden
              />
              <p
                className={`tnum mt-3 font-display text-xl font-semibold ${
                  f.accent ? 'text-accent' : 'text-sand'
                }`}
              >
                {f.value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-wide2 text-sand-400">
                {f.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold text-sand">
                Project overview
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-sand-300">
                {project.description}
              </p>
            </div>
            <div className="rounded-3xl border border-accent/20 bg-accent/[0.05] p-7">
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-brand text-accent">
                <Star size={14} aria-hidden /> Strategic importance
              </h3>
              <p className="mt-3 text-base leading-relaxed text-sand-200">
                {project.strategicImportance}
              </p>
            </div>
          </div>

          <aside className="h-fit space-y-6 rounded-3xl border border-sand/10 bg-charcoal/50 p-7 lg:sticky lg:top-28">
            <div>
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-brand text-sand-400">
                <Users size={14} aria-hidden /> Partners
              </h3>
              <ul className="mt-4 space-y-2">
                {project.partners.map((pt) => (
                  <li
                    key={pt}
                    className="rounded-xl border border-sand/10 bg-ink px-4 py-3 text-sm text-sand-200"
                  >
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <p className="border-t border-sand/10 pt-5 text-xs leading-relaxed text-sand-400">
              {SAMPLE_NOTICE}
            </p>
          </aside>
        </div>
      </Section>

      <CTABand
        eyebrow="Co-Invest"
        title="Interested in projects like this?"
        primary={{ label: 'Submit Interest', href: '/contact?intent=interest' }}
        secondary={{ label: 'Book a Meeting', href: '/contact?intent=meeting' }}
      />
    </>
  );
}
