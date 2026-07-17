'use client'

import { useEffect } from 'react'

const FORM_ID = '261974274444061'
const IFRAME_ID = `JotFormIFrame-${FORM_ID}`

/**
 * JotForm contact form embedded via iframe. The raw jsform <script> relies on
 * document.write and does not work in React, so we use JotForm's iframe embed
 * plus their embed handler, which auto-resizes the iframe to the form height.
 */
export function JotFormEmbed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'
    script.async = true
    script.onload = () => {
      const w = window as unknown as {
        jotformEmbedHandler?: (selector: string, origin: string) => void
      }
      w.jotformEmbedHandler?.(`iframe[id='${IFRAME_ID}']`, 'https://form.jotform.com')
    }
    document.body.appendChild(script)
    return () => {
      script.remove()
    }
  }, [])

  return (
    <iframe
      id={IFRAME_ID}
      title="Contact Strategic Advisers"
      allow="geolocation; microphone; camera; fullscreen; payment"
      src={`https://form.jotform.com/${FORM_ID}`}
      scrolling="no"
      style={{ minWidth: '100%', maxWidth: '100%', width: '100%', height: 800, border: 'none' }}
    />
  )
}
