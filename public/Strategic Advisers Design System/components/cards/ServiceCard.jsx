import React from 'react';

/**
 * Strategic Advisers — ServiceCard
 * A single service offering: icon, title, description, and an optional link row.
 * Squared premium card with a subtle lift and a red accent that reveals on hover.
 */
export function ServiceCard({ icon, title, description, tags, href, linkLabel = 'Learn more', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href || '#'}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '32px 30px',
        textDecoration: 'none',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
        borderColor: hover ? 'var(--navy-200)' : 'var(--border-subtle)',
        ...style,
      }}
      {...rest}
    >
      <span style={{ position: 'absolute', top: 0, left: 0, height: '3px', width: hover ? '100%' : '0%', background: 'var(--red-700)', transition: 'width var(--dur-base) var(--ease-out)' }} />
      {icon && (
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px', borderRadius: 'var(--radius-md)', background: hover ? 'var(--red-700)' : 'var(--navy-50)', color: hover ? '#fff' : 'var(--navy-700)', transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)' }}>
          {icon}
        </span>
      )}
      <div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: 'var(--navy-900)', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{title}</h3>
        {description && <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: 'var(--text-muted)' }}>{description}</p>}
      </div>
      {tags && tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: 'auto' }}>
          {tags.map((t, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.03em', color: 'var(--gray-600)', background: 'var(--gray-100)', borderRadius: 'var(--radius-pill)', padding: '4px 10px' }}>{t}</span>
          ))}
        </div>
      )}
      {href && (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: tags ? '4px' : 'auto', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px', color: 'var(--red-700)' }}>
          {linkLabel}
          <span style={{ transform: hover ? 'translateX(4px)' : 'translateX(0)', transition: 'transform var(--dur-base) var(--ease-out)' }}>→</span>
        </span>
      )}
    </a>
  );
}
