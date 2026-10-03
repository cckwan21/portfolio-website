# Case Study Guide

How to create and update case studies for this portfolio.

---

## Creating a new case study

1. **Duplicate** `case-study-template.html`
2. **Rename** it to match the project, e.g. `portfolio-visibility.html`
3. **Fill in** the fixed structure at the top (see below)
4. **Build** the content by copying blocks from the Block Library section
5. **Link it** from `index.html` by updating the project row's `href`

---

## Fixed structure (top of every page)

These sections appear on every case study in the same order. Just swap the copy.

### Page title
```html
<title>[PROJECT TITLE] — Cheryl Kwan</title>
```

### Hero
```html
<span class="hero-label">[Company · Project type]</span>
<h1 class="hero-title">[Project title]</h1>
```

### Hero image
Replace the placeholder div with a real image when ready:
```html
<!-- placeholder -->
<div class="img-placeholder" style="aspect-ratio:16/9"><span>Cover image</span></div>

<!-- real image -->
<img src="images/[your-cover].png" alt="[description]" />
```

### Hero intro
```html
<p class="hero-sub">[One or two sentences — what the project was and what you did.]</p>
<a href="[prototype-url]" class="hero-cta">View prototype →</a>
```
Remove the `<a>` tag if there's no prototype.

### Metadata strip
```html
<div class="meta-value">[Your role]</div>
<div class="meta-value">[Skill]<br>[Skill]<br>[Skill]</div>
<div class="meta-value">[Month–Month Year]</div>
```

### Next project
```html
<a href="[next-case-study].html" class="next-project reveal">
  <div class="next-title">[Next project title]</div>
</a>
```
Point this to the next case study in the list. For the last one, point back to `index.html`.

---

## Building content blocks

Paste blocks from the **Block Library** (at the bottom of the template file) into the `CONTENT BLOCKS` section. Order them however the story calls for — there are no rules.

### Available blocks

| # | Block | When to use |
|---|-------|-------------|
| 1 | Text only | Context, background, outcomes |
| 2 | Text + bullet list | Listing problems, observations, requirements |
| 3 | Text + insight cards | 3 key findings or numbered takeaways |
| 4 | Text + wide image | Diagrams, flows, before/after landscape screenshots |
| 5 | Text + 1 screen | Single focused UI moment |
| 6 | Text + 2 screens | Before/after, or two related screens |
| 7 | Text + 3 screens | Side-by-side comparison with depth effect |
| 8 | Solution group | One section with multiple sub-points, each with their own screens |
| 9 | Text + KPI callout | Outcome metrics, north star numbers |
| 10 | Text + Ghost quote line | A key insight or north star statement set apart visually |

### Replacing placeholder images

Every block uses an `img-placeholder` div until real assets are ready. When screenshots are ready, swap it out:

```html
<!-- before -->
<div class="img-placeholder" style="aspect-ratio:16/9"><span>Wide image</span></div>

<!-- after -->
<img src="images/[your-image].png" alt="[description]" />
```

For screen images inside `.screens`:
```html
<!-- before -->
<div class="img-placeholder" style="aspect-ratio:9/19.5"><span>Screen A</span></div>

<!-- after -->
<img src="images/[screen-a].png" alt="[description]" />
```

---

## Choosing a theme

The template supports dark (default) and light mode.

**Dark** — leave the body tag as-is:
```html
<body>
```

**Light** — add the class:
```html
<body class="theme-light">
```

The toggle button in the bottom-right corner lets you preview both while editing. Remove it before publishing by deleting:
```html
<button id="theme-toggle" ...>
```
and its JS block in the `<script>` tag.

---

## Adding the new case study to the homepage

In `index.html`, find the matching project row and add the link:

```html
<!-- before -->
<li class="project-row project-row--inactive">

<!-- after -->
<li class="project-row">
  <a href="[your-case-study].html" class="project-row-link"></a>
```

Also remove the `project-row--inactive` class so the hover effect activates.

---

## File naming convention

| File | Project |
|------|---------|
| `case-study.html` | Friction-free Crypto Deposit |
| `portfolio-visibility.html` | Portfolio Visibility for Active Trades |
| `browser-extension.html` | Crypto.com Browser Extension |
| `apaa.html` | APAA |

Images go in the `/images/` folder, named clearly: `[project]-[description].png`

---

## Quick checklist before publishing

- [ ] Page `<title>` updated
- [ ] Hero label, title, sub filled in
- [ ] Cover image replaced
- [ ] Metadata (role, involvement, timeline) filled in
- [ ] All `[placeholder]` copy replaced
- [ ] All placeholder images replaced with real screenshots
- [ ] Prototype link updated (or CTA removed)
- [ ] Next project link points to the right page
- [ ] Project row linked from `index.html`
- [ ] Theme toggle button removed
