import type { Metadata } from 'next'
import { Jost, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from '@/components/site/SmoothScroll'
import { ScrollReveal } from '@/components/site/ScrollReveal'
import { NavBar } from '@/components/site/NavBar'
import { Footer } from '@/components/site/Footer'
import { CookieBanner } from '@/components/site/CookieBanner'

// Display: Jost (geometric sans, closest Google match to the wordmark).
// Body/UI: IBM Plex Sans. Data/labels: IBM Plex Mono.
// NOTE: fonts are brand stand-ins — swap for the licensed brand faces.
const display = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const body = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Strategic Advisers',
  description:
    'Strategic Advisers is a digital advertising, public relations, public affairs, and media strategy firm helping organizations reach targeted audiences and drive measurable results.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        {/* Progressive enhancement: reveal all content if JS never runs */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <SmoothScroll />
        <ScrollReveal />
        <NavBar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
