# Website Teardown — Vuna Partners

- **URL:** https://www.vunapartners.co.za/
- **Built by:** **Closer Studio** (closerstudio.com) — confirmed: the site's custom global JS, dotLottie animation files, and WebGL gradient config are all hosted on `closerstudio.com`.
- **Platform:** **Webflow** — confirmed (`data-wf-site` / `data-wf-page` attributes, `cdn.prod.website-files.com` asset CDN, `webflow.js` runtime, `.webflow.shared.min.css`).
- **Client:** Vuna Partners — a Johannesburg-based South African private equity firm ("Cultivating wealth through partnership", FSP 50912).
- **Date analyzed:** 2026-07-14
- **Source confidence:** HIGH. Raw HTML, the full **unminified** custom JavaScript (1,922 lines), and the complete compiled CSS (94 KB) were all fetched and read directly from source. Almost everything below is confirmed-from-source, not inferred.

---

## 1. Tech Stack

| Technology | Evidence | Purpose | Status |
|---|---|---|---|
| **Webflow** | `data-wf-site="69eb…"`, `cdn.prod.website-files.com`, `webflow.a0aa6ca1…js` | CMS + hosting + base layout/CSS | Confirmed |
| **jQuery 3.5.1** | `d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.js` | Webflow dependency; used for menu `.on('click')` handlers | Confirmed |
| **GSAP 3.15.0** | `cdn…/gsap/3.15.0/gsap.min.js` + `gsap.registerPlugin(...)` | Core animation engine — every motion on the site | Confirmed |
| **GSAP ScrollTrigger 3.15.0** | `…/ScrollTrigger.min.js` | All scroll-driven reveals, pins, scrubs | Confirmed |
| **GSAP SplitText 3.15.0** | `…/SplitText.min.js` | Line/word splitting for hero + heading reveals | Confirmed (premium GSAP plugin, now free) |
| **Lenis 1.3.23** | `unpkg.com/lenis@1.3.23` + `new Lenis()` | Smooth inertia scrolling, synced to GSAP ticker | Confirmed |
| **Barba.js core** | `unpkg.com/@barba/core` + `barba.init(...)` | SPA-style page transitions (fade curtain) | Confirmed |
| **UnicornStudio 1.4.26** | `unicornstudio.js@v1.4.26` + `data-unicorn-src=…gradient.json` | WebGL/shader animated **gradient background** | Confirmed |
| **dotLottie (LottieFiles)** | `import { DotLottieWorker } from …dotlottie-web` | Looping vector animations for portfolio/news tiles | Confirmed |
| **Adobe Fonts / Typekit** | `use.typekit.net/sgx1xgz.js` | Serves Neue Haas Grotesk Display + Freight Display Compressed | Confirmed |
| **Self-hosted fonts (Stag)** | `@font-face` → `…_Stag-Medium-Web.woff2`, `…_Stag-Book-Web.woff2` | Slab-serif display + body typeface | Confirmed |
| **Finsweet Attributes** | `window.FinsweetAttributes.modules.list.restart()` | CMS list filtering / re-init after page transition | Confirmed |
| **Cloudflare Turnstile** | `data-turnstile-sitekey="0x4AAA…"` | Invisible form spam protection | Confirmed |
| **Webflow Forms** | `.subscribe-form`, `data-wait="Please wait..."` | Contact + newsletter capture | Confirmed |
| Schema.org JSON-LD | inline `<script type="application/ld+json">` Organization | SEO / rich results | Confirmed |

**Notable:** there are **zero `<img>` tags** on the homepage. Every visual is either an inline **SVG** (35 of them — logo, arrows, icons, decorative circles), a **dotLottie** vector animation, or the **WebGL gradient** background. This is a big reason the site feels crisp and weightless — no raster photography competing for attention.

---

## 2. Design System

### 2.1 Colors (all from CSS custom properties on `body`)

| Token | Value | Role |
|---|---|---|
| `--color--ivory` | `#f4eee4` | **Primary background** — warm, paper-like off-white. The signature "canvas." |
| `--color--black` | `#000000` | Primary text on ivory; dark sections; nav border |
| `--color--white` | `#ffffff` | Text over dark/WebGL hero sections |
| `--color--merlot` | `#350202` | Deep oxblood/burgundy — dark-theme section backgrounds |
| `--color--grey` | `#938d80` | Warm taupe-grey — secondary/muted text |
| `--color--bright-ochre` | `#d89a00` | Accent (gold) |
| `--color--dark-ochre` | `#a06e00` | Accent (deep gold) |
| `--color--red-ochre` | `#a65b0a` | Accent (burnt orange) |
| `--color--bright-coral` | `#f47e4a` | Accent (warm coral) — likely used in the WebGL gradient |
| body default text | `#333333` | Fallback body ink |

