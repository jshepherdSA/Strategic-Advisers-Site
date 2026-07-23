import { Eyebrow } from '@/components/ui/Eyebrow'
import type { LegalBlock } from '@/lib/legal'

const EMAIL_SPLIT = /([\w.+-]+@[\w.-]+\.\w+)/g
const EMAIL_FULL = /^[\w.+-]+@[\w.-]+\.\w+$/

/** Render text, turning email addresses into mailto links and newlines into line breaks. */
function renderText(text: string): React.ReactNode {
  return text.split('\n').map((line, li) => (
    <span key={li}>
      {li > 0 && <br />}
      {line.split(EMAIL_SPLIT).map((part, pi) =>
        EMAIL_FULL.test(part) ? (
          <a key={pi} href={`mailto:${part}`} className="sa-legal__link">
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </span>
  ))
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case 'heading':
      return <h2 className="sa-legal__h2">{block.text}</h2>
    case 'subheading':
      return <h3 className="sa-legal__h3">{block.text}</h3>
    case 'para':
      return <p className="sa-legal__p">{renderText(block.text)}</p>
    case 'def':
      return (
        <p className="sa-legal__p">
          <strong>{block.term}</strong> {renderText(block.text)}
        </p>
      )
    case 'list':
      return (
        <ul className="sa-legal__list">
          {block.items.map((item, i) => (
            <li key={i}>{renderText(item)}</li>
          ))}
        </ul>
      )
  }
}

/** Shared layout for legal / policy pages. Renders verbatim block content in the site's type. */
export function LegalDoc({
  title,
  updated,
  blocks,
}: {
  title: string
  updated: string
  blocks: LegalBlock[]
}) {
  return (
    <main>
      <section className="sa-section">
        <div className="sa-container sa-container--narrow">
          <article className="sa-legal reveal">
            <div style={{ marginBottom: 14 }}>
              <Eyebrow>Legal</Eyebrow>
            </div>
            <h1 className="sa-legal__title">{title}</h1>
            <p className="sa-legal__updated">{updated}</p>
            {blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </article>
        </div>
      </section>
    </main>
  )
}
