---
name: Filos Editora
description: Brazilian publishing house that turns manuscripts into globally distributed books.
colors:
  ink-deep: "#1b1814"
  ink-surface: "#221f1b"
  ink-raised: "#2b2722"
  ink-elevated: "#333028"
  text-primary: "#f2ede6"
  text-secondary: "#a09080"
  text-muted: "#635850"
  gold: "#c8a96e"
  gold-bg: "rgba(200,169,110,0.12)"
  gold-border: "rgba(200,169,110,0.26)"
  border-subtle: "rgba(255,255,255,0.07)"
  border-visible: "rgba(255,255,255,0.13)"
  accent-blue: "#7aaee8"
  accent-teal: "#6ecfb5"
  accent-amber: "#d4b85a"
  accent-violet: "#b48ae0"
typography:
  display:
    fontFamily: "'Outfit', sans-serif"
    fontSize: "clamp(2.8rem, 7vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Outfit', sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Outfit', sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "'Lora', Georgia, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "'Outfit', sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    letterSpacing: "0.18em"
rounded:
  pill: "999px"
  xl: "24px"
  lg: "16px"
  md: "12px"
  sm: "8px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "28px"
  xl: "48px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "#1a1208"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.gold}"
    textColor: "#1a1208"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.pill}"
    padding: "13px 26px"
  button-secondary:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.pill}"
    padding: "13px 26px"
---

# Design System: Filos Editora

## 1. Overview

**Creative North Star: "The Author's Atelier"**

Filos Editora's visual system is a warm, professional studio where books are made with intention. The dark canvas is not a tech-dashboard dark mode; it is the deep brown of a wooden writing desk, the weight of a bookshelf at night. The gold accent is not a premium cliche; it is the foil on a spine, the glow of a lamp on paper. The serif body text is not nostalgia; it is the material the product is made of.

The system serves two audiences simultaneously without fragmenting: first-time authors who need to feel that publishing is close and achievable, and academic authors who need to feel that their work will be handled with the seriousness it deserves. Both are writers. Both respond to the same signal: *this place understands what a book is.*

The system explicitly rejects: generic self-publishing platform UI (Amazon KDP / Lulu / Blurb visual grammar), overproduced SaaS landing-page clichés (hero metrics, gradient text, glassmorphism as decoration), and stuffy legacy publisher formality that signals exclusivity over access.

**Key Characteristics:**
- Deep warm-brown backgrounds with layered ink surfaces for depth without gloom
- Single gold accent used with restraint, earning its luminosity by contrast
- Serif body text (Lora) grounding the reading experience in literary tradition
- Display headings (Outfit 800) providing contemporary weight and directness
- Ambient shadow vocabulary building elevation without drama
- Scroll-triggered fade-up entrances, purposeful floating animations, reduced-motion safe

## 2. Colors: The Inkwell Palette

A near-monochrome dark system built on warm brown-black tones, punctuated by one luminous gold accent. The palette carries the weight of print tradition without cosplaying as a bookstore.

### Primary
- **Aged Gold** (`#c8a96e`): The only saturated color in the system. Used on primary CTAs, highlight text, proof-badge numbers, card stats, and focus rings. Never used decoratively; always carrying meaning.

### Neutral (Dark theme)
- **Ink Deep** (`#1b1814`): Page background. The darkest surface; only used as the body canvas.
- **Ink Surface** (`#221f1b`): Section alternating backgrounds, nav mobile drawer.
- **Ink Raised** (`#2b2722`): Cards, proof badges, input backgrounds, secondary buttons.
- **Ink Elevated** (`#333028`): Hover states for cards and secondary surfaces.
- **Parchment** (`#f2ede6`): Primary text. Full-brightness body copy and headings.
- **Weathered Ochre** (`#a09080`): Secondary text. Subheadings, meta, nav links at rest.
- **Faded Sepia** (`#635850`): Muted text. Scroll hints, tertiary labels, disabled states.

