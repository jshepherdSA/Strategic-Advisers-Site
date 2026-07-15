import { Target, Radio, Newspaper, Landmark, type LucideIcon } from 'lucide-react'
import type { Service, ServiceIcon } from '@/lib/content'

const ICONS: Record<ServiceIcon, LucideIcon> = {
  target: Target,
  radio: Radio,
  newspaper: Newspaper,
  landmark: Landmark,
}

export function ServiceCard({
  service,
  className,
  style,
}: {
  service: Service
  className?: string
  style?: React.CSSProperties
}) {
  const Icon = ICONS[service.icon]
  return (
    <a
      href={service.href}
      className={className ? `sa-service-card ${className}` : 'sa-service-card'}
      style={style}
    >
      <span className="sa-service-card__icon">
        <Icon size={26} strokeWidth={1.75} />
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
