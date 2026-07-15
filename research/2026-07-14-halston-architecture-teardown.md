# Website Teardown — Halston Architecture Template

- **URL analyzed:** https://halston-architecture-template.webflow.io/
- **Template name:** Halston — "Architecture and interior design studio"
- **Built by:** Metrik Studio (metrik.studio) — sold on the Webflow Marketplace
- **Platform:** Webflow (confirmed — `<meta name="generator" content="Webflow">`, `data-wf-site`/`data-wf-page` attributes, Webflow CDN assets, published-site banner comment)
- **Interactions engine:** Webflow **IX3** (the new GSAP-based interactions runtime), **not** legacy IX2 — see the confirmation note below
- **Date analyzed:** 2026-07-14

---

## What makes it feel sharp / modern / editorial (the thesis)

This template reads as a high-end architecture monograph, not a "website." Five things do the heavy lifting, and every one of them translates cleanly to a professional-services (advisory-firm) context:

1. **Oversized viewport-scaled display type.** Hero headline is `15vw`, section words are `8–9vw`, line-height crushed to `80%`. Type is treated as architecture — huge, tight, confident.
2. **A restrained two-typeface system.** One clean variable grotesk (**General Sans**) for everything, plus a **mono** (**JetBrains Mono**) reserved only for small tracked-out labels/eyebrows. That mono-caps "Achievements / Recognition" label is the single biggest "editorial" tell.
3. **A warm, near-monochrome palette.** Everything is derived from one greige (`#99988f`) plus a deep oxblood (`#583939`). No pure black, no pure white — warm off-whites and warm near-blacks. Calm, expensive, timeless.
4. **Grid discipline + generous fluid whitespace.** rem/clamp spacing scale, `120rem` default container, tight `3px` corner radius on imagery (sharp, not rounded/friendly).
5. **Scroll motion as choreography.** Masked SplitText reveals, image parallax, sticky 100vh reveal sections, and Lenis smooth-scroll — all disabled on mobile so it never feels janky.

---

## Tech Stack

| Technology | Evidence | Purpose |
|---|---|---|
| **Webflow** | `meta[name=generator]=Webflow`; `data-wf-site=6a060cd7503d72ff714e6294`; CDN `cdn.prod.website-files.com`; rspack@1.3.9 runtime in `webflow.js` | Site builder / hosting / CMS |
| **Webflow IX3** (GSAP-based) | `html.w-mod-js:not(.w-mod-ix3)` gate in `<head>`; interaction JSON with `wf:scroll`, `wf:transform`, `wf:class`, `scrollTriggerConfig` in chunk `a020edd6aa0eef13.js`; **`data-w-id` count = 0** | All scroll/reveal/parallax interactions |
| **GSAP 3.15.0** | `cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js` | Animation engine under IX3 + 2 custom embeds |
| **GSAP ScrollTrigger 3.15.0** | `.../ScrollTrigger.min.js` | Scroll-driven timelines, scrub, pinning |
| **GSAP SplitText 3.15.0** | `.../SplitText.min.js`; `type:"chars"/"words"/"lines"`, `mask:"words"` in chunk | Character/word/line text reveals |
| **Lenis 1.3.23** | `unpkg.com/lenis@1.3.23`; `new Lenis({autoRaf:true, anchors:true, ...})`; `lenis.css` | Smooth inertial scrolling |
| **jQuery 3.5.1** | `d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1...` | Webflow default dependency |
| **Google WebFont Loader** | `ajax.googleapis.com/.../webfont.js`; `WebFont.load({google:{families:["JetBrains Mono:300..700"]}})` | Loads JetBrains Mono |
| **General Sans (variable)** | self-hosted `@font-face` woff2 on Webflow CDN, `font-weight:200 700` | Primary display + body typeface |
| **AVIF imagery** | 30 of 41 unique images are `.avif` | Modern, efficient photo delivery |

### Confirmed vs inferred

