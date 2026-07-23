import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="sa-footer">
      <div className="sa-container sa-container--wide sa-footer__inner">
        <div className="sa-footer__top">
          <div className="sa-footer__brand">
            <Image
              src="/logos/sa-logo-full-white.png"
              alt="Strategic Advisers"
              width={200}
              height={48}
            />
            <p className="sa-footer__blurb">
              A digital-first communications firm across digital advertising, public
              relations, public affairs, and media strategy.
            </p>
            <Image
              src="/logos/google-partner.png"
              alt="Google Partner"
              width={317}
              height={304}
              className="sa-footer__badge"
            />
          </div>

          <nav className="sa-footer__nav" aria-label="Footer">
            {NAV_LINKS.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
            <Link href="/accessibility">Accessibility</Link>
          </nav>
        </div>

        <div className="sa-footer__bottom">
          <span className="sa-footer__meta">
            © {year} Strategic Advisers. All rights reserved.
          </span>
          <span className="sa-footer__meta">
            Digital Advertising · Public Relations · Public Affairs · Media Strategy
          </span>
        </div>
      </div>
    </footer>
  )
}
