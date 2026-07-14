# Strategic Advisers — Design System

A design system for **Strategic Advisers**, an integrated communications firm working across **PR · Digital Media · Public Affairs**. The system is tuned for a modern, premium, strategic, data-driven marketing website: large confident headlines, generous whitespace, service and industry cards, and strong closing CTAs.

> **Compiler note:** an automated compiler bundles the components and indexes the tokens on every turn. Do not edit `_ds_bundle.js`, `_ds_manifest.json`, or `_adherence.oxlintrc.json` — they are generated.

## Sources provided
- Brand logos (the only source material supplied), now in `assets/logos/`:
  - `sa-logo-full-color.png` — primary horizontal lockup (navy + red wordmark, pinwheel mark)
  - `sa-logo-full-black.png` — all-black lockup
  - `sa-logo-full-white.png` — reversed/white lockup for dark backgrounds
  - `sa-mark-color.png` — pinwheel mark, red + charcoal gradient
  - `sa-mark-dark.png` — pinwheel mark, dark/mono gradient
- No website codebase, Figma file, or brand guidelines document was provided. The system's structure, component inventory, tone and imagery are authored from the brief's stated attributes (modern, premium, strategic, clean, confident, professional, approachable, data-driven) and the colors/typography read from the logo. Where something was inferred rather than sourced, it is flagged below.

## Brand at a glance
- **Name:** Strategic Advisers
- **Disciplines / tagline:** PR · Digital Media · Public Affairs
- **Mark:** an abstract pinwheel / compass rose in navy with one red blade + red hub — suggests direction, strategy, and radiating reach.
- **Primary colors:** Navy `#1D2D51`, Red `#A42E2E` (sampled directly from the logo art).

---

## CONTENT FUNDAMENTALS

How Strategic Advisers writes.

- **Voice:** confident and strategic, but plain-spoken and approachable — a senior adviser in the room, not a jargon machine. Authoritative without being stuffy.
- **Person:** "**we**" for the firm, "**you / your**" for the client. Collective and client-centered ("We bring the strategy," "Tell us what you're up against"). Avoid "I".
- **Casing:** Sentence case for headlines and body. **Eyebrows/kickers are UPPERCASE**, wide-tracked, set in the mono font (e.g. `WHAT WE DO`, `PR · DIGITAL MEDIA · PUBLIC AFFAIRS`). Buttons are sentence case ("Start a conversation").
- **Headlines:** short, active, declarative — often a verb of movement or a claim. Examples: "We move the conversation.", "Strategy that moves the conversation", "Where reputation meets regulation", "Six disciplines. One strategy." A single red-colored word is sometimes used for emphasis inside an otherwise navy headline.
- **Body copy:** measured, specific, benefit-led. 1–2 sentence paragraphs. Leads with the client outcome, backs it with a capability. Example: "Earned media, media training and message discipline that holds up under scrutiny."
- **Proof & data:** the brand is data-driven — quantified proof points appear often, set in the mono font ("98% earned reach", "3.4M earned impressions", "6:1 return on paid spend"). Pair a number with a short human label.
- **CTAs:** warm and direct invitations, not hard sells: "Start a conversation", "Book an intro call", "Let's talk about what's next." The primary CTA is almost always "Start a conversation."
- **Punctuation:** periods on headline statements are on-brand (they read decisive). Middot `·` separates the three disciplines. Em dashes for asides.
- **Emoji:** **never.** This is a professional/public-affairs brand. No emoji anywhere.
- **Vibe:** premium consultancy meets newsroom urgency. Trustworthy, sharp, outcome-obsessed.

---

## VISUAL FOUNDATIONS

- **Color:** two-color brand core — **navy `#1D2D51`** (authority, structure, the default heading and surface-dark color) and **red `#A42E2E`** (energy, action, accents and CTAs). Navy dominates; red is the punctuation (roughly a 90/10 split). Cool-leaning neutral grays sit under the navy. Full 50–950 scales for each in `tokens/colors.css`, with semantic aliases (`--color-brand`, `--color-accent`, `--text-heading`, `--surface-navy`, etc.). Status colors are muted and professional (forest green, amber, navy-blue info; error reuses brand red).
- **Typography:**
  - **Display — Jost** (geometric sans) for large, strong headlines. Weights 400–700, tight tracking (−2%). Chosen as the closest Google Fonts match to the geometric logo wordmark. *Substitution flag — see Caveats.*
  - **Body — IBM Plex Sans** for running text and UI. Professional, humanist, highly legible; 16px / 1.6.
  - **Mono — IBM Plex Mono** for eyebrows/kickers, data figures, labels and units — this is the data-driven signature.
  - Big type is a brand principle: hero headlines run up to ~76px with balanced wrapping.
