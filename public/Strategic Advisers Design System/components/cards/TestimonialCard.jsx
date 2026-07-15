import React from 'react';

/**
 * Strategic Advisers — TestimonialCard
 * A client quote with attribution. Large mono quote mark, measured serif-free
 * quote, and a navy attribution row. Two tones: light card or navy panel.
 */
export function TestimonialCard({ quote, name, role, org, tone = 'light', style, ...rest }) {
  const onNavy = tone === 'navy';
  return (
    <figure
      style={{
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        background: onNavy ? 'var(--navy-800)' : 'var(--surface-card)',
        borderRadius: 'var(--radius-lg)',
        padding: '36px 34px',
        boxShadow: onNavy ? 'var(--shadow-block-red)' : 'var(--shadow-sm)',
        ...style,
      }}
      {...rest}
    >
      <span aria-hidden style={{ fontFamily: 'var(--font-display)', fontSize: '56px', lineHeight: 0.6, height: '30px', color: onNavy ? 'var(--red-400)' : 'var(--red-600)' }}>&ldquo;</span>
      <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '20px', lineHeight: 1.45, letterSpacing: '-0.01em', color: onNavy ? '#fff' : 'var(--navy-900)' }}>
        {quote}
      </blockquote>
      <figcaption style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: 'auto', paddingTop: '4px' }}>
        <span style={{ width: '36px', height: '2px', background: onNavy ? 'var(--red-400)' : 'var(--red-700)' }} />
        <span>
          <span style={{ display: 'block', fontWeight: 600, fontSize: '15px', color: onNavy ? '#fff' : 'var(--navy-900)' }}>{name}</span>
          {(role || org) && (
            <span style={{ display: 'block', fontSize: '13px', color: onNavy ? 'var(--navy-200)' : 'var(--text-muted)', marginTop: '2px' }}>
              {role}{role && org ? ', ' : ''}{org}
            </span>
          )}
        </span>
      </figcaption>
    </figure>
  );
}
