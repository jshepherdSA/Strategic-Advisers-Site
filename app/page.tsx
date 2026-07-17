import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { IndustryTile } from '@/components/ui/IndustryTile'
import { CTASection } from '@/components/ui/CTASection'
import { HeroLearnMore } from '@/components/site/HeroLearnMore'
import { SERVICES, INDUSTRIES, WHY_POINTS, HERO_CHANNELS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Digital Advertising, PR & Media Strategy | Strategic Advisers',
  description:
    'Strategic Advisers is a digital advertising, public relations, public affairs, and media strategy firm helping organizations reach targeted audiences and drive measurable results.',
}

const delay = (ms: number) => ({ '--reveal-delay': `${ms}ms` }) as React.CSSProperties

export default function Home() {
  return (
    <main>
      {/* Section 1 — Hero */}
      <section className="sa-hero">
        <div className="sa-container sa-container--wide sa-hero__grid">
          <div>
            <div className="sa-hero__eyebrow reveal">
              <Eyebrow>Digital Advertising · PR · Public Affairs · Media</Eyebrow>
            </div>
            <h1 className="sa-hero__title reveal" style={delay(80)}>
              Digital Advertising,
              <br />
              Public Relations
              <br />
              &amp; Public Affairs
              <span className="sa-hero__title-sub">Built to Move People to Action</span>
            </h1>
            <p className="sa-hero__lead reveal" style={delay(160)}>
              Strategic Advisers helps organizations reach the right audiences, tell
              stronger stories, and turn visibility into measurable results.
            </p>
            <p className="sa-hero__copy reveal" style={delay(200)}>
              We build integrated campaigns across digital advertising, public relations,
              public affairs, and traditional media. From programmatic advertising and
              Google Search to media relations, issue advocacy, billboards, radio, and
              television, we help clients put the right message in the right place at the
              right time.
            </p>
            <div className="sa-hero__actions reveal" style={delay(260)}>
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                iconRight={<ArrowRight size={18} />}
              >
                Schedule a Discovery Call
              </Button>
              <Button variant="outline" size="lg" href="/services">
                Explore Our Services
              </Button>
            </div>
          </div>

          <div className="sa-hero__collage reveal" style={delay(220)}>
            <div className="sa-hero__col sa-hero__col--left">
              <div className="sa-hero__feature">
                <div className="sa-hero__feature-title">
                  One team.
                  <br />
                  One strategy.
                  <br />
                  Every channel.
                </div>
                <p className="sa-hero__feature-sub">
                  Integrated campaigns across paid, earned &amp; owned media.
                </p>
              </div>

              <div className="sa-hero__tile">
                <ul className="sa-hero__channels">
                  {HERO_CHANNELS.map((channel) => (
                    <li key={channel}>{channel}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="sa-hero__col sa-hero__col--right">
              <Link href="/about" className="sa-hero__markbox" aria-label="About Strategic Advisers">
                <Image
                  src="/logos/sa-mark-color.png"
                  alt="Strategic Advisers"
                  width={100}
                  height={100}
                  className="sa-hero__mark"
                />
              </Link>

              <div className="sa-hero__logos">
                <span>
                  <Image src="/logos/dsp/google.webp" alt="Google" width={100} height={100} />
                </span>
                <span>
                  <Image src="/logos/dsp/googleads.png" alt="Google Ads" width={100} height={91} />
                </span>
                <span>
                  <Image src="/logos/dsp/meta.png" alt="Meta" width={140} height={93} />
                </span>
                <span>
                  <Image src="/logos/dsp/tradedesk.png" alt="The Trade Desk" width={100} height={100} />
                </span>
              </div>

              <HeroLearnMore />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Positioning */}
      <section className="sa-section">
        <div className="sa-container">
          <div className="sa-positioning">
            <div className="reveal">
              <div style={{ marginBottom: 18 }}>
                <Eyebrow>Positioning</Eyebrow>
              </div>
              <h2 className="sa-positioning__title">A Digital-First Communications Firm</h2>
            </div>
            <div className="reveal" style={delay(120)}>
              <p className="sa-positioning__lead">
                The media landscape has changed. Your strategy should too.
              </p>
              <p className="sa-positioning__copy">
                Strategic Advisers combines the precision of digital advertising, the
                credibility of public relations, the strategic thinking of public affairs,
                and the reach of traditional media to help organizations compete in complex
                and crowded markets.
              </p>
              <p className="sa-positioning__copy">
                We build campaigns around audience behavior, business goals, message
                clarity, and measurable performance, not generic marketing packages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Services Overview */}
      <section id="services" className="sa-section sa-section--subtle">
        <div className="sa-container">
          <div className="reveal">
            <SectionHeader eyebrow="Services" title="What We Do" />
          </div>
          <div className="sa-grid-2">
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={service.title}
                service={service}
                className="reveal"
                style={delay((i % 2) * 90)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Industries */}
      <section id="industries" className="sa-section">
        <div className="sa-container">
          <div className="reveal">
            <SectionHeader
              eyebrow="Industries"
              title="Experience Across Complex and Competitive Industries"
              intro="Strategic Advisers works with organizations that have complex audiences, competitive markets, long sales cycles, public-facing challenges, or high expectations for measurable results."
              action={
                <Button variant="outline" href="/industries">
                  View Industries
                </Button>
              }
            />
          </div>
          <div className="sa-grid-industries">
            {INDUSTRIES.map((industry, i) => (
              <IndustryTile
                key={industry.label}
                industry={industry}
                className="reveal"
                style={delay((i % 4) * 70)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Why Strategic Advisers */}
      <section id="why" className="sa-section sa-section--subtle">
        <div className="sa-container">
          <div className="reveal">
            <SectionHeader
              eyebrow="Why Strategic Advisers"
              title="Strategy That Connects Every Channel"
            />
          </div>
          <div className="sa-why">
            {WHY_POINTS.map((point, i) => (
              <div key={point.title} className="sa-why__item reveal" style={delay((i % 3) * 80)}>
                <div className="sa-why__index">{String(i + 1).padStart(2, '0')}</div>
                <div className="sa-why__title">{point.title}</div>
                <p className="sa-why__copy">{point.copy}</p>
              </div>
            ))}
          </div>
          <p className="sa-why__close reveal">
            We partner with clients that need a responsive, strategic, and results-focused
            team to help them reach their audience and move their goals forward.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="sa-section sa-section--cta">
        <CTASection
          eyebrow="Get started"
          title="Give Us Your Challenge, Expect the Solution."
          intro="Let's talk about your goals, your audience, and the best way to move people to action."
        />
      </section>
    </main>
  )
}
