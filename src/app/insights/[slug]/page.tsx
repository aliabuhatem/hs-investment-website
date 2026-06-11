import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock } from 'lucide-react';
import { insights, getInsight } from '@/content/insights';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';
import { CTABand } from '@/components/ui/CTABand';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const a = getInsight(params.slug);
  if (!a) return { title: 'Insight' };
  return { title: a.title, description: a.excerpt };
}

export default function InsightPage({ params }: Params) {
  const article = getInsight(params.slug);
  if (!article) notFound();

  return (
    <>
      <PageHero eyebrow={article.category} title={article.title}>
        <div className="flex flex-wrap items-center gap-3">
          <Tag tone="accent">{article.category}</Tag>
          <span className="flex items-center gap-1.5 text-xs text-sand-400">
            <Clock size={13} aria-hidden /> {article.readMins} min read
          </span>
          <time dateTime={article.date} className="text-xs text-sand-400">
            {new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </PageHero>

      <Section tone="ink">
        <Link
          href="/insights"
          className="tap mb-10 inline-flex items-center gap-2 text-sm text-sand-400 transition-colors hover:text-sand"
        >
          <ArrowLeft size={16} aria-hidden /> All insights
        </Link>

        <div className="relative aspect-[16/8] overflow-hidden rounded-3xl border border-sand/10">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 56rem"
            className="object-cover"
            priority
          />
        </div>

        <article className="mx-auto mt-12 max-w-2xl space-y-6">
          {article.body.map((p) => (
            <p
              key={p}
              className="text-lg leading-relaxed text-sand-300 first:text-xl first:text-sand"
            >
              {p}
            </p>
          ))}
        </article>
      </Section>

      <CTABand
        eyebrow="Investor Relations"
        title="Discuss these themes with our team"
        primary={{ label: 'Book a Meeting', href: '/contact?intent=meeting' }}
        secondary={{ label: 'Explore Investor Hub', href: '/investors' }}
      />
    </>
  );
}
