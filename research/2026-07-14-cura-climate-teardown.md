# Website Teardown — CURA Climate

- **URL:** https://www.curaclimate.com/
- **Built by:** Yugen Agency (footer credit: "Website by Yugen Agency")
- **Platform:** **Webflow** (confirmed — `<meta name="generator" content="Webflow">`, `data-wf-*` attributes, `cdn.prod.website-files.com` asset host, "This site was created in Webflow" comment). Uses the **Finsweet Client-First** class-naming system (confirmed — `base-color-neutral--*`, `text-color--text-primary`, `padding-global`, `container-large`, `heading-style-h1`).
- **Last published:** Wed Jun 17 2026 (from Webflow HTML comment)
- **Date analyzed:** 2026-07-14
- **Site type:** Single-page marketing site for a climate-tech / decarbonized-cement company (Calgary, AB). Sharp, industrial-editorial aesthetic.

> **Method note:** Full raw HTML (61 KB) and the shared CSS (156 KB) were fetched and parsed directly. The custom JavaScript is entirely inline in the HTML (Lenis + Swiper configs). GSAP + ScrollTrigger + SplitText and Lenis + Swiper are loaded as libraries, and the DOM is pre-wired for GSAP animation, but the GSAP *initialization* code is **not present in the served static source** (see Effects and Notes). Everything below marked "confirmed" comes from source; motion behavior of the marquee/reveals is **inferred** from library presence + DOM structure + CSS.

---

## Tech Stack

| Technology | Evidence | Purpose | Status |
|---|---|---|---|
| **Webflow** | `generator` meta, `data-wf-domain/page/site`, `cdn.prod.website-files.com` | CMS, hosting, visual build | Confirmed |
| **Finsweet Client-First** | Class names `base-color-neutral--black`, `padding-global`, `container-large`, `heading-style-h*` | Design-system / naming convention | Confirmed |
| **jQuery 3.5.1** | `jquery-3.5.1.min.js` (Webflow default) | DOM/event dependency for Webflow + Lenis selectors | Confirmed |
| **Webflow IX2 engine** | `webflow.schunk.*.js`, `webflow.50d56842.*.js`, 13× `data-w-id` | Native scroll/hover/click interactions | Confirmed |
| **GSAP 3.15.0** | `cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js` | Animation engine | Confirmed loaded (init code not in source) |
| **GSAP ScrollTrigger 3.15.0** | `ScrollTrigger.min.js` | Scroll-scrubbed / pinned animation | Confirmed loaded (init not in source) |
| **GSAP SplitText 3.15.0** | `SplitText.min.js` | Character/word/line text reveals | Confirmed loaded (init not in source) |
| **Lenis 1.2.3** | `unpkg.com/lenis@1.2.3` + inline `new Lenis({lerp:0.1,...})` | Smooth scroll (JS-driven inertia) | Confirmed + configured |
| **Swiper 8** | `unpkg.com/swiper@8/swiper-bundle.min.js` + 2 inline `new Swiper()` | Feature carousel + partners slider | Confirmed + configured |
| **Google WebFont Loader** | `webfont.js` + `WebFont.load({google:{families:["Geist:300,400,500,600,700"]}})` | Loads Geist font | Confirmed |
| **PP Frama (Pangram Pangram)** | `@font-face` → self-hosted `PPFrama-Regular/Medium.woff2` | Display/heading typeface | Confirmed (commercial font) |
| **Vimeo (progressive playback)** | `<video>` `player.vimeo.com/progressive_redirect/playback/1173981902/.../1080p` | Background video in pinned section | Confirmed |
| No analytics/GTM/cookie banner found in static source | — | — | Note |

---

## Design System

### Colors (from CSS custom properties — `:root`)

