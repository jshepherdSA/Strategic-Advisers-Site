import React from 'react';

/**
 * Strategic Advisers — Badge
 * Small status/label pill. Use for tags, categories, statuses.
 */
export function Badge({ children, variant = 'neutral', size = 'md', style, ...rest }) {
  const variants = {
    neutral: { background: 'var(--gray-100)', color: 'var(--gray-700)', border: '1px solid var(--gray-200)' },
    navy: { background: 'var(--navy-50)', color: 'var(--navy-700)', border: '1px solid var(--navy-100)' },
    accent: { background: 'var(--red-50)', color: 'var(--red-700)', border: '1px solid var(--red-100)' },
    solid: { background: 'var(--navy-700)', color: '#fff', border: '1px solid var(--navy-700)' },
    'solid-accent': { background: 'var(--red-700)', color: '#fff', border: '1px solid var(--red-700)' },
    success: { background: 'var(--green-100)', color: 'var(--color-success)', border: '1px solid var(--green-100)' },
    'on-navy': { background: 'rgba(255,255,255,0.12)', color: 'var(--navy-100)', border: '1px solid rgba(255,255,255,0.18)' },
  };
  const sizes = {
    sm: { padding: '3px 9px', fontSize: '11px' },
    md: { padding: '5px 12px', fontSize: '12px' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'var(--font-mono)',
        fontWeight: 500,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        borderRadius: 'var(--radius-pill)',
        lineHeight: 1.2,
        ...sizes[size],
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
