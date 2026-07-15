import React from 'react';

/**
 * Strategic Advisers — Field
 * Label + helper/error wrapper for form controls.
 */
export function Field({ label, htmlFor, hint, error, required = false, tone = 'light', children, style, ...rest }) {
  const onNavy = tone === 'on-navy';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', ...style }} {...rest}>
      {label && (
        <label htmlFor={htmlFor} style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600, color: onNavy ? '#fff' : 'var(--navy-900)' }}>
          {label}
          {required && <span style={{ color: 'var(--red-600)', marginLeft: '4px' }}>*</span>}
        </label>
      )}
      {children}
      {error ? (
        <span style={{ fontSize: '13px', color: onNavy ? 'var(--red-300)' : 'var(--red-700)' }}>{error}</span>
      ) : hint ? (
        <span style={{ fontSize: '13px', color: onNavy ? 'var(--navy-200)' : 'var(--text-muted)' }}>{hint}</span>
      ) : null}
    </div>
  );
}