| Token | Value | Role |
|---|---|---|
| `--base-color-neutral--black` | `#15130f` | Primary dark — **warm near-black** (not pure #000) |
| `--white-300` (body bg) | `#edeee8` | Page background — warm off-white/bone |
| `--white-200` | `#fbfcf7` | Lighter warm white |
| `--white-100` | `#ffffff` | Pure white (hero top) |
| `--base-color-brand--blue` | `#2d62ff` | **Electric blue** accent / links / focus |
| `--base-color-brand--blue-light` | `#d9e5ff` | Blue tint |
| `--base-color-brand--blue-dark` | `#080331` | Deep indigo |
| `--base-color-brand--pink` | `#dd23bb` | Magenta accent |
| `--base-color-brand--pink-light / -dark` | `#ffaefe` / `#3c043b` | Pink tints |
| `--orange` | `#e74918` | Orange accent |
| `--orange-200` | `#e77149` | Soft terracotta |
| `--earth` | `#b7a798` | Warm taupe (brand "earth" neutral) |
| `--green-100 / --green-200` | `#dbfbd9` / `#29553e` | Loop section bg / big-text green |
| `--red-100 / --red-200` | `#9e362a` / `#4f1817` | Nav hover / deep brick |
| `--black-600 / -500` | `#272525` / `#353535` | Soft blacks (dividers, text) |
| Neutral ramp | `#eee #ccc #aaa #666 #444 #222 #111` | UI grays (Client-First scale) |
| System | success `#cef5ca`/`#114e0b`, warning `#fcf8d8`/`#5e5515`, error `#f8e4e4`/`#3b0b0b` | Form states |

**Signature gradients (hero):**
- Hero top: `linear-gradient(180deg, #f7f2e6, #ffffff 85%)` — cream → white
- Hero bottom band: `linear-gradient(#e07652 25%, #7a402d)` — **terracotta → burnt clay** (evokes cement/kiln/earth)

**Palette feel:** Warm, earthy, industrial. A bone/cream canvas + warm near-black text, punctuated by an electric-blue accent and hot terracotta — reads as "modern industrial + optimistic climate-tech" rather than sterile corporate. Very little pure black or pure white.

### Typography

Two-family system: **PP Frama** (display) + **Geist** (body/UI).

| Role | Font | Weight | Size (desktop → mobile) | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| H1 | PP Frama | 500 | `5.25rem` (84px) → 3.5rem (≤991) → 2.5rem (≤767) | ~0.9–1 | tight (-.02/-.04em) |
| H2 | PP Frama | 500 | `4rem` (64px) → 3rem → 2.25rem | `1` | tight |
| H3 | PP Frama | 500 | `2rem` (32px) | `1.2` | tight |
| H4 | PP Frama | 500 | `1.38rem` (~22px) | `1.3` | — |
| Giant loop text | Geist | 500 | `14.26rem` → `7.5rem`, UPPERCASE | `0.9` | `-.04em` |
| Body large | Geist | 400 | `1.5rem` | 1.3 | — |
| Body medium | Geist | 400 | `1.25rem` | 1.3 | — |
| Body regular | Geist | 300–400 | `1rem` | `1.3` | — |
| Body small / meta | Geist | 400 | `0.875rem` | 1.3 | — |
| Eyebrow / label / nav | Geist | 500 | small | — | **`.06em`** (wide, uppercase) |

**Font files (confirmed):**
- `…/69b0fe4099e03b18dbd85dca_PPFrama-Regular.woff2` (weight 400)
- `…/69b0fe40f67c9dd263a26030_PPFrama-Medium.woff2` (weight 500)
- Geist 300/400/500/600/700 via Google Fonts (`fonts.googleapis.com`)
- Fallback stacks: `Pp Frama, Verdana, sans-serif` / `Geist, sans-serif`

**Typographic feel:** The premium/sharp look comes from **PP Frama** — a contemporary Pangram Pangram display face with subtle character — set large (84px H1), Medium weight, and tightly tracked, against clean **Geist** body copy. The contrast of an editorial display face + a neutral geometric UI sans is the core "expensive" move.

### Spacing System

- `padding-global`: `padding-left/right: 3vw` (fluid side gutters everywhere)
- Containers: `container-large` `max-width: 240rem` (effectively full-bleed), `container-medium` `64rem`, `container-small` `48rem`
- Section rhythm: `padding-section-large` `9.38rem` (150px) top+bottom; `padding-section-medium` `5rem`
- Base unit is rem-based (Client-First convention). Generous vertical whitespace (150px sections) is a major driver of the "premium, uncrowded" feel.
- Border-radius: minimal — mostly `0`, small `.25rem`/`3px`; one pill `3.75rem`. Sharp corners = the "sharp/modern" signature.
- Box-shadows: essentially **none** on content (only Webflow default focus rings). Flat, borderless, line-based design language.

### Responsive Approach

- **Desktop-first** Webflow breakpoints (max-width): `991px`, `767px`, `479px`; one `min-width:768px`.
- Type scales down in explicit steps (no `clamp()` fluid typography — stepped at breakpoints). Fluid element comes from `vw`-based gutters (`3vw`) and viewport-relative sizing (hero decor `48vw`, loop text in rem).
- Mobile hides decorative structure (`.hide-mobile-landscape` on vertical lines, `.home-hero_decor-image.mobile` swaps).

---

## Effects Breakdown (grouped top → bottom)

| # | Section | Effect | Implementation | Complexity | Cloneable? |
|---|---|---|---|---|---|
| 1 | Global | JS smooth scroll (inertia) | Lenis 1.2.3, `lerp:0.1` | Low | ✅ Easy |
| 2 | Nav | Sticky bar, link hover color→brick, active-state indicator | CSS transition + Webflow IX2 (`data-w-id`) | Low | ✅ |
| 3 | Hero | Split cream/terracotta layout, offset decor image, blueprint vertical lines | CSS gradients + absolutely-positioned image + `mix-blend-mode:difference` lines | Med | ✅ |
| 4 | Hero | Headline reveal | SplitText char/word reveal (lib loaded; init not in source) | Med | ✅ (GSAP) |
| 5 | Loop | **Pinned 250vh video section** | `loop_height:250vh` + `loop_sticky:position:sticky;top:0` + autoplay Vimeo `<video>` + 80% black overlay | Med | ✅ |
| 6 | Loop | **Giant horizontal marquee** ("Decarbonizing cement at the source." @14.26rem) | Duplicated `.loop-group` structure = canonical GSAP `horizontalLoop`/scroll-velocity marquee (init not in source) | Med-High | ✅ w/ GSAP helper |
| 7 | Feature | Fade carousel with heading slide-up reveal | Swiper 8 `effect:'fade', crossFade` + custom `slideChange` handler animating `.heading-style-h3` `translateY(100%)→0` | Med | ✅ |
| 8 | Feature/CTA | **Corner-bracket buttons** | 4 SVG L-corners (`.button-border-shape` + `is-top-right/bottom-left…`) absolutely inset to each corner; hover animates (IX2) | Low-Med | ✅ |
| 9 | Partners | Logo slider + color-swap logos | Swiper 8 (`.swiper1`, nav+pagination) + `.partners_slider-logo.is-black/.is-white` hover swap + edge overlay | Low | ✅ |
| 10 | Blogs/Press | Card hover interactions | Webflow IX2 (`data-w-id` on `.blogs_item-link`) | Low | ✅ |
| 11 | Global decor | Blueprint vertical guide-lines overlay | `.line-wrapper` (opacity .2, `mix-blend-mode:difference`) with `.vertical-line._15` (2px, `#ffffff26`) | Low | ✅ |
| 12 | CTA | Location map graphic + coordinate SVG | Static SVG (`51°3'52"N 114°4'0.3"W` Calgary) | Low | ✅ |
| — | Global | Loader spinner | Only `@keyframes spin` (`.8s linear infinite`) in entire CSS | Trivial | ✅ |

---

## Implementation Details (with the "reveal")

### Smooth scroll (Lenis) — confirmed inline
```js
let lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, gestureOrientation: "vertical", normalizeWheel: false, smoothTouch: false });
function raf(time){ lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);
// $("[data-lenis-start/stop/toggle]") wire nav/menu to pause scroll
```
**Reveal:** The whole site's "weighty, high-end glide" is one library with `lerp:0.1`. `smoothTouch:false` keeps mobile native. This is the single biggest, cheapest premium-feel upgrade.

### Pinned video + giant marquee (the signature section)
DOM (confirmed):
```html
<section class="section_loop">
  <div class="line-wrapper is-invert"> …5× .vertical-line._15… </div>   <!-- blueprint lines -->
  <div class="loop_height">                    <!-- 250vh: creates scroll distance -->
    <div class="loop_sticky">                  <!-- position:sticky; top:0; min-height:100vh -->
      <div class="loop_component">
        <div class="loop_image">
          <div class="loop_video w-embed"><video autoplay muted loop playsinline>
            <source src="…vimeo…/1080p/file.mp4"></video></div>
          <div class="loop_overlay"></div>     <!-- opacity:.8; background:#000 -->
          <div class="home-tech_content"> H2 + body + corner-bracket button </div>
        </div>
      </div>
      <div class="loop_wrapper">                <!-- absolute inset:0 -->
        <div class="loop-mover">                <!-- grid, white-space:nowrap -->
          <div class="loop-group">×2  <div class="loop_text">Decarbonizing cement at the source.</div>×2 </div>
          <div class="loop-group"> …duplicate… </div>   <!-- 2nd group = seamless loop -->
```
CSS (confirmed): `.loop_height{min-height:250vh}` · `.loop_sticky{position:sticky;top:0;overflow:hidden}` · `.loop_text{font-size:14.26rem;line-height:.9;letter-spacing:-.04em;text-transform:uppercase;color:#29553e}` · `.loop_overlay{opacity:.8;background:#000;position:absolute;inset:0}`

**Reveal:** Two tricks stacked. (1) A tall (250vh) parent + a `position:sticky` child pins the video full-screen while you scroll past — pure CSS, no JS pin needed. (2) The marquee is the classic **duplicated-group** pattern (2 identical `.loop-group`s): translate the row left by exactly one group's width and reset — appears infinite. Given GSAP is loaded, this is a GSAP `horizontalLoop`/ScrollTrigger scroll-velocity marquee (init not in static source). The impressive part (giant type gliding over industrial video) is just big `font-size` + `sticky` + an x-translate loop.

### Feature carousel heading reveal — confirmed inline
```js
const swiper2 = new Swiper('.swiper2', { effect:'fade', fadeEffect:{crossFade:true}, slidesPerView:1,
  navigation:{prevEl:'.button-prev2',nextEl:'.button-next2'}, pagination:{el:'.swiper-pagination2',clickable:true},
  on:{
    beforeInit(){ /* set every .heading-style-h3 to opacity:0; translateY(100%); transition:none */ },
    init(sw){ /* animate active heading: transition:'opacity .5s ease, transform .5s ease'; opacity:1; translateY(0) */ },
    slideChangeTransitionStart(sw){ /* reset all, then rAF → animate active heading in */ }
  }});
// swiper1: standard slide, spaceBetween:20, nav .button-prev1/next1
```
**Reveal:** Swiper handles the crossfade; the "premium" heading slide-up is hand-written inline style toggles (`translateY(100%)→0` over 0.5s), reset every slide change via `requestAnimationFrame`. No animation library needed for the reveal itself.

### Corner-bracket buttons (`.button-border-shape`)
```css
.button-border-shape{position:absolute; inset:0% auto auto 0%;}       /* top-left */
.button-border-shape.is-top-right{inset:0% 0% auto auto;}
/* + is-bottom-right {inset:auto 0% 0% auto} · is-bottom-left {inset:auto auto 0% 0%} */
```
Each button nests 4 small SVGs (`Rectangle 4179 (Stroke)*.svg`) — one L-shaped stroke pinned to each corner, wrapped in `.button-border` / `.button-border-inner`. On hover Webflow IX2 animates them (expand/rotate).
**Reveal:** The "engineered HUD / targeting-reticle" button look is just 4 absolutely-positioned corner SVGs over a padded `<a>`. Reusable across the site.

### Blueprint vertical guide-lines
```css
.line-wrapper{opacity:.2; pointer-events:none; display:flex; justify-content:space-between; width:100%; height:100%;}
.line-wrapper.is-invert{mix-blend-mode:difference;}
.vertical-line._15{width:2px; background-color:#ffffff26;}   /* ~15% white */
```
**Reveal:** 4–5 thin absolutely/flex-spaced `<div>`s per section at ~15–20% opacity, with `mix-blend-mode:difference` so they invert over any background. Cheap, and it's a big part of the "technical / architectural drawing" credibility.

### Signature easing
Dominant transition across the site: `cubic-bezier(.165, .84, .44, 1)` (≈ easeOutQuart) at `0.3s`. Hovers use `.1s–.35s` of the same curve. Consistent use of one confident ease-out is a large part of why interactions feel "designed."

---

## Assets Needed to Recreate

**Raster (hosted on Webflow CDN, `cdn.prod.website-files.com`):**
- **2 large PNGs:** `hero v2.png` (hero decorative visual, ~48vw), `final cta.png` (CTA visual)
- **~12 AVIF frames** (`Frame 2097879***.avif`, `img01–08.avif`, `logos0*`, `Frame 100000646*.avif`) — industrial/cement process renders, diagram frames, feature imagery (many pulled from a second linked site `69b2bca7d2968b45a1e62535`)
- **~8 partner logos** in AVIF, each with **black + white variant** (`.is-black`/`.is-white`) for hover swap — Captura, UCeed, NorthX Climate Tech, Amplify Capital, Zacua Ventures, Acciona, Aecon, Grand Forks Concrete
- **4 press thumbnails** (AVIF) — BBA×CURA, CURA×NorthX, CURA×MaRS, Titan×CURA
- Favicon `Favicon (32x32).png`, apple-touch `Webclip (256x256).png`

**Vector / code-generatable (SVG):**
- 4 corner-bracket SVGs `Rectangle 4179 (Stroke)*.svg` — **reproducible as inline SVG or CSS pseudo-element borders**
- Logo animation frames `Cura01–04.svg` (likely a 4-frame logo build/morph)
- Icon groups `Group 39561–39564.svg`, `Group 39564.svg`
- Coordinate/map SVG `51° 3′ 52″ N 114° 4′ 0.3″ W.svg` (Calgary geo-label) — recreate as text/SVG

**Video:**
- 1 Vimeo-hosted 1080p MP4 (`playback/1173981902`) — industrial/cement footage, autoplay-muted-loop. Recommend self-hosting an optimized/compressed `.webm`+`.mp4` (~1–3 MB) instead of Vimeo for control/performance.

**Code-generated, no assets needed:** vertical guide-lines (divs + blend mode), corner brackets (SVG/CSS), all gradients, dividers (1px lines), the marquee, hover states. No noise/grain overlay is used.

---

## Build Plan

**Recommended stack (for the new advisory-firm site):** Next.js (App Router) + Tailwind CSS. This gives the same clean, token-driven Client-First feel with better performance and control than Webflow, and native support for the exact motion libraries.

**npm packages:**
- `gsap` (v3.13+ — **SplitText & ScrollTrigger are now free** in the core package) — pinned/scrubbed sections, marquee, text reveals
- `lenis` (or `@studio-freight/react-lenis`) — smooth scroll, `lerp:0.1`
- `swiper` **or** `embla-carousel-react` (lighter) — feature + partner sliders
- `geist` (npm, Vercel — free OFL) for the body font
- **PP Frama** — commercial license from Pangram Pangram required (see Notes); self-host woff2
- Optional: `next/image` for AVIF pipeline (matches their AVIF-first asset strategy)

**Design tokens to port first:** the color custom-properties table above, the two font families, section rhythm (`3vw` gutters, `150px`/`80px` section padding), sharp `0`/`.25rem` radii, and the single easing `cubic-bezier(.165,.84,.44,1)`.

**Section-by-section build order (matches source DOM):**
1. **Global shell** — Lenis provider, font `@font-face` (PP Frama) + Geist, CSS var tokens, `.padding-global`/container utilities, the reusable `VerticalLines` overlay component + `CornerBracketButton` component.
2. **Nav** — sticky, transparent → link hover color, mobile menu with Lenis stop/start.
3. **Hero** (`section_home-hero`) — split cream-gradient top / terracotta-gradient bottom band, offset `48vw` decor image, blueprint lines, SplitText H1 reveal.
4. **About** (`section_home-about`) — content blocks, 8%-of-global-CO₂ problem framing.
5. **Loop** (`section_loop`) — the hero moment: 250vh sticky wrapper + background video + 80% overlay + GSAP horizontal marquee (14rem type). Build this second-to-last (highest effort).
6. **Feature** (`section_feature`) — Swiper fade carousel, 3 features, per-slide heading slide-up, icons (4rem), corner-bracket CTAs. (Note: source also ships a hidden `section_home-tech hide` variant.)
7. **Partners** (`section_partners`) — logo slider, black/white hover swap, 8 logos.
8. **Divider** (`section_divider`) — 1px `#2725251a` rule.
9. **Blogs/Press** (`section_blogs`) — 4 news cards, hover IX2 → CSS transition, image + title.
10. **CTA** (`section_cta`) — dual images, map + coordinate graphic, "Speak with us."
11. **Footer** — company links, LinkedIn, privacy/terms, newsletter form.

---

## Notes / Gotchas

- **GSAP init not in static source.** GSAP + ScrollTrigger + SplitText are loaded and the DOM is pre-wired (duplicated `.loop-group` for a marquee; `.heading-style-h*` for reveals), but the only inline custom JS is the Lenis config and the two Swiper setups. Likely the GSAP code is injected via a Webflow embed that wasn't in the fetched static HTML, or reserved for other pages. When rebuilding, you must write the marquee/reveal logic yourself (standard GSAP `horizontalLoop` helper + `SplitText`).
- **PP Frama is a commercial font** (Pangram Pangram). It's the single biggest contributor to the premium look — budget for the license, or substitute a comparable contemporary display face if licensing is a blocker. Geist is free (OFL) via npm.
- **SplitText/ScrollTrigger licensing:** free as of GSAP 3.13 (May 2025); the site is on 3.15, so no Club membership needed.
- **`container-large: max-width:240rem`** is effectively uncapped — the design is intentionally full-bleed with only `3vw` side padding. On very wide monitors content spans edge-to-edge; replicate that (don't center in a narrow max-width) to keep the expansive feel.
- **`mix-blend-mode:difference`** on the guide-lines can repaint on scroll — cheap here (thin divs) but keep an eye on it if you layer many.
- **Vimeo background video** adds a third-party dependency and weight; self-host a compressed loop instead.
- **No custom cursor, no noise/grain, no page-transition library, no parallax multipliers** were found — the "premium" comes almost entirely from **type (PP Frama + Geist), generous whitespace (150px sections), a restrained warm palette with one electric accent, sharp 0-radius corners, one consistent ease-out, Lenis smooth scroll, and the pinned-video + giant-marquee moment.** These are all high-ROI and easy to replicate.
- **Accessibility watch-outs to fix in the rebuild:** autoplay video needs a reduced-motion fallback; giant marquee should respect `prefers-reduced-motion`; ensure the terracotta/cream contrast on hero body copy meets AA.

### What makes it feel sharp / modern / premium (for the advisory-firm build)
1. **Editorial display type set large + tight** (PP Frama Medium, 84px H1, negative tracking) over neutral Geist body.
2. **Warm, restrained palette** — bone/cream + warm near-black, one electric-blue accent, terracotta warmth — instead of generic corporate blue-on-white.
3. **Extreme whitespace** (150px section padding, full-bleed containers) = confidence.
4. **Line-based, flat, 0-radius** UI with thin blueprint guide-lines and corner-bracket buttons = "engineered / precise."
5. **One signature motion moment** (pinned video + giant scrolling marquee) + globally smooth Lenis scroll + a single consistent ease-out — motion feels intentional, never busy.
