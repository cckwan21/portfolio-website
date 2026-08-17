# Cheryl Kwan — Portfolio Project

> Mixed-mode editorial portfolio. Static HTML/CSS/JS, no framework.
> Served locally via `npx serve . --listen 3000`

---

## File Structure

```
/
├── portfolio.html           — Homepage
├── case-study.html          — Case study: Crypto Deposit
├── styles.css               — Shared stylesheet (fonts, tokens, nav, footer, animations)
├── Vercetti-Regular.ttf     — Self-hosted display font
├── TWK Lausanne/
│   └── TWKLausanne-300 copy.ttf   — Self-hosted, weight 300
├── TWK Ghost/
│   └── TWKGhost-Light copy.otf    — Self-hosted, light weight
├── PROJECT.md               — This file
├── case study typography.md — Typography spec reference
├── images/
│   ├── apaa.png
│   ├── browser-extension.png
│   ├── exchange-app.png
│   ├── handy.png
│   └── on-chain.png
├── DSCF6420.jpg             — Personal photo (image grid)
├── DSCF6483.JPG             — Personal photo (image grid)
└── .claude/
    └── launch.json          — Dev server config
```

---

## CSS Architecture

### `styles.css` — shared across all pages
- `@font-face` declarations: Vercetti, TWK Lausanne 300, TWK Ghost Light
- Design tokens (`:root`)
- Reset, `html`, `body`
- Custom cursor (`#cursor`)
- Nav + liquid glass scroll effect + colour flip (black → white on scroll)
- Divider
- Footer
- Animations (`fadeIn`, `fadeUp`, `.reveal`)
- Responsive base breakpoints

### Page-specific `<style>` blocks
Each page links `styles.css` first, then defines only its own styles:

**`portfolio.html`** — container, hero (light mode), project rows, image grid, capability section, footer padding override

**`case-study.html`** — block system, typography classes, hero variants, metadata strip, solution group, KPI callout, next-project, screens layout

---

## Design Tokens

```css
/* Colours */
--color-surface:   #080808   /* page background */
--color-on-dark:   #f0ede5   /* body text / off-white */
--color-highlight: #efffa4   /* lime accent */
--color-muted:     #555      /* muted text */
--color-muted-lg:  #888      /* lighter muted */
--divider:         #1a1a1a   /* rule lines */

/* Aliases (portfolio.html backwards compat) */
--accent     → --color-highlight
--white      → --color-on-dark
--gray       → --color-muted
--gray-light → --color-muted-lg

/* Fonts */
--font-display: 'Lausanne', Helvetica, sans-serif   /* was Vercetti */
--font-mono:    'Roboto Mono', monospace             /* was Space Mono */

/* Type scale */
--type-display-size: 20px
--type-heading-size: 24px
--type-body-size:    24px     /* case study body */
--type-label-size:   11px     /* case study labels */
--type-stat-size:    36px
--type-tracking:     0        /* letter-spacing removed globally */
--type-line-height:  normal

/* Layout */
--pad: 64px   /* responsive: 40px @900px, 24px @600px */
```

---

## Typography System

All letter-spacing is `0` globally.

### Portfolio (`portfolio.html`)

| Element           | Font        | Size                        | Weight | Color   | Notes                          |
|-------------------|-------------|-----------------------------|--------|---------|--------------------------------|
| Hero heading      | Lausanne    | clamp(46px, 5.8vw, 76px)   | 300    | #000000 | Sentence case, light mode      |
| Hero sub          | Lausanne    | 24px                        | 400    | #000000 | Light mode                     |
| Project name      | Lausanne    | 32px                        | 400    | white   | Hover → weight 500             |
| Project year      | Lausanne    | 32px                        | 400    | accent  |                                |
| Capability body   | Lausanne    | 18px                        | 400    | white   |                                |
| Nav logo          | Lausanne    | 14px                        | 300    | black → white on scroll | Uppercase |
| Nav links         | Lausanne    | 14px                        | 300    | black → white on scroll | Sentence case |
| Section labels    | Roboto Mono | 10px                        | 500    | accent  | Uppercase                      |
| Selected works titles | Ghost   | —                           | Light  | white   |                                |

### Case Study (`case-study.html`)

| Element           | Font        | Size  | Weight | Color   | Notes                  |
|-------------------|-------------|-------|--------|---------|------------------------|
| Labels            | Lausanne    | 11px  | 300    | yellow  | Uppercase              |
| Headings          | Lausanne    | 11px  | 300    | yellow  | Consolidated with labels |
| Body text         | Lausanne    | 24px  | 300    | white   |                        |
| Bullet list       | Lausanne    | 24px  | 300    | white   |                        |
| Numbered list     | Lausanne    | 24px  | 300    | white   |                        |
| Hero label        | Lausanne    | 11px  | 300    | yellow  | Uppercase              |
| Hero title        | Lausanne    | clamp(28px → 56px) | 400 | white |               |
| Meta labels       | Lausanne    | 11px  | 300    | yellow  | Uppercase              |
| Meta values       | Lausanne    | 11px  | 300    | muted   |                        |
| CTA link          | Lausanne    | 11px  | 300    | yellow  | Uppercase              |

#### Problem section overrides
- Heading: 28px
- Body + bullets: 24px

---

## Nav — Liquid Glass + Colour Flip

```css
/* Default: transparent, black text (over white hero) */
nav { background: transparent; padding: 28px var(--pad); }
.nav-logo, .nav-links a { color: #000000; }

/* On scroll — JS adds .scrolled when scrollY > 20 */
nav.scrolled {
  background: rgba(8, 8, 8, .55);
  backdrop-filter: blur(40px) saturate(180%);
  padding: 18px var(--pad);
}
nav.scrolled .nav-logo,
nav.scrolled .nav-links a { color: #ffffff; }
```

