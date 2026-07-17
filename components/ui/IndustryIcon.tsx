import {
  GraduationCap,
  Factory,
  ShoppingBag,
  HeartPulse,
  Landmark,
  Megaphone,
  House,
  MapPin,
  Building2,
  Zap,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import type { IndustryIcon as IndustryIconKey } from '@/lib/content'

const ICONS: Record<IndustryIconKey, LucideIcon> = {
  'graduation-cap': GraduationCap,
  factory: Factory,
  'shopping-bag': ShoppingBag,
  'heart-pulse': HeartPulse,
  landmark: Landmark,
  megaphone: Megaphone,
  house: House,
  'map-pin': MapPin,
  'building-2': Building2,
  zap: Zap,
  sparkles: Sparkles,
}

export function IndustryIcon({
  icon,
  size = 20,
  strokeWidth = 1.75,
}: {
  icon: IndustryIconKey
  size?: number
  strokeWidth?: number
}) {
  const Icon = ICONS[icon]
  return <Icon size={size} strokeWidth={strokeWidth} />
}
