'use client'

import { useState } from 'react'

/**
 * Contact form. Front-end only for Phase One — on submit it shows a success
 * state; wire the handler to a real endpoint (email service / CRM) to send.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="sa-form__success">
        <div className="sa-form__success-mark" aria-hidden>
          ✓
        </div>
        <h3>Thanks — we&rsquo;ll be in touch.</h3>
        <p>
          A member of our team will follow up shortly to talk through your goals and the
          right next step.
        </p>
      </div>
    )
  }

  return (
    <form
      className="sa-form"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <div className="sa-field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>

      <div className="sa-field">
        <label htmlFor="organization">Organization</label>
        <input id="organization" name="organization" type="text" autoComplete="organization" />
      </div>

      <div className="sa-form__row">
        <div className="sa-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="sa-field">
          <label htmlFor="phone">
            Phone <span>(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>

      <div className="sa-field">
        <label htmlFor="message">What can we help you accomplish?</label>
        <textarea id="message" name="message" rows={5} required />
      </div>

      <button type="submit" className="sa-btn sa-btn--primary sa-btn--lg">
        Send Message
      </button>
      <p className="sa-form__note">
        We&rsquo;ll only use your information to respond to your inquiry.
      </p>
    </form>
  )
}
