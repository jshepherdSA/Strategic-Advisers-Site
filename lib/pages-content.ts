// Strategic Advisers — interior page content (Phase One).
// Transcribed from reference/phase-one-content.tsx. Kept separate from the
// homepage content in lib/content.ts.

/* ---------------------------------- Services --------------------------------- */

export type ServiceSection = {
  id: string
  index: string
  title: string
  paragraphs: string[]
  items: string[]
  ctaLabel?: string
}

export const SERVICE_SECTIONS: ServiceSection[] = [
  {
    id: 'digital-advertising',
    index: '01',
    title: 'Digital Advertising',
    paragraphs: [
      'Strategic Advisers plans, launches, manages, and optimizes digital advertising campaigns designed to reach specific audiences and support measurable business goals.',
      'Our digital work supports lead generation, enrollment, e-commerce sales, customer acquisition, recruitment, awareness, event attendance, fundraising, and public education.',
    ],
    items: [
      'Programmatic Display Advertising',
      'Google Search and PPC',
      'Paid Social Advertising',
      'CTV and OTT Advertising',
      'Streaming Audio',
      'Geofencing',
      'Retargeting',
      'CRM and Customer List Targeting',
      'Landing Page Strategy',
      'Campaign Reporting and Optimization',
    ],
    ctaLabel: 'Talk to Us About Digital Advertising',
  },
  {
    id: 'media-strategy',
    index: '02',
    title: 'Media Strategy & Traditional Buying',
    paragraphs: [
      'Some campaigns need more than digital media alone.',
      'Strategic Advisers helps clients evaluate, plan, and coordinate traditional media placements when they support the audience, market, and campaign goal.',
      'We help connect offline and online media so the campaign feels consistent across every channel.',
    ],
    items: [
      'Billboard and Out-of-Home Advertising',
      'Radio Advertising',
      'Broadcast Television',
      'Cable Television',
      'Print Advertising',
      'Sponsorship Opportunities',
      'Media Planning',
      'Media Placement Coordination',
      'Creative and Message Coordination',
      'Integrated Digital and Traditional Campaigns',
    ],
    ctaLabel: 'Discuss a Media Plan',
  },
  {
    id: 'public-relations',
    index: '03',
    title: 'Public Relations',
    paragraphs: [
      'Strategic Advisers helps organizations communicate clearly, earn meaningful visibility, and build long-term credibility.',
      'Founded by award-winning journalists, our firm understands how to identify strong stories, create compelling messages, and communicate effectively with media, customers, stakeholders, and communities.',
    ],
    items: [
      'Media Relations',
      'Press Releases and Announcements',
      'Crisis Communications',
      'Reputation Management',
      'Executive Visibility',
      'Community Relations',
      'Content Strategy',
      'Message Development',
    ],
    ctaLabel: 'Talk to Our PR Team',
  },
  {
    id: 'public-affairs',
    index: '04',
    title: 'Public Affairs',
    paragraphs: [
      'Strategic Advisers supports organizations navigating public issues, advocacy efforts, community conversations, and stakeholder communications.',
      'We help clients explain complex topics, build support, respond to opposition, engage communities, and move audiences toward action.',
    ],
    items: [
      'Issue Advocacy',
      'Public Awareness Campaigns',
      'Stakeholder Communications',
      'Community Engagement',
      'Grassroots Campaigns',
      'Coalition Building',
      'Government and Community Relations',
      'Message Development',
    ],
    ctaLabel: 'Discuss a Public Affairs Campaign',
  },
  {
    id: 'strategy',
    index: '05',
    title: 'Strategy, Measurement and Optimization',
    paragraphs: [
      'Strong campaigns start with clear goals and improve through consistent analysis.',
      'Strategic Advisers connects strategy, audience, creative, media, measurement, and reporting so clients understand both campaign activity and business impact.',
    ],
    items: [
      'Audience Research',
      'Competitive Research',
      'Campaign Planning',
      'Channel Strategy',
      'Budget Recommendations',
      'Performance Reporting',
      'Ongoing Optimization',
      'Strategic Recommendations',
    ],
  },
]

/* --------------------------------- Industries -------------------------------- */

export type IndustryDetail = {
  index: string
  name: string
  description: string
  services?: string
}

