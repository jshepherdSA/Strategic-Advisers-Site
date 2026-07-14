import React from 'react';

/**
 * Strategic Advisers — Button
 * Confident, squared-but-soft CTA. Primary = red (action), secondary = navy,
 * outline/ghost for lower emphasis, link for inline.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  disabled = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: '9px 16px', fontSize: '14px', gap: '7px' },
    md: { padding: '13px 24px', fontSize: '15px', gap: '9px' },
    lg: { padding: '17px 34px', fontSize: '17px', gap: '10px' },
  };

  const variants = {
    primary: { background: 'var(--red-700)', color: '#fff', border: '1px solid var(--red-700)', boxShadow: 'var(--shadow-accent)' },
    secondary: { background: 'var(--navy-700)', color: '#fff', border: '1px solid var(--navy-700)', boxShadow: 'var(--shadow-sm)' },
    outline: { background: 'transparent', color: 'var(--navy-700)', border: '1px solid var(--navy-300)', boxShadow: 'none' },
    ghost: { background: 'transparent', color: 'var(--navy-700)', border: '1px solid transparent', boxShadow: 'none' },
    'on-navy': { background: '#fff', color: 'var(--navy-800)', border: '1px solid #fff', boxShadow: 'var(--shadow-md)' },
    link: { background: 'transparent', color: 'var(--red-700)', border: '1px solid transparent', boxShadow: 'none', padding: '0', textDecoration: 'none' },
  };

  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: sizes[size].fontSize,
    lineHeight: 1,
    letterSpacing: '0.01em',
    padding: variant === 'link' ? 0 : sizes[size].padding,
    borderRadius: variant === 'link' ? 0 : 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...variants[variant],
    ...style,
  };

  const hoverMap = {
    primary: (e, on) => { e.currentTarget.style.background = on ? 'var(--red-800)' : 'var(--red-700)'; },
    secondary: (e, on) => { e.currentTarget.style.background = on ? 'var(--navy-800)' : 'var(--navy-700)'; },
    outline: (e, on) => { e.currentTarget.style.borderColor = on ? 'var(--navy-700)' : 'var(--navy-300)'; e.currentTarget.style.background = on ? 'var(--navy-50)' : 'transparent'; },
    ghost: (e, on) => { e.currentTarget.style.background = on ? 'var(--navy-50)' : 'transparent'; },
    'on-navy': (e, on) => { e.currentTarget.style.background = on ? 'var(--navy-50)' : '#fff'; },
    link: (e, on) => { e.currentTarget.style.color = on ? 'var(--red-800)' : 'var(--red-700)'; },
  };

  const handlers = disabled ? {} : {
    onMouseEnter: (e) => { hoverMap[variant]?.(e, true); if (variant !== 'link' && variant !== 'outline' && variant !== 'ghost') e.currentTarget.style.transform = 'translateY(-1px)'; },
    onMouseLeave: (e) => { hoverMap[variant]?.(e, false); e.currentTarget.style.transform = 'translateY(0)'; },
    onMouseDown: (e) => { e.currentTarget.style.transform = 'translateY(0) scale(0.98)'; },
    onMouseUp: (e) => { e.currentTarget.style.transform = 'translateY(-1px)'; },
  };

  const content = (
    <>
      {iconLeft && <span style={{ display: 'inline-flex' }}>{iconLeft}</span>}
      {children}
      {iconRight && <span style={{ display: 'inline-flex' }}>{iconRight}</span>}
    </>
  );

  if (href && !disabled) {
    return <a href={href} style={base} onClick={onClick} {...handlers} {...rest}>{content}</a>;
  }
  return <button type={type} disabled={disabled} style={base} onClick={onClick} {...handlers} {...rest}>{content}</button>;
}
