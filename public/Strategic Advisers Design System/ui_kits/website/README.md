# Strategic Advisers — Website UI Kit

An interactive, click-through recreation of the Strategic Advisers marketing website, built entirely from the design system's own components.

## Run it
Open `index.html`. It loads React, Babel, Lucide (icons) and the compiled design-system bundle (`_ds_bundle.js`), then mounts the app.

## Screens (client-side routed, no reload)
- **Home** (`HomeScreen.jsx`) — hero with proof stat, trust bar, services grid, navy stats band, industries grid, testimonial, closing CTA.
- **Services** (`ServicesScreen.jsx`) — page hero, alternating service rows with tags, 4-step process, CTA.
- **Industries** (`IndustriesScreen.jsx`) — sector grid, navy outcomes/stats band, testimonial, CTA.
- **Contact** (`ContactScreen.jsx`) — split layout with contact details + a validating form that shows a success state on submit.

## Structure
- `App.jsx` — route state + shell (NavBar / screen / Footer). Mounts the app.
- `NavBar.jsx`, `Footer.jsx` — chrome shared across screens.
- `icons.jsx` — `<Icon name="…" />` helper wrapping Lucide.
- `data.jsx` — services, industries, stats and nav content.

## Components used
NavBar and screens compose the DS primitives from `window.StrategicAdvisersDesignSystem_281076`: `Button`, `Badge`, `Eyebrow`, `Stat`, `ServiceCard`, `IndustryCard`, `TestimonialCard`, `SectionHeader`, `CTASection`, `Field`, `Input`.

## Imagery
Hero and industry photos are **Unsplash placeholders**. Replace with licensed agency/campaign photography before production. Copy is representative sample content, not approved marketing copy.
