# Website Teardown — Tres Mares Capital

- **URL analyzed:** https://www.tresmarescapital.com/en/
- **Built by:** No agency credit in source (custom bespoke theme named `tresmares`; motion stack + fonts are the signature of an awwwards-tier freelance/studio build — see Notes). Not inferable to a named agency from the markup.
- **Platform:** WordPress 7.0.1 with a hand-coded custom theme (not a page builder). Multilingual via WPML. Front end is a bespoke component-driven JS app layered on top of WordPress-as-CMS.
- **Date analyzed:** 2026-07-14
- **What it is:** Pan-European alternative investment firm (private equity, direct lending, fund of funds, fund financing). The site's job is to convey trust + sophistication for an SME-growth capital firm.

---

## 1. Tech Stack

| Technology | Evidence | Purpose | Confirmed / Inferred |
|---|---|---|---|
| WordPress 7.0.1 | `<meta name="generator" content="WordPress 7.0.1">`; `/wp-content/` paths | CMS / content backend | **Confirmed** |
| Custom theme `tresmares` | `wp-content/themes/tresmares/` for CSS, JS, fonts, SVGs | Bespoke front end (no Elementor/Divi/WPBakery markup present) | **Confirmed** |
| WPML 4.9.5 | `<meta generator="WPML ver:4.9.5">`; `sitepress-multilingual-cms` plugin; EN/ES language switch | Multilingual (EN/ES) | **Confirmed** |
| WP Rocket 3.21.3 | `<meta generator="WP Rocket 3.21.3" data-wpr-features="...delay_js defer_js minify_js minify_css preload_links...">` | Perf: JS delay/defer, CSS/JS minify, lazyload, link preload | **Confirmed** |
| GSAP 3.14.2 | `version:"3.14.2"` ×6 in `vendor.min.js`; `gsap` ×64 | Core animation engine | **Confirmed** |
| GSAP ScrollTrigger | `ScrollTrigger` in vendor; `scrub:!0` ×25, `start:"top bottom"` etc. in app | Scroll-scrubbed + reveal animations, pinning | **Confirmed** |
| GSAP SplitText | `SplitText` in vendor; `type:"words"`/`type:"lines"`, `chars`, `linesClass` in app | Split text into lines/words/chars for staggered reveals | **Confirmed** |
| GSAP Draggable | `Draggable` in vendor; `Draggable.create`, `type:"x"`, `edgeResistance` in app | Drag carousels (team, footer) | **Confirmed** |
| GSAP Flip + Observer | `Flip` ×7, `Observer` ×30 in vendor | Layout transitions / unified input observer | **Confirmed** |
| Lenis (smooth scroll) | `lenis` ×25 in vendor; `lerp` ×16, `lenis` ×3 in app | Smooth momentum scrolling (drives ScrollTrigger) | **Confirmed** |
| Taxi.js (@unseenco/taxi) | `data-taxi-view="default"` + `data-taxi-slug="home"`; `Transition` ×120, `onEnter/onLeave/onEnterCompleted`, `Renderer` in app | AJAX page transitions (no full reloads between pages) | **Confirmed** |
| Three.js / WebGL | `WebGLRenderer` ×32, `ShaderMaterial` ×16, `PerspectiveCamera`, `BufferGeometry` in vendor; GLSL vertex/fragment shaders (`uMouse`, `uTexture`, `uHeightMap`, `uAlphaMap`) in app; fixed `.canvas` element | Mouse-driven image distortion / shader layer | **Confirmed (present); exact visual effect inferred)** |
| Custom multi-state cursor | `.cursor-follow/.cursor-view/.cursor-drag` markup + CSS; `cursor` ×57 in app | Branded custom cursor | **Confirmed** |
| Font Awesome 6 Pro | `@font-face` `fa-solid-900`, `fa-light-300`, `fa-thin-100` etc. | Icon set (licensed Pro tier) | **Confirmed** |
| YouTube iframe API | `<script src="https://www.youtube.com/iframe_api">` | Video embeds | **Confirmed** |
| Google Tag Manager | `googletagmanager` ×3; dns-prefetch | Analytics/tag management | **Confirmed** |
| CookieYes | `cdn-cookieyes`, `cookieyes` refs; dns-prefetch | Cookie consent (GDPR) | **Confirmed** |
| Build tooling (webpack/rollup) | `app.min.js` + `vendor.min.js` split, module aliases (`S.A`, `L.A`), `#define GLSLIFY 1` in shaders | Bundled ES modules + GLSL import (`glslify`) | **Inferred** |