- **Confirmed:** platform, all libraries and versions, IX3 (not IX2), the design tokens, the exact reveal/parallax/SplitText parameters (read from the IX3 JSON config), fonts, colors, breakpoints.
- **Confirmed — the IX2-vs-IX3 point:** legacy Webflow IX2 puts a `data-w-id` on every animated element and stores triggers there. This site has **zero** `data-w-id` attributes. Instead the interactions live as a JSON graph inside a webpack/rspack chunk (`a020edd6aa0eef13.js`) using the new `wf:*` schema, and elements are bound by **class/attribute selectors** (`wf:class`, `wf:attribute [animation-reveal="true"]`). The `<head>` also gates a `visibility:hidden` block on `html.w-mod-js:not(.w-mod-ix3)`. This is Webflow's newest GSAP-powered engine.
- **Inferred:** exact easing curves — the IX3 config stores eases as numeric indices (`ease:5`, `ease:11`, `ease:12`…) into an internal table that isn't human-readable in the minified chunk; only `ease:"none"` (linear, for scrub) resolves literally. I map these to plausible GSAP eases (`power2/expo.out`) in the rebuild section.

---

## Design System

### Colors

Two brand seeds; everything else is generated with `color-mix()` into 50→950 tonal ramps. No pure black/white anywhere.

| Token | Value | Resolved (approx) | Role |
|---|---|---|---|
| `--_colors---brand-accent-primary--brand-accent-default` | `#99988f` | greige / warm taupe | **Primary brand seed** — the whole neutral scale |
| `--_colors---accent-secondary--accent-secondary-default` | `#583939` | deep oxblood / brown | **Secondary accent** — dark feature sections |
| `--section-colors--light-base` (body bg) | `brand-accent-100` | ≈ `#DBDBD8` pale warm grey | Page background |
| `--section-colors--light-subtle` | `brand-accent-50` | ≈ `#E9E9E7` | Subtle light panels |
| `--text-colors--primary-text` | `brand-accent-900` | ≈ `#171715` warm near-black | Body / headings |
| `--text-colors--secondary-text` | `brand-accent-800` | ≈ `#2E2E2B` | Secondary copy |
| `--text-colors--muted-text` | `brand-accent-200` | mid greige | Meta / muted |
| `--text-colors--inverse-text` | `brand-accent-50` | warm off-white | Text on dark |
| `--section-colors--dark-base` | `brand-accent-800` | ≈ `#2E2E2B` | Dark section bg |
| `--section-colors--dark-strong` | `brand-accent-900` | ≈ `#171715` | Darkest section bg |
| `--section-colors--secondary-dark-base` | `accent-secondary-800` | deep oxblood | Feature/accent dark section |
| State — success / error / accepting / declined | `#24690a` / `#eb2c2f` / `#bee6af` / `#faea7f` | — | Form states |

Opacity ramps exist for both brand and neutral (`dark-05…dark-90`, `brand-light-10…90`) via `color-mix(... , transparent)` — used for gradient overlays and glassy blurs.

### Typography

Effectively **two typefaces**: General Sans everywhere + JetBrains Mono for labels only.

| Role | Font | Weight | Size | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Hero display (`.hero-display-large-title`) | General Sans | 600 semibold | **`15vw`** | 80% | tight (`-.5vw`) |
| Big section words (`.heading.is-typo-title`) | General Sans | 600 | **`9vw`** | 80% | tight |
| Section reveal words (`.section-reveal-large-text`) | General Sans | 600 | **`8vw`** | 100% | tight |
| "Behind" watermark text (`.large-text-behind`) | General Sans | — | `9vw`, opacity .5, inverse | — | — |
| H1 (`--h1`) | General Sans | 500 medium | `heading-size--large` clamp(1.5→2.125rem) | 100–120% | `-.025rem` |
| H2 | General Sans | 500 | `heading-size--medium` clamp(1.5→1.75rem) | — | — |
| H3 | General Sans | 500 | `heading-size--small` clamp(1.125→1.375rem) | — | — |
| H4/H5/H6 | General Sans | 500 | `heading-size--xsmall` clamp(1→1.125rem) | — | — |
| Body paragraph | General Sans | 500 | `paragraph--medium` clamp(1→1.125rem) | 130% | 0 |
| **Label / eyebrow** (`.label-text`) | **JetBrains Mono** | 400 | `paragraph--2xsmall` clamp(.8125→.875rem) | — | **tracked out `+.05rem` / `+.5vw`** |

**Weight tokens:** thin 100 · light 300 · normal 400 · medium 500 · semibold 600 · bold 700 · black 900.
**Heading size ramp (fluid clamp):** 2xsmall .8125→.9375 · xsmall 1→1.125 · small 1.125→1.375 · medium 1.5→1.75 · large 1.5→2.125 · xlarge 1.875→3 · 2xlarge 2.375→4.25 (rem).
**Line-height ramp:** 80 / 90 / 100 / 110 / 120 / 130 / 140 / 150 / 160 %.

