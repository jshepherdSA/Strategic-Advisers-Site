'use client'

import { ArrowDown } from 'lucide-react'

/**
 * Hero collage "Learn More" tile — scrolls to the "Strategy That Connects
 * Every Channel" section (#why). Uses the Lenis instance when available so the
 * scroll stays smooth, with a native-anchor fallback.
 */
export function HeroLearnMore() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById('why')
    if (!target) return
    e.preventDefault()
    // Land the section top exactly at the bottom of the sticky nav so the
    // previous section is no longer visible.
    const nav = document.querySelector('.sa-nav')
    const navHeight = nav ? nav.getBoundingClientRect().height : 104
    const y = target.getBoundingClientRect().top + window.scrollY - navHeight
    if (window.__lenis) {
      window.__lenis.scrollTo(y)
    } else {
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <a href="#why" onClick={handleClick} className="sa-hero__more">
      <span className="sa-hero__more-label">
        Learn
        <br />
        More
      </span>
      <span className="sa-hero__more-btn" aria-hidden>
        <ArrowDown size={20} strokeWidth={2.5} />
      </span>
    </a>
  )
}
