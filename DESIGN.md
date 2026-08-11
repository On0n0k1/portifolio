---
name: Lucas Lemos — Portfolio
description: An epic-fantasy RPG interface — built on the licensed Epic Fantasy RPG UI Kit — presenting a distributed-systems and cryptography engineer's résumé as an adventurer's record.
colors:
  kit-gold: "#dab16d"
  amber-dim: "#8a6a3a"
  chassis-navy: "#050510"
  plate-navy: "#01000f"
  bronze-mesh: "#6b5636"
  mesh-border: "#3a2e18"
  parchment: "#f0e9d8"
  warm-tan: "#c9bb98"
  fog-highlight: "#54432a"
  fog-midtone: "#120f24"
typography:
  display:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Cinzel, Georgia, serif"
    fontSize: "0.85rem"
    fontWeight: 600
    letterSpacing: "0.12em"
  lead:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "clamp(1.3rem, 3vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.6
  data:
    fontFamily: "Alegreya SC, Alegreya, Georgia, serif"
    fontSize: "0.85rem"
    fontWeight: 500
rounded:
  sm: "2px"
  md: "4px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.75rem"
  lg: "3rem"
  xl: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.plate-navy}"
    textColor: "{colors.parchment}"
    typography: "{typography.headline}"
    padding: "0.55rem 1rem"
  button-primary-hover:
    textColor: "{colors.kit-gold}"
  nav-item:
    backgroundColor: "{colors.plate-navy}"
    textColor: "{colors.warm-tan}"
    typography: "{typography.headline}"
    padding: "0.5rem 0.85rem"
  nav-item-active:
    textColor: "{colors.kit-gold}"
  chip:
    backgroundColor: "{colors.chassis-navy}"
    textColor: "{colors.warm-tan}"
    rounded: "{rounded.sm}"
    padding: "0.2rem 0.55rem"
  card:
    backgroundColor: "{colors.plate-navy}"
    padding: "{spacing.xs}"
---

# Design System: Lucas Lemos — Portfolio

## Overview

**Creative North Star: "The Adventurer's Record"**

The site borrows its visual grammar directly from a licensed commercial game-UI asset pack (the "Epic Fantasy RPG UI Kit"): deep navy grounds, sampled gold trim, diagonally cut panel corners, and inscribed small-caps labels. Section content and structure stay exactly as the résumé reads — Summary, Experience, Projects, Skills, Education, Contact — the visual skin never bleeds into gamified relabeling (no Champions/Quests/Inventory).

A fixed full-viewport WebGL fog (Three.js + Vanta, `FogBackground`) now sits behind every section — a slow, understated bronze-on-navy drift, not a showpiece. It reads as atmosphere the adventurer's record is sitting inside, extending the North Star rather than competing with it; the earlier static background-image approach was replaced with this animated one.

This world replaced an original "Instrument Panel" nixie-tube world at the user's explicit request; that world's evidence is fully superseded, not blended in.

**Key Characteristics:**
- Deep navy ground, single sampled-gold accent — restrained relative to the kit's own busier mockups.
- Every major panel (`.job`, `.readout`, `.talent-branch`) is framed by the kit's actual `PANEL/00.png` artwork via a CSS 9-slice `border-image` (the `.kit-frame` utility) — real licensed art, not a CSS recreation, with its alpha-transparent diagonal cut defining the corner shape.
- A fixed animated fog layer behind all content, dark enough at every point in its cycle to hold body-text contrast, that falls back to the flat chassis color under `prefers-reduced-motion` or before the WebGL bundle loads.
- Cinzel for display/headings, Alegreya for body prose, Alegreya SC for inscribed small-caps labels and data — a real font substitution for the kit's uninstallable custom face (AvQest), chosen for matching character, not just closest-fallback.

### Licensing note

