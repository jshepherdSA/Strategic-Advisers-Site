import { Target, Radio, Newspaper, Landmark, LineChart, type LucideIcon } from 'lucide-react'
import type { ServiceIcon } from '@/lib/content'

const ICONS: Record<ServiceIcon, LucideIcon> = {
  target: Target,
  radio: Radio,
  newspaper: Newspaper,
  landmark: Landmark,
  'line-chart': LineChart,
}

/** Shared service icon glyph — used by the homepage cards and the Services page sections. */
export function ServiceGlyph({
  icon,
  size = 26,
  strokeWidth = 1.75,
}: {
  icon: ServiceIcon
  size?: number
  strokeWidth?: number
}) {
  const Icon = ICONS[icon]
  return <Icon size={size} strokeWidth={strokeWidth} />
}
