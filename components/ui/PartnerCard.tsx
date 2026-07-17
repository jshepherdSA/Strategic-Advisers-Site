'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import type { Partner } from '@/lib/pages-content'

/** One partner profile on the About page: headshot, name, role, and an expandable bio. */
export function PartnerCard({ partner }: { partner: Partner }) {
  const [open, setOpen] = useState(false)
  const [firstParagraph, ...rest] = partner.bio

  return (
    <article className="sa-partner reveal">
      <div className="sa-partner__photo">
        <Image
          src={partner.photo}
          alt={partner.name}
          fill
          sizes="(max-width: 760px) 100vw, 45vw"
          className="sa-partner__img"
        />
      </div>
      <h3 className="sa-partner__name">{partner.name}</h3>
      <div className="sa-partner__role">{partner.role}</div>

      <div className="sa-partner__bio">
        <p>{firstParagraph}</p>
        {open && rest.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
      </div>

      {rest.length > 0 && (
        <button
          type="button"
          className="sa-partner__toggle"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Read less' : 'Read more'}
          <ChevronDown
            className={open ? 'sa-partner__toggle-icon is-open' : 'sa-partner__toggle-icon'}
            size={16}
            aria-hidden
          />
        </button>
      )}
    </article>
  )
}
