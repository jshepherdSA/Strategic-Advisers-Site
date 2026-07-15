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
    if (window.__lenis) {
      window.__lenis.scrollTo(target, { offset: -100 })
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
