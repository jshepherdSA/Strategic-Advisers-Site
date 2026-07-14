import React from 'react';

/**
 * Strategic Advisers — IndustryCard
 * Image-forward card for an industry / sector the agency serves. A full-bleed
 * image (or navy fallback) with a gradient scrim and label pinned to the base.
 */
export function IndustryCard({ label, count, image, href, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href || '#'}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        display: 'block',
        aspectRatio: '3 / 4',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        textDecoration: 'none',
        background: 'var(--navy-700)',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transition: 'box-shadow var(--dur-base) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {image && (
        <img
          src={image}
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transform: hover ? 'scale(1.06)' : 'scale(1)', transition: 'transform var(--dur-slow) var(--ease-out)', filter: 'saturate(0.85)' }}
        />
      )}
      <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(16,26,53,0.10) 0%, rgba(16,26,53,0.30) 45%, rgba(16,26,53,0.88) 100%)' }} />
      <span style={{ position: 'absolute', top: 0, left: 0, height: '4px', width: hover ? '100%' : '0%', background: 'var(--red-600)', transition: 'width var(--dur-base) var(--ease-out)' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '24px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '12px' }}>
        <div>
          {count && <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.06em', color: 'var(--red-300)', marginBottom: '6px' }}>{count}</div>}
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '21px', color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.15 }}>{label}</div>
        </div>
        <span style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.4)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', background: hover ? 'var(--red-700)' : 'transparent', borderColor: hover ? 'var(--red-700)' : 'rgba(255,255,255,0.4)', transition: 'all var(--dur-base) var(--ease-out)' }}>→</span>
      </div>
    </a>
  );
}
