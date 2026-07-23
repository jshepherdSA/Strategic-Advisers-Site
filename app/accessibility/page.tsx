import type { Metadata } from 'next'
import { LegalDoc } from '@/components/site/LegalDoc'
import {
  ACCESSIBILITY,
  ACCESSIBILITY_TITLE,
  ACCESSIBILITY_UPDATED,
} from '@/lib/accessibility'

export const metadata: Metadata = {
  title: 'Accessibility Statement | Strategic Advisers',
  description:
    "Strategic Advisers LLC's commitment to digital accessibility, the practices we follow, and how to request assistance or report an accessibility barrier.",
}

export default function AccessibilityPage() {
  return (
    <LegalDoc
      title={ACCESSIBILITY_TITLE}
      updated={ACCESSIBILITY_UPDATED}
      blocks={ACCESSIBILITY}
    />
  )
}
