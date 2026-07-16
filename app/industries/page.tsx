import type { Metadata } from 'next'
import { PageHero } from '@/components/site/PageHero'
import { IndustryDetailCard } from '@/components/ui/IndustryDetailCard'
import { CTASection } from '@/components/ui/CTASection'
import { INDUSTRY_DETAILS } from '@/lib/pages-content'

export const metadata: Metadata = {
  title: 'Industries We Serve | Strategic Advisers',
  description:
    'Strategic Advisers provides digital advertising, public relations, public affairs, and media strategy for higher education, manufacturing, e-commerce, healthcare, financial institutions, and more.',
}

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Industries"
        title="Strategic Experience Across Complex Industries"
        copy={[
          'Different industries require different audiences, messages, timelines, and measures of success.',
          "Strategic Advisers brings cross-industry experience while building every campaign around the client's specific market, goals, and audience.",
        ]}
        media
      />

      <section className="sa-section">
        <div className="sa-container">
          <div className="sa-ind-grid">
            {INDUSTRY_DETAILS.map((industry) => (
              <IndustryDetailCard key={industry.name} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <section className="sa-section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <CTASection
          title="Your Industry Is Only Part of the Strategy"
          intro="The strongest campaigns are built around your specific audience, goals, competition, and market—not a generic industry template."
          primaryLabel="Talk to Our Team"
        />
      </section>
    </main>
  )
}
