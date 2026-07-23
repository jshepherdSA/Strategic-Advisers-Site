'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'sa-cookie-consent'

/**
 * First-visit cookie consent banner. Fixed to the bottom, non-blocking, and
 * dismissed by either choice. The choice is stored in localStorage so the
 * banner does not reappear.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
    } catch {
      // localStorage unavailable (e.g. privacy mode) — show once, don't persist.
      setVisible(true)
    }
  }, [])

  const choose = (choice: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(STORAGE_KEY, choice)
    } catch {
      /* ignore write failures */
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="sa-cookie" role="dialog" aria-label="Cookie notice">
      <div className="sa-cookie__inner">
        <p className="sa-cookie__text">
          We use cookies to operate our site, analyze traffic, and support advertising. See our{' '}
          <Link href="/cookie-policy" className="sa-cookie__link">
            Cookie Policy
          </Link>{' '}
          for details.
        </p>
        <div className="sa-cookie__actions">
          <button
            type="button"
            className="sa-btn sa-btn--on-navy sa-btn--sm"
            onClick={() => choose('declined')}
          >
            Decline
          </button>
          <button
            type="button"
            className="sa-btn sa-btn--primary sa-btn--sm"
            onClick={() => choose('accepted')}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