**Font files:**
- General Sans (variable, 200–700): `https://cdn.prod.website-files.com/6a060cd7503d72ff714e6294/6a060cd7503d72ff714e62c8_GeneralSans-Variable.woff2` (`font-display:swap`)
- JetBrains Mono 300–700: Google Fonts (via WebFont loader)

### Spacing System

Everything is rem-based with `clamp()` fluid scaling (Webflow "Client-First"-style tokens).

- **Fluid rem scale:** `2xsmall` .125→.25 · `xsmall` .25→.5 · `small` .5→.75 · `medium` .75→1 · `large` 1→1.5 · `xlarge` 1.25→2 · `2xlarge` 2→3 · `3xlarge` 3→4 (rem, via clamp).
- **Fluid vw scale:** small 1.5vw · medium 2.5vw · large 5vw · xlarge 10vw.
- **Containers:** article `60rem` · narrow `90rem` · default `120rem` · wide `140rem`.
- **Container padding:** `clamp(1.5rem, 1rem + 2.5vw, 4rem)`.
- **Column helpers:** `col-2/3/4` (even) and `col-30/40/60/70` (asymmetric) computed with `calc((100% - gap)/n)`.
- **Radius:** small **`3px`** (default for images & cards — deliberately sharp) · medium `6px` · large `10px` · **max `999rem`** (pill buttons). Circles use `50%`.
- **Action/button sizes:** small clamp(2→2.5rem) · medium clamp(2.5→3.25rem) · large clamp(3→4rem).

### Responsive Approach

Standard Webflow breakpoints, mobile styles as `max-width`:

- `991px` (tablet) · `767px` (mobile landscape) · `479px` (mobile portrait); plus a `min-width:768px` block in shared CSS.
- **Motion is desktop-only.** Every scroll interaction carries `conditionalPlayback:[{type:"breakpoint", behavior:"dont-animate", breakpoints:["medium","small","tiny"]}]` — reveals/parallax simply don't run below the desktop breakpoint. Content is shown, not hidden, on mobile.
- Fluid `vw`/`clamp` typography means the display type reflows continuously rather than snapping at breakpoints.

---

## Effects Breakdown

Grouped roughly top-to-bottom. Complexity/cloneability are for a Next.js + GSAP rebuild.

| Effect | Implementation | Complexity | Cloneable? |
|---|---|---|---|
| Smooth inertial scroll | Lenis 1.3.23, `autoRaf`, `anchors`, `stopInertiaOnNavigate` | Low | ✅ trivial |
| Hero preload intro | `.hero-display-preload` overlay + label, dismissed on load | Low–Med | ✅ |
| Hero background video | Webflow `w-background-video` (mp4+webm+poster, autoplay/loop, play-pause btn) | Low | ✅ native `<video>` |
| Giant display headline | `15vw` General Sans 600, char SplitText reveal | Med | ✅ |
| SplitText char reveal | `type:"chars"`, `dur 1`, `stagger .1 from:start`, opacity 0→85%, x `2rem→0` | Med | ✅ GSAP+SplitText |
| SplitText word reveal (masked) | `type:"words"`, `mask:"words"`, `dur .6`, `stagger .05`, opacity 25→100% | Med | ✅ |
| Line-mask reveal | `yPercent ["100%","0%"]` inside clipped wrap | Med | ✅ |
| Generic scroll reveal | `[animation-reveal="true"]` + `wf:scroll` `start:"top bottom" end:"bottom bottom" scrub:.8` | Low–Med | ✅ ScrollTrigger |
| Image parallax | `yPercent` [-8%..8%] → [-40%..40%] scrub; img `height:110–140%`, `top:-10/-20%` | Med | ✅ |
| Sticky reveal section | `.section-reveal-sticky` `position:sticky; height:100vh` + inner scale/clip reveal | Med–High | ✅ (pin) |
| Footer 100vh CTA reveal | `.footer-cta-large-title` `position:absolute; height:100vh` sticky "Consultation" | Med | ✅ |
| Animated pill button | `.large-action-button` dual text (`is-1st/is-2nd`) + `-bg-animation` + icon swap on hover | Med | ✅ CSS/GSAP |
| Radial text marquee | GSAP `rotation:360` wrap / `-360` text, `dur 20`, `ease none`, `repeat -1` | Low | ✅ |
| Floating form labels | GSAP `y:-18, scale:.75` on focus/fill, `power2.out .3s` | Low | ✅ |
| Mega-menu ("More") | `.mega-menu` dropdown w/ `backdrop-filter:blur(20px)` + link line reveals | Med | ✅ |
| Menu blur / glass | `backdrop-filter:blur(20px)` (×10), `mix-blend-mode:multiply` (×6) on imagery | Low | ✅ |
| Achievement counters/thumbs | CMS list of stats + hover thumbnail reveal (`achievement-thumb-reveal-bg`) | Med | ✅ |
| Slider(s) | IX3 `slider` timelines (`slider-image is-2nd/3rd/4th`, timeline color) | Med | ⚠️ rebuild w/ Embla |

