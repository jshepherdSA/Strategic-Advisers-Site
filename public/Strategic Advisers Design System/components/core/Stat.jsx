import React from 'react';

/**
 * Strategic Advisers — Stat
 * Big mono figure with label. The data-driven proof point used in stat bands.
 */
export function Stat({ value, label, sublabel, align = 'left', tone = 'default', style, ...rest }) {
  const onNavy = tone === 'on-navy';
  return (
    <div style={{ textAlign: align, ...style }} {...rest}>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: 600,
          fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          color: onNavy ? '#fff' : 'var(--navy-900)',
        }}
      >
        {value}
      </div>
      {label && (
        <div
          style={{
            marginTop: '10px',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '15px',
            color: onNavy ? 'var(--navy-100)' : 'var(--navy-700)',
          }}
        >
          {label}
        </div>
      )}
      {sublabel && (
        <div
          style={{
            marginTop: '4px',
            fontSize: '13px',
            lineHeight: 1.5,
            color: onNavy ? 'rgba(255,255,255,0.65)' : 'var(--text-muted)',
          }}
        >
          {sublabel}
        </div>
      )}
    </div>
  );
}
