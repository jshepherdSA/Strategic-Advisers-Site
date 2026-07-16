'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'

declare global {
  interface Window {
    __lenis?: Lenis
  }
}

/**
 * Lenis smooth scroll — the shared "feel" foundation across all four
 * reference sites. Disabled when the user prefers reduced motion. The
 * instance is exposed on window.__lenis so in-page anchor links can scroll
 * smoothly without fighting Lenis.
 */
export function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      // Tightened from 1.1s: shorter glide + slightly reduced wheel throw so
      // the page tracks input closely and settles fast, with minimal coast.
      duration: 0.8,
      wheelMultiplier: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    window.__lenis = lenis

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      delete window.__lenis
    }
  }, [])

  // Land at the top of every new page. Without this, Lenis keeps the cached
  // scroll target from the previous page and eases back down after Next.js
  // resets the native scroll position. Skip when the URL carries a hash so
  // in-page anchor links still land on their target.
  useEffect(() => {
    if (window.location.hash) return
    const lenis = window.__lenis
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}