**Palette philosophy — the sharp/premium tell:** an extremely **restrained, warm, analog palette**. There is no cool grey, no pure-white page, no blue. The base is a single warm ivory; "color" is a tight family of earthy ochres/coral/merlot that read as gold + oxblood. Restraint + warmth = the editorial, moneyed, "old-world-meets-modern" feel. The only saturated color lives inside the animated gradient and the accents.

### 2.2 Typography — a 3-font editorial system

Fonts:
- **Stag / Stag Book** (Commercial Type — a slab serif). Self-hosted woff2/woff. `Stag Web` = Medium 500, `Stag Book Web` = Book 400.
- **Neue Haas Grotesk Display** (grotesque sans, the "real Helvetica") — via Typekit, weight 600.
- **Freight Display Compressed Pro** (`freightdispcmp-pro`) — a high-contrast **condensed display serif** — via Typekit, weights 300/400.

| Role (class) | Font | Weight | Size (desktop → mobile) | Letter-spacing | Line-height | Notes |
|---|---|---|---|---|---|---|
| `technical-standard` | Stag Web (slab) | 500 | 11px → 10px | **1.5px** | 140% | **UPPERCASE** micro-labels / eyebrows |
| `technical-standard_small` | Stag Web (slab) | 500 | 9px | 1.5px | 100% | Taxonomy tags, tiny labels |
| `h4-standard` | Neue Haas Grotesk | 600 | 38px → 28px | — | 120% | Large sans headings |
| `h4-emphasis` | Freight Disp. Compressed | 300 | **45.5px** → 35.5px | — | 100% | Elegant condensed-serif counterpart (bigger than "standard") |
| `h5-standard` | Neue Haas Grotesk | 600 | 28px → 23px | — | 110% | |
| `h5-emphasis` | Freight Disp. Compressed | 300 | 33.5px → 30px | — | 110% | |
| `h6-standard` | Neue Haas Grotesk | 600 | 21px → 19px | 0.42px | 120% | Card titles, clock |
| `h6-emphasis` | Freight Disp. Compressed | 400 | 25px → 23px | — | 100% | Card taglines (poetic lines) |
| `p-standard` | **Stag Book** (slab) | 400 | 15px → 14px | 0.7px | 140% | Body copy |

**Font file paths (self-hosted):**
- `https://cdn.prod.website-files.com/69eb764c952af7b9d55dc3d8/69eb764c952af7b9d55dc3f3_Stag-Medium-Web.woff2` (+ `.woff`)
- `https://cdn.prod.website-files.com/69eb764c952af7b9d55dc3d8/69eb764c952af7b9d55dc40b_Stag-Book-Web.woff2` (+ `.woff`)
- Neue Haas Grotesk Display + Freight Display Compressed Pro → Adobe Fonts kit `sgx1xgz` (`https://use.typekit.net/sgx1xgz.js`).

**The signature typographic move — "standard vs emphasis":** almost every heading block pairs two lines:
1. a **bold grotesque sans** statement line (`…-standard`, Neue Haas 600), and
2. a **light condensed-serif** elaboration line (`…-emphasis`, Freight Display Compressed 300/400), rendered *slightly larger* than the sans.

The tension between a tight, confident sans and an airy, tall condensed serif is what makes the type feel expensive and editorial rather than corporate. Using the **slab serif (Stag) for tiny uppercase technical labels** (instead of the usual mono) is the second distinctive tell — it gives the micro-copy warmth and a "printed report" character. Everything is tightly tracked and set on tight line-heights (100–120% on headings).

### 2.3 Spacing system

Rem-based scale exposed as custom properties (`--padding--*`):
`0 · 0.25 · 0.5 · 0.75 · 1 · 1.5 · 2 · 3 · 4 · 5 · 6 · 8 · 10 · 12 rem`