**Third-party libraries loaded:** GTM, CookieYes, YouTube iframe API only. Notably lean — everything visual is first-party.

---

## 2. Design System

The premium feel comes from three restraint decisions: (1) a **monochrome palette** broken by a **single brand red**, (2) a **two-font serif/grotesque pairing** from Pangram Pangram, and (3) **fully viewport-relative (vw) fluid sizing** so every proportion is pixel-locked to the screen at any width.

### 2.1 Colors (from CSS custom properties in `style.css`)

| Token | Value | Role |
|---|---|---|
| `--main` | `#e41613` | **Brand red** — the only chromatic color; used for cursor, bold/emphasis words, hover states, map pins |
| `--bg` / `--white` | `#ffffff` | Page background (light, airy) |
| `--black` | `#000000` | Pure black (rare, structural) |
| `--darkest` | `#2b2b2b` | **Body text** — softened near-black, not pure #000 (key sophistication cue) |
| `--overlay` | `#18181a` | Dark overlay panels |
| `--dark` | `#aaaaaa` | Mid grey |
| `--medium` | `#d5d5d5` | Grey |
| `--light` | `#e5e5e5` | Light grey |
| `--lighter` | `#f2f2f2` | Lighter grey |
| `--lightest` | `#f7f7f7` | Section tint (near-white) |
| `--border` | `rgba(44,42,43,.4)` | Hairline dividers |
| `--border2` | `hsla(40,39%,95%,.4)` | Warm off-white border |
| `--hint` | `rgba(44,42,43,.5)` | Muted/placeholder text |
| `--alert` | `#ffd702` | Yellow (form states) |
| `--error` | `#d30000` | Red (form errors) |
| `--shadow` | `0px 10px 10px 0px rgba(0,0,0,.2)` | Soft elevation |

Palette philosophy: **white canvas + 6-step neutral grey ramp + one red.** No gradients-as-decoration; gradients are only used as subtle grey image veils (see §4).

### 2.2 Typography

Two self-hosted families (woff2/woff/ttf) from Pangram Pangram foundry:
- `--font-primary: "PP Fragment Serif", "Time New Roman", serif` — display serif (elegance / editorial accents, numbers)
- `--font-secondary: "PP Neue Montreal", "Helvetica", "Arial", sans-serif` — UI + body grotesque (neutral, Swiss)

**Root sizing is fluid:** `html { font-size: 0.667vw }` → ~9.6px at 1440px, ~12.8px at 1920px. Everything is authored in `vw` (and `rem` off this base), with `min()` clamps on smaller breakpoints.

| Role | Font | Weight | Letter-spacing | Line-height | Size (vw → px@1440) |
|---|---|---|---|---|---|
| Hero display (`.display.--3xlarge`) | PP Neue Montreal | 500 (Medium) | `-0.04em` | ~0.9 | `11.667vw` → ~168px (bold words render `--main` red) |
| Serif mega (`.display.--4xlarge`) | PP Fragment Serif | 400 | `20%` (wide) | 1.2 | `16.667vw` → ~240px |
| Section display (`.display.--xlarge`) | PP Neue Montreal | 500 | `-0.04em` | 0.95 | `5vw` → ~72px |
| Serif stat/number (`.--xlarge.--serif`) | PP Fragment Serif | 400 | `-0.05em` | — | `5vw` (e.g. "2014", "+3.500") |
| Large body lead | PP Neue Montreal | 400/700 | `-0.02em` | — | `--xlarge`/`--large` |
| Small UI / labels | PP Neue Montreal | 500–700, often `--uppercase` | `+0.02em` / `+0.5px` | — | `--xsmall` (`~0.75–0.875vw`) |

Font files (self-hosted at `wp-content/themes/tresmares/fonts/`):
- `PPNeueMontreal-Regular` / `-Medium` / `-Bold` (.woff2, .woff, .ttf)
- `PPFragment-SerifRegular` (.woff2, .woff, .ttf)

**Typographic signature:** very **tight negative tracking** (−0.04em to −0.06em) + **very tight line-height** (0.9–0.95) on all large display type = condensed, confident, editorial. Small labels flip to uppercase with positive tracking. The serif/grotesque contrast (serif for numbers & emotive headlines, grotesque for everything functional) is the trust+sophistication device.

