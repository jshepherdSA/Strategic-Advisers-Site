**Input** — text field or textarea with the brand focus ring.

```jsx
<Input placeholder="you@company.com" type="email" />
<Input as="textarea" placeholder="Tell us about your project" />
<Input tone="on-navy" placeholder="Work email" />
```

Props: `as` (`input` | `textarea`), `tone` (`light` | `on-navy`), `invalid`. Wrap with `Field` for a label + helper text.