- **Section vertical rhythm is huge:** `.section-break-wrapper` = `padding: 12rem 1.5rem 10rem` (≈192px top / 160px bottom). This generous whitespace is a primary driver of the "premium, unhurried" feel.
- Horizontal gutter is a consistent `1.5rem` (24px).
- Nav bar height fixed at `64px`.

### 2.4 Layout / grid

- Fractional column tokens: `33.33% / 50% / 66.66% / 75%` (`--one-col--*`, `--two-col--*`, `--three-col--*`) — a simple editorial column system, not a 12-col grid.
- Portfolio cards: `.grid-item { aspect-ratio: 1; overflow: hidden; }` — perfect **squares**, flex column, content pinned top + bottom (`space-between`).

### 2.5 Responsive approach

Standard Webflow breakpoints. Type **scales down** from the desktop base (there is no upsizing at 1440+):

| Breakpoint | Behavior |
|---|---|
| `min-width: 1440px` | Large-desktop container/layout tweaks (no font change) |
| base (≥992px) | Full desktop; all `desktopAnimations()` run |
| `≤991px` (tablet) | `tabletAnimations()` — mobile nav + burger menu, Lottie scroll play/pause |
| `≤767px` (mobile-L) | `mobileLAnimations()` — type steps down |
| `≤479px` (mobile-P) | `mobilePAnimations()` |

JS uses `gsap.matchMedia()` with matching queries (`min-width:992`, `768–991`, `480–767`, `max:479`) so animation sets are cleanly torn down/rebuilt per breakpoint.

### 2.6 Other tokens
- `border-radius`: used sparingly (18 rules) — mostly small/pill radii on buttons/tags; the aesthetic is largely **sharp-cornered**.
- `box-shadow`: minimal (7 rules) — flat design, depth comes from motion, not shadows.
- **No** `mix-blend-mode`, `clip-path`, `mask-image`, CSS gradients, or `-webkit-text-stroke`. The only CSS `@keyframes` is `spin` (loader). All richness is GSAP + WebGL + Lottie.

---

## 3. Effects Breakdown (grouped top → bottom)

| # | Effect | Implementation | Complexity | Cloneable? |
|---|---|---|---|---|
| 1 | First-visit **preloader** (load bar + growing line) | GSAP timeline, gated by `sessionStorage.visited` | Med | Yes |
| 2 | **Page-load reveal** (nav links + hero lines stagger in, black curtain fades) | GSAP timeline + SplitText | Med | Yes |
| 3 | **WebGL animated gradient** hero background | UnicornStudio (`data-unicorn-src` JSON), fixed z-index:-10 | High (needs UnicornStudio) | Partial — replace w/ shader or CSS |
| 4 | **Lenis smooth scroll** (global inertia) | `new Lenis()` synced to `gsap.ticker` | Low | Yes |
| 5 | **Scroll-reactive nav** (links hide → burger, bar fills ivory, wordmark slides out) | Lenis `scroll` event → GSAP timelines | Med | Yes |
| 6 | **Hero SplitText line reveal** | SplitText `lines`, `y:30, autoAlpha:0, stagger:.1, dur:1.5` | Low | Yes |
| 7 | **Scrubbed word-dim reveal** (`[word-split]`) | SplitText `words` + ScrollTrigger `scrub:1`, autoAlpha .2→1 | Low | Yes |
| 8 | **Reveal-on-scroll** (grid/stat/history/news/quote/culture/etc.) | ~12 near-identical ScrollTrigger fades | Low | Yes |
| 9 | **Pinned "approach" card stack** | ScrollTrigger `pin` + panels fade out + SplitText scrub | High | Yes (fiddly) |
| 10 | **Stacked-cards scroll** (`[stacked-item]`) | ScrollTrigger `pin` + `yPercent:-30` + fade per card | High | Yes |
| 11 | **Footer "uncover" reveal** | Footer starts `yPercent:-50`, scrubs to 0 behind content | Med | Yes |
| 12 | **Portfolio square-tile hover** (text/image/link reveal + Lottie) | GSAP set/hover + dotLottie loops | Med | Yes |
| 13 | **Button label wipe** on hover | GSAP `xPercent 101 → -101 → 0` inside `overflow:hidden` | Low | Yes |
| 14 | **Slide-in contact/funding forms** (with backdrop blur) | GSAP timeline, `x:0` + stagger + `backdropFilter:blur(5px)` | Med | Yes |
| 15 | **Live Johannesburg clock** (HH:MM:SS) | `Intl.DateTimeFormat('Africa/Johannesburg')`, `setInterval 1s` | Low | Yes |
| 16 | **Barba.js page transitions** (black fade curtain) | `barba.init` + GSAP `.content-overlay` opacity | Med | Yes |
| 17 | **dotLottie scroll play/pause** (tablet/mobile) | ScrollTrigger onEnter/onLeave → player.play/pause | Low | Yes |