### 2.3 Spacing System (vw-based with mobile clamps)

| Token | Value |
|---|---|
| `--space` | `0.833vw` (mobile: `min(2.778vw, 11.025px)`) |
| `--space-half` | `0.417vw` (mobile: `min(1.389vw, 5.5125px)`) |
| `--gap` | `0.5vw` / `0.667vw` |
| `--radius` | `0.417vw` |
| `--radius2` | `0.625vw` |
| `--fradius` (form) | `0.208vw` (mobile `min(1.389vw, 5.5125px)`) |
| `--fheight` (form field) | `2.5vw` (mobile `min(10.556vw, 41.895px)`) |
| Grid columns | `--cols: 2 / 3 / 4 / 5` |

Everything scales together because it's all `vw` off one base → **generous, deliberate whitespace that never breaks proportion**. This is the single biggest driver of the "sharp/expensive" feel.

### 2.4 Motion tokens (CSS eases mirror the GSAP eases)

```css
--expoInOut: cubic-bezier(0.87, 0, 0.13, 1);
--expoOut:   cubic-bezier(0.16, 1, 0.3, 1);
--expoIn:    cubic-bezier(0.7, 0, 0.84, 0);
--p2Out:     cubic-bezier(0.5, 1, 0.89, 1);   /* power2.out */
--p2In:      cubic-bezier(0.11, 0, 0.5, 0);
--p2InOut:   cubic-bezier(0.45, 0, 0.55, 1);
--ease-out:  cubic-bezier(0.05, 0.76, 0.38, 1.015); /* slight overshoot */
```

In JS the ease usage is dominated by **`expo.inOut` (121×)**, then **`power2.out` (80×)** and **`expo.out` (55×)**. Durations cluster at **0.6s (47×)**, then 1s / 0.4s / 0.8s. Expo easing = the decisive, "snap-then-settle" motion that reads as premium.

### 2.5 Responsive approach

- **Breakpoints:** `600px` (phone), `1023/1025px` (tablet), `1100/1101px` (desktop). Content flips between `data-desktop` and `data-mobile` DOM variants (e.g. separate desktop 2400×1120 and mobile 360×540 SVG maps).
- **Desktop = one fluid vw system**; below `1023px` the vw base and clamps change so text/spacing stay legible.
- `viewport-fit=cover`, `--vh` custom property (`calc(var(--vh,1vh)*100)`) to handle mobile browser chrome.

---

## 3. Effects Breakdown

Grouped roughly top-to-bottom; global effects first.

| Effect | Implementation | Complexity | Cloneable? |
|---|---|---|---|
| Smooth momentum scroll | Lenis; feeds ScrollTrigger via RAF | Low | Yes — `npm i lenis` |
| Page transitions (no reload) | Taxi.js `data-taxi-view`; `onLeave`/`onEnter` fade/cover | Med | Yes — `@unseenco/taxi` |
| Custom cursor (3 states) | Fixed layer, red dot lerps to mouse; "view" circle scales in; drag state | Med | Yes — ~60 lines JS + CSS |
| WebGL shader canvas | Three.js fixed full-screen `.canvas`, GLSL with `uMouse`/`uHeightMap`/`uAlphaMap` | **High** | Partially — needs shader skill |
| Sticky header reveal | `.header .box` white panel fades opacity 0→1 on scroll (`bg .6s p2Out`), `backdrop-filter: blur(1.5px)` | Low | Yes |
| Mega-menu image previews | Submenu items show `.image` + masked SVG icon; icon tints red on hover | Low | Yes |
| Hero text reveal | SplitText lines/words + GSAP stagger, expo.out | Med | Yes |
| Stat numbers + parallax | `.columns.--parallax` scrubbed; `.--magnet` groups reveal with spatial stagger | Med | Yes |
| Reveal-on-scroll (`.--magnet`) | ScrollTrigger `once`, opacity/scale/y in, **delay = 0.00025 × element.left** | Med | Yes (clever, simple) |
| Magnetic hover buttons | mousemove → translate element toward cursor via lerp | Low | Yes |
| Pinned "Financial Solutions" | `contentscrollcenter` pinned/sticky, scrub swaps 4 panels; `.floating.--center` title | Med-High | Yes |
| Interactive Europe map | Inline SVG (desktop+mobile), office pins, `pulse-animation` radar ping, country hover images | Med | Yes |
| Draggable carousels | GSAP Draggable `type:"x"`, `edgeResistance .8/.95`, `dragResistance:0`; cursor-drag state | Med | Yes |
| Gradient-veil card hover | Grey `linear-gradient` overlay `.gradient` fades opacity→0 (`.4s p2Out`), image + title slide | Low | Yes |
| Image tint / blend | `.image.--color` uses `mix-blend-mode: multiply/darken` | Low | Yes |
| Fluid vw typography/spacing | Root `font-size:0.667vw` + vw tokens | Low | Yes (foundational) |

---

## 4. Implementation Details (with the "reveal")

### 4.1 Fluid vw system — the foundation
Everything (type, spacing, radii, field heights) is authored in `vw` off `html{font-size:0.667vw}`. **Reveal:** there's almost no media-query micro-management on desktop — the whole layout is one proportional system that scales with the window, so it always looks intentionally composed. Mobile just swaps the base and adds `min()` clamps. Copy this first; it does 50% of the "expensive" work.

### 4.2 Custom cursor (branded, 3-state)
```css
.cursor        { position:fixed; inset:0; mix-blend-mode:darken; pointer-events:none; z-index:1080 }
.cursor-follow { width:.417vw; height:.417vw; border-radius:.417vw; background:var(--main);
                 transform-origin:50% 50%; will-change:transform }              /* ~6px red dot */
.cursor-view   { width:5.375vw; height:5.375vw; border-radius:50%; background:var(--main);
                 transform:scale(0); will-change:transform }                    /* ~77px "view" circle */
.cursor { display:none !important }  /* touch devices */
```
The dot **lerps** toward the mouse each RAF frame (interpolation factor seen at `0.02` — heavy smoothing = elegant trailing). On `[data-cursor]` hover targets (images, "Know more" links) the big circle scales 0→1 and shows "View"; carousels switch to `cursor-drag`. **Reveal:** two tiny divs + `mix-blend-mode:darken` + a per-frame lerp. Cheap, unforgettable.

### 4.3 Reveal-on-scroll with spatial stagger (the `.--magnet` reveal)
From `app.min.js` (de-minified):
```js
this.$magnetItems = this.$el.querySelectorAll(".--magnet:not(.--na)");
gsap.set(this.$magnetItems[e], { opacity: 0.0001, y: "2.5vw" });   // or { scale:.96, y:60 }
ScrollTrigger.create({
  trigger: item, start: "top bottom", end: "bottom top", scrub: true, once: true,
  onEnter: () => gsap.to(item, {
    duration: 2, scale: 1, opacity: 1, ease: "expo.out",
    delay: 0.00025 * item.getBoundingClientRect().left   // ← stagger by horizontal position
  })
});
```
**Reveal:** the "choreographed" cascade isn't a hand-built timeline — the **delay is just derived from each element's `left` coordinate**, so items further right start later automatically. One line buys a diagonal reveal across any layout.

### 4.4 Magnetic buttons
`.--magnet` elements also track the pointer on hover: mousemove computes offset from center and GSAP `.to`s the element a fraction of that distance (with `expo.out`), snapping back on leave. **Reveal:** translate = `mouseDelta × ~0.2` with lerp. The same class name doubles as the scroll-reveal hook.

### 4.5 Pinned "Financial Solutions" scroll section
`section.component--contentscrollcenter[data-hide-header]` has `--count:4` and a `.sticky` stack of 4 panels (Private Equity / Direct Lending / Fund of Funds / Fund Financing), each with a `.floating.--center` title absolutely centered over a `.image.--cover.--color`. As you scroll, ScrollTrigger (`scrub:true`, pinned) cross-fades panels and animates the `--na` (not-yet-animated) content in. Mobile gets tap `anchors` instead. **Reveal:** classic pin + scrub + absolute-centered titles; the polish is the tight type and expo easing, not complex logic.

### 4.6 Interactive Europe map
Hand-built inline SVG in two variants — `#map` (2400×1120 desktop) and `#map-mobile` (360×540) — plus per-office layers (`#london`, `#madrid`, `#frankfurt`). Office pins use:
```css
@keyframes pulse-animation {
  0%  { opacity:1;     transform:translate(-50%,-50%) scale(0) }
  to  { opacity:.0001; transform:translate(-50%,-50%) scale(1) }
}
```
= a **radar-ping** ring expanding and fading. Hovering a country swaps in one of 16 country JPGs. **Reveal:** the map is static SVG art; the "aliveness" is one CSS keyframe on a couple of `.dot`s.