---

## Implementation Details (real config + the rebuild "reveal")

All parameters below are read directly from the IX3 timeline JSON in `a020edd6aa0eef13.js`.

### 1. Scroll reveal system `[animation-reveal="true"]`
**What's really happening:** every reveal element is pre-hidden by the `<head>` `visibility:hidden` block, then IX3 binds a scroll trigger by attribute:
```js
// IX3 config (verbatim shape)
triggers: [["wf:scroll", { controlType:"scroll",
  scrollTriggerConfig:{ clamp:true, start:"top bottom", end:"bottom bottom",
    scrub:0.8, enter:"play", leave:"none", enterBack:"none", leaveBack:"none" }},
  ["wf:attribute", '[animation-reveal="true"]', { firstMatchOnly:false }]]]
conditionalPlayback:[{ type:"breakpoint", behavior:"dont-animate",
  breakpoints:["medium","small","tiny"] }]
```
**Rebuild (GSAP):**
```js
gsap.utils.toArray('[data-reveal]').forEach(el => {
  gsap.from(el, { autoAlpha:0, yPercent:100, ease:'none',
    scrollTrigger:{ trigger:el, start:'top bottom', end:'bottom bottom', scrub:0.8 }});
});
```

### 2. SplitText character reveal (hero / large headings)
```js
// IX3: timing {duration:1, stagger:{each:.1, from:"start"}, ease:0}
// properties: opacity ["0%","85%"], x ["2rem","0rem"]; splitText {type:"chars"}
```
**Rebuild:**
```js
const split = new SplitText(h1, { type:'chars' });
gsap.from(split.chars, { opacity:0, x:'2rem', duration:1,
  stagger:{ each:0.1, from:'start' }, ease:'power3.out',
  scrollTrigger:{ trigger:h1, start:'top 80%' }});
```

### 3. SplitText masked word reveal
```js
// IX3: timing {duration:.6, stagger:{each:.05}, ease:5}
// properties: opacity ["25%","100%"]; splitText {type:"words", mask:"words"}
const split = new SplitText(el, { type:'words', mask:'words' });
gsap.from(split.words, { yPercent:100, opacity:0.25, duration:0.6,
  stagger:0.05, ease:'power2.out', scrollTrigger:{ trigger:el, start:'top 80%' }});
```

### 4. Image parallax
**Reveal:** the image is oversized (`height:110%` with `top:-10%`, or `height:140%`/`top:-20%` for `full-parallax-image`) inside an `overflow:hidden` wrap, then translated on scrub. Observed ranges: `yPercent:["-8%","8%"]`, `["-15%","15%"]`, `["-20%","20%"]`, `["-40%","40%"]`.
```js
gsap.fromTo(img, { yPercent:-15 }, { yPercent:15, ease:'none',
  scrollTrigger:{ trigger:wrap, start:'top bottom', end:'bottom top', scrub:true }});
```

### 5. Sticky 100vh reveal section
`.section-reveal-sticky { position:sticky; top:0; height:100vh; overflow:clip; display:flex; }` — the section pins for one viewport while the inner `.section-reveal-image` / `.section-reveal-background` scale/clip in. Rebuild with ScrollTrigger `pin:true` (or CSS sticky + a scrubbed inner timeline).

### 6. Radial text marquee (verbatim custom embed)
```js
gsap.to(wrap, { rotation:360, duration:20, ease:'none', repeat:-1, transformOrigin:'center center' });
gsap.to(text, { rotation:-360, duration:20, ease:'none', repeat:-1, transformOrigin:'center center' });
```

### 7. Floating form labels (verbatim custom embed)
```js
gsap.set(label,{ transformOrigin:'left top' });
field.addEventListener('focus', () => gsap.to(label,{ y:-18, scale:0.75, duration:0.3, ease:'power2.out', overwrite:'auto' }));
field.addEventListener('blur',  () => { if(!field.value.trim()) gsap.to(label,{ y:0, scale:1, duration:0.3, ease:'power2.out' }); });
```