---

## 4. Implementation Details (with real source snippets + the "reveal")

### 4.1 Global setup — Lenis + GSAP + live clock
```js
lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
// elements can pause/resume scroll: [data-lenis-stop] / [data-lenis-start]
```
Clock (a cheap but classy detail — a "we're a real firm in Joburg" signal):
```js
const formatter = new Intl.DateTimeFormat([], {
  timeZone: "Africa/Johannesburg", hour:"2-digit", minute:"2-digit",
  second:"2-digit", hour12:false });
document.querySelectorAll("[clock]").forEach(el => el.textContent = formatter.format(now));
setInterval(updateClock, 1000);
```
Markup: `<div clock class="h6-standard">{hh}</div> <div class="h6-standard">[JHB]</div>` + a pulsing `circle-svg` dot.

### 4.2 Preloader (first visit only)
**Reveal:** it only runs once per session — `sessionStorage.visited`. The HTML adds `.show-preloader` via a tiny inline head script *before* paint to avoid a flash.
```js
if (!sessionStorage.getItem('visited')) document.documentElement.classList.add('show-preloader');
// …
preLoadTl
  .to(".load-bar",  { yPercent:-80, duration:2 }, 0.25)
  .to(".load-text-wrapper", { opacity:0 }, 2.25)
  .to(".load-line", { height:"100%" }, 2.5)
  .to(".load-line", { opacity:1, width:"100%", duration:0.75 }, ">");
// onComplete: sessionStorage.set('visited'), lenis.start(), pageLoadTl.play()
```

### 4.3 Page-load reveal timeline
```js
pageLoadTl
  .set(navLink, { visibility:"visible", y:30 }, 0)
  .from(".content-overlay", { opacity:1, duration:0.5 }, 0)   // black curtain fades out
  .add(splitA, 0.5)                                            // hero lines split-reveal
  .to(navLink, { y:0, stagger:0.1 }, 0.75)
  .to(elementLoad, { opacity:1, y:0, stagger:0.25, duration:2 }, 1)
  .to(maskOverlay, { height:"0%", duration:1.5 }, 1);          // wipe reveal
```

### 4.4 SplitText — three flavors
```js
// A) Hero, on load — lines rise in
SplitText.create("[hero-text]", { type:"lines", autoSplit:true, onSplit:(self)=>
  gsap.from(self.lines,{ y:30, autoAlpha:0, stagger:0.1, duration:1.5, clearProps:"transform" }) });

// B) Scroll-scrubbed word dimming — text "wakes up" as you scroll through it
SplitText.create(el, { type:"words", wordsClass:"word" });
gsap.from(split.words, { autoAlpha:0.2, stagger:0.1, duration:1.5,
  scrollTrigger:{ trigger:el, start:"top 80%", end:"top 60%", scrub:1 } });

// C) Line fade on enter
gsap.from(split.lines, { autoAlpha:0, y? , stagger:0.1, ease:"power2.out",
  scrollTrigger:{ trigger:el, start:"top 80%" } });
```
**Reveal:** the impressive "words gently brighten as they scroll into reading position" (B) is just `autoAlpha 0.2 → 1` on split words with `scrub:1`. Very cheap, very classy.

### 4.5 The reveal-on-scroll "recipe" (reused ~12×)
Every section (`gridAnimation`, `statAnimation`, `historyAnimation`, `newsAnimation`, `socialAnimation`, `criteriaAnimation`, `cultureAnimation`, `shareAnimation`, `quoteAnimation`…) uses the identical pattern:
```js
gsap.set(items, { autoAlpha:0, y:15 });
gsap.to(items, { autoAlpha:1, y:0, duration:1, ease:"power2.out",
  stagger:0.1, scrollTrigger:{ trigger, start:"top 70%" } });
```
**Reveal:** the entire site's "everything elegantly fades up as you scroll" is one 5-line formula — `y:15`, `stagger:0.1`, `power2.out`, trigger at `top 70%`. Tiny 15px travel + short stagger = refined, not flashy. This is the single most copyable idea for the new build.