### 4.7 Sticky header reveal
Header is `position:sticky/fixed`, transparent with a 1px `rgba(43,43,43,.2)` bottom border. A child `.header .box` (white, `opacity:.0001`) fades to opaque as you scroll down (`transition: background-color .6s var(--p2Out)`), giving the nav a background only when needed. `backdrop-filter: blur(1.5px)` adds faint frost. **Reveal:** don't animate the header bg directly — animate a white box behind it.

### 4.8 Gradient-veil hover cards (team & solutions)
```css
.gradient { background:linear-gradient(-90deg,#eee,#efefef); opacity:1;
            transition:all .4s cubic-bezier(.5,1,.89,1) }
.card-team.--large:hover .gradient { opacity:0 }
.card-team.--large:hover .group .title { top:0 }   /* name slides up */
```
Cards sit under a light-grey gradient veil that dissolves on hover to reveal the photo, while the name/title slide in. **Reveal:** a plain grey gradient div + opacity transition — reads as an expensive "unveil."

### 4.9 WebGL shader layer (the one genuinely hard piece)
A fixed, `pointer-events:none` full-viewport `.canvas` runs a Three.js scene with custom GLSL:
```glsl
uniform sampler2D uTexture;  uniform sampler2D uHeightMap;
uniform sampler2D uAlphaMap; uniform vec4 uResolution; uniform vec2 uMouse;
// vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
```
`uMouse` + `uHeightMap`/`uAlphaMap` indicate a **pointer-driven displacement / image-distortion effect** on hero or hover imagery. **Reveal:** this is the only part that needs real shader work; the rest of the site is achievable with GSAP + CSS alone. For a clone you can substitute a CSS/GSAP hover-skew and lose very little.

---

## 5. Assets Needed to Recreate

