import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { ProjectsExplorer } from '@/components/projects/ProjectsExplorer';
import { Tag } from '@/components/ui/Tag';
import { SAMPLE_NOTICE } from '@/content/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A portfolio of investments across trading, food & agriculture, energy, real estate, fishing and infrastructure — completed and ongoing.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Capital deployed with control"
        intro="A diversified portfolio connecting sourcing markets, processing hubs and high-growth origins — filter by sector and status."
      >
        <Tag tone="muted">{SAMPLE_NOTICE}</Tag>
      </PageHero>

      <Section tone="ink">
        <ProjectsExplorer />
      </Section>
    </>
  );
}
