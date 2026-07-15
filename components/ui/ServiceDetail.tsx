import { Eyebrow } from './Eyebrow'
import { Button } from './Button'
import type { ServiceSection } from '@/lib/pages-content'

/** One service section on the Services page: description + "Services Include" list. */
export function ServiceDetail({
  section,
  subtle,
}: {
  section: ServiceSection
  subtle?: boolean
}) {
  return (
    <section id={section.id} className={subtle ? 'sa-section sa-section--subtle' : 'sa-section'}>
      <div className="sa-container">
        <div className="sa-svc">
          <div className="sa-svc__head reveal">
            <div className="sa-svc__eyebrow">
              <Eyebrow>{section.index}</Eyebrow>
            </div>
            <h2 className="sa-svc__title">{section.title}</h2>
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className="sa-svc__copy">
                {paragraph}
              </p>
            ))}
            {section.ctaLabel && (
              <div className="sa-svc__cta">
                <Button variant="primary" href="/contact">
                  {section.ctaLabel}
                </Button>
              </div>
            )}
          </div>

          <div className="sa-svc__aside reveal">
            <div className="sa-svc__aside-h">Services Include</div>
            <ul className="sa-svc__items">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
