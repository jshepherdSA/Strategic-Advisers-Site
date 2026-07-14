**ServiceCard** — one service offering, with an icon tile, title, description, optional capability tags and a link row. The red top rule and icon fill reveal on hover.

```jsx
<ServiceCard
  icon={<Megaphone />}
  title="Public Relations"
  description="Earned media, media training and crisis-ready messaging that holds up under scrutiny."
  tags={["Media Relations", "Crisis", "Messaging"]}
  href="/services/pr"
/>
```

Best laid out in a 3-column grid. Pass any icon node (Lucide recommended).