**JS snippet (both pages):**
```js
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });
```

---

## Hero — Light Mode (Portfolio)

The hero section uses a white background with black text, contrasting with the dark rest of the page.

```css
.hero {
  background: #ffffff;
  padding: 190px 0 120px;
}
.hero-heading { color: #000000; }
.hero-sub     { color: #000000; }
.hero .section-label { color: #000000; }
```

---

## Scroll Reveal

Classes: `.reveal` → `.reveal.visible` (triggered by IntersectionObserver)

```js
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
```

---

## Custom Cursor

```html
<div id="cursor"></div>
```
- Lime dot, 8px, `mix-blend-mode: difference`
- Expands to 32px on hover over links / interactive elements (`.expanded` class)
- Hidden on mobile (`@media max-width: 600px`)

---

## Case Study Block System

Every section is a self-contained `.block`. Three variants:

### Text only
```html
<div class="block reveal">
  <div class="block-inner">
    <span class="label">Your Label</span>
    <h2 class="heading">Section heading</h2>
    <p class="body">Body copy.</p>
  </div>
</div>
```

### Text + wide image (landscape screenshots, diagrams)
```html
<div class="block reveal">
  <div class="block-inner">
    <span class="label">Your Label</span>
    <h2 class="heading">Section heading</h2>
    <p class="body">Body copy.</p>
  </div>
  <div class="block-img reveal">
    <img src="images/your-image.png" alt="description" />
    <p class="img-caption">Optional caption</p>
  </div>
</div>
```

### Text + mobile screens (1, 2, or 3 screens)
```html
<div class="block reveal">
  <div class="block-inner">
    <span class="label">Your Label</span>
    <h2 class="heading">Section heading</h2>
    <p class="body">Body copy.</p>
  </div>
  <div class="screens screens-2 reveal">
    <img src="images/screen-a.png" alt="Screen A" />
    <img src="images/screen-b.png" alt="Screen B" />
  </div>
</div>
```
Change `screens-2` → `screens-1` or `screens-3` depending on count.
With `screens-3`, outer images are slightly shorter (460px vs 520px) for depth.

### Solution group (multi-sub-section)
```html
<div class="solution-group reveal">
  <div class="solution-group-header">
    <span class="label">Solution</span>
    <h2 class="heading">Overall solution heading</h2>
    <p class="body">Intro paragraph.</p>
  </div>

  <div class="solution-sub reveal">
    <div class="block-inner">
      <h3 class="heading">Sub-section heading</h3>
      <p class="body">Detail copy.</p>
    </div>
    <div class="screens screens-2 reveal">
      <img src="..." alt="..." />
      <img src="..." alt="..." />
    </div>
  </div>

  <!-- repeat .solution-sub as needed -->
</div>
```

### KPI callout
```html
<div class="kpi">
  <span class="kpi-label">North Star Metric</span>
  <p class="kpi-value">20% improvement in conversion<br>from email submission to first trade</p>
</div>
```

---

## Case Study Page Structure

```
NAV
HERO (.hero)
  — .hero-label       Lausanne 11px, yellow, uppercase
  — .hero-title       Lausanne, clamp(28px → 56px), white
  — .hero-sub         Lausanne 20px, muted
  — .hero-cta         Lausanne 11px, yellow, uppercase, arrow animation

METADATA STRIP (.meta-strip)
  — 3 columns: Role / Involvement / Timeline
  — Labels: Lausanne 11px yellow
  — Values: Lausanne 11px muted

HERO IMAGE (.hero-img-block)
  — 16:9 full-width

CONTENT BLOCKS (repeat as needed)
  — .block
  — .solution-group
  — etc.

NEXT PROJECT (.next-project)
  — hover fill animation + arrow slide

FOOTER
```

---

## Projects (Homepage)

| Year | Title | Category | Status |
|------|-------|----------|--------|
| 2026 | Friction-free Crypto Deposit | Mobile UX | ✅ Case study built |
| 2024 | Portfolio Visibility for Active Trades | Mobile UX | ✅ Case study built |
| 2022 | Crypto.com Browser Extension | Web Extension | ✅ Case study built |
| 2021 | APAA | Web Design | ✅ Case study built |

---

## Pages Status

| Page | Status | Notes |
|------|--------|-------|
| `portfolio.html` | ✅ Complete | Typography updated, hero in light mode, all rows linked |
| `case-study.html` | ✅ Content in | Placeholder images remain — needs real screenshots |
| `portfolio-visibility.html` | ✅ Content in | Solution section added; placeholder images remain |
| `browser-extension.html` | ✅ Content in | Hero image wired (`browser-extension.png`) |
| `apaa.html` | ✅ Content in | Hero image wired (`apaa.png`) |

---

## To Do

- [ ] Replace placeholder images in `case-study.html` — needs: hero cover, "before redesign" screen, competitive analysis diagram
- [ ] Replace placeholder images in `portfolio-visibility.html` — needs: cover, wallet before/after screens, competitive analysis, redesign screens, closing image
- [ ] Replace placeholder images in `browser-extension.html` — needs: wallet mode walkthrough screenshots
- [x] Link homepage project rows to case study pages
- [x] Build case study: Portfolio Visibility for Active Trades
- [x] Build case study: Crypto.com Browser Extension
- [x] Build case study: APAA
- [x] Selected works titles: update to Ghost typeface

---

## Dev Server

```bash
npx serve . --listen 3000
# → http://localhost:3000
```