`src/assets/rpg/panel-frame.png` is the untouched original `PANEL/00.png` from the licensed kit, byte-identical to the source — applied via `border-image` (the `.kit-frame` class) to every major panel across the site. A shadow-stripped derivative (`panel-frame-processed.png`) exists but is unused, kept at the user's direction. Two corner-ornament crops (`corner-tl.png`, `corner-br.png`) were tried hero-only and pulled; they remain unused in the repo. The user confirmed the kit's license permits this public-repo use before any derivative was committed.

### Single world

An earlier iteration briefly offered a second toggleable world (an observatory oscilloscope theme). The user decided against maintaining two worlds; the site commits fully to this one fantasy world, with no toggle and no `[data-theme]` variant in the CSS.

## Colors

Sampled directly from the kit's own mockup screenshots (Python/Pillow pixel averaging), not eyeballed. Near-black navy ground; one gold accent used for headings, active states, and the primary contact action.

### Primary
- **Kit Gold** (`#dab16d`): Headings, active nav state, primary text accents, focus outline, filled skill/language pips. Sampled from the kit's "SETTINGS" heading text.

### Neutral
- **Chassis Navy** (`#050510`): Page ground; also the fog's darkest lowlight tone.
- **Plate Navy** (`#01000f`): Card/section surfaces, button fills; also the fog's base tone.
- **Bronze Mesh** (`#6b5636`): Secondary chrome — dividers, unlit markers, hairline rules, bullet dots.
- **Mesh Border** (`#3a2e18`): Panel/nav/card borders, dividers between joined contact links.
- **Parchment White** (`#f0e9d8`): Primary reading text.
- **Warm Tan** (`#c9bb98`): Secondary text (prose, org names, dates, unfilled nav labels).
- **Amber Dim** (`#8a6a3a`): Muted-gold state — unfilled talent diamonds, skip-link border, default scrollbar thumb, the fog's own highlight-adjacent tone.
- **Fog Highlight** (`#54432a`) / **Fog Midtone** (`#120f24`): The two atmosphere-only tones inside `FogBackground`'s Vanta config, tuned darker than the mesh/amber-dim pair specifically so worst-case contrast against parchment/warm-tan text still clears 4.5:1 even where the fog's brightest patch sits behind a heading.

### Named Rules
**The Sampled Gold Rule.** Every gold value in this system traces back to a real pixel sampled from the licensed kit's mockups, not an invented "fantasy gold" guess — keeps the palette honest to its source material.
**The Fog Stays Dark Rule.** The animated background's color stops are chosen so no frame of the animation can wash out foreground text; atmosphere never gets to spend contrast budget the content needs.

## Typography

**Display Font:** Cinzel (with Georgia, serif fallback)
**Body Font:** Alegreya
**Label/Data Font:** Alegreya SC

**Character:** Cinzel substitutes for the kit's own uninstallable custom face (AvQest) on headings, section labels, and nav/button labels — an epic, monumental register close to the source. Alegreya carries body prose (a literary serif built for paragraph legibility, unlike Cinzel). Alegreya SC's small-caps carries data/labels (dates, stats, nav mark), echoing the kit's own inscribed small-caps nav tabs. All three families load weights 400, 500, and 600/700 only where actually used in the CSS — no declared weight goes unbacked by an imported font file.

### Hierarchy

The system uses more granular steps within each role than a single representative size; every step below is a deliberate, reused value, not a one-off.

