// ─────────────────────────────────────────────────────────────────────────
// Central editable copy for HS Investment Group. Change text here, not in JSX.
// ─────────────────────────────────────────────────────────────────────────

export const company = {
  name: 'HS Investment Group',
  short: 'HS Group',
  promise: 'Connecting Capital, Capability & Opportunity.',
  taglines: [
    'The Gateway to MENA & Emerging Global Markets',
    'A Centralized Holding with Decentralized Execution.',
  ],
  hqCountry: 'United Arab Emirates',
  oneLiner:
    'Connecting capital with capability to unlock opportunity across the sectors that form the backbone of economic development.',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Sectors', href: '/sectors' },
  { label: 'Projects', href: '/projects' },
  { label: 'Insights', href: '/insights' },
  { label: 'Investors', href: '/investors', hot: true },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const overview = {
  heading: 'Connecting capital with capability to unlock opportunity',
  body: [
    'HS Investment Group leads investments across sectors that form the backbone of economic development — trade, food security, infrastructure, connectivity, and energy.',
    'Unlike traditional holding companies, it does not function as a passive portfolio owner; it invests with control, accountability, and long-term commitment, working closely with subsidiaries to drive growth, efficiency, and sustainability.',
    'Through a diversified portfolio it connects sourcing markets (China, Turkey), processing and logistics hubs (Egypt), and origin-based high-growth markets (Yemen) — all governed and financed through the UAE.',
  ],
};

export const principles = {
  heading: 'Group Principles',
  body: 'A disciplined investment framework centered on active ownership, execution-led strategies, and strong governance. Capital is deployed with strategic oversight and operational involvement; governance and compliance are aligned with UAE and international best practices.',
};

export const vision = {
  vision:
    'To be the leading multi-sector holding platform connecting capital, capability and opportunity across MENA and emerging global markets.',
  mission:
    'To invest with control, accountability and long-term commitment — building enduring assets and value chains that advance trade, food security, infrastructure, connectivity and energy.',
};

export const coreValues = [
  {
    title: 'Integrity',
    body: 'Transparency and accountability at every level of decision-making.',
  },
  {
    title: 'Active Ownership',
    body: 'Hands-on stewardship that pairs capital with operational execution.',
  },
  {
    title: 'Discipline',
    body: 'A rigorous, governance-led framework for deploying capital.',
  },
  {
    title: 'Resilience',
    body: 'Building strength and creativity through complex-market challenges.',
  },
  {
    title: 'Long-Term Commitment',
    body: 'Patient capital focused on enduring impact and legacy.',
  },
  {
    title: 'People First',
    body: 'A passionate, committed team is our greatest asset and true engine.',
  },
];

export const chairmanMessage = {
  title: "Chairman's Message",
  signature: 'Chairman, HS Investment Group',
  body: 'Founding HS Investment Group was more than just starting a company; it was the realization of a vision rooted in our belief that we could create meaningful impact and leave a lasting legacy. This vision, at the heart of HS Investment Group, continues to guide us today, driven by the conviction that thoughtful innovation, responsible investment, and dedicated execution can shape a better future. We understood from the beginning that the journey would present challenges, and it is through overcoming these challenges that our collective strength, resilience, and creativity are revealed. Our greatest asset and the true engine of our success is our people: a passionate and committed team who bring integrity, expertise, and purpose to everything they do. Their shared belief in our vision is what defines HS Investment Group and continues to propel us forward. Our focus is simple: connect capital with capability to unlock opportunity.',
};

export const businessModel = {
  heading: 'Centralized Holding with Decentralized Execution',
  intro:
    'A clear separation of mandates lets the Group set direction and govern capital while subsidiaries own execution in their markets.',
  group: {
    label: 'Group-Level Responsibilities',
    items: [
      'Group strategy & portfolio direction',
      'Capital allocation & investment decisions',
      'Risk management, compliance & governance',
      'Legal, finance, HR, IT & marketing shared services',
      'Investor relations & strategic partnerships',
    ],
  },
  subsidiary: {
    label: 'Subsidiary-Level Responsibilities',
    items: [
      'Day-to-day operations',
      'Sector-specific execution & growth',
      'Revenue generation & market expansion',
      'Client, supplier & government engagement',
    ],
  },
};

export const governance = {
  heading: 'Stability, Experience & Control',
  body: 'Leadership and governance are structured for control and accountability — aligning oversight, capital discipline and operational involvement with UAE and international best practices to sustain investor confidence.',
};

export const strengths = [
  {
    title: 'Active Ownership Model',
    body: 'A hands-on approach combining capital, governance and operational execution.',
    icon: 'Hand',
  },
  {
    title: 'Integrated Regional Platform',
    body: 'UAE, China, Turkey, Egypt and Yemen connectivity — sourcing → processing → markets.',
    icon: 'Network',
  },
  {
    title: 'Frontier Market Expertise',
    body: 'The ability to structure, operate and scale in complex and emerging markets.',
    icon: 'Compass',
  },
  {
    title: 'End-to-End Value Chain Control',
    body: 'Procurement, logistics, operations and delivery under one platform.',
    icon: 'GitBranch',
  },
  {
    title: 'Scalable Multi-Sector Model',
    body: 'A platform structure built for replication and growth.',
    icon: 'LayoutGrid',
  },
  {
    title: 'Governance & Compliance Excellence',
    body: 'International standards, transparency and investor confidence.',
    icon: 'ShieldCheck',
  },
];

export const footprint = [
  {
    country: 'UAE',
    role: 'Governance HQ',
    detail: 'Headquarters, governance, compliance and investor relations.',
    coords: { lat: 24.45, lon: 54.38 }, // Abu Dhabi
    flow: 'hub',
  },
  {
    country: 'China',
    role: 'Global Sourcing',
    detail: 'Global sourcing, manufacturing and technology access.',
    coords: { lat: 22.32, lon: 114.17 }, // Hong Kong
    flow: 'source',
  },
  {
    country: 'Turkey',
    role: 'Trade Bridge',
    detail: 'Regional trade bridge and industrial sourcing hub.',
    coords: { lat: 41.01, lon: 28.98 }, // Istanbul
    flow: 'source',
  },
  {
    country: 'Egypt',
    role: 'Processing & Logistics',
    detail: 'Processing, logistics and cost-efficient operations.',
    coords: { lat: 30.04, lon: 31.24 }, // Cairo
    flow: 'process',
  },
  {
    country: 'Yemen',
    role: 'Origin Resources',
    detail: 'Origin-based resources and emerging-market opportunity.',
    coords: { lat: 12.79, lon: 45.02 }, // Aden
    flow: 'origin',
  },
  {
    country: 'Canada',
    role: 'International Office',
    detail: 'International presence and partner liaison.',
    coords: { lat: 43.45, lon: -79.68 }, // Oakville
    flow: 'market',
  },
] as const;

export const esg = [
  {
    title: 'Food Security & Responsible Sourcing',
    body: 'Integrated value chains that strengthen regional food security.',
  },
  {
    title: 'Renewable Energy & Lower Carbon',
    body: 'Solar EPC and renewables that reduce carbon footprint.',
  },
  {
    title: 'Digital Inclusion',
    body: 'Telecom infrastructure expanding connectivity and access.',
  },
  {
    title: 'Sustainable Real Estate',
    body: 'Smart, enduring developments built for the long term.',
  },
];

export const whyInvest = [
  'True multi-sector holding structure',
  'Active ownership with operational execution',
  'Strategic presence across UAE, China, Turkey, Egypt & Yemen',
  'Global sourcing with regional delivery',
  'Strong governance & investor confidence',
  'Proven ability to operate in complex markets',
];

export const investmentModels = [
  {
    title: 'Joint Ventures',
    body: 'Shared-control partnerships pairing our execution platform with strategic partners.',
  },
  {
    title: 'Equity Investment',
    body: 'Direct equity with active ownership, governance and operational involvement.',
  },
  {
    title: 'Public-Private Partnerships',
    body: 'PPP structures aligned with national infrastructure and development agendas.',
  },
];

export const partnerships = {
  intro:
    'We welcome partners seeking long-term exposure to high-growth markets through a disciplined, execution-led investment platform.',
  partners: [
    'Institutional & strategic investors',
    'Sovereign & development funds',
    'Technology providers & operators',
  ],
};

export const kpis = [
  { value: 5, suffix: '', label: 'Operating Countries' },
  { value: 8, suffix: '', label: 'Investment Sectors' },
  { value: 6, suffix: '', label: 'Key Strengths' },
  { value: 6, suffix: '', label: 'Global Offices' },
];

export const offices = [
  {
    country: 'United Arab Emirates',
    tag: 'HQ',
    lines: [
      '606, EREC Building, Al Falah St., Zone 1',
      'Al Danah, Abu Dhabi',
      'P.O. Box 94840, Abu Dhabi',
    ],
    tel: '+971 2 650 7741',
    fax: '+971 2 650 7742',
  },
  {
    country: 'Canada',
    lines: ['3280 Donald Mackay St', 'Oakville, Ontario, L6M 5K2'],
    tel: '+1 (902) 292-9222',
  },
  {
    country: 'China',
    lines: [
      'Unit B, 13/F, Shing Lee Commercial Building',
      'Wing Cut St, Central, Hong Kong',
    ],
  },
  {
    country: 'Turkey',
    lines: [
      'Yakuplu Mah., Hürriyet Bul.',
      'SkyPort Residence No.1, içkapı 113',
      'Beylikdüzü, Istanbul',
    ],
  },
  {
    country: 'Egypt',
    lines: [
      'Villa 313D, South Academy',
      '5th Settlement, New Cairo City, Cairo',
    ],
    tel: '+20 114 6157855',
  },
  {
    country: 'Yemen',
    lines: [
      'Bldg. 1, Bader Roundabout',
      'P.O. Box 70116, Khormaksar, Aden',
    ],
    tel: '+967 2 237 793 / +967 2 237 794',
  },
];

export const ctaCluster = [
  { label: 'Request Investment Brief', href: '/contact?intent=brief' },
  { label: 'Book a Meeting', href: '/contact?intent=meeting' },
  { label: 'Download Portfolio', href: '/contact?intent=portfolio' },
  { label: 'Submit Interest', href: '/contact?intent=interest' },
];
