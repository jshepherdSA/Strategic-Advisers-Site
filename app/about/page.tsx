import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/site/PageHero'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CTASection } from '@/components/ui/CTASection'
import { ABOUT_STORY, DIFFERENTIATORS, VALUES } from '@/lib/pages-content'

export const metadata: Metadata = {
  title: 'About Strategic Advisers | Digital Advertising & PR Firm',
  description:
    'Learn about Strategic Advisers, a digital advertising, public relations, public affairs, and media strategy firm based in Newport, Kentucky.',
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="Strategy, Storytelling and Media Working Together"
        copy={[
          'Strategic Advisers helps organizations communicate clearly, reach the right audiences, and turn strategy into action.',
          'Our firm combines the storytelling discipline of journalism and public relations with the precision, targeting, and measurement of modern digital advertising.',
        ]}
        media
      />

      {/* Our Story */}
      <section className="sa-section">
        <div className="sa-container">
          <div className="sa-positioning">
            <div className="reveal">
              <div style={{ marginBottom: 18 }}>
                <Eyebrow>About</Eyebrow>
              </div>
              <h2 className="sa-positioning__title">Our Story</h2>
              <Image
                src="/logos/sa-logo-full-color.png"
                alt="Strategic Advisers"
                width={240}
                height={108}
                className="sa-about__logo"
              />
            </div>
            <div className="sa-prose reveal">
              {ABOUT_STORY.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="sa-section sa-section--subtle">
        <div className="sa-container">
          <div className="reveal">
            <SectionHeader eyebrow="Approach" title="What Makes Us Different" />
          </div>
          <div className="sa-why">
            {DIFFERENTIATORS.map((item, i) => (
              <div key={item.title} className="sa-why__item reveal">
                <div className="sa-why__index">{String(i + 1).padStart(2, '0')}</div>
                <div className="sa-why__title">{item.title}</div>
                <p className="sa-why__copy">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="sa-section">
        <div className="sa-container">
          <div className="reveal">
            <SectionHeader eyebrow="Principles" title="Our Values" />
          </div>
          <div className="sa-values">
            {VALUES.map((value, i) => (
              <div key={value} className="sa-value reveal">
                <span className="sa-value__index">{String(i + 1).padStart(2, '0')}</span>
                <span className="sa-value__name">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sa-section" style={{ paddingTop: 0 }}>
        <CTASection
          title="Looking for a Strategic Partner?"
          intro="Let's talk about where your organization is going and how Strategic Advisers can help you get there."
          primaryLabel="Start a Conversation"
        />
      </section>
    </main>
  )
}
