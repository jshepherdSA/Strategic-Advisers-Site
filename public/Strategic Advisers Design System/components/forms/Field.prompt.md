**Field** — label + helper/error wrapper around a form control.

```jsx
<Field label="Work email" htmlFor="email" required hint="We'll only use this to reply.">
  <Input id="email" type="email" placeholder="you@company.com" />
</Field>

<Field label="Message" error="This field is required">
  <Input as="textarea" invalid />
</Field>
```

Props: `label`, `htmlFor`, `hint`, `error`, `required`, `tone`.
