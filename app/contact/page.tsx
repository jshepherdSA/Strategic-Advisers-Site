import type { Metadata } from 'next'
import { PageHero } from '@/components/site/PageHero'
import { ContactForm } from '@/components/site/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Strategic Advisers',
  description:
    'Contact Strategic Advisers to discuss digital advertising, public relations, public affairs, media buying, and integrated campaign strategy.',
}

const STEPS = [
  'Share your goals, your audience, and the challenge you are trying to solve.',
  'We recommend the right mix of strategy, media, and communications support.',
  'A senior strategist follows up to map out the best next step.',
]

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
        <div className="sa-container">
          <div className="sa-contact">
            <div className="sa-contact__aside reveal">
              <h2 className="sa-contact__aside-h">What happens next</h2>
              <ol className="sa-contact__points">
                {STEPS.map((step, i) => (
                  <li key={i}>
                    <span className="n">{`0${i + 1}`}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
              <div className="sa-contact__loc">
                <div className="sa-contact__loc-h">Where we are</div>
                <div className="sa-contact__loc-v">Newport, Kentucky</div>
              </div>
            </div>

            <div className="reveal">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
