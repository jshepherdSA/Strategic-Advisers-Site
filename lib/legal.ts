// Shared block model for legal / policy pages (Cookie Policy, Privacy Policy).
// Content is extracted verbatim from the source .docx files — do not paraphrase.
export type LegalBlock =
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'para'; text: string }
  | { type: 'def'; term: string; text: string }
  | { type: 'list'; items: string[] }