### 8. Animated pill button
Two stacked text copies (`.is-1st` / `.is-2nd`) and two backgrounds (`.large-action-button-bg.is-1st/.is-2nd`); on hover the bg wipes and the text swaps (translate). Radius = `999rem` (full pill). Reproduce with a CSS `:hover` translate on both layers, or a small GSAP timeline.

**Observed common timing across the whole engine:** durations `.6`, `1`, `.4`, `1.5`, `.3`, `.8`; staggers `each:50ms / 75ms / 100ms` (and `{each:.05}`, `{from:"center"}` for symmetric letter bursts); scrubs `.8` / `.9`; triggers cluster on `start:"top bottom"`, `"top 80%"`, `"top 70%"`, `end:"bottom bottom"` / `"bottom top"`.

---

## Assets Needed to Recreate

**Confirmed counts (from HTML):** 41 unique images = **30 AVIF** (photography) + **40 SVG icon instances** (11 unique-ish icon files reused) + **1 JPG** (OG image) + **1 background video** (mp4 + webm + poster).

- **Architecture/interior photography (~20–27 images):** residences, interiors, exteriors, detail shots. Warm, natural-light, calm. Delivered as **AVIF** (convert originals via `sharp`/`squoosh`). For an advisory-firm rebuild, swap to: office/architecture interiors, city skylines, boardrooms, muted portraits — same warm, restrained treatment, `3px` corner radius.
- **Background video (1):** short, muted, looping architectural clip (mp4 + webm + poster JPG). Advisory swap: slow drone/city or abstract material motion. Code-generatable poster via first frame.
- **Icons (SVG, ~11 unique):** plus (+), arrow (↗ / →), quote marks, play/pause, menu/close, small link chevrons. **All code-generatable** as inline SVG.
- **Logo:** wordmark "Halston" (text, General Sans) + a small AVIF logo symbol (`logo-symbol.avif`). Advisory: set the wordmark in the type system; commission/generate a simple monogram mark.
- **Fonts:** General Sans (free, Fontshare — self-host woff2) + JetBrains Mono (Google / self-host). Both free for commercial use.
- **Code-generatable (no assets):** all gradients/overlays (`color-mix` opacity ramps), the radial marquee text, the "behind" watermark type, dividers/lines, all reveal masks.

---

## Build Plan (Next.js + GSAP)

### Recommended stack + why
- **Next.js (App Router) + TypeScript** — target platform; SSR/SSG for SEO (advisory firms live on organic + referral).
- **Tailwind CSS + CSS variables** — mirror Webflow's token system (`--brand-*`, `--space-*`, `clamp()` type scale) as Tailwind theme tokens so the design system ports 1:1.
- **GSAP + ScrollTrigger + SplitText** — the site is *already* GSAP; reuse the exact params above. (SplitText is now free in GSAP 3.13+.)
- **Lenis** (`@studio-freight/lenis` / `lenis`) — smooth scroll, wire `lenis.on('scroll', ScrollTrigger.update)` and drive with `gsap.ticker`.
- **Framer Motion** *(optional)* — only for simple mount/hover/stagger on React components (nav, cards); keep scroll-scrub work in GSAP where it's stronger.
- **next/image** + AVIF pipeline, **next/font** (self-host General Sans + JetBrains Mono, `display:swap`).
- **Embla Carousel** — replace the Webflow sliders.

### npm packages
```
gsap  lenis  clsx  tailwindcss  @tailwindcss/typography  embla-carousel-react
framer-motion   (optional)      sharp  (build-time AVIF)
```

### Webflow-interaction → Next.js/GSAP mapping
| Webflow (IX3) | Next.js / GSAP rebuild |
|---|---|
| `[animation-reveal="true"]` + `wf:scroll` scrub | `data-reveal` attr + a single `useGSAP` hook that batches `gsap.from(...ScrollTrigger)` |
| SplitText char/word/line + `mask` | `new SplitText(el,{type,mask})` inside `useGSAP`; revert on cleanup |
| Image parallax (oversized img + scrub) | oversized `<img>`/`next/image` in `overflow-hidden` wrap + `gsap.fromTo(yPercent, {scrub:true})` |
| `.section-reveal-sticky` 100vh pin | ScrollTrigger `pin:true` **or** CSS `position:sticky` + scrubbed inner timeline |
| `w-background-video` | native `<video autoplay muted loop playsinline poster>` + IntersectionObserver play/pause |
| Radial marquee / floating labels | port the two custom GSAP embeds verbatim into `useGSAP` |
| `conditionalPlayback` desktop-only | `ScrollTrigger.matchMedia({ '(min-width:992px)': () => {...} })` or `gsap.matchMedia()` |
| Lenis smooth scroll | Lenis provider component + rAF loop synced to ScrollTrigger |
| Mega-menu / burger | React state + Framer Motion, `backdrop-blur-[20px]` |

