import React from 'react';

/**
 * Strategic Advisers — Input
 * Text input / textarea with a clean navy focus ring. Pair with Field for labels.
 */
export function Input({ as = 'input', tone = 'light', invalid = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const onNavy = tone === 'on-navy';
  const Tag = as === 'textarea' ? 'textarea' : 'input';
  const borderColor = invalid ? 'var(--red-500)' : focus ? (onNavy ? 'var(--red-400)' : 'var(--navy-600)') : (onNavy ? 'rgba(255,255,255,0.22)' : 'var(--border-default)');
  return (
    <Tag
      onFocus={(e) => { setFocus(true); rest.onFocus?.(e); }}
      onBlur={(e) => { setFocus(false); rest.onBlur?.(e); }}
      style={{
        width: '100%',
        fontFamily: 'var(--font-body)',
        fontSize: '15px',
        lineHeight: 1.5,
        color: onNavy ? '#fff' : 'var(--navy-900)',
        background: onNavy ? 'rgba(255,255,255,0.06)' : 'var(--white)',
        border: `1px solid ${borderColor}`,
        borderRadius: 'var(--radius-md)',
        padding: as === 'textarea' ? '13px 15px' : '12px 15px',
        minHeight: as === 'textarea' ? '128px' : undefined,
        resize: as === 'textarea' ? 'vertical' : undefined,
        outline: 'none',
        boxShadow: focus ? (invalid ? '0 0 0 3px rgba(205,74,74,0.18)' : onNavy ? '0 0 0 3px rgba(221,111,111,0.22)' : '0 0 0 3px rgba(42,64,116,0.14)') : 'none',
        transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
        boxSizing: 'border-box',
        ...style,
      }}
      {...rest}
    />
  );
}
