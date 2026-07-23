import type { Metadata } from 'next'
import { LegalDoc } from '@/components/site/LegalDoc'
import {
  COOKIE_POLICY,
  COOKIE_POLICY_TITLE,
  COOKIE_POLICY_UPDATED,
} from '@/lib/cookie-policy'

export const metadata: Metadata = {
  title: 'Cookie Policy | Strategic Advisers',
  description:
    'How Strategic Advisers LLC uses cookies and similar technologies on saprdigital.com.',
}

export default function CookiePolicyPage() {
  return (
    <LegalDoc
      title={COOKIE_POLICY_TITLE}
      updated={COOKIE_POLICY_UPDATED}
      blocks={COOKIE_POLICY}
    />
  )
}