### 4.6 Scroll-reactive navigation
```js
lenis.on("scroll", ({scroll}) => scroll > 0 ? hideNavLinks() : showNavLinks());
navTimeline.to(navLink,{ y:-30, opacity:0, stagger:0.1 })
           .set(navLink,{ display:"none" }).set(menuButton,{ display:"flex" })
           .fromTo(menuButton,{ y:30, opacity:0 },{ y:0, opacity:1, duration:0.075 });
navTimelineBG.to(".nav",{ backgroundColor:"rgba(244,238,228,1)", color:"#000000" })
             .to(".nav-border",{ backgroundColor:"#000000" })
             .to(".logo-svg .wordmark",{ x:-10, opacity:0, duration:0.5 }, 0.5);
```
**Reveal:** as soon as you scroll, the full nav links collapse into a single menu button, the transparent bar fills with ivory, and the logo **wordmark slides away leaving only the mark**. Two paused timelines toggled by a Lenis scroll callback — no scroll math.

### 4.7 Pinned "approach" cards + stacked cards (the hero interaction)
```js
// Pin the top row, fade each panel out as the next scrolls up
ScrollTrigger.create({ trigger:".approach-wrapper", pin:".approach-row_top",
  start:"top top", end:"bottom bottom" });
panels.forEach((panel,i)=>{ if(i===last) return;
  gsap.timeline({ scrollTrigger:{ trigger:panel, start:"top +=112", end:"bottom +=112",
    scrub:true, pin:true, pinSpacing:false } }).to(panel,{ opacity:0 }); });

// Stacked cards: each pins, then previous slides up -30% and fades
gsap.to(container,{ yPercent:isLast?0:-30, ease:"none",
  scrollTrigger:{ trigger:container, start:"top +=64", end:"bottom top",
    scrub:true, pin:!isLast, pinType:"transform" } });
```
**Reveal:** the "cards stack and peel away" effect is per-card `pin: true` + `scrub` + `opacity:0` / `yPercent:-30`. `pinSpacing:false` is what makes them overlap instead of pushing the page down.

### 4.8 Footer "uncover" reveal
```js
gsap.set("[footer-wrapper]", { yPercent:-50 });
uncover.to("[footer-wrapper]", { yPercent:0, ease:"none" });
ScrollTrigger.create({ trigger:"[footer-reveal]", start:"bottom bottom",
  end:"+=70%", animation:uncover, scrub:true });
```
**Reveal:** the footer sits *behind* the page content, offset up by 50%, and is "uncovered" (parallax) as you reach the bottom — that satisfying "the footer was hiding underneath" reveal. Pure `yPercent` scrub, no fixed positioning tricks.

### 4.9 Portfolio square-tile hover
Markup (`grid-item`, `aspect-ratio:1`, `overflow:hidden`): a `grid-row_top` label ("Company profile"), a `grb-row_top` with company name (`h6-standard`) + poetic tagline (`h6-emphasis`) + taxonomy tags, and a `grb-row_bottom` "Read" CTA. A looping **dotLottie** fills the tile.
```js
if (gridText.length) gsap.set(gridText, { autoAlpha:0, y:15 });
gridTL.to(gridText,{ autoAlpha:1, y:0, stagger:0.1 }, 0.25)
      .to(gridImage,{ autoAlpha:1 }, 0.5)
      .to(gridLink,{ autoAlpha:1, y:0 }, 1);
```
dotLottie init (shared worker, freezes offscreen — performance-minded):
```js
new DotLottieWorker({ canvas, src, autoplay:true, loop:true, speed:1,
  workerId:"shared-dotlottie-worker",
  renderConfig:{ autoResize:false, freezeOnOffscreen:true, devicePixelRatio:2 } });
```

### 4.10 Button label "wipe"
```js
buttonHover.to(button,{ duration:0.3, xPercent:101, ease:"power2.inOut" })
           .set(button,{ xPercent:-101 })
           .to(button,{ duration:0.5, xPercent:0 });
buttonItem.addEventListener("mouseenter", ()=> buttonHover.play(0));
```
**Reveal:** the label slides out to the right, teleports to the left, and slides back — inside an `overflow:hidden` wrapper (`.hover-wrapper`) it looks like the text "refreshes." No duplicate DOM needed.

