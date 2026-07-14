**Button** — the brand call-to-action. Red `primary` for the main action on a page, navy `secondary` for supporting actions, `outline`/`ghost` for low emphasis, `on-navy` when placed on dark navy sections.

```jsx
<Button variant="primary" size="lg" href="/contact">Start a conversation</Button>
<Button variant="outline">Our work</Button>
<Button variant="on-navy" iconRight={<ArrowIcon/>}>Learn more</Button>
```

Variants: `primary` (red, elevated), `secondary` (navy), `outline`, `ghost`, `on-navy` (white on dark), `link` (inline red). Sizes: `sm` `md` `lg`. Supports `href`, `iconLeft`/`iconRight`, `fullWidth`, `disabled`.
