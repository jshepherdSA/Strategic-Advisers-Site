import { IndustryIcon } from './IndustryIcon'
import type { IndustryDetail } from '@/lib/pages-content'

/** One industry block on the Industries page. */
export function IndustryDetailCard({ industry }: { industry: IndustryDetail }) {
  return (
    <article className="sa-ind-card reveal">
      <div className="sa-ind-card__head">
        <span className="sa-ind-card__badge">
          <IndustryIcon icon={industry.icon} size={22} />
        </span>
        <span className="sa-ind-card__index">{industry.index}</span>
      </div>
      <h3 className="sa-ind-card__title">{industry.name}</h3>
      <p className="sa-ind-card__desc">{industry.description}</p>
      {industry.services && <p className="sa-ind-card__services">{industry.services}</p>}
    </article>
  )
}
