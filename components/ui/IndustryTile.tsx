import { ArrowUpRight } from 'lucide-react'

export function IndustryTile({
  label,
  href = '/industries',
  className,
  style,
}: {
  label: string
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
      <span className="sa-industry-tile__label">{label}</span>
      <span className="sa-industry-tile__arrow" aria-hidden>
        <ArrowUpRight size={18} />
      </span>
    </a>
  )
}