### 4.11 Slide-in enquiry forms
```js
formFunding.set(".forms",{ visibility:"visible" })
  .to("[form-type='funding']",{ x:0, duration:1 })
  .fromTo("[form-item='funding']",{ y:30, opacity:0 },{ y:0, opacity:1, stagger:0.075 }, 0.1)
  .to("[form-type='funding']",{ backdropFilter:"blur(5px)", duration:0.25 }, ">");
// opening also calls lenis.stop(); closing calls lenis.start()
```
Forms are full-height fixed panels (`.forms { z-index:1200; position:fixed }`) that slide in from the side, blur the page behind, and lock scroll.

### 4.12 UnicornStudio WebGL gradient background
```html
<div class="unicorn" data-us-project-src="" data-us-scale="1" data-us-dpi="1.25"
     data-us-fps="30" data-us-lazyload="true" data-us-production="true"></div>
```
`.unicorn { position:fixed; inset:0; height:100vh; z-index:-10; background:#000; }`. Per page, `updateUnicorn()` swaps in the page's `data-unicorn-src` (home = `closerstudio.com/backgrounds/vuna-partners-gradient.json`) and re-runs `UnicornStudio.init()`.
**Reveal:** the slow, living, grain-free gradient behind the hero is a compiled UnicornStudio shader scene, throttled to **30fps** and **lazy-loaded** for performance. This is the single hardest thing to reproduce 1:1 without UnicornStudio.

### 4.13 Barba.js page transitions
```js
barba.init({ preventRunning:true, transitions:[{ name:"default-transition",
  leave: (d)=> gsap.timeline().to(".content-overlay",{ opacity:1, duration:1 }),
  afterLeave:(d)=> gsap.set(d.current.container,{ visibility:"hidden" }),
  enter:(d)=> gsap.set(d.next.container,{ visibility:"visible" }) }]});
barba.hooks.afterEnter((d)=>{ updateUnicorn(d.next.container);
  FinsweetAttributes.modules.list.restart(); initDotLotties(d.next.container); });
barba.hooks.after(()=>{ window.scrollTo(0,0); pageInit(); lenis.start(); });
```
**Reveal:** navigation feels app-like because Barba fades a black `.content-overlay` (z-index 9000), swaps the `[data-barba="container"]`, resets scroll, re-inits Lenis/GSAP/Lottie/Unicorn, and re-runs all page animations — no full reload. Pages are `<link rel="prerender">`-hinted in the head for instant swaps.

### Motion vocabulary (consistent across the whole site)
- **Easing:** `power2.out` (reveals) and `power2.inOut` (timelines) — nothing else. No bounce, no elastic.
- **Travel:** tiny — `y:15` for scroll reveals, `y:30` for load reveals.
- **Stagger:** `0.05–0.1`.
- **Durations:** reveals `1s`, load sequences `1.5–3s`, hovers `0.3–0.5s`.
This tight, uniform motion language is a major reason the site feels *considered* rather than animated-for-the-sake-of-it.

---

## 5. Assets Needed to Recreate

