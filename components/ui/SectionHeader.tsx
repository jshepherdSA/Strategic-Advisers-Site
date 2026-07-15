import { Eyebrow } from './Eyebrow'

export function SectionHeader({
  eyebrow,
  title,
  intro,
  action,
}: {
  eyebrow?: string
  title: string
  intro?: string
  action?: React.ReactNode
}) {
  return (
    <div className={action ? 'sa-section-header sa-section-header--with-action' : 'sa-section-header'}>
      <div className="sa-section-header__body">
        {eyebrow && (
          <div style={{ marginBottom: 18 }}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        )}
        <h2 className="sa-section-header__title">{title}</h2>
        {intro && <p className="sa-section-header__intro">{intro}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  )
}
