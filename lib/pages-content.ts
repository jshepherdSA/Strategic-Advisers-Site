// Strategic Advisers — interior page content (Phase One).
// Transcribed from reference/phase-one-content.tsx. Kept separate from the
// homepage content in lib/content.ts.

import type { IndustryIcon, ServiceIcon } from './content'

/* ---------------------------------- Services --------------------------------- */

export type ServiceSection = {
  id: string
  index: string
  title: string
  icon: ServiceIcon
  paragraphs: string[]
  items: string[]
  ctaLabel?: string
}

export const SERVICE_SECTIONS: ServiceSection[] = [
  {
    id: 'digital-advertising',
    index: '01',
    title: 'Digital Advertising',
    icon: 'target',
    paragraphs: [
      "Exceptional digital advertising begins long before the first ad is launched. Strategic Advisers takes a strategic, consultative approach, starting with a comprehensive evaluation of your organization, objectives, target audiences, competitive landscape, customer journey, existing marketing efforts, and market opportunities. We identify what's working, uncover what's not, and develop a customized, data-driven media strategy designed to maximize performance and return on investment.",
      'From there, our team plans, launches, manages, and continuously optimizes integrated campaigns across Google, Meta, LinkedIn, programmatic display, connected TV, streaming audio, paid search, paid social, geofencing, retargeting, and other digital channels. Every recommendation is intentional, every dollar is accountable, and every campaign is built to achieve measurable business outcomes, not simply generate impressions or clicks.',
      'Whether your goal is generating qualified leads, increasing enrollment, growing e-commerce revenue, recruiting talent, driving event attendance, increasing petition sign-ups, raising funds, educating the public, or strengthening your brand, Strategic Advisers serves as an extension of your team, providing the senior-level strategy, execution, and optimization needed to outperform your competition.',
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
    ctaLabel: 'Contact Our Team',
  },
  {
    id: 'media-strategy',
    index: '02',
    title: 'Media Strategy & Traditional Buying',
    icon: 'radio',
    paragraphs: [
      'Some campaigns need more than digital media alone.',
      'Strategic Advisers helps clients evaluate, plan, and coordinate traditional media placements when they support the audience, market, and campaign goal.',
      'We help connect offline and online media so the campaign feels consistent across every channel.',
    ],
    items: [
      'Billboard and Digital Out-of-Home Advertising',
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
    ctaLabel: 'Contact Our Team',
  },
  {
    id: 'public-relations',
    index: '03',
    title: 'Public Relations',
    icon: 'newspaper',
    paragraphs: [
      'Strategic Advisers helps organizations communicate clearly, earn meaningful visibility, and build long-term credibility.',
      'Founded by award-winning journalists, our firm understands how to identify strong stories, create compelling messages, and communicate effectively with media, customers, stakeholders, and communities.',
    ],
    items: [
      'Media Relations',
      'Crisis Communications',
      'Reputation Management',
      'Executive Visibility',
      'Community Relations',
      'Content Strategy',
      'Message Development',
      'Press Releases and Announcements',
    ],
    ctaLabel: 'Contact Our Team',
  },
  {
    id: 'public-affairs',
    index: '04',
    title: 'Public Affairs',
    icon: 'landmark',
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
    ctaLabel: 'Contact Our Team',
  },
  {
    id: 'strategy',
    index: '05',
    title: 'Strategy, Measurement and Optimization',
    icon: 'line-chart',
    paragraphs: [
      "The best marketing decisions are driven by data, not assumptions. That's why every engagement begins with a clear strategy, measurable objectives, and a customized reporting framework designed around your business goals, not generic marketing metrics.",
      "Strategic Advisers integrates audience insights, media performance, creative analysis, conversion tracking, and business intelligence into comprehensive, best-in-class reporting dashboards that provide complete transparency into campaign performance. Clients don't just receive reports; they gain meaningful insights, actionable recommendations, and a clear understanding of what's working, where opportunities exist, and how every marketing dollar is contributing to measurable business results.",
      'Our team continuously analyzes performance, identifies new opportunities, and refines strategy to maximize efficiency, improve outcomes, and ensure every campaign delivers the strongest possible return on investment.',
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
  icon: IndustryIcon
  description: string
  services?: string
}

export const INDUSTRY_DETAILS: IndustryDetail[] = [
  {
    index: '01',
    name: 'Higher Education',
    icon: 'graduation-cap',
    description:
      'We help colleges and universities increase awareness, generate inquiries, support enrollment goals, promote academic programs, and reach students at every stage of the decision process.',
    services:
      'Relevant services include paid search, programmatic advertising, social media advertising, CTV, streaming audio, landing page strategy, public relations, and campaign reporting.',
  },
  {
    index: '02',
    name: 'Manufacturing & Industrial',
    icon: 'factory',
    description:
      'We help manufacturers communicate complex products, reach customers and distributors, support sales teams, promote capabilities, recruit employees, and strengthen market visibility.',
    services:
      'Relevant services include lead generation, account-based targeting, trade publication outreach, paid search, programmatic advertising, content strategy, and public relations.',
  },
  {
    index: '03',
    name: 'E-Commerce & Consumer Brands',
    icon: 'shopping-bag',
    description:
      'We help e-commerce companies and consumer brands increase product awareness, acquire customers, improve retargeting, support promotions, and connect advertising activity to sales.',
    services:
      'Relevant services include paid social, Google Search and Shopping, programmatic advertising, retargeting, CRM targeting, creative testing, and campaign optimization.',
  },
  {
    index: '04',
    name: 'Healthcare & Nonprofits',
    icon: 'heart-pulse',
    description:
      'We help healthcare organizations and nonprofits educate audiences, increase awareness, support fundraising, recruit participants, promote services, and communicate sensitive or complex information.',
    services:
      'Relevant services include digital advertising, media relations, public awareness campaigns, content strategy, and stakeholder communications.',
  },
  {
    index: '05',
    name: 'Financial Institutions',
    icon: 'landmark',
    description:
      'We help banks, lenders, financial organizations, and professional service firms promote products, build trust, reach customers, and strengthen community visibility.',
    services:
      'Relevant services include paid media, public relations, community relations, content development, and integrated campaign strategy.',
  },
  {
    index: '06',
    name: 'Public Sector & Advocacy',
    icon: 'megaphone',
    description:
      'We help public agencies, advocacy organizations, and community-focused groups explain issues, increase awareness, engage stakeholders, and build public support.',
    services:
      'Relevant services include public affairs, issue advocacy, geofencing, digital advertising, community engagement, media relations, and message strategy.',
  },
  {
    index: '07',
    name: 'Housing & Community Development',
    icon: 'house',
    description:
      'We help housing organizations, real estate groups, community developers, and multi-location properties promote opportunities, reach residents, generate inquiries, and strengthen local awareness.',
  },
  {
    index: '08',
    name: 'Regional & Multi-Location Businesses',
    icon: 'map-pin',
    description:
      'We help regional brands and multi-location organizations build market awareness, promote individual locations, maintain brand consistency, and connect local campaigns with broader business goals.',
  },
  {
    index: '09',
    name: 'Government & Municipalities',
    icon: 'building-2',
    description:
      'We help government agencies, municipalities, and public institutions communicate with residents, build awareness for programs and services, navigate public issues, and strengthen community engagement.',
    services:
      'Relevant services include public affairs, community engagement, digital advertising, media relations, geofencing, and message strategy.',
  },
  {
    index: '10',
    name: 'Energy & Utilities',
    icon: 'zap',
    description:
      'We help energy providers, utilities, and infrastructure organizations explain complex programs, promote initiatives, reach ratepayers and stakeholders, and communicate clearly during changes or public issues.',
    services:
      'Relevant services include public awareness campaigns, stakeholder communications, digital advertising, media relations, and content strategy.',
  },
  {
    index: '11',
    name: 'Emerging & Specialized Industries',
    icon: 'sparkles',
    description:
      'We help startups, technology companies, and specialized organizations introduce new categories, build credibility, reach niche audiences, and translate complex offerings into clear, compelling messages.',
    services:
      'Relevant services include brand awareness, digital advertising, public relations, content strategy, and integrated campaign planning.',
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
  {
    title: 'Exclusive Access',
    copy: 'We have Alpha and Beta access into existing and emerging technologies that no other marketing firm serving the market has access to.',
  },
]

/* ---------------------------------- Partners --------------------------------- */

export type Partner = { name: string; role: string; photo: string; bio: string[] }

export const PARTNERS: Partner[] = [
  {
    name: 'Greg Greene',
    role: 'Partner',
    photo: '/assets/team/greg.png',
    bio: [
      "Greg Greene spent more than 15 years in the finance industry, primarily with Fifth Third Bank. He spent the first eight years of his career as an International Corporate Banking Officer, where he worked exclusively with multi-national companies with operations in the United States. In 2005, he became the Affiliate Head of Business Banking for Fifth Third Bank in Northern Kentucky and soon thereafter the Business Banking Market Manager for Northern Kentucky and Western Cincinnati. In this capacity, he was responsible for a business loan portfolio in excess of 1,000 clients and more than $200 million in loans and $230 million in deposits. In this position, he set strategic direction, oversaw all loan decisions, set marketing direction, and managed a sales force of more than 10 lenders and 48 branches.",
      "In August of 2011, Greg Greene left Fifth Third to join Strategic Advisers as a partner. At the firm, Greene is in charge of business operations, project management, and is heavily involved as a relationship manager for some of the firm's largest clients. He is commonly involved in relationship management, communication strategy, digital marketing, content development, web development, and audio and video productions.",
      "Greg Greene is involved and passionate about his community. His current and past involvement includes serving on the Northern Kentucky Chamber of Commerce Board of Directors; Vice Chair of Business Advocacy for the Northern Kentucky Chamber; 2008 Graduate of Leadership Kentucky; 2006 Graduate of Leadership Northern Kentucky; President of the Northern Kentucky International Trade Association; Treasurer and Board Member of the Welcome House of Northern Kentucky; United Way representative for Fifth Third Bank; Governor's Council on International Education for State of Kentucky; World Affairs Council, Japanese America Society; International Friends and Visitors Council; Small Business Development Committee; guest lecturer at Northern Kentucky University and Thomas More College and several other endeavors.",
      "Greene is a graduate of The Ohio State University. He lives with his wife and family in Newport, Kentucky.",
    ],
  },
  {
    name: 'Madison Walton-Smith',
    role: 'Partner',
    photo: '/assets/team/madison.png',
    bio: [
      'Madison Walton Smith is the Founder and Partner of Strategic Advisers Digital and an award-winning digital advertising and strategic communications executive with more than 15 years of experience developing integrated marketing strategies for organizations ranging from startups to Fortune 100 companies. Throughout her career, she has advised executive leadership teams on digital transformation, audience strategy, public relations, public affairs, and measurable business growth across higher education, manufacturing, healthcare, financial services, government, nonprofit, and consumer industries.',
      "After graduating from Virginia Tech, Madison joined The Trade Desk as one of its earliest employees in New York City during the company's rapid growth. There, she built and led a high-performing media team responsible for managing digital advertising campaigns for WPP, the world's largest advertising agency network, supporting some of the world's most recognizable brands and Fortune 100 companies. This experience provided a deep foundation in programmatic advertising, audience intelligence, large-scale media planning, and data-driven campaign optimization.",
      'Today, Madison leads the strategic vision for Strategic Advisers, partnering directly with executive leadership teams to solve complex marketing and communications challenges. She develops integrated growth strategies that combine digital advertising, public relations, public affairs, media planning, analytics, and performance measurement into campaigns that drive measurable business results. Madison also serves on the Google Ads Advisory Council, where she collaborates with Google on the future of digital advertising and emerging platform capabilities. Through many of her developed partnerships, Strategic Advisers receives exclusive alpha and beta access to many of the newest advertising technologies and innovations, allowing clients to benefit from cutting-edge tools, advanced capabilities, and early access to features often unavailable to the broader market.',
      'Known for combining strategic insight with data-driven decision-making, Madison helps organizations navigate complex challenges, identify new opportunities, and build marketing strategies that create lasting business impact.',
      'Madison lives in Greenville, South Carolina, with her husband and daughter. Outside of work, she enjoys playing tennis, spending time with family, and supporting organizations that strengthen the communities they serve.',
    ],
  },
]
