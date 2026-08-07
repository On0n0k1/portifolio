<!-- SEED: established with the user before implementation; re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: Lucas Lemos — Portfolio
description: A lab-instrument panel of quantified engineering proof — glowing nixie-tube digit readouts for a distributed-systems and cryptography engineer.
---

# Design System: Lucas Lemos — Portfolio

## Overview

**Creative North Star: "The Instrument Panel"**

The site is a bank of laboratory measuring instruments, not a résumé wearing a theme. Every quantified claim in Lucas's career — 60% latency reduction, 2,000 requests/second, 1M+ events/day, 40% load reduction — is rendered as a glowing amber nixie-tube digit readout mounted on a blackened-steel instrument chassis. The metaphor was chosen specifically because it fits the evidence: the résumé is unusually stat-dense, and PRODUCT.md's own operating principle is that a recruiter skims for hard numbers in under a minute. This world makes the numbers the interface itself, rather than decorating them.

It explicitly rejects the two ruts common to engineer portfolios: the neon hacker-terminal/glyph-rain cliché, and the generic flat minimalist-resume template. Nothing here is neon or cyberpunk — the register is vintage scientific instrumentation: matte blackened steel, engraved panel labels, rivets and hairline mesh grille texture, warm amber glow (not pink/purple neon).

**Key Characteristics:**
- Quantified claims are physical instrument readouts, not styled text.
- One warm amber accent against near-black matte steel; no gradients, no glossy neon.
- Sections are "banks" on the panel — distinct and navigable, not one undifferentiated scroll.
- Depth comes from glow, not drop shadows: the chassis stays flat, light does the work.
- Understated by the user's explicit request: precise and quiet, not a loud gimmick.

### Second world: the Scope toggle

A "Panel / Scope" toggle in the nav (top of page) switches the whole site into a second committed world: an observatory oscilloscope bank. Same content and layout topology, different register — cool near-black ground, cyan trace-glow accent instead of amber, Space Grotesk/Space Mono instead of IBM Plex, a fine graticule-grid texture on panel surfaces, and larger 3–6px machined radii evoking CRT glass. Its signature moment replaces the hero's nixie digit readouts with hand-drawn oscilloscope trace paths (SVG, stroke-draw animation) — a genuine interaction/rendering difference from the Panel world's digits, not a recolor. Full token values live in `src/index.css` under `[data-theme='scope']`, with inline comments explaining the reuse of token names across both worlds.

This file's token values below describe the default Panel world only; this is still a seed pending a `/impeccable document` rescan now that real implementation exists for both worlds.

## Colors

Near-black matte steel ground; one warm amber glow accent used sparingly and only for live/lit states — restraint is what makes the glow read as real light rather than decoration.

### Primary
- **Nixie Amber** (`#ff9d3d`): The lit digit glow. Reserved for active data readouts, the primary contact action, and hover/focus states. Never used as a body text color or a large flat fill — its rarity is the point.

### Neutral
- **Chassis Black** (`#17191b`): Page ground, instrument housing.
- **Panel Plate** (`#232629`): Card/section surfaces mounted on the chassis — one step lighter than the ground.
- **Mesh Gray** (`#8a8f94`): Secondary chrome — labels, dividers, unlit digit tracks, hairline rules.
- **Panel White** (`#f1efe9`): Primary reading text — a warm off-white, like engraved paint fill, never pure `#fff`.

### Named Rules
**The One Glow Rule.** Amber only lights what is true and current: a live stat, the active nav bank, the primary CTA. A static decorative amber fill anywhere is a violation — every instance must be able to justify itself as "this is lit because it's true."

## Typography

**Display/Label Font:** IBM Plex Sans (with system sans-serif fallback)
**Body Font:** IBM Plex Sans
**Data/Mono Font:** IBM Plex Mono

**Character:** One engineered type family used two ways: Plex Sans reads as the engraved panel-label register (headers, nav, prose), Plex Mono is reserved for anything tabular or numeric — the digit readouts, dates, metrics — so numbers always look measured rather than typeset.

### Hierarchy
- **Display** (600 weight, clamp(2.25rem, 5vw, 4rem), tight line-height): Name/title panel plate in the hero bank.
- **Headline** (600 weight, ~1.5rem): Section/bank titles, set in tracked uppercase like stamped panel caps.
- **Body** (400 weight, ~1.05rem, 1.6 line-height, ~68ch max): Summary and experience prose.
- **Data** (IBM Plex Mono, 500 weight, tabular figures): Every stat, date range, and metric — always monospaced so digit columns align like a real readout.
- **Label** (Plex Sans, 500 weight, 0.75rem, uppercase, tracked): Small engraved captions under each readout.

### Named Rules
**The Measured Numeral Rule.** Any digit that represents a real metric or date is set in Plex Mono with tabular figures, never in the body sans — the distinction between "prose" and "reading" must stay visible at a glance.

## Layout

The panel-bank grammar: each résumé section (Summary, Experience entries, Skills, Education) is a distinct instrument bank — its own bordered plate on the chassis, not a seamless scroll blend — matching the user's confirmed preference for distinct navigable sections over one continuous narrative. Generous chassis spacing separates banks (the gap between instruments on a real panel, not tight card-grid gutters). A persistent panel nav (styled as a row of labeled toggle/selector switches, not a conventional pill nav) lets a recruiter jump straight to a bank. Content width stays reading-comfortable (~68–75ch for prose banks); data-heavy banks (skills, stats) may run wider in a grid of readout tiles.

## Elevation & Depth

Flat by default — the chassis and panel plates carry no drop shadows. Depth is conveyed entirely by the glow: a soft amber radial halo behind lit digits, and a faint inner highlight stroke on glass-like surfaces, mimicking a tube's glass envelope catching light. A panel plate is allowed one hairline border (Mesh Gray, 1px) to read as a distinct mounted unit; nothing else lifts off the chassis.

### Named Rules
**The Flat-Chassis Rule.** No box-shadow anywhere except the amber glow halo itself. If something needs to feel important, light it — don't lift it.

## Shapes

Machined, not soft: small corner radii (2–4px) on panel plates, evoking cut/milled steel rather than a consumer app's pill-rounded cards. Circular or short-ellipse forms are reserved for the digit-tube motif itself (the readouts) — using that geometry elsewhere would dilute its meaning. Rivet or screw-head details (small filled circles) may mark panel corners as a recurring, restrained signature — never more than one per plate edge.

## Do's and Don'ts

### Do:
- **Do** render every quantified résumé stat (percentages, throughput, dates) as a Plex Mono tabular readout, not inline prose.
- **Do** keep the amber glow rare — it marks "this is live/true," and loses meaning if it decorates.
- **Do** give each résumé section its own bordered panel-plate bank with a clear engraved-caps label.
- **Do** keep the power-on/glow-in moment on the hero brief and quiet (a short warm-up flicker), matching the user's request for understatement, not a showpiece animation.

### Don't:
- **Don't** use neon pink/purple, scanlines, or glyph-rain — this is a vintage lab instrument, not cyberpunk.
- **Don't** use drop-shadow card elevation; depth is glow only.
- **Don't** round corners past a machined 2–4px; pill shapes belong to a different world.
- **Don't** invent unverified metrics or testimonials to fill a readout — an empty or placeholder bank (e.g. Projects) stays honestly labeled as a placeholder rather than faked with invented numbers.
