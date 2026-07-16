import { IndustryIcon } from './IndustryIcon'
import type { HomeIndustry } from '@/lib/content'

export function IndustryTile({
  industry,
  href = '/industries',
  className,
  style,
}: {
  industry: HomeIndustry
  href?: string
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <a
      href={href}
      className={className ? `sa-industry-tile ${className}` : 'sa-industry-tile'}
      style={style}
    >
      <span className="sa-industry-tile__badge">
        <IndustryIcon icon={industry.icon} size={20} />
      </span>
      <span className="sa-industry-tile__label">{industry.label}</span>
    </a>
  )
}