**Photography / imagery (all under `/wp-content/uploads/`):**
- **8 team portraits** — PNG cutouts on a neutral/consistent background (`Rene`, `Norman`, `Cristina_onate`, `Eva_Lozano`, `Juan_Trevino`, `Pol_Ruiz`, `Vasil_Peres`, `Enrique_Abascal`). Consistent lighting/crop is essential to the polish.
- **4 financial-solutions images** — landscape JPGs (private equity, direct lending, fund of funds, fund financing) with a muted/desaturated treatment (they're `mix-blend-mode` tinted).
- **16 country JPGs** — one per European country for the map hover (`home_mapa_spain`, `_uk`, `_france`, `_germany`, `_italy`, `_holland`, `_belgium`, `_ireland`, `_portugal`, `_austria`, `_suecia`, `_suiza`, `_noruega`, `_dinamarca`, `_finlandia`, `_luxembourg`).
- **~5 footer/contact JPGs** (`contact-image`, `02footer`, `03footer`, `05footer`, `img-1..4`) — narrow portrait crops for the drag carousel.
- **Sourcing:** commission or use editorial/architectural stock (muted, corporate-but-warm). Keep to a single color-grade.

**Fonts (licensed — must purchase):**
- **PP Neue Montreal** (Regular/Medium/Bold) + **PP Fragment Serif** (Regular) from Pangram Pangram. Budget for web licenses. Free stand-ins that get ~80% there: *Neue Haas Grotesk / Inter / Geist* (grotesque) + *Editorial New / Fraunces / Instrument Serif* (display serif).

**Icons:** Font Awesome 6 **Pro** (licensed) — or swap for free Lucide/Phosphor. Plus custom masked SVGs (`arrow-down/left/right/download`, `closer`, and 4 solution glyphs `private-equity/direct-lending/fund-of-funds/fund-financing`) delivered via `-webkit-mask-image` so they inherit `background-color` (tint red on hover).

**Code-generatable (no asset needed):**
- The entire Europe **SVG map** (draw once, add `.dot` pins) + `pulse-animation` rings.
- All **gradients**, the grey **veil overlays**, the **cursor**, hairline borders, radii, shadows.
- All layout, spacing, and typography (pure CSS/vw).
- No raster noise/grain overlay is used (palette stays clean); an inline `data:image/svg` triangle is the only decorative SVG shape.

---

## 6. Build Plan

### Recommended stack (for the new advisory-firm site)
- **Next.js (App Router) + TypeScript** — component model matches the site's `data-component` architecture; SSR/SSG for SEO + fast first paint; easy CMS integration later. (Astro is a lighter alternative if the site is mostly static/marketing.)
- **GSAP 3 + ScrollTrigger + SplitText + Draggable** — the whole motion system. (SplitText and the newer plugins are now free in GSAP 3.13+.)
- **Lenis** for smooth scroll (`lenis`), wired to GSAP ticker.
- **CSS custom properties + a vw-based fluid scale** (or Tailwind with a custom fluid `clamp()` config). Prefer hand-authored CSS tokens to faithfully reproduce the vw feel.
- **Optional Three.js / OGL** only if you want the shader image-distortion; otherwise skip it (CSS hover does ~90% of the impression).
- Skip WordPress unless the client needs self-serve editing; if a CMS is required use a **headless CMS** (Sanity/Contentful) + Next, keeping this front end.

### npm packages
`gsap`, `lenis`, `@unseenco/taxi` (or Next's built-in transitions / `next-view-transitions`), `split-type` (if not on GSAP 3.13+ SplitText), optionally `three` + `glslify`, `imagesloaded`.

### Section-by-section build order
1. **Design tokens** — CSS variables: colors, the two font families + `@font-face`, `html{font-size:0.667vw}` fluid base, spacing tokens, the ease custom properties. Get typography (tight tracking, tight leading, serif/sans split) pixel-right before anything else.
2. **Global shell** — Lenis + GSAP ticker; custom cursor (3 states); sticky header with the fade-in `.box`; Taxi/view-transition wiring.
3. **Hero** — huge grotesque display headline (bold word → red), serif/sans subhead, SplitText line reveal on load, "Scroll" affordance.
4. **Intro text block** — centered large text, reveal-on-scroll.
5. **Stats grid** (`gridnumbers`) — serif numbers + labels, parallax columns, `.--magnet` spatial-stagger reveal + magnetic hover.
6. **Financial Solutions** (`contentscrollcenter`) — pinned/scrub panel stack with floating centered titles; mobile anchor tabs.
7. **Map** — inline SVG Europe map, office pins with pulse rings, country hover imagery.
8. **Team** (`teams`) — GSAP Draggable horizontal carousel, gradient-veil hover cards, cursor-drag state, LinkedIn links.
9. **Footer** — large `--fill` CTA headline, image drag carousel, contact CTA, magnetic links, legal/lang switch.
10. **Polish pass** — reduced-motion fallbacks, mobile DOM variants, image lazyload, preload hero image + fonts.

---

## 7. Notes / Gotchas

- **The "wow" is mostly cheap.** With the exception of the WebGL shader, every effect is GSAP + CSS. The perceived quality comes from **restraint + craft**: one red on grey, two great fonts set tight, vw-fluid spacing, and consistent expo easing. Nail those four and you're 90% there without touching a shader.
- **Signature motion = `expo.inOut`/`expo.out` at ~0.6s.** Use it everywhere for a cohesive, decisive feel. Avoid bouncy/elastic eases — they'd cheapen it.
- **Softened black (`#2b2b2b`) not `#000`** for text, and near-white section tints (`#f7f7f7`) — subtle but part of the expensive look.
- **Licensing costs:** PP Neue Montreal + PP Fragment Serif (Pangram Pangram) and Font Awesome Pro are paid. Factor licenses in, or use the free stand-ins listed in §5.
- **Premium/harder-to-clone bits:** (a) the Three.js `uMouse`/height-map image distortion (real GLSL skill); (b) Taxi.js page transitions coordinated with Lenis/GSAP without jank; (c) getting the vw system + `min()` clamps to feel right across the 600/1023/1100 breakpoints. None are blockers.
- **Performance:** WP Rocket is doing heavy lifting (delay/defer JS, minify, lazyload, link preload). On a Next build you get most of this for free (code-split, `next/image`, `next/font`). Preload the hero image (`img-4.jpg` is preloaded here with `fetchpriority="high"`) and self-hosted fonts. The `vendor.min.js` is ~1MB (GSAP + Three.js) — tree-shake/lazy-load Three only where the canvas mounts.
- **Accessibility:** custom cursor + smooth scroll need a `prefers-reduced-motion` path (disable Lenis, cursor, and scrubbed reveals); the site hides the cursor on touch already.
- **Trust/sophistication cues to carry over:** serif numerals for track-record stats, generous whitespace, a single confident accent color, editorial-tight headline typography, and calm expo motion. This is exactly the vocabulary an advisory/capital firm should borrow.
