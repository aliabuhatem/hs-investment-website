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

      {/* Core Values — staggered, offset rows */}
      <Section tone="black" density="open">
        <SectionHeading
          eyebrow="Core Values & Group Principles"
          index="02"
          title="The principles that govern our capital"
          intro={principles.body}
          className="mb-12"
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((v, i) => (
            <AnimatedReveal
              as="li"
              key={v.title}
              delay={i * 0.04}
              className={i % 3 === 1 ? 'lg:mt-10' : i % 3 === 2 ? 'lg:mt-20' : ''}
            >
              <div className="group relative h-full overflow-hidden rounded-3xl border border-sand/10 bg-ink/60 p-7 transition-colors duration-200 hover:border-accent/40">
                <span className="tnum font-display text-sm text-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-sand">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-400">
                  {v.body}
                </p>
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-300 ease-out-soft group-hover:w-full"
                />
              </div>
            </AnimatedReveal>
          ))}
        </ul>
      </Section>

      {/* Chairman's Message — magazine pull-quote, asymmetric */}
      <Section tone="ink" density="open" containerClassName="relative">
        <span
          aria-hidden
          className="ghost-num pointer-events-none absolute -top-20 right-0 hidden font-display text-[16rem] font-bold lg:block"
        >
          03
        </span>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Leadership"
              index="03"
              title={chairmanMessage.title}
            />
            <div className="mt-8 flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent font-display text-xl font-semibold text-white">
                HS
              </span>
              <cite className="not-italic">
                <span className="block font-medium text-sand">
                  {chairmanMessage.signature}
                </span>
                <span className="text-sm text-sand-400">Founder</span>
              </cite>
            </div>
          </div>
          <AnimatedReveal x={24} className="relative">
            <Quote size={56} className="text-accent/30" aria-hidden />
            <blockquote className="mt-2 text-pretty font-display text-2xl font-medium leading-[1.35] text-sand sm:text-3xl">
              “{chairmanMessage.body}”
            </blockquote>
          </AnimatedReveal>
        </div>
      </Section>

      {/* Business Model */}
      <Section tone="black">
        <SectionHeading
          eyebrow="Group Business Model"
          index="04"
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
            index="05"
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
