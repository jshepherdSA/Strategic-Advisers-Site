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

  return (
    <header className="sa-nav">
      <div className="sa-container sa-container--wide sa-nav__inner">
        <Link href="/" className="sa-nav__logo" aria-label="Strategic Advisers home">
          <Image
            src="/logos/sa-logo-full-color.png"
            alt="Strategic Advisers"
            width={125}
            height={56}
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
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
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
