import type { Metadata } from 'next'
import { LegalDoc } from '@/components/site/LegalDoc'
import {
  PRIVACY_POLICY,
  PRIVACY_POLICY_TITLE,
  PRIVACY_POLICY_UPDATED,
} from '@/lib/privacy-policy'

export const metadata: Metadata = {
  title: 'Privacy Policy | Strategic Advisers',
  description:
    'How Strategic Advisers LLC collects, uses, discloses, and protects personal information, and the privacy rights available to you.',
}

export default function PrivacyPolicyPage() {
  return (
    <LegalDoc
      title={PRIVACY_POLICY_TITLE}
      updated={PRIVACY_POLICY_UPDATED}
      blocks={PRIVACY_POLICY}
    />
  )
}
