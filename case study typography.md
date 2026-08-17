# Typography System

Derived from the Case Study Figma frame. Two typefaces, five styles, one shared tracking value.

---

## Typefaces

| Token | Value | Fallback | Usage |
|---|---|---|---|
| `--font-display` | `'Vercetti'` | `Georgia, serif` | Editorial — display, headings, body |
| `--font-mono` | `'Space Mono'` | `monospace` | Data — labels, stats |

> **Vercetti** is a licensed typeface and is not available via Google Fonts. Self-host the font files and uncomment the `@font-face` block in `/src/styles/fonts.css` to activate it.
>
> **Space Mono** is loaded via Google Fonts and works out of the box.

---

## Type Scale

| Style | Font | Size | Token | Tracking | Line Height | Color |
|---|---|---|---|---|---|---|
| Display | Vercetti | 20px | `--type-display-size` | −0.03em | normal | `--color-on-dark` |
| Heading | Vercetti | 24px | `--type-heading-size` | −0.03em | normal | `--color-highlight` |
| Body | Vercetti | 16px | `--type-body-size` | −0.03em | normal | `--color-on-dark` |
| Label | Space Mono | 12px | `--type-label-size` | −0.03em | normal | `--color-highlight` |
| Stat | Space Mono | 36px | `--type-stat-size` | −0.03em | normal | `--color-highlight` |

All styles share a single tracking value and a single line height value:

```css
--type-tracking:     -0.03em;
--type-line-height:  normal;
```

All styles are set at `font-weight: 400` (Regular).

---

## Colour Tokens

| Token | Hex | Usage |
|---|---|---|
| `--color-surface` | `#000000` | Page / component background |
| `--color-on-dark` | `#ffffff` | Primary text on dark surfaces |
| `--color-highlight` | `#efffa4` | Accent — headings, labels, stats |

---

## CSS Custom Properties

Defined in `/src/styles/theme.css` under `:root`:

```css
/* Font Families */
--font-display: 'Vercetti', Georgia, serif;
--font-mono:    'Space Mono', monospace;

/* Font Sizes */
--type-display-size: 20px;
--type-heading-size: 24px;
--type-body-size:    16px;
--type-label-size:   12px;
--type-stat-size:    36px;

/* Letter Spacing */
--type-tracking: -0.03em;

/* Line Height */
--type-line-height: normal;

/* Colours */
--color-surface:   #000000;
--color-on-dark:   #ffffff;
--color-highlight: #efffa4;
```

---

## Usage Examples

### Display
```css
font-family:    var(--font-display);
font-size:      var(--type-display-size);
letter-spacing: var(--type-tracking);
line-height:    var(--type-line-height);
color:          var(--color-on-dark);
```

### Heading
```css
font-family:    var(--font-display);
font-size:      var(--type-heading-size);
letter-spacing: var(--type-tracking);
line-height:    var(--type-line-height);
color:          var(--color-highlight);
```

### Body
```css
font-family:    var(--font-display);
font-size:      var(--type-body-size);
letter-spacing: var(--type-tracking);
line-height:    var(--type-line-height);
color:          var(--color-on-dark);
```

### Label
```css
font-family:    var(--font-mono);
font-size:      var(--type-label-size);
letter-spacing: var(--type-tracking);
line-height:    var(--type-line-height);
color:          var(--color-highlight);
```

### Stat
```css
font-family:    var(--font-mono);
font-size:      var(--type-stat-size);
letter-spacing: var(--type-tracking);
line-height:    var(--type-line-height);
color:          var(--color-highlight);
```

---

## File References

| File | Purpose |
|---|---|
| `/src/styles/theme.css` | All CSS custom properties |
| `/src/styles/fonts.css` | Google Fonts import + Vercetti `@font-face` stub |
| `/src/app/components/TypographyShowcase.tsx` | Live visual reference component |