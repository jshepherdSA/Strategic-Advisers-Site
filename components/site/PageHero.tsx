import { ImageIcon } from 'lucide-react'
import { Eyebrow } from '@/components/ui/Eyebrow'

/**
 * Interior page hero — eyebrow + large H1 + intro copy on the navy-tinted band.
 * With `media`, adds a placeholder image slot on the right (swap for real
 * agency/campaign photography).
 */
export function PageHero({
  eyebrow,
  title,
  copy,
  media = false,
}: {
  eyebrow?: string
  title: string
  copy: string[]
  media?: boolean
}) {
  return (
    <section className="sa-hero">
      <div className="sa-container sa-container--wide">
        <div className={media ? 'sa-pagehero sa-pagehero--split' : 'sa-pagehero'}>
          <div className="sa-pagehero__content">
            {eyebrow && (
              <div className="reveal" style={{ marginBottom: 20 }}>
                <Eyebrow>{eyebrow}</Eyebrow>
              </div>
            )}
            <h1 className="sa-pagehero__title reveal">{title}</h1>
            {copy.map((paragraph, i) => (
              <p key={i} className="sa-pagehero__copy reveal">
                {paragraph}
              </p>
            ))}
          </div>

          {media && (
            <div className="sa-pagehero__media reveal" aria-hidden>
              <ImageIcon size={40} strokeWidth={1.5} className="sa-pagehero__media-icon" />
              <span className="sa-pagehero__media-label">Hero image</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
