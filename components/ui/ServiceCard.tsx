import type { Service } from '@/lib/content'
import { ServiceGlyph } from './ServiceGlyph'

export function ServiceCard({
  service,
  className,
  style,
}: {
  service: Service
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <a
      href={service.href}
      className={className ? `sa-service-card ${className}` : 'sa-service-card'}
      style={style}
    >
      <span className="sa-service-card__icon">
        <ServiceGlyph icon={service.icon} size={26} />
      </span>
      <div>
        <h3 className="sa-service-card__title">{service.title}</h3>
        <p className="sa-service-card__desc">{service.desc}</p>
      </div>
      <span className="sa-service-card__link">
        {service.buttonLabel} <span aria-hidden>→</span>
      </span>
    </a>
  )
}
