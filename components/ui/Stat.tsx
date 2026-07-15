export function Stat({
  value,
  label,
  sublabel,
  tone = 'default',
}: {
  value: string
  label?: string
  sublabel?: string
  tone?: 'default' | 'on-navy'
}) {
  return (
    <div className={tone === 'on-navy' ? 'sa-stat sa-stat--on-navy' : 'sa-stat'}>
      <div className="sa-stat__value">{value}</div>
      {label && <div className="sa-stat__label">{label}</div>}
      {sublabel && <div className="sa-stat__sublabel">{sublabel}</div>}
    </div>
  )
}