### Secondary Accents (Service palette)
- **Blueprint Blue** (`#7aaee8`): First service card accent. Editorial design.
- **Archive Teal** (`#6ecfb5`): Second service card. Distribution.
- **Manuscript Amber** (`#d4b85a`): Third service card. ISBN/DOI.
- **Colophon Violet** (`#b48ae0`): Fourth service card. Launch support.

### Named Rules
**The One Voice Rule.** Gold is used on ≤15% of any given screen's visible area. Its scarcity is its authority. The moment gold appears everywhere, it means nothing.

**The Layered Depth Rule.** Background depth increases in 4 steps (ink-deep → ink-surface → ink-raised → ink-elevated). Never skip layers or invent intermediate values; the stacking order must stay legible.

## 3. Typography

**Display Font:** Outfit (sans-serif, weights 700–800, Google Fonts)
**Body Font:** Lora (serif, weights 400–500 with italic, Google Fonts)

**Character:** The pairing puts contemporary directness (Outfit's clean geometric structure) in conversation with literary permanence (Lora's bracketed serifs and old-style rhythm). Headlines announce; body text settles in to be read. They do not compete.

### Hierarchy
- **Display** (800, `clamp(2.8rem, 7vw, 5.5rem)`, lh 1.0): Hero h1 only. Letter-spacing -0.01em. Text-wrap balance.
- **Headline** (700, `clamp(2rem, 4.5vw, 3.4rem)`, lh 1.05): Section h2. Letter-spacing -0.01em. Text-wrap balance.
- **Title** (600, `1.15rem`, lh 1.4): Card headings, service names, h3 elements.
- **Body** (400, `1rem`, lh 1.7): All prose. Lora. Max line length 65ch on constrained columns.
- **Label** (600, `0.7rem`, ls 0.18em, uppercase): Eyebrow tags, service category chips, stat card labels. Outfit only. Never on prose.

### Named Rules
**The Pairing Axis Rule.** Outfit and Lora are the only font families. No third typeface. Weight contrast within Outfit (400 body label vs. 800 display) covers hierarchy needs; a third family would dissolve the system.

**The Eyebrow Restraint Rule.** The uppercase label style (`section-eyebrow`) is a deliberate design element, not a scaffold. Use once per page section at most, and only when the category context is genuinely needed to orient the reader. If it would appear on every section, rethink the section's heading.

## 4. Elevation

The system uses ambient shadow-based elevation with four named levels. Shadows are warm-cool neutral (rgba black), not colored. Elevation is structural, not decorative: a surface carries a shadow because it is lifted above the layer beneath it, not because it should feel premium.

### Shadow Vocabulary
- **Shadow SM** (`0 2px 12px rgba(0,0,0,.4)`): Proof badges, chips, tight inline elements.
- **Shadow MD** (`0 8px 32px rgba(0,0,0,.5)`): Cards, floating stat panels, modals.
- **Shadow LG** (`0 20px 64px rgba(0,0,0,.6)`): Hero sections, page-level overlays.
- **Gold Glow** (`0 6px 24px rgba(200,169,110,.30)`): Primary button only. Warm light emanating from the CTA.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows respond to state: a button gains elevation on hover; a card may show its shadow to separate from the background. Decoration-only shadows are prohibited.

## 5. Components

### Buttons
The primary button is the single most important element in the system. It is elevated, premium, and warm.

- **Shape:** Full pill (`border-radius: 999px`). Round ends signal accessibility and friendliness.
- **Primary:** Gold background (`#c8a96e`), near-black text (`#1a1208`), gold glow shadow. Padding 14px 28px. Font: Outfit 700 0.9rem ls 0.03em. Min-height 48px.
- **Primary Hover:** translateY(-2px), shadow expands to `0 10px 32px rgba(200,169,110,.45)`, brightness 1.07. 0.25s ease.
- **Ghost:** Transparent background, `--border2` border, full pill. Same padding. Hover fills `--bg3`.
- **Secondary:** `--bg3` background, `--border2` border, full pill. Hover fills `--bg4`, subtle lift.
- **Focus:** `outline: 2px solid var(--gold)` offset 3px. Visible on all interactive elements.

