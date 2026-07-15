# Cross-Site Synthesis → Strategic Advisers Direction

**Date:** 2026-07-14
**Sources:** teardowns of Vuna Partners, Tres Mares Capital, Halston Architecture (Webflow), Cura Climate
**Purpose:** distill the shared "sharp, modern" design language across the four reference sites and translate it into a concrete build direction for the Strategic Advisers site (Next.js).

---

## The convergent pattern (what all four share)

The single most important finding: **the "premium" feel is discipline, not exotic technology.** All four are cloneable with the same modest toolkit. What separates them from generic sites is restraint, typographic tension, whitespace, and one uniform motion language.

| Dimension | What all four do |
|---|---|
| **Motion stack** | **GSAP (ScrollTrigger + SplitText) + Lenis smooth scroll** on *all four*. The two hand-built sites add page transitions (Barba.js / Taxi.js). |
| **Canvas color** | Warm off-white / greige — **never pure `#fff`** (`#f4eee4`, `#edeee8`, `#DBDBD8`, off-white). |
| **Text color** | Warm near-black — **never pure `#000`** (`#2b2b2b`, `#15130f`, `#171715`). |
| **Accent** | Exactly **one** accent, used sparingly. (Vuna ochre/merlot · Tres Mares red · Cura electric blue · Halston oxblood.) |
| **Type system** | 2–3 fonts: a **display face set LARGE and TIGHT** (negative tracking, sub-1.0 line-height) + a **neutral grotesque body** + often a **mono or tiny-uppercase-tracked label** face for eyebrows. |
| **Spacing** | **Fluid** (vw / `clamp()`), very generous. Wide containers (120rem+), huge section padding (120–150px). |
| **Shape** | **Sharp / near-0 radius**, flat, **no shadows**, line-based detailing. |
| **Motion language** | One signature easing, **low-travel** reveals, SplitText on the hero, **one** hero "moment," heavy motion **desktop-only**. |

## Where they diverge (the distinctive move each makes)

- **Vuna Partners** — warmest & most editorial. WebGL animated-gradient hero (UnicornStudio), a 3-font system, and **zero photography** (all type + color). Ochre/merlot earth palette.
- **Tres Mares Capital** — the **closest analogue to an advisory/capital firm.** Strict monochrome grey ramp + **one red**, serif/grotesque pairing (PP Fragment + PP Neue Montreal), fully **vw-fluid** everything. Branded 3-state custom cursor; spatial-stagger reveal (`delay = 0.00025 × element.left`).
- **Cura Climate** — "engineered" detailing: **corner-bracket buttons**, faint **blueprint guide-lines** (`mix-blend-mode:difference`), one **electric-blue** accent, and one big moment (250vh pinned video + giant horizontal-scroll headline).
- **Halston Architecture** — most extreme **type scale** (hero `15vw`, sections `8–9vw`, line-height 80%), General Sans variable + **JetBrains Mono** labels, palette built from **2 seed colors fanned via `color-mix()`**, sharp `3px` image corners.

---

## Recommended direction for Strategic Advisers

### Closest template: **Tres Mares Capital**
It's literally a capital firm and nails the trust + sophistication brief: monochrome + one accent, serif/grotesque contrast, vw-fluid whitespace, calm motion. Use it as the structural template; borrow Vuna's warmth, Cura's engineered details, and Halston's type-scale ambition as accents.

### Reconciling with the existing SA brand (navy + red + neutrals)
The convergent pattern maps onto SA's brand *cleanly* — this is fortunate:
- **Canvas:** a very light warm neutral (off-white, not pure white).
- **Ink / near-black:** use **navy** as the deep text anchor (navy-black reads as the "warm near-black" slot).
- **Accent:** use **red** as the single sparing accent — exactly Tres Mares' formula.
- Result: navy/neutral monochrome canvas + one red accent = the reference pattern *and* SA's brand, simultaneously.

> **Pending:** confirm exact hex values, fonts, and spacing tokens against the SA Design System `tokens/` (`colors.css`, `fonts.css`, `typography.css`, `spacing.css`) once the folder is re-located. This direction should be refined to those tokens rather than inventing new ones.

### Stack (matches all four references' motion core)
- **Next.js 16 + Tailwind v4** — already scaffolded in this repo.
- **GSAP** (`ScrollTrigger`, `SplitText`) + **Lenis** — the shared motion foundation.
- Optional: **Framer Motion** for component-level state; **Barba/Taxi-equivalent** (Next.js `template.tsx` + view transitions) only if page transitions are wanted.

```bash
npm install gsap lenis
# optional: npm install framer-motion
```

### Type direction
- **Display:** an editorial face (tight serif *or* a confident grotesk) set **large with negative tracking and sub-1.0 line-height**.
- **Body:** a neutral grotesque (Geist / Neue-Montreal-class).
- **Labels/eyebrows:** a mono or tiny UPPERCASE tracked-out treatment (Halston's JetBrains Mono move) — great for section numbers and "Practice Areas" style kickers.
- Use SA's brand fonts if `fonts.css` specifies them; otherwise the above is the pattern to match.

### Motion language (keep it uniform)
- One signature easing (references use `expo.out` / `power2.out` / `cubic-bezier(.165,.84,.44,1)`), ~0.6s.
- SplitText line/char reveal on the hero at load.
- One reused low-travel reveal recipe for every section (`autoAlpha:0, y:15 → stagger, start:"top 70%"`).
- Lenis smooth scroll globally; **gate heavy motion to desktop** (`matchMedia` / `conditionalPlayback`).
- Exactly **one** hero "moment" — resist adding more.

### Section-by-section build order (advisory firm)
Adapted from Halston's information architecture (Achievements→track record, Disciplines→practice areas, Projects→case studies):

1. **Hero** — statement headline (SplitText reveal), one restrained moment (subtle WebGL/gradient or a single strong image), mono eyebrow.
2. **Positioning / intro** — short thesis paragraph, tight measure, scroll reveal.
3. **Practice areas / services** — disciplined grid, mono labels, hover states.
4. **Track record / stats** — big tight numbers (serif or grotesk), single-accent highlights.
5. **Case studies / insights** — editorial cards, sharp corners, generous gutters.
6. **Team / credibility** — restrained portrait grid or type-led bios.
7. **Contact CTA** — full-viewport closing panel (all four end on a large CTA).

### Assets to prepare
- Brand fonts (from SA Design System) or licensed stand-ins.
- SA logos (already in the design system: full color/black/white + mark).
- 1 hero moment asset (WebGL gradient config, a single strong photo, or a bg video).
- SVG icons for practice areas (code-generatable).
- Optional noise/grain overlay (code-generatable).

---

## The four teardown files
- `2026-07-14-vuna-partners-teardown.md`
- `2026-07-14-tres-mares-capital-teardown.md`
- `2026-07-14-halston-architecture-teardown.md`
- `2026-07-14-cura-climate-teardown.md`
