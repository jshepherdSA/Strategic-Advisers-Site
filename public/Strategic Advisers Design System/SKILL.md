---
name: strategic-advisers-design
description: Use this skill to generate well-branded interfaces and assets for Strategic Advisers (an integrated PR, Digital Media & Public Affairs communications firm), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, logos, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

Key files:
- `readme.md` — full brand guide: content fundamentals (voice, casing, tone), visual foundations (color, type, spacing, motion, cards), iconography, and a component index.
- `styles.css` — the single global stylesheet to link; it imports everything in `tokens/`.
- `tokens/` — colors (navy `#1D2D51`, red `#A42E2E`), typography (Jost / IBM Plex Sans / IBM Plex Mono), spacing, effects.
- `components/` — reusable React primitives (Button, Badge, Eyebrow, Stat, ServiceCard, IndustryCard, TestimonialCard, SectionHeader, CTASection, Input, Field). Each has a `.prompt.md` with usage.
- `ui_kits/website/` — an interactive marketing-site recreation to copy patterns from.
- `assets/logos/` — the five brand logo/mark PNGs.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Brand quick reference:
- Colors: navy `#1D2D51` (dominant), red `#A42E2E` (accent/CTA), cool grays. ~90/10 navy-to-red.
- Type: Jost for large headlines (sentence case), IBM Plex Sans for body, IBM Plex Mono for UPPERCASE wide-tracked eyebrows and data figures.
- Voice: confident, strategic, plain-spoken; "we" / "you"; no emoji. Primary CTA: "Start a conversation."
- Motifs: generous whitespace, white + light surfaces, navy gradient panels for stat/CTA bands, image-forward industry cards under navy scrims, subtle hover lifts with a red accent, restrained radii, Lucide line icons.
- Substitutions to flag: fonts (Jost/IBM Plex) and icons (Lucide) are stand-ins; imagery is placeholder.
