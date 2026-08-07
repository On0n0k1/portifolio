<!-- SEED: established with the user before implementation; re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: Lucas Lemos — Portfolio
description: An epic-fantasy RPG interface — built on the licensed Epic Fantasy RPG UI Kit — presenting a distributed-systems and cryptography engineer's résumé as an adventurer's record.
---

# Design System: Lucas Lemos — Portfolio

## Overview

**Creative North Star: "The Adventurer's Record"**

The site borrows its visual grammar directly from a licensed commercial game-UI asset pack (the "Epic Fantasy RPG UI Kit"): deep navy grounds, sampled gold trim (`#dab16d`, taken by pixel-sampling the kit's own mockups), diagonally cut panel corners, and inscribed small-caps labels. Section content and structure stay exactly as the résumé reads — Summary, Experience, Projects, Skills, Education, Contact — the user explicitly chose the visual skin over renaming sections into game-menu metaphors (Champions/Quests/Inventory).

This world replaces the original "Instrument Panel" nixie-tube world at the user's explicit request; the old world's evidence (amber glow, engraved panel labels) is superseded, not blended in — no split-the-difference polish on the discarded look.

**Key Characteristics:**
- Deep navy ground, single sampled-gold accent — restrained relative to the kit's own busier mockups, matching the user's earlier preference for understatement.
- Diagonally cut top-left/bottom-right panel corners (`--cut` token) — the kit's authentic panel silhouette, not a rounded-card default.
- Cinzel for display/headings, Alegreya for body prose, Alegreya SC for inscribed small-caps labels and data — a real font substitution for the kit's uninstallable custom face (AvQest), chosen for matching character, not just closest-fallback.
- Corner ornaments are actual cropped kit assets (used under confirmed license), not a recreation.

### Licensing note

Two corner-ornament PNGs were cropped from the kit's `PANEL/00.png` with Pillow (`src/assets/rpg/corner-tl.png`, `corner-br.png`) and briefly used on the hero; the user found the result didn't work and asked to remove them for now, to reconsider later. The files are kept locally (unused, not currently imported) in case a different treatment is designed later. The user had confirmed the license permits public-repo use before they were committed.

### Single world

An earlier iteration briefly offered a second toggleable world (an observatory oscilloscope theme). The user decided against maintaining two worlds and asked to remove it; the site now commits fully to this one fantasy world, with no toggle and no `[data-theme]` variant in the CSS.

This file's token values below describe the current implementation; this is still a seed pending a `/impeccable document` rescan now that real implementation exists.

## Colors

Sampled directly from the kit's own mockup screenshots (Python/Pillow pixel averaging), not eyeballed. Near-black navy ground; one gold accent used for headings, active states, and the primary contact action.

### Primary
- **Kit Gold** (`#dab16d`): Headings, active nav state, primary text accents, focus outline. Sampled from the kit's "SETTINGS" heading text.

### Neutral
- **Chassis Navy** (`#050510`): Page ground.
- **Panel Navy** (`#0d0e1f`): Card/section surfaces — one step lighter than the ground.
- **Bronze Mesh** (`#6b5636`): Secondary chrome — dividers, unlit markers, hairline rules.
- **Parchment White** (`#f0e9d8`): Primary reading text.
- **Warm Tan** (`#c9bb98`): Secondary text (prose, org names, dates) — brightened once already at the user's request; re-verify before darkening.

### Named Rules
**The Sampled Gold Rule.** Every gold value in this system traces back to a real pixel sampled from the licensed kit's mockups, not an invented "fantasy gold" guess — keeps the palette honest to its source material.

## Typography

**Display Font:** Cinzel (with Georgia, serif fallback)
**Body Font:** Alegreya
**Label/Data Font:** Alegreya SC

**Character:** Cinzel substitutes for the kit's own uninstallable custom face (AvQest) on headings and nav/button labels — an epic, monumental register close to the source. Alegreya carries body prose (a literary serif built for paragraph legibility, unlike Cinzel). Alegreya SC's small-caps carries data/labels (dates, stats, nav mark), echoing the kit's own inscribed small-caps nav tabs.

### Hierarchy
- **Display** (600 weight, clamp(2.25rem, 5vw, 4rem)): Name in the hero.
- **Headline** (600 weight, ~0.85–1.15rem, uppercase tracked): Section labels and job/project titles, in Cinzel.
- **Body** (400 weight, ~1.05rem, 1.6 line-height, ~68ch max): Summary and experience prose, in Alegreya.
- **Data** (Alegreya SC, 500 weight, tabular figures): Every stat, date range, and metric.

### Named Rules
**The Honest Substitute Rule.** AvQest isn't available as a self-hostable web font; Cinzel was chosen for matching epic/monumental character, not as a lazy system-font fallback — the substitution is disclosed here, not silently absorbed.

## Layout

Same panel-bank grammar as before: each résumé section is its own bordered plate, distinct and navigable rather than one continuous scroll. What changes is the panel silhouette — diagonally cut top-left and bottom-right corners (`clip-path`, driven by the `--cut` token) instead of a uniform small radius, matching the kit's actual panel shape. The hero's corner-ornament flourish was tried and pulled (see Licensing note); the hero currently carries no additional signature graphic beyond the cut corners and gold accent.

## Elevation & Depth

Flat by default, matching the kit's own UI (no drop-shadow card elevation). The hero stat readouts get a soft gold text-glow on reveal (`sigil-glow` — a smooth fade/scale-in, replacing the previous world's electrical flicker with something closer to an enchantment settling in) rather than a lifted/shadowed surface.

### Named Rules
**The Cut, Not Rounded Rule.** Panels take a diagonal corner cut (`--cut`), never a large border-radius — pill/rounded shapes read as a different, unrelated world.

## Shapes

Diagonally cut top-left/bottom-right corners on interactive and panel surfaces (buttons, nav switches, job/readout panels) via the shared `--cut` token. Diamond (45°-rotated square) markers replace the previous world's circular dot markers throughout — bank-label bullets, switch indicators, readout corner marks — matching the kit's recurring diamond motif.

## Do's and Don'ts

### Do:
- **Do** keep résumé section names in plain English (Summary, Experience, Skills…) — the user chose visual skin over game-menu relabeling.
- **Do** trace every gold/navy value back to a real sampled pixel from the kit's mockups when adding new colors.
- **Do** keep any future corner-ornament treatment hero-only; don't spread it across every panel.
- **Do** disclose any font substitution for AvQest rather than silently picking the closest system font.

### Don't:
- **Don't** invent RPG mechanics or gamified copy (levels, currency, quests) beyond the visual skin — PRODUCT.md's claims stay factual.
- **Don't** round panel corners; the cut-corner silhouette is this world's signature.
- **Don't** re-embed more of the kit's raw PNG assets without re-confirming license scope for each new use.
