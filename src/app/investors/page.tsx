import type { Metadata } from 'next';
import { Check, Download, Leaf } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { StatStrip } from '@/components/home/StatStrip';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { CTABand } from '@/components/ui/CTABand';
import { whyInvest, investmentModels, partnerships, esg } from '@/content/site';
import { projects, SAMPLE_NOTICE } from '@/content/projects';

export const metadata: Metadata = {
  title: 'Investors',
  description:
    'Why invest in HS Investment Group — track record, investment models (JV, equity, PPP), partnerships and ESG. Request the pitch deck.',
};

export default function InvestorsPage() {
  const caseStudies = projects.filter((p) => p.status === 'Completed').slice(0, 3);
  const [leadModel, ...otherModels] = investmentModels;

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

      {/* Track record — asymmetric stat band */}
      <Section tone="ink" density="normal" overlap>
        <StatStrip />
      </Section>

      {/* Why invest — asymmetric split, staggered list */}
      <Section tone="ink" density="open">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow="Why HS Investment Group"
            index="01"
            title="Six reasons partners invest with us"
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {whyInvest.map((w, i) => (
              <AnimatedReveal
                as="li"
                key={w}
                delay={i * 0.04}
                className={`group relative flex gap-3 overflow-hidden rounded-2xl border border-sand/10 bg-charcoal/40 p-5 transition-colors hover:border-accent/40 ${
                  i % 2 === 1 ? 'sm:mt-8' : ''
                }`}
              >
                <span className="tnum font-display text-sm text-accent">
                  0{i + 1}
                </span>
                <span className="text-sm leading-relaxed text-sand-200">{w}</span>
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-300 ease-out-soft group-hover:w-full"
                />
              </AnimatedReveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* Investment models — one feature + stacked supporting */}
      <Section tone="ink" density="normal" containerClassName="relative">
        <span
          aria-hidden
          className="ghost-num pointer-events-none absolute -top-16 right-0 hidden font-display text-[14rem] font-bold lg:block"
        >
          02
        </span>
        <SectionHeading
          eyebrow="Investment Model"
          index="02"
          title="Flexible structures, aligned interests"
          intro="We partner through joint ventures, direct equity and public-private partnerships — always with active ownership."
          className="mb-12"
        />
        <div className="grid gap-5 lg:grid-cols-12">
          <AnimatedReveal
            x={-20}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-accent/25 bg-accent/[0.06] p-8 lg:col-span-5 lg:min-h-[340px]"
          >
            <span className="tnum font-display text-5xl font-semibold text-accent">
              01
            </span>
            <div className="mt-8">
              <h3 className="font-display text-2xl font-semibold text-sand">
                {leadModel.title}
              </h3>
              <p className="mt-3 max-w-sm leading-relaxed text-sand-300">
                {leadModel.body}
              </p>
            </div>
          </AnimatedReveal>
          <div className="flex flex-col gap-5 lg:col-span-7">
            {otherModels.map((m, i) => (
              <AnimatedReveal
                key={m.title}
                delay={i * 0.06}
                className="group relative flex flex-1 items-start gap-6 overflow-hidden rounded-3xl border border-sand/10 bg-charcoal/40 p-7 transition-colors hover:border-accent/40"
              >
                <span className="tnum font-display text-4xl font-semibold text-sand-400/60">
                  0{i + 2}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-sand">
                    {m.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-sand-400">{m.body}</p>
                </div>
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-300 ease-out-soft group-hover:w-full"
                />
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Case studies */}
      <Section tone="ink" density="normal">
        <SectionHeading
          eyebrow="Track Record & Case Studies"
          index="03"
          title="Proven delivery across sectors"
          intro={SAMPLE_NOTICE}
          className="mb-12"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((p, i) => (
            <AnimatedReveal
              key={p.id}
              delay={i * 0.05}
              className={i === 1 ? 'lg:mt-10' : ''}
            >
              <ProjectCard project={p} />
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* ESG — asymmetric split, offset list */}
      <Section tone="ink" density="open">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="ESG & Sustainability"
            index="04"
            title="Responsible investment, by design"
            intro="Sustainability is embedded across our value chains — from sourcing to energy and connectivity."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {esg.map((e, i) => (
              <AnimatedReveal
                as="li"
                key={e.title}
                delay={i * 0.04}
                className={`group relative overflow-hidden rounded-2xl border border-sand/10 bg-charcoal/40 p-6 transition-colors hover:border-accent/40 ${
                  i % 2 === 1 ? 'sm:mt-8' : ''
                }`}
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

      {/* Partnerships — staggered */}
      <Section tone="ink" density="tight">
        <SectionHeading
          eyebrow="Partnerships & Opportunities"
          index="05"
          title="Who we partner with"
          intro={partnerships.intro}
          className="mb-12"
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {partnerships.partners.map((p, i) => (
            <AnimatedReveal
              key={p}
              delay={i * 0.06}
              className={`group flex items-center gap-4 rounded-2xl border border-sand/10 bg-charcoal/30 p-6 transition-colors hover:border-accent/40 ${
                i === 1 ? 'sm:mt-8' : ''
              }`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-accent transition-transform duration-200 group-hover:scale-110">
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
