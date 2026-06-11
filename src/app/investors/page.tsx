import type { Metadata } from 'next';
import { Check, Download, Leaf } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { KPICounter } from '@/components/ui/KPICounter';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { CTABand } from '@/components/ui/CTABand';
import {
  whyInvest,
  investmentModels,
  partnerships,
  esg,
  kpis,
} from '@/content/site';
import { projects, SAMPLE_NOTICE } from '@/content/projects';

export const metadata: Metadata = {
  title: 'Investors',
  description:
    'Why invest in HS Investment Group — track record, investment models (JV, equity, PPP), partnerships and ESG. Request the pitch deck.',
};

export default function InvestorsPage() {
  const caseStudies = projects.filter((p) => p.status === 'Completed').slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Investment Opportunities"
        title="Long-term exposure to high-growth markets"
        intro="A disciplined, execution-led platform connecting capital with capability — with active ownership and strong governance at its core."
      >
        <div className="flex flex-wrap gap-4">
          <Button
            href="/contact?intent=portfolio"
            magnetic
            icon={<Download size={18} />}
          >
            Request Pitch Deck
          </Button>
          <Button href="/contact?intent=meeting" variant="secondary">
            Book a Meeting
          </Button>
        </div>
      </PageHero>

      {/* Why invest */}
      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Why HS Investment Group"
            title="Six reasons partners invest with us"
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {whyInvest.map((w, i) => (
              <AnimatedReveal
                as="li"
                key={w}
                delay={i * 0.04}
                className="flex gap-3 rounded-2xl border border-sand/10 bg-charcoal/40 p-5"
              >
                <Check size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                <span className="text-sm leading-relaxed text-sand-200">{w}</span>
              </AnimatedReveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* Track record */}
      <Section tone="black" className="!py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {kpis.map((k) => (
            <AnimatedReveal key={k.label}>
              <KPICounter value={k.value} suffix={k.suffix} label={k.label} />
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* Investment models */}
      <Section tone="ink">
        <SectionHeading
          eyebrow="Investment Model"
          title="Flexible structures, aligned interests"
          intro="We partner through joint ventures, direct equity and public-private partnerships — always with active ownership."
          className="mb-12"
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {investmentModels.map((m, i) => (
            <AnimatedReveal
              key={m.title}
              delay={i * 0.05}
              className="rounded-3xl border border-sand/10 bg-charcoal/50 p-8"
            >
              <span className="tnum font-display text-3xl font-semibold text-accent">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-sand">
                {m.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-sand-400">
                {m.body}
              </p>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* Case studies */}
      <Section tone="black">
        <SectionHeading
          eyebrow="Track Record & Case Studies"
          title="Proven delivery across sectors"
          intro={SAMPLE_NOTICE}
          className="mb-12"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((p) => (
            <AnimatedReveal key={p.id}>
              <ProjectCard project={p} />
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* ESG */}
      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="ESG & Sustainability"
            title="Responsible investment, by design"
            intro="Sustainability is embedded across our value chains — from sourcing to energy and connectivity."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {esg.map((e, i) => (
              <AnimatedReveal
                as="li"
                key={e.title}
                delay={i * 0.04}
                className="rounded-2xl border border-sand/10 bg-charcoal/40 p-6"
              >
                <Leaf size={22} className="text-accent" aria-hidden />
                <h3 className="mt-4 font-display text-base font-semibold text-sand">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-400">
                  {e.body}
                </p>
              </AnimatedReveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* Partnerships */}
      <Section tone="black">
        <SectionHeading
          eyebrow="Partnerships & Opportunities"
          title="Who we partner with"
          intro={partnerships.intro}
          className="mb-12"
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {partnerships.partners.map((p, i) => (
            <AnimatedReveal
              key={p}
              delay={i * 0.05}
              className="flex items-center gap-4 rounded-2xl border border-sand/10 bg-ink p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-charcoal text-accent">
                <Icon name={['Handshake', 'Globe2', 'Network'][i]} size={22} />
              </span>
              <span className="text-sm font-medium text-sand">{p}</span>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      <CTABand
        eyebrow="Let's Talk"
        title="Build long-term value with HS Investment Group"
        primary={{ label: 'Submit Interest', href: '/contact?intent=interest' }}
        secondary={{ label: 'Request Pitch Deck', href: '/contact?intent=portfolio' }}
      />
    </>
  );
}
