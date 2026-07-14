// Content for the Strategic Advisers website UI kit.
// Imagery uses Unsplash placeholders — swap for licensed agency/campaign photography.
const SA_SERVICES = [
  { icon: 'megaphone', title: 'Public Relations', desc: 'Earned media, media training and message discipline that holds up under scrutiny.', tags: ['Media Relations', 'Media Training', 'Announcements'] },
  { icon: 'monitor-play', title: 'Digital Media', desc: 'Paid, social and content programs that reach the right audiences and prove ROI.', tags: ['Paid Social', 'Content', 'Analytics'] },
  { icon: 'landmark', title: 'Public Affairs', desc: 'Government relations, advocacy and coalition-building at every level of government.', tags: ['Advocacy', 'Coalitions', 'Grassroots'] },
  { icon: 'shield-alert', title: 'Crisis Communications', desc: 'Rapid-response counsel and reputation management when the stakes are highest.', tags: ['Rapid Response', 'Reputation', 'Litigation'] },
  { icon: 'pen-tool', title: 'Brand & Content', desc: 'Positioning, messaging and creative that make a complex story impossible to ignore.', tags: ['Messaging', 'Creative', 'Narrative'] },
  { icon: 'line-chart', title: 'Research & Insights', desc: 'Polling, message testing and audience research that ground every decision in data.', tags: ['Polling', 'Message Testing', 'Data'] },
];

const SA_INDUSTRIES = [
  { label: 'Energy & Utilities', count: '40+ CAMPAIGNS', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&q=80' },
  { label: 'Healthcare', count: '32 CLIENTS', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=80' },
  { label: 'Government', count: 'FEDERAL & STATE', image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=700&q=80' },
  { label: 'Financial Services', count: '25 CLIENTS', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80' },
  { label: 'Technology', count: 'STARTUP TO SCALE', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80' },
  { label: 'Nonprofit & Advocacy', count: '60+ MISSIONS', image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=700&q=80' },
];

const SA_STATS = [
  { value: '25+', label: 'Years of counsel', sublabel: 'Trusted across four presidential cycles' },
  { value: '150+', label: 'Clients served', sublabel: 'From startups to Fortune 500' },
  { value: '98%', label: 'Earned media reach', sublabel: 'Above-target across 2024 work' },
  { value: '24/7', label: 'Rapid response', sublabel: 'A team on call when it matters' },
];

const SA_NAV = ['Services', 'Industries', 'Our Work', 'Insights', 'About'];

const SA_HERO_IMG = 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1100&q=80';

Object.assign(window, { SA_SERVICES, SA_INDUSTRIES, SA_STATS, SA_NAV, SA_HERO_IMG });
