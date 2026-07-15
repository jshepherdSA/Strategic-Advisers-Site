import { Eyebrow } from '@/components/ui/Eyebrow'

/** Interior page hero — eyebrow + large H1 + intro copy on the navy-tinted band. */
export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow?: string
  title: string
  copy: string[]
}) {
  return (
    <section className="sa-hero">
      <div className="sa-container sa-container--wide">
        <div className="sa-pagehero">
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
      </div>
    </section>
  )
}