export const INDUSTRY_DETAILS: IndustryDetail[] = [
  {
    index: '01',
    name: 'Higher Education',
    description:
      'We help colleges and universities increase awareness, generate inquiries, support enrollment goals, promote academic programs, and reach students at every stage of the decision process.',
    services:
      'Relevant services include paid search, programmatic advertising, social media advertising, CTV, streaming audio, landing page strategy, public relations, and campaign reporting.',
  },
  {
    index: '02',
    name: 'Manufacturing & Industrial',
    description:
      'We help manufacturers communicate complex products, reach customers and distributors, support sales teams, promote capabilities, recruit employees, and strengthen market visibility.',
    services:
      'Relevant services include lead generation, account-based targeting, trade publication outreach, paid search, programmatic advertising, content strategy, and public relations.',
  },
  {
    index: '03',
    name: 'E-Commerce & Consumer Brands',
    description:
      'We help e-commerce companies and consumer brands increase product awareness, acquire customers, improve retargeting, support promotions, and connect advertising activity to sales.',
    services:
      'Relevant services include paid social, Google Search and Shopping, programmatic advertising, retargeting, CRM targeting, creative testing, and campaign optimization.',
  },
  {
    index: '04',
    name: 'Healthcare & Nonprofits',
    description:
      'We help healthcare organizations and nonprofits educate audiences, increase awareness, support fundraising, recruit participants, promote services, and communicate sensitive or complex information.',
    services:
      'Relevant services include digital advertising, media relations, public awareness campaigns, content strategy, and stakeholder communications.',
  },
  {
    index: '05',
    name: 'Financial Institutions',
    description:
      'We help banks, lenders, financial organizations, and professional service firms promote products, build trust, reach customers, and strengthen community visibility.',
    services:
      'Relevant services include paid media, public relations, community relations, content development, and integrated campaign strategy.',
  },
  {
    index: '06',
    name: 'Public Sector & Advocacy',
    description:
      'We help public agencies, advocacy organizations, and community-focused groups explain issues, increase awareness, engage stakeholders, and build public support.',
    services:
      'Relevant services include public affairs, issue advocacy, geofencing, digital advertising, community engagement, media relations, and message strategy.',
  },
  {
    index: '07',
    name: 'Housing & Community Development',
    description:
      'We help housing organizations, real estate groups, community developers, and multi-location properties promote opportunities, reach residents, generate inquiries, and strengthen local awareness.',
  },
  {
    index: '08',
    name: 'Regional & Multi-Location Businesses',
    description:
      'We help regional brands and multi-location organizations build market awareness, promote individual locations, maintain brand consistency, and connect local campaigns with broader business goals.',
  },
]

/* ----------------------------------- About ----------------------------------- */

export const ABOUT_STORY: string[] = [
  'Strategic Advisers was founded by award-winning journalists who understood how powerful clear messaging and credible storytelling can be.',
  'As the media landscape evolved, so did the agency.',
  'Today, Strategic Advisers is a digital-first communications firm offering digital advertising, media strategy, public relations, public affairs, content, and campaign measurement.',
  'Our foundation in journalism continues to shape how we work. We ask the right questions, find the strongest message, understand the audience, and communicate with clarity.',
]

export type Differentiator = { title: string; copy: string }

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: 'We Connect Strategy and Execution',
    copy: 'We do not stop at recommendations. We help clients plan, launch, manage, measure, and improve campaigns.',
  },
  {
    title: 'We Understand Paid and Earned Media',
    copy: 'Our team knows how digital advertising and public relations can work together to build both reach and credibility.',
  },
  {
    title: 'We Make Complex Information Clear',
    copy: 'We work with organizations that have complicated services, products, audiences, or public-facing issues.',
  },
  {
    title: 'We Focus on Useful Reporting',
    copy: 'We provide reporting clients can understand and use—not dashboards without context.',
  },
  {
    title: 'We Work as an Extension of the Client Team',
    copy: 'We provide the strategy, expertise, and execution clients need without adding unnecessary layers.',
  },
]

export const VALUES: string[] = [
  'Strategic Thinking',
  'Clear Communication',
  'Responsiveness',
  'Accountability',
  'Curiosity',
  'Collaboration',
  'Measurable Results',
]
