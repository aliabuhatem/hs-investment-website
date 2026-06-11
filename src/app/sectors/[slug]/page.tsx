import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';
import { sectors, getSector } from '@/content/sectors';
import { projects } from '@/content/projects';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Icon } from '@/components/ui/Icon';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { CTABand } from '@/components/ui/CTABand';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const sector = getSector(params.slug);
  if (!sector) return { title: 'Sector' };
  return {
    title: sector.short,
    description: `${sector.tagline} ${sector.overview}`,
  };
}

export default function SectorDetailPage({ params }: Params) {
  const sector = getSector(params.slug);
  if (!sector) notFound();

  const related = projects.filter((p) => p.sectorSlug === sector.slug);

  return (
    <>
      <PageHero eyebrow="Investment Sector" title={sector.name}>
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sand/10 bg-charcoal text-accent">
            <Icon name={sector.icon} size={28} />
          </span>
          <p className="font-display text-lg text-sand-300 sm:text-xl">
            {sector.tagline}
          </p>
        </div>
      </PageHero>

      <Section tone="ink">
        <Link
          href="/sectors"
          className="tap mb-10 inline-flex items-center gap-2 text-sm text-sand-400 transition-colors hover:text-sand"
        >
          <ArrowLeft size={16} aria-hidden /> All sectors
        </Link>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="space-y-12">
            <div>
              <SectionHeading eyebrow="Overview" title="Sector overview" />
              <p className="mt-5 text-lg leading-relaxed text-sand-300">
                {sector.overview}
              </p>
            </div>
            <div>
              <SectionHeading
                eyebrow="Strategy"
                title="Our investment strategy"
              />
              <p className="mt-5 text-lg leading-relaxed text-sand-300">
                {sector.strategy}
              </p>
            </div>
            <div>
              <SectionHeading
                eyebrow="Market Insights"
                title="Opportunities ahead"
              />
              <p className="mt-5 text-lg leading-relaxed text-sand-300">
                {sector.opportunities}
              </p>
            </div>
          </div>

          {/* Key strengths sidebar */}
          <AnimatedReveal className="h-fit rounded-3xl border border-sand/10 bg-charcoal/50 p-8 lg:sticky lg:top-28">
            <h3 className="text-xs font-semibold uppercase tracking-brand text-accent">
              Key Strengths
            </h3>
            <ul className="mt-6 space-y-4">
              {sector.strengths.map((s) => (
                <li key={s} className="flex gap-3">
                  <Check
                    size={18}
                    className="mt-0.5 shrink-0 text-accent"
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed text-sand-200">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact?intent=brief"
              className="tap mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-soft"
            >
              Request a sector brief
              <ArrowRight size={16} aria-hidden />
            </Link>
          </AnimatedReveal>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="black">
          <SectionHeading
            eyebrow="Related Projects"
            title="Projects in this sector"
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Section>
      )}

      <CTABand
        eyebrow="Partner With Us"
        title={`Invest in ${sector.short}`}
        primary={{ label: 'Submit Interest', href: '/contact?intent=interest' }}
        secondary={{ label: 'Explore Investor Hub', href: '/investors' }}
      />
    </>
  );
}
