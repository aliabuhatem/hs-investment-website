import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Clock } from 'lucide-react';
import { insights } from '@/content/insights';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Company news, articles and market reports from HS Investment Group on integrated platforms, food security, renewables and governance.',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function InsightsPage() {
  const [lead, ...rest] = insights;

  return (
    <>
      <PageHero
        eyebrow="Insights & News"
        title="Perspectives on capital, capability & markets"
        intro="Company news, articles and market reports on the themes shaping our sectors and regions."
      />

      <Section tone="ink">
        {/* Featured lead */}
        <AnimatedReveal>
          <Link
            href={`/insights/${lead.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-sand/10 bg-charcoal/50 transition-colors hover:border-accent/40 lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <Image
                src={lead.image}
                alt={lead.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40rem"
                className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="flex items-center gap-3">
                <Tag tone="accent">{lead.category}</Tag>
                <span className="flex items-center gap-1.5 text-xs text-sand-400">
                  <Clock size={13} aria-hidden /> {lead.readMins} min read
                </span>
              </div>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight text-sand sm:text-3xl">
                {lead.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-sand-400">
                {lead.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                Read article
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </div>
          </Link>
        </AnimatedReveal>

        {/* Rest grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => (
            <AnimatedReveal
              as="article"
              key={a.slug}
              delay={i * 0.05}
              className={i === 1 ? 'lg:mt-10' : ''}
            >
              <Link
                href={`/insights/${a.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-sand/10 bg-charcoal/50 transition-colors hover:border-accent/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <Tag tone="neutral">{a.category}</Tag>
                    <time
                      dateTime={a.date}
                      className="text-xs text-sand-400"
                    >
                      {formatDate(a.date)}
                    </time>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-sand">
                    {a.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-sand-400">
                    {a.excerpt}
                  </p>
                </div>
              </Link>
            </AnimatedReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
