import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';

/**
 * Strategic Advisers — SectionHeader
 * Eyebrow + large headline + optional intro. The consistent opener for every
 * page section. Left or center aligned; light or on-navy tone.
 */
export function SectionHeader({ eyebrow, title, intro, align = 'left', tone = 'light', maxWidth = '640px', action, style, ...rest }) {
  const onNavy = tone === 'on-navy';
  const centered = align === 'center';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: action && !centered ? 'row' : 'column',
        alignItems: action && !centered ? 'flex-end' : centered ? 'center' : 'flex-start',
        justifyContent: 'space-between',
        gap: '24px',
        textAlign: centered ? 'center' : 'left',
        ...style,
      }}
      {...rest}
    >
      <div style={{ maxWidth: centered ? maxWidth : undefined, marginInline: centered ? 'auto' : undefined }}>
        {eyebrow && <div style={{ marginBottom: '18px', display: 'flex', justifyContent: centered ? 'center' : 'flex-start' }}><Eyebrow color={onNavy ? 'on-navy' : 'accent'}>{eyebrow}</Eyebrow></div>}
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: onNavy ? '#fff' : 'var(--navy-900)', margin: 0, maxWidth: !centered ? maxWidth : undefined, textWrap: 'balance' }}>{title}</h2>
        {intro && <p style={{ margin: '20px 0 0', fontSize: '18px', lineHeight: 1.6, color: onNavy ? 'var(--navy-100)' : 'var(--text-muted)', maxWidth: maxWidth, marginInline: centered ? 'auto' : undefined }}>{intro}</p>}
      </div>
      {action && <div style={{ flexShrink: 0 }}>{action}</div>}
    </div>
  );
}
