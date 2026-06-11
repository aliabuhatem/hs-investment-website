import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/home/Hero';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectorsBento } from '@/components/sectors/SectorsBento';
import { KeyStrengths } from '@/components/home/KeyStrengths';
import { KPICounter } from '@/components/ui/KPICounter';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { CTABand } from '@/components/ui/CTABand';
import { Button } from '@/components/ui/Button';
import { overview, kpis, company } from '@/content/site';
import { projects, SAMPLE_NOTICE } from '@/content/projects';

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Overview */}
      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Who We Are"
            title={overview.heading}
          />
          <AnimatedReveal className="space-y-5 text-base leading-relaxed text-sand-300 sm:text-lg">
            {overview.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <Button href="/about" variant="ghost" icon={<ArrowRight size={16} />}>
              Read our story
            </Button>
          </AnimatedReveal>
        </div>
      </Section>

      {/* KPIs */}
      <Section tone="black" className="!py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {kpis.map((k) => (
            <AnimatedReveal key={k.label}>
              <KPICounter value={k.value} suffix={k.suffix} label={k.label} />
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* Sectors bento */}
      <Section tone="ink">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Investment Sectors"
            title="Eight sectors, one integrated platform"
            intro="The backbone of economic development — trade, food security, infrastructure, connectivity and energy."
          />
          <Button href="/sectors" variant="secondary">
            All sectors
          </Button>
        </div>
        <SectorsBento />
      </Section>

      {/* Featured projects */}
      <Section tone="black">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Capital deployed with control"
            intro={SAMPLE_NOTICE}
          />
          <Button href="/projects" variant="secondary">
            View all projects
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <AnimatedReveal key={p.id}>
              <ProjectCard project={p} />
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* Key strengths */}
      <Section tone="ink">
        <SectionHeading
          eyebrow="Six Key Strengths"
          title="Why HS Investment Group performs"
          className="mb-12"
        />
        <KeyStrengths />
      </Section>

      {/* Closing CTA */}
      <CTABand
        eyebrow="Partner With Us"
        title="Connect capital with capability to unlock opportunity"
        body={`${company.taglines[1]} We welcome partners seeking long-term exposure to high-growth markets through a disciplined, execution-led platform.`}
        primary={{ label: 'Invest With Us', href: '/investors' }}
        secondary={{ label: 'Request Investment Brief', href: '/contact?intent=brief' }}
      />
    </>
  );
}
