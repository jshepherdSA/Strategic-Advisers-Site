import type { Metadata } from 'next'
import { PageHero } from '@/components/site/PageHero'
import { JotFormEmbed } from '@/components/site/JotFormEmbed'

export const metadata: Metadata = {
  title: 'Contact Strategic Advisers',
  description:
    'Contact Strategic Advisers to discuss digital advertising, public relations, public affairs, media buying, and integrated campaign strategy.',
}

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About What You Need to Accomplish"
        copy={[
          'Tell us about your organization, your goals, and the challenge you are trying to solve.',
          'Our team will help you identify the right next step.',
        ]}
      />

      <section className="sa-section">
        <div className="sa-container sa-container--narrow">
          <div className="reveal">
            <JotFormEmbed />
          </div>
        </div>
      </section>
    </main>
  )
}