- **Display** (600 weight, `clamp(2.25rem, 5vw, 4rem)`, 1.05 line-height, −0.01em tracking, Cinzel): The name in the hero. The only headline-scale text on the page.
- **Headline** (600 weight, Cinzel): `1.15rem` plain-case for job/project titles (`.job__role`) — the largest non-display heading. `0.85rem` uppercase, tracked 0.12em, for bank/section labels (`.bank__label`, `.talent-branch__title`). `0.72rem` uppercase, tracked 0.08em, for nav items (`.nav-bar__item`) — the tightest headline step, sized to fit the sticky nav bar.
- **Lead** (400 weight, `clamp(1.3rem, 3vw, 1.75rem)`, 1.5 line-height, in Alegreya): A single large first-person statement, used exactly twice — the Summary philosophy line and the Contact call-to-action — never for anything else.
- **Body** (400 weight, in Alegreya): `1.05rem`, 1.6 line-height, ~68ch max — the default prose size (`.prose p`). `0.95rem` compact-body variant for org names, project descriptions, experience-highlight bullets, talent-node skill labels, and the nav wordmark. `1rem` at 500 weight for record titles (`.record__title`) — near-identical to default body size on purpose; weight, not size, carries that role's emphasis.
- **Data** (Alegreya SC, tabular figures where numeric): `clamp(1.6rem, 3.2vw, 2.25rem)` at 500 weight for the large hero digit display (`.readout__digits`) — the one oversized data role. `0.85rem` at 500 weight for labeled stats (bank `.stat`, `.record__level`, `.project__badge`). `0.8rem` for secondary metadata (`.job__period`, `.record__meta`, `.footer__copy`). `0.78rem` uppercase tracked for the placeholder banner label (`.placeholder__label`) — deliberately its own step, since it sits alone in a spacious empty-state context rather than beside the other metadata instances. `0.72rem` uppercase tracked for the smallest data label (`.readout__label`) and for project tags (`.project-tag`), matching the Headline role's nav-item step even though the face differs.

### Named Rules
**The Honest Substitute Rule.** AvQest isn't available as a self-hostable web font; Cinzel was chosen for matching epic/monumental character, not as a lazy system-font fallback — the substitution is disclosed here, not silently absorbed.
**The Loaded-Weight Rule.** Never declare a `font-weight` the stylesheet hasn't imported for that family; an unbacked weight either gets faked (synthetic bold) or silently reassigned by the browser, neither of which is a decision anyone made on purpose.

## Layout

Each résumé section is its own bordered plate (`.bank`), distinct and navigable rather than one continuous scroll, contained to a 72rem max-width (`.bank__inner`). Interactive/small surfaces without the frame (nav switches, buttons, contact links, chips) keep the CSS diagonal cut (`clip-path`, driven by the `--cut` token, 14px). Major content panels (`.job`, `.readout`, `.talent-branch`) instead wear the licensed `panel-frame.png` art via `border-image` — the shared `.kit-frame` utility — so their corner shape comes from the source art's own alpha cut, not `clip-path`; the two devices are deliberately never combined on the same element.

Alignment is deliberately mixed by section, not uniform: the hero identity block stays left-aligned while its contact bar centers under it; the Contact section's CTA text centers while its links right-align to fill the available width; the footer centers as a single line. Each choice answers what that specific block needed, not a page-wide alignment rule.

## Elevation & Depth

Flat by default, matching the kit's own UI (no drop-shadow card elevation) — including the kit-frame art itself, which has its shadow stripped in the unused `panel-frame-processed.png` derivative specifically to hold this rule (the currently-applied `panel-frame.png` is the untouched original). The hero stat readouts get a soft gold text-glow on reveal (`sigil-glow` — a smooth fade/scale-in, the one authored motion moment) rather than a lifted/shadowed surface. The fog background adds atmospheric depth behind the flat chassis without introducing any drop-shadow language.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest; the only elevation cue on the page is the hero readouts' one-time glow reveal.
**The Cut, Not Rounded Rule.** Panels take a diagonal corner cut — via `--cut` on small surfaces, via the kit-frame art's own alpha cut on major panels — never a large border-radius; pill/rounded shapes read as a different, unrelated world.

## Shapes

