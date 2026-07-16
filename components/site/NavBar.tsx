'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import { NAV_LINKS, CTA_LABEL, CTA_HREF } from '@/lib/content'

export function NavBar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  // Clicking a nav link for the page you are already on is a no-op for the
  // router, so intercept it and smooth-scroll to the top instead.
  const handleNavClick =
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (href === pathname) {
        e.preventDefault()
        setOpen(false)
        const lenis = window.__lenis
        if (lenis) lenis.scrollTo(0)
        else window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

  return (
    <header className="sa-nav">
      <div className="sa-container sa-container--wide sa-nav__inner">
        <Link
          href="/"
          className="sa-nav__logo"
          aria-label="Strategic Advisers home"
          onClick={handleNavClick('/')}
        >
          <Image
            src="/logos/sa-mark-full-color.png"
            alt=""
            aria-hidden
            width={140}
            height={140}
            className="sa-nav__mark"
            priority
          />
          <Image
            src="/logos/sa-title-color.png"
            alt="Strategic Advisers"
            width={280}
            height={135}
            className="sa-nav__title"
            priority
          />
        </Link>

        <nav className="sa-nav__links" aria-label="Primary">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="sa-nav__link"
              data-active={isActive(item.href)}
              onClick={handleNavClick(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="sa-nav__cta">
          <Link href={CTA_HREF} className="sa-btn sa-btn--primary sa-btn--sm">
            {CTA_LABEL}
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </div>

        <button
          type="button"
          className="sa-nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="sa-nav__mobile">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => {
                handleNavClick(item.href)(e)
                setOpen(false)
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link href={CTA_HREF} className="sa-btn sa-btn--primary" onClick={() => setOpen(false)}>
            {CTA_LABEL}
            <ArrowRight size={18} strokeWidth={2} />
          </Link>
        </div>
      )}
    </header>
  )
}
