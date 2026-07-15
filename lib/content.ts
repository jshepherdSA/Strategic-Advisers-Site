// Strategic Advisers — site content (Phase One).
// Structured copy in use by the app. Full verbatim brief lives in
// reference/phase-one-content.tsx.

export const CTA_LABEL = 'Schedule a Strategy Call'
export const CTA_HREF = '/contact'

export type NavLink = { label: string; href: string }

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export type ServiceIcon = 'target' | 'radio' | 'newspaper' | 'landmark'

export type Service = {
  icon: ServiceIcon
  title: string
  desc: string
  buttonLabel: string
  href: string
}

export const SERVICES: Service[] = [
  {
    icon: 'target',
    title: 'Digital Advertising',
    desc: 'Reach targeted audiences through programmatic advertising, Google Search, paid social, CTV, streaming audio, geofencing, retargeting, CRM targeting, and measurable campaign optimization.',
    buttonLabel: 'Explore Digital Advertising',
    href: '/services#digital-advertising',
  },
  {
    icon: 'radio',
    title: 'Media Strategy & Buying',
    desc: 'Plan and coordinate digital and traditional media placements, including billboards, radio, television, print, sponsorships, and integrated campaign buys.',
    buttonLabel: 'Explore Media Strategy',
    href: '/services#media-strategy',
  },
  {
    icon: 'newspaper',
    title: 'Public Relations',
    desc: 'Build visibility and credibility through media relations, press announcements, executive positioning, crisis communications, reputation management, and content strategy.',
    buttonLabel: 'Explore Public Relations',
    href: '/services#public-relations',
  },
  {
    icon: 'landmark',
    title: 'Public Affairs',
    desc: 'Communicate complex issues, educate audiences, engage stakeholders, and build public support through advocacy, awareness, and community-focused campaigns.',
    buttonLabel: 'Explore Public Affairs',
    href: '/services#public-affairs',
  },
]

export const INDUSTRIES: string[] = [
  'Higher Education',
  'Manufacturing & Industrial',
  'E-Commerce & Consumer Brands',
  'Healthcare & Nonprofits',
  'Financial Institutions',
  'Public Sector & Advocacy',
  'Housing & Community Development',
  'Regional & Multi-Location Businesses',
]

export type WhyPoint = { title: string; copy: string }

export const WHY_POINTS: WhyPoint[] = [
  {
    title: 'Integrated Campaigns',
    copy: 'We connect digital advertising, traditional media, public relations, content, and stakeholder communications.',
  },
  {
    title: 'Senior-Level Thinking',
    copy: 'Clients work with experienced strategists who understand both high-level planning and day-to-day execution.',
  },
  {
    title: 'Audience Precision',
    copy: 'We use data, targeting, market insight, and message strategy to help clients reach the people who matter most.',
  },
  {
    title: 'Transparent Reporting',
    copy: 'Our reporting explains what happened, why it happened, and what should happen next.',
  },
  {
    title: 'Flexible Support',
    copy: 'We can lead a complete campaign or strengthen an existing internal marketing and communications team.',
  },
]

// Channels shown in the hero capabilities panel (reinforces the integrated,
// multi-channel offering without stock photography).
export const HERO_CHANNELS: string[] = [
  'Programmatic',
  'Google Search',
  'Paid Social',
  'CTV & Streaming',
  'Radio & Audio',
  'Television',
  'Billboards / OOH',
  'Earned Media',
]