### Navigation
- **Header:** Sticky, backdrop-blur(20px) with warm-tinted base opacity. 68px height.
- **Nav Links:** Outfit 500 0.84rem, `--text2` at rest. On hover: `--text` + `--bg3` background fill, `--r-sm` radius.
- **Scrolled State:** Box-shadow appears (`0 4px 24px rgba(0,0,0,.25)`) when page scrolled > 50px.
- **Mobile:** Hamburger toggle. Drawer below header, `--bg2` background.
- **Theme Toggle:** 40px circle button, icon-only, `--border2` border.

### Cards / Containers
- **Corner Style:** `--r-lg` (16px) for standard cards; `--r-xl` (24px) for hero/featured surfaces.
- **Background:** `--bg3` by default. `--bg2` for recessed containers.
- **Border:** 1px `--border` (subtle) or `--border2` (visible) depending on lift context.
- **Shadow:** Shadow SM for inline cards; Shadow MD for floating panels.
- **Internal Padding:** 24–32px on desktop; scale down to 16–20px on mobile.

### Service / Feature Chips
- **Style:** `--gold-bg` background, `--gold-bd` border, `--r-pill` radius. Outfit 600 0.7rem uppercase ls 0.18em. Used as category markers on service cards and testimonial attribution.

### Proof Badges
- **Style:** `--bg3` background, `--border` border, `--r-pill`, Shadow SM. Compact inline layout. Number in gold (700), label in `--text2`.

### Floating Stat Cards (Hero)
- **Style:** `--bg3` + `--border2` + Shadow MD + `backdrop-filter: blur(8px)`. `--r-lg` corners. Numbers at 1.6rem Outfit 800 in gold; labels 0.7rem Outfit 500 `--text2` uppercase.
- **Motion:** Alternating gentle float animation (6–7s ease-in-out). Reduced-motion: static.

## 6. Do's and Don'ts

### Do:
- **Do** use gold exclusively as a signal — on CTAs, highlighted values, focus rings, and stat numbers. One element per visual cluster.
- **Do** write body copy in Lora. The serif is the brand's literary identity; switching to Outfit for running text loses it.
- **Do** use backdrop-filter blur on headers and floating UI elements — the header uses it purposefully to feel grounded without occluding the page.
- **Do** check contrast on every `--text2` and `--text3` instance against the surface behind it. Warm muted tones fail 4.5:1 more often than pure grays.
- **Do** test heading copy at mobile viewports. The `clamp()` display scale can overflow narrow containers if heading words are long Portuguese compound nouns.
- **Do** follow the 4-step background layering sequence (ink-deep → ink-surface → ink-raised → ink-elevated) to maintain legible depth.
- **Do** include `@media (prefers-reduced-motion: reduce)` for every float, bounce, and scroll-triggered transition.

### Don't:
- **Don't** use Amazon KDP / Lulu / Blurb UI grammar: generic upload flows, commodity typography, "your book in 3 steps" illustrated diagrams with clip-art icons.
- **Don't** use gradient text (`background-clip: text`). The gold is a solid color accent; smearing it across a heading degrades the system.
- **Don't** use glassmorphism decoratively. The header blur is structural (it lifts nav from page content). A frosted-glass card behind a block of text is decoration, not structure.
- **Don't** use `border-left` greater than 1px as a colored stripe accent on cards or list items. Rewrite with background tint or full border.
- **Don't** apply the `section-eyebrow` label to every section. If the kicker appears on every heading, remove it everywhere and let the heading stand.
- **Don't** put hero metrics in a grid of big numbers with gradient accent — the hero-metric template is explicitly anti-referenced. Specificity (named platforms, named credentials) carries more weight than formatted statistics.
- **Don't** add a third font family. Outfit + Lora at multiple weights covers the full hierarchy. A third face signals indecision.
- **Don't** use warm-tinted near-white backgrounds (`--bg` in light mode reads close to the cream/sand band). The light theme uses `#f0ebe2` deliberately; if extending light-mode surfaces, move toward neutral or toward Filos's own hue, not warmer.
