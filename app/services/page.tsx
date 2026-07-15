import type { Metadata } from 'next'
import { PageHero } from '@/components/site/PageHero'
import { ServiceDetail } from '@/components/ui/ServiceDetail'
import { CTASection } from '@/components/ui/CTASection'
import { SERVICE_SECTIONS } from '@/lib/pages-content'

export const metadata: Metadata = {
  title: 'Digital Advertising, PR & Media Services | Strategic Advisers',
  description:
    'Explore digital advertising, media buying, public relations, public affairs, and campaign strategy services from Strategic Advisers.',
}

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Integrated Communications and Media Strategies Built Around Results"
        copy={[
          'Strategic Advisers helps organizations reach targeted audiences, strengthen visibility, manage complex communications, and generate measurable action.',
          'Our services can work independently or as part of an integrated campaign.',
        ]}
      />

      {SERVICE_SECTIONS.map((section, i) => (
        <ServiceDetail key={section.id} section={section} subtle={i % 2 === 1} />
      ))}

      <section className="sa-section" style={{ paddingTop: 0 }}>
        <CTASection
          title="Not Sure Which Services You Need?"
          intro="Tell us what you are trying to accomplish. We will help identify the right mix of strategy, media, and communications support."
        />
      </section>
    </main>
  )
}
