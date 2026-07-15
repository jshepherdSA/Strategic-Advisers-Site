import React from 'react';
import { Button } from '../core/Button.jsx';
import { Eyebrow } from '../core/Eyebrow.jsx';

/**
 * Strategic Advisers — CTASection
 * The strong closing call-to-action band. Deep navy with the brand mark motif,
 * a large headline and one or two buttons. The signature end-of-page moment.
 */
export function CTASection({ eyebrow = 'Get started', title, intro, primaryLabel = 'Start a conversation', primaryHref = '#', secondaryLabel, secondaryHref, markSrc, style, ...rest }) {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--navy-800)',
        borderRadius: 'var(--radius-xl)',
        padding: 'clamp(3rem, 6vw, 5.5rem)',
        ...style,
      }}
      {...rest}
    >
      {markSrc && (
        <img src={markSrc} alt="" aria-hidden style={{ position: 'absolute', right: '-60px', top: '50%', transform: 'translateY(-50%)', width: '380px', height: '380px', objectFit: 'contain', opacity: 0.10, pointerEvents: 'none' }} />
      )}
      <div style={{ position: 'relative', maxWidth: '660px' }}>
        {eyebrow && <div style={{ marginBottom: '20px' }}><Eyebrow color="on-navy">{eyebrow}</Eyebrow></div>}
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#fff', margin: 0, textWrap: 'balance' }}>{title}</h2>
        {intro && <p style={{ margin: '22px 0 0', fontSize: '19px', lineHeight: 1.6, color: 'var(--navy-100)', maxWidth: '540px' }}>{intro}</p>}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '36px' }}>
          <Button variant="primary" size="lg" href={primaryHref}>{primaryLabel}</Button>
          {secondaryLabel && <Button variant="on-navy" size="lg" href={secondaryHref || '#'}>{secondaryLabel}</Button>}
        </div>
      </div>
    </section>
  );
}
