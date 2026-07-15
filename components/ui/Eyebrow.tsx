type EyebrowTone = 'accent' | 'navy' | 'muted' | 'on-navy'

export function Eyebrow({
  children,
  tone = 'accent',
}: {
  children: React.ReactNode
  tone?: EyebrowTone
}) {
  const className = tone === 'accent' ? 'sa-eyebrow' : `sa-eyebrow sa-eyebrow--${tone}`
  return <span className={className}>{children}</span>
}