**Fonts (the biggest spend / licensing):**
- **Stag** + **Stag Book** (Commercial Type) — slab serif, self-host woff2. Paid license.
- **Neue Haas Grotesk Display** — Adobe Fonts / Linotype. (Substitutes: Helvetica Now Display, or free: *Inter Tight*, *Space Grotesk* is too geometric — closest free is Inter or *Neue Montreal*.)
- **Freight Display Compressed Pro** — Adobe Fonts. This condensed high-contrast serif is the "wow" font. (Substitutes: *Freight* family on Adobe; free-ish: *Playfair Display* is too round — closer is *Bodoni Moda* condensed or *Ogg*/*Reckless* commercial.)

**Imagery:** essentially **none as raster**. To recreate:
- **1 WebGL/shader gradient** for the hero background (warm ochre→merlot→ivory drift). Code-generatable via a custom fragment shader, an `<canvas>` gradient-noise loop, or a licensed UnicornStudio scene.
- **~10–14 dotLottie animations** (square, looping) — one per portfolio company (Medipost, Chilleweni, VO Connect, Steelpack, Ferreira Fresh, Bed Shop, 4PL) + one per newsroom article. These are custom-designed vector loops (each ≈ a small abstract mark/motif). Budget a motion designer, or substitute with static SVG marks.
- **~35 inline SVGs** — logo/wordmark, arrows (`arrow-svg`), plus/circle/clock icons. All hand/code-generatable.
- **Favicons + webclip + OG image** (`Home Page.jpg`) — 3–4 small raster exports.

**Code-generatable (no asset needed):** the gradient, all noise/grain (none used — the WebGL provides texture), all icons/arrows (SVG), the pulsing clock dot, all layout/spacing.

---

## 6. Build Plan

**Recommended stack for the new advisory-firm site:**
Two viable paths —
1. **Webflow + custom GSAP code** (mirrors this site exactly; fastest for a content-managed marketing site the client can edit). Use Webflow CMS for portfolio/news, drop in the same JS libraries.
2. **Next.js (App Router) + Tailwind** if you want engineering control/performance. This is the better fit if it must integrate with other Strategic Advisers systems.

**npm packages (Next.js path):**
- `gsap` (incl. ScrollTrigger + SplitText — now free in GSAP 3.13+)
- `lenis` (`@studio-freight/lenis` / `lenis`)
- `@barba/core` **only if** you keep multi-page transitions — in Next.js prefer the built-in router + `framer-motion`/`View Transitions API` instead
- `@lottiefiles/dotlottie-web` (or `@lottiefiles/dotlottie-react`)
- WebGL gradient: `ogl` or a hand-written shader in a `<canvas>` (avoid the UnicornStudio dependency), or `@paper-design/shaders-react`
- Fonts via `next/font` (self-host Stag + a Freight/Neue-Haas substitute)
- Cloudflare Turnstile for forms

**Section-by-section build order:**
1. **Design tokens first** — port the color vars, the rem spacing scale (0→12rem), and the 3-font type system (`standard`/`emphasis` pairing). Get the ivory canvas + 12rem/10rem section rhythm right before any motion.
2. **Global shell** — fixed nav (transparent→ivory on scroll, wordmark-slide), Lenis smooth scroll, live JHB clock, footer "uncover."
3. **Hero** — WebGL gradient bg + SplitText line reveal + load timeline (+ optional first-visit preloader).
4. **Reveal-on-scroll utility** — build the one `autoAlpha:0,y:15 → 1,y:0, stagger:.1, power2.out, start:"top 70%"` helper and apply everywhere.
5. **Approach / stacked-cards** pinned scroll section.
6. **Portfolio grid** — square `aspect-ratio:1` tiles, dotLottie loops, hover reveal.
7. **Newsroom** grid + **quote** + **stats/history/culture** reveal sections.
8. **Contact** — slide-in funding/general enquiry panels with backdrop blur + Turnstile.
9. **Page transitions** last (Barba or View Transitions), then re-init wiring.

---

## 7. Notes / Gotchas

- **UnicornStudio** is the one genuinely hard-to-clone piece and adds a WebGL runtime; for performance parity keep it at **30fps + lazyload**, or replace with a lighter custom shader. It sits at `z-index:-10` fixed, so it must never intercept pointer events.
- **SplitText** was historically a paid GSAP Club plugin — it is **free as of GSAP 3.13**, so no license concern now, but confirm the GSAP version.
- **dotLottie via a shared Web Worker** with `freezeOnOffscreen:true` is the reason 10+ looping animations don't tank the frame rate — replicate this (don't run 14 independent Lottie players on the main thread).
- **Barba + Webflow + Finsweet** requires manually re-initializing everything (`ScrollTrigger.getAll().kill()`, `mm.revert()`, re-split, re-init Lottie/Unicorn) on every transition — the code does this in `pageInit()` / barba hooks. Miss a re-init and animations silently die after the first navigation. In Next.js the router + `useGSAP` cleanup handles this more cleanly.
- **Accessibility:** there is no `prefers-reduced-motion` guard visible — add one for the new build (the site leans heavily on motion).
- **Performance wins to copy:** zero raster hero images, SVG-only icons, 30fps-capped WebGL, offscreen-frozen Lottie, prerender hints on nav links. The site is heavy on libraries (jQuery + GSAP + Lenis + Barba + UnicornStudio + Lottie) but light on media weight.
- **The "premium" formula in one line:** warm single-color ivory canvas → massive 10–12rem whitespace → a restrained ochre/merlot palette → a bold-sans + light-condensed-serif type pairing → and a *uniform, tiny, power2.out* motion language. None of the individual effects are exotic; the discipline and consistency are what read as expensive.
