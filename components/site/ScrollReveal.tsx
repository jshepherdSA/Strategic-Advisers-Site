'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * One uniform low-travel reveal recipe (the signature move the teardowns
 * found reused across award-winning sites): elements marked `.reveal` fade
 * and rise into place as they enter the viewport. A single shared observer
 * handles every element on the page.
 *
 * Reveals by toggling a `data-shown` attribute rather than a class: React
 * does not manage that attribute, so it survives re-renders (a class added
 * with classList would be stripped when the page re-renders on navigation).
 * The observer is re-created on every route change so client-navigated pages
 * reveal correctly.
 */
export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.setAttribute('data-shown', ''))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-shown', '')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    )

    els.forEach((el) => {
      if (!el.hasAttribute('data-shown')) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
