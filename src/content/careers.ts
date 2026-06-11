// Careers content — culture + sample open positions.

export const culture = {
  heading: 'Our People Are the Engine',
  body: 'A passionate, committed team brings integrity, expertise and purpose to everything we do. We build careers around active ownership, frontier-market exposure and disciplined execution — with room to shape a lasting legacy.',
  pillars: [
    {
      title: 'Ownership Mindset',
      body: 'Real responsibility from day one, across a multi-sector platform.',
    },
    {
      title: 'Global Exposure',
      body: 'Work across UAE, China, Turkey, Egypt and Yemen value chains.',
    },
    {
      title: 'Growth & Mobility',
      body: 'Scale with a platform built for replication and expansion.',
    },
    {
      title: 'Integrity & Governance',
      body: 'International standards and transparency at every level.',
    },
  ],
};

export type Position = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract';
  summary: string;
};

export const positions: Position[] = [
  {
    id: 'inv-analyst-auh',
    title: 'Investment Analyst',
    department: 'Capital Allocation',
    location: 'Abu Dhabi, UAE',
    type: 'Full-time',
    summary:
      'Support deal screening, financial modelling and portfolio monitoring across the Group’s sectors.',
  },
  {
    id: 'supply-chain-lead-egy',
    title: 'Supply Chain Lead',
    department: 'Food & Agriculture',
    location: 'New Cairo, Egypt',
    type: 'Full-time',
    summary:
      'Own end-to-end logistics and processing flows from origin to export markets.',
  },
  {
    id: 'energy-pm-tur',
    title: 'Renewable Energy Project Manager',
    department: 'Telecom & Energy',
    location: 'Istanbul, Turkey',
    type: 'Full-time',
    summary:
      'Lead solar EPC delivery and PPA-backed asset execution end to end.',
  },
  {
    id: 'governance-counsel-auh',
    title: 'Governance & Compliance Counsel',
    department: 'Group Legal',
    location: 'Abu Dhabi, UAE',
    type: 'Full-time',
    summary:
      'Strengthen compliance frameworks aligned with UAE and international standards.',
  },
  {
    id: 'trade-ops-coord',
    title: 'Trade Operations Coordinator',
    department: 'Trading & Commodities',
    location: 'Jebel Ali, UAE',
    type: 'Contract',
    summary:
      'Coordinate sourcing, documentation and logistics for bulk commodity flows.',
  },
];
