type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'on-navy'
type ButtonSize = 'sm' | 'md' | 'lg'

export function Button({
  children,
  href = '#',
  variant = 'primary',
  size = 'md',
  iconRight,
  className,
}: {
  children: React.ReactNode
  href?: string
  variant?: ButtonVariant
  size?: ButtonSize
  iconRight?: React.ReactNode
  className?: string
}) {
  const classes = [
    'sa-btn',
    `sa-btn--${variant}`,
    size !== 'md' ? `sa-btn--${size}` : null,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <a href={href} className={classes}>
      {children}
      {iconRight && <span className="sa-btn__icon">{iconRight}</span>}
    </a>
  )
}