Small interactive surfaces (nav switches, buttons, chips) keep the CSS diagonal cut via `--cut` (14px). Major panels wear the kit-frame border-image instead: a 72px border-image-width sampling an asymmetric 140/210/200/190 (top/right/bottom/left) slice from the source art, so the panel's entire visible frame — including its gold scrollwork corners — comes from the licensed asset, not CSS. Diamond (45°-rotated square) markers appear throughout — bank-label bullets, switch indicators, readout corner marks, talent-tree nodes, and language-proficiency pips — matching the kit's recurring diamond motif. The language pips reuse the diamond shape at a smaller scale with a hollow/filled state, deliberately quieter than the talent tree's fully-filled diamonds so it doesn't read as a second allocation mechanic.

## Components

### Buttons (Contact Links)
- **Shape:** Diagonal cut via `--cut` clip-path (standalone) or square-edged with a dividing hairline when joined into a bar (`.hero__contact--joined`).
- **Style:** Plate-navy background, mesh-border outline, parchment text, Cinzel 500 weight, 44px min-height (touch target).
- **Hover / Focus:** Border and text shift to amber-dim → kit-gold; 0.15s ease-out-expo.

### Chips (Project Tags)
- **Style:** Chassis-navy background, mesh-border outline, warm-tan Alegreya SC text, 2px radius, uppercase, tracked 0.03em.
- **State:** Static/informational only — no selected or interactive state.

### Cards / Panels
- **Corner Style:** Kit-frame border-image alpha cut (see Shapes) — no CSS radius.
- **Background:** Plate navy, painted by the kit-frame art's own sliced middle (`fill` keyword), not a separate CSS color.
- **Shadow Strategy:** None — flat by default (see Elevation & Depth).
- **Internal Padding:** `--space-xs` (0.5rem), which reads as generous because the 72px kit-frame border already contributes the visual margin.

### Navigation
- **Style:** A single joined bar (`.nav-bar`) with diagonal-cut outer corners, warm-tan Cinzel labels, kit-gold + underline for the active section (via `aria-current`). Sticky, with a translucent blurred chassis backdrop.
- **Scroll-to-top item:** The first nav item ("Home") links to `#` rather than a section id, while still tracking active-state against the hero/summary section via `IntersectionObserver`, with a scroll-position override that forces the last section active once the page is scrolled to its true bottom (compensating for the observer's shrunk detection band never intersecting a short final section).

### Stat Readout (signature component)
A kit-framed plaque showing one large amber tabular-nums figure over a small tracked label, with a staggered fade/scale-in glow on first reveal (`sigil-glow`). Used for the three hero career metrics; the sole "hero metric" pattern on the page, never repeated as a generic card template elsewhere.

### Talent Tree (signature component)
A static (display-only, no click interaction) grid of kit-framed branches, each a Cinzel-labeled list of diamond-bulleted skill names connected by a vertical spine rule. Reused at smaller scale as `.level-pips` for language proficiency, with a hollow/filled state instead of the talent tree's uniformly-filled diamonds.

## Do's and Don'ts

### Do:
- **Do** keep résumé section names in plain English (Summary, Experience, Skills…) — the visual skin never gets renamed into game-menu metaphors.
- **Do** trace every gold/navy value back to a real sampled pixel from the kit's mockups when adding new colors.
- **Do** disclose any font substitution for AvQest rather than silently picking the closest system font.
- **Do** verify every declared `font-weight` has a matching `@fontsource` import before shipping it.
- **Do** keep the kit-frame art's flat (no-shadow) processing intact if it's ever regenerated from the source.
- **Do** keep the fog background's color stops dark enough to hold text contrast at every point in its animation cycle.

### Don't:
- **Don't** invent RPG mechanics or gamified copy (levels, currency, quests) beyond the visual skin — PRODUCT.md's claims stay factual.
- **Don't** round panel corners; the cut-corner silhouette (CSS or kit-frame art) is this world's signature.
- **Don't** combine `.kit-frame` and `clip-path` cut-corners on the same element — pick one per element.
- **Don't** re-embed more of the kit's raw PNG assets without re-confirming license scope for each new use.
- **Don't** let the talent tree's fully-filled diamond become the language-pip's default state — the pip's partial-fill only works as a *distinct*, quieter motif.