### Section-by-section build order
1. **Foundations:** Tailwind theme = port every CSS var (colors via `color-mix` or precomputed hex, `clamp()` type scale, spacing, `3px`/pill radius). Fonts via `next/font`. Lenis + GSAP providers.
2. **Nav** (absolute overlay, inverse text, mono "Menu" label, burger, "More" mega-menu, brand slogan "architecture studio").
3. **Hero display** — bg video, preload intro, `15vw` headline w/ char reveal, service links (Architecture / Interior Design / Renovation), Recognition list, animated Consultation pill.
4. **Achievements** — mono "Achievements" label, hover-reveal thumbnails, stat row (96% · 48+ · 2012 · 180+ · 12).
5. **About grid** — philosophy statement, parallax image.
6. **Typo titles** — `9vw` "Considered / Crafted / Lasting solutions" + 3 principles.
7. **Solutions showcase** + **Quote/testimonial** (founder quote + portrait).
8. **Section-reveal** — sticky 100vh, `8vw` "Architecture interior design", service listings (Residential 48+ / Interior 62+ / Heritage 38+ / Hospitality), full-parallax image.
9. **Services fullscreen** → **Logo grid** → **Project listing** (CMS/MDX collection).
10. **CTA compact** → **Image split** → **Journal / featured blog** → **Blog listing**.
11. **Footer** — 100vh sticky "Consultation" CTA, sitemap, contact/address, credit line.

### Advisory-firm translation notes
- Keep the **two-typeface** discipline: one grotesk for all content + a **mono for labels/eyebrows** ("SERVICES", "INSIGHTS", "SINCE 2004"). This alone buys most of the editorial credibility.
- Keep the **warm near-monochrome** palette; swap the greige seed to the firm's brand neutral and the oxblood to the firm's accent — the `color-mix` ramp system regenerates everything.
- Repurpose sections literally: Achievements→**Track record / AUM / deals**; Disciplines→**Practice areas**; Projects→**Case studies / transactions**; Journal→**Insights**; Quote→**Client/partner testimonial**; Consultation CTA→**"Request a consultation."**
- Preserve `3px` sharp image corners and huge display type — those read as "serious / precise," which is exactly the register a strategic-advisory firm wants.

---

## Notes — gotchas, hard-to-clone, performance

- **IX3, not IX2 — don't go hunting for `data-w-id`.** The reveal parameters live as a JSON timeline graph in a webpack chunk, not on the elements. I've extracted the real numbers above so you can skip re-deriving them.
- **Eases are opaque.** The IX3 config encodes eases as integer indices; I couldn't resolve exact curves. Use `power2.out`/`power3.out`/`expo.out` for reveals and `none` for all scrubbed/parallax tweens (that part *is* confirmed).
- **FOUC risk / the `visibility:hidden` gate.** Webflow hides ~120 animated classes until JS runs. In a Next.js rebuild, gate reveal-hiding behind a `js-ready` class (or run reveals in `useGSAP` after mount) and **respect `prefers-reduced-motion`** — set final state immediately when reduced motion or below 992px.
- **Mobile = no motion.** Match their choice: `gsap.matchMedia('(min-width:992px)')`. It keeps low-end devices smooth and avoids Lenis+ScrollTrigger jank.
- **Lenis + ScrollTrigger must be synced** or scrubbed animations drift: `lenis.on('scroll', ScrollTrigger.update)` + `gsap.ticker.add(t => lenis.raf(t*1000))` and `gsap.ticker.lagSmoothing(0)`.
- **Performance:** big `vw` type + parallax + a bg video is GPU-heavy. Serve AVIF, lazy-load below-fold media, `preload` the hero poster, keep parallax transforms on `transform`/`opacity` only (they already do), and cap the video to a short muted loop.
- **Hardest to clone cleanly:** the sticky 100vh reveal choreography and getting the SplitText masked reveals to feel as smooth as theirs — budget iteration time on `start`/`end`/`scrub` tuning. Everything else is straightforward.