- **Spacing & layout:** 4px base unit, generous section rhythm (`--section-y` ≈ 4–8rem). Centered containers (max 1200/1360px) with fluid gutters. Whitespace is deliberate and premium — pages breathe.
- **Backgrounds:** predominantly white and very light navy-tinted `--gray-50` / `--navy-50`. Dark **navy gradient panels** (`linear-gradient(135deg, navy-700 → navy-900)`) mark high-emphasis moments: stat bands, CTA sections, footer. Real **photography** (professional, corporate, city/energy/health themes) appears full-bleed inside industry cards and the hero, always under a navy scrim so text stays legible. No hand-drawn illustration, no busy patterns, no purple/blue tech gradients.
- **Imagery treatment:** cool, slightly desaturated (`saturate(0.85)`), professional and grounded — no heavy filters, no grain. Navy gradient scrims unify photos with the palette.
- **Cards:** white surface, 1px `--border-subtle` hairline, `--radius-lg` (12px) corners, soft cool-tinted shadow (`--shadow-sm` at rest). Service cards reveal a **red top rule** and fill their icon tile red on hover, and lift `translateY(-4px)` with a larger shadow. Industry cards are image-forward (3:4), navy scrim, label pinned to the base, image zooms on hover.
- **Elevation:** soft, low-spread, cool navy-tinted shadows (`--shadow-xs → --shadow-xl`), plus a dedicated `--shadow-accent` red glow for primary buttons. Cards lift on hover; nothing floats aggressively.
- **Corner radius:** restrained and premium — 4/8/12/18px plus a pill for badges and the icon dots. Not bubbly.
- **Borders:** 1px hairlines in neutral gray for cards and dividers; navy or red borders for emphasis; `rgba(255,255,255,.16)` dividers on dark panels.
- **Motion:** subtle and confident, never bouncy. Standard ease `cubic-bezier(.4,0,.2,1)` and a softer `--ease-out` for card reveals. Durations 140/220/380ms. Transitions: color on links, hover lift + shadow on cards, red rule sweep, arrow nudge (`translateX(4px)`), image zoom. No infinite/decorative loops.
- **Hover states:** buttons darken one step (red-700→800, navy-700→800) and lift 1px; outline/ghost fill with `--navy-50`; links shift navy→red; cards lift + reveal red accent; social icons fill red.
- **Press states:** buttons scale to `0.98` and drop the lift — a small, tactile confirm.
- **Transparency & blur:** the sticky navbar uses `backdrop-filter: blur(14px)` over 86% white. Dark panels use white alpha for dividers and the faint brand-mark watermark (opacity ~0.10) in CTA sections.
- **Fixed elements:** sticky translucent top nav; everything else flows.

---

## ICONOGRAPHY

- **No icon set was provided** with the brand assets. The system uses **[Lucide](https://lucide.dev)** (loaded from CDN in the cards and UI kit) as the icon language — thin `1.75` stroke, rounded joins, geometric and modern, which matches the premium/clean/approachable tone. **This is a substitution; see Caveats.** Swap for a licensed/brand icon set if one exists.
- **Usage:** icons are line (stroke) icons, never filled, ~20–30px. In service contexts they sit inside a rounded tile (`--radius-md`) that is navy-on-tint at rest and red-on-white on hover. Inline utility icons (mail, phone, arrow-right, check, lock) use `currentColor`.
- **The pinwheel mark** (`assets/logos/sa-mark-*.png`) is the one bespoke brand glyph — used as a favicon-scale mark and as a faint watermark motif inside CTA panels. Do not redraw it; use the supplied PNGs.
- **Emoji / unicode:** not used as icons. The only non-Lucide glyphs are the arrow "→" in link rows and the middot "·" in the tagline.
- Common icons in use: `megaphone`, `monitor-play`, `landmark`, `shield-alert`, `pen-tool`, `line-chart`, `trending-up`, `arrow-right`, `check`, `lock`, `mail`, `phone`, `map-pin`, and social marks.

---

## Index / Manifest

**Root**
- `styles.css` — the single global stylesheet consumers link (import list only).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible entry point.

**Tokens** (`tokens/`, all reached from `styles.css`)
- `fonts.css` — Google Fonts import (Jost, IBM Plex Sans, IBM Plex Mono).
- `colors.css` — navy/red/neutral scales + semantic aliases + status.
- `typography.css` — font families, weights, fluid type scale, line-heights, tracking.
- `spacing.css` — 4px spacing scale, section rhythm, container widths.
- `effects.css` — radius, borders, shadows, motion (easing + durations).
- `base.css` — element defaults and helpers (`.sa-eyebrow`, `.sa-display`, `.sa-container`).

**Components** (`components/`) — reusable primitives, exported on `window.StrategicAdvisersDesignSystem_281076`
- Core (`components/core/`): **Button**, **Badge**, **Eyebrow**, **Stat**
- Cards (`components/cards/`): **ServiceCard**, **IndustryCard**, **TestimonialCard**
- Sections (`components/sections/`): **SectionHeader**, **CTASection**
- Forms (`components/forms/`): **Input**, **Field**

**UI Kits** (`ui_kits/`)
- `ui_kits/website/` — interactive marketing-site recreation (Home, Services, Industries, Contact). See its `README.md`.

**Foundation cards** (`guidelines/`) — specimen cards shown in the Design System tab (Colors, Type, Spacing, Brand).

**Assets** (`assets/logos/`) — the five brand logo/mark files.

### Intentional additions
Because no component source was supplied, the component inventory was authored from the brief. All primitives map directly to the requested website building blocks (service cards, industry cards, strong CTA sections, headlines with clear spacing). **Stat** and the mono **Eyebrow** were added to serve the "data-driven" and editorial-kicker requirements.

---

## CAVEATS / SUBSTITUTIONS
- **Fonts are substitutions.** The exact logo wordmark typeface and any licensed brand text fonts are unknown. **Jost** (display) is the closest Google Fonts match to the geometric wordmark; **IBM Plex Sans/Mono** were chosen for body/data. Please share the real brand fonts to replace these.
- **Icons are a substitution.** No icon set was provided — **Lucide** stands in. Point us at the brand's icon library if one exists.
- **Imagery is placeholder.** Hero and industry photos are Unsplash images; sample copy is illustrative, not approved marketing language.
- **No color/spacing spec was provided** beyond the logo — scales and semantics were derived. Tell us if there's an existing brand spec to reconcile against.
