import type { Metadata } from 'next';
import { Quote, Target, Compass } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { BusinessModel } from '@/components/about/BusinessModel';
import { Icon } from '@/components/ui/Icon';
import { CTABand } from '@/components/ui/CTABand';
import {
  vision,
  coreValues,
  chairmanMessage,
  businessModel,
  governance,
  principles,
  overview,
} from '@/content/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'A centralized holding with decentralized execution — vision, values, governance and the HS Investment Group business model.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Group"
        title="A centralized holding with decentralized execution"
        intro={overview.body[0]}
      />

      {/* Vision & Mission */}
      <Section tone="ink">
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { label: 'Vision', body: vision.vision, icon: Compass },
            { label: 'Mission', body: vision.mission, icon: Target },
          ].map(({ label, body, icon: I }) => (
            <AnimatedReveal
              key={label}
              className="rounded-3xl border border-sand/10 bg-charcoal/50 p-8 lg:p-10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-accent">
                <I size={24} aria-hidden />
              </span>
              <h2 className="mt-6 text-xs font-semibold uppercase tracking-brand text-accent">
                {label}
              </h2>
              <p className="mt-3 text-xl leading-relaxed text-sand sm:text-2xl">
                {body}
              </p>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* Core Values */}
      <Section tone="black">
        <SectionHeading
          eyebrow="Core Values & Group Principles"
          title="The principles that govern our capital"
          intro={principles.body}
          className="mb-12"
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((v, i) => (
            <AnimatedReveal as="li" key={v.title} delay={i * 0.04}>
              <div className="h-full rounded-3xl border border-sand/10 bg-ink p-7">
                <span className="tnum font-display text-sm text-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-sand">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-400">
                  {v.body}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </ul>
      </Section>

      {/* Chairman's Message */}
      <Section tone="ink">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading eyebrow="Leadership" title={chairmanMessage.title} />
          <AnimatedReveal className="relative rounded-3xl border border-sand/10 bg-charcoal/40 p-8 sm:p-10">
            <Quote
              size={40}
              className="text-accent/40"
              aria-hidden
            />
            <blockquote className="mt-4 text-pretty text-lg leading-relaxed text-sand-200 sm:text-xl">
              {chairmanMessage.body}
            </blockquote>
            <footer className="mt-8 flex items-center gap-4 border-t border-sand/10 pt-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent font-display text-lg font-semibold text-white">
                HS
              </span>
              <cite className="not-italic">
                <span className="block font-medium text-sand">
                  {chairmanMessage.signature}
                </span>
              </cite>
            </footer>
          </AnimatedReveal>
        </div>
      </Section>

      {/* Business Model */}
      <Section tone="black">
        <SectionHeading
          eyebrow="Group Business Model"
          title={businessModel.heading}
          intro={businessModel.intro}
          className="mb-12"
        />
        <BusinessModel />
      </Section>

      {/* Governance */}
      <Section tone="ink">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SectionHeading
            eyebrow="Leadership & Governance"
            title={governance.heading}
            intro={governance.body}
          />
          <AnimatedReveal className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {['Stability', 'Experience', 'Control'].map((g, i) => (
              <div
                key={g}
                className="rounded-2xl border border-sand/10 bg-charcoal/50 p-6 text-center"
              >
                <span className="flex justify-center text-accent">
                  <Icon
                    name={['ShieldCheck', 'Compass', 'Scale'][i]}
                    size={28}
                  />
                </span>
                <p className="mt-4 font-display text-base font-semibold text-sand">
                  {g}
                </p>
              </div>
            ))}
          </AnimatedReveal>
        </div>
      </Section>

      <CTABand
        eyebrow="Work With Us"
        title="Active ownership. Disciplined capital. Enduring impact."
        primary={{ label: 'Explore Investor Hub', href: '/investors' }}
        secondary={{ label: 'View Sectors', href: '/sectors' }}
      />
    </>
  );
}
