import React from 'react';

/**
 * Strategic Advisers — Eyebrow
 * Wide-tracked mono kicker that sits above headlines. The brand's signature
 * section label, optionally led by a short red rule.
 */
export function Eyebrow({ children, rule = true, color = 'accent', style, ...rest }) {
  const colors = {
    accent: 'var(--red-700)',
    navy: 'var(--navy-600)',
    muted: 'var(--gray-500)',
    'on-navy': 'var(--red-400)',
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-eyebrow)',
        fontWeight: 500,
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        color: colors[color],
        ...style,
      }}
      {...rest}
    >
      {rule && <span style={{ width: '28px', height: '2px', background: 'currentColor', display: 'inline-block' }} />}
      {children}
    </span>
  );
}
