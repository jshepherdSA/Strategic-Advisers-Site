import Image from 'next/image'
import { Eyebrow } from './Eyebrow'
import { Button } from './Button'
import { CTA_LABEL, CTA_HREF } from '@/lib/content'

export function CTASection({
  eyebrow = 'Get started',
  title,
  intro,
  primaryLabel = CTA_LABEL,
  primaryHref = CTA_HREF,
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow?: string
  title: string
  intro?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}) {
  return (
    <div className="sa-cta reveal">
      <Image
        src="/logos/sa-mark-color.png"
        alt=""
        aria-hidden
        width={380}
        height={380}
        className="sa-cta__mark"
      />
      <div className="sa-cta__inner">
        <div className="sa-cta__body">
          <div className="sa-cta__eyebrow">
            <Eyebrow tone="on-navy">{eyebrow}</Eyebrow>
          </div>
          <h2 className="sa-cta__title">{title}</h2>
          {intro && <p className="sa-cta__intro">{intro}</p>}
          <div className="sa-cta__actions">
            <Button variant="primary" size="lg" href={primaryHref}>
              {primaryLabel}
            </Button>
            {secondaryLabel && (
              <Button variant="on-navy" size="lg" href={secondaryHref || CTA_HREF}>
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
