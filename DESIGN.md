---
name: Victor Gonçalves — Letreiro Luminoso
description: A petrol-blue night wall where every light is bounded by a fabricated edge.
colors:
  night: "#061426"
  wall: "#0D2038"
  wall-up: "#113052"
  wall-lit: "#17406B"
  profile: "#22406A"
  profile-hi: "#4E7099"
  profile-lo: "#060D18"
  profile-up: "#26405F"
  pin: "#8AA6C8"
  acryl-off: "#14243C"
  acryl-on: "#EAF3FF"
  led: "#2F86FF"
  led-hot: "#8ADBFF"
  led-deep: "#1655B8"
  vinyl: "#F2F7FF"
  ink: "#C6D6EC"
  ink-dim: "#93A9C6"
  ink-on-lit: "#061020"
  thread: "rgb(190 224 255 / .17)"
  thread-lo: "rgb(120 176 235 / .16)"
  fillet: "rgb(120 176 235 / .2)"
typography:
  display:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.3rem, 6.2vw, 3.9rem)"
    fontWeight: 800
    lineHeight: 1.03
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.65rem, 4.6vw, 2.9rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.028em"
    fontVariation: "'wdth' 106"
  title:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.06rem, 2.1vw, 1.22rem)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "normal"
  lede:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.02rem, 2.3vw, 1.22rem)"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  body:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1.62
    letterSpacing: "0.14em"
    fontVariation: "'wdth' 86"
rounded:
  hair: "2px"
  sm: "3px"
  base: "5px"
  lg: "8px"
spacing:
  s1: "0.25rem"
  s2: "0.5rem"
  s3: "0.75rem"
  s4: "1rem"
  s5: "1.5rem"
  s6: "2rem"
  s7: "3rem"
  s8: "4rem"
  s9: "6rem"
  s10: "8rem"
  gutter: "clamp(1.25rem, 5vw, 2.5rem)"
  course-y: "clamp(4.5rem, 12vw, 9rem)"
  shell: "76rem"
components:
  button-lit:
    backgroundColor: "{colors.acryl-on}"
    textColor: "{colors.ink-on-lit}"
    rounded: "{rounded.base}"
    padding: "0.95rem 1.6rem"
    height: "3rem"
    typography: "{typography.body}"
  button-vinyl:
    backgroundColor: "rgb(10 21 36 / .5)"
    textColor: "{colors.vinyl}"
    rounded: "{rounded.base}"
    padding: "0.95rem 1.6rem"
    height: "3rem"
  button-vinyl-hover:
    backgroundColor: "rgb(23 64 107 / .7)"
    textColor: "{colors.led-hot}"
  button-sm:
    rounded: "{rounded.base}"
    padding: "0.6rem 1.05rem"
    height: "2.4rem"
  chip:
    backgroundColor: "rgb(10 21 36 / .6)"
    textColor: "{colors.ink-dim}"
    rounded: "{rounded.sm}"
    padding: "0.38rem 0.8rem"
    typography: "{typography.label}"
  input-field:
    backgroundColor: "rgb(5 14 26 / .72)"
    textColor: "{colors.vinyl}"
    rounded: "{rounded.base}"
    padding: "0.8rem 0.9rem"
    height: "2.9rem"
  panel-unlit:
    backgroundColor: "{colors.acryl-off}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "clamp(1.6rem, 4vw, 2.1rem)"
  panel-lit:
    backgroundColor: "{colors.led-deep}"
    textColor: "{colors.vinyl}"
    rounded: "{rounded.lg}"
    padding: "clamp(1.6rem, 4vw, 2.1rem)"
---

# Design System: Victor Gonçalves — Letreiro Luminoso

## Overview

**Creative North Star: "The Illuminated Storefront at Night"**

The page is a lit commercial sign mounted on a petrol-blue night wall. Every surface is a fabricated object: an acrylic face, an aluminium profile, a wall plate on standoff pins. The wall dominates — a fixed vertical gradient from near-black night through petrol blue and back, dusted with a 5%-opacity static SVG plaster noise. Nothing floats. The page's whole depth story is that panels stand *proud of* a wall and cast a short, directional halo onto it.

The system's governing physical law is that **light is always bounded by a fabricated edge**. A lit surface has a body (gradient face), a rim (1px border or inset thread), and a displaced halo behind it. Glow never leaves a glyph, never surrounds an element evenly, never sits in empty space. The single exception is a genuine point emitter — an LED no larger than 9px — where a zero-offset radial glow is what a real LED does. This is the difference between a fabricated sign and a neon website, and it is the rejection the whole build is organised around: the dark-SaaS hero with floating gradient orbs and stacked glass cards.

Density is generous and vertical: a max 76rem shell, section courses of `clamp(4.5rem, 12vw, 9rem)`, and a 1px aluminium fillet drawn between consecutive courses instead of a border. Colour does almost no work — the palette is one blue in many values plus one white. Hierarchy is carried by *whether a thing is lit*, not by hue.

**Key Characteristics:**
- Petrol-blue night wall, never black; blue is the dominant surface, not an accent on dark.
- Light bounded by an edge: acrylic face + aluminium profile + short displaced halo.
- Two type registers only: fabricated letter (heavy, expanded) and vinyl cut (condensed, uppercase, wide-tracked).
- Lit vs unlit is a load-bearing state, not decoration.
- One motion idea: things light up as they enter view, then the animation state is removed.
- No build step, no framework, no third-party request.

## Colors

One blue, stepped from night to acrylic-white, plus a single light temperature — the palette is a lighting rig, not a colour scheme.

### Primary
- **Sign LED Blue** (`led`): The light source itself. Used for LED underlines, plan bullet dots, focus rings, input focus borders, and every halo's hue. It appears as light, rarely as fill.
- **Hot Filament** (`led-hot`): The brightest point in the system. Reserved for lit accents: the emitter dots, hover text on links and chips, the lit stage numeral, star fills, and the `.hl` inline highlight.
- **LED Deep** (`led-deep`): The saturated blue inside the lit plan face and the hero's ambient street-glow gradients.

### Secondary
- **Lit Acrylic** (`acryl-on`): The milky face of a lit panel — the primary CTA, the "most chosen" violator seal, the skip link. Always paired with `ink-on-lit` text.
- **Unlit Acrylic** (`acryl-off`): The same face with the light off — the portrait frame body and the pilaster. Darker than the wall on purpose.

### Tertiary
- **Aluminium Profile** (`profile`) / **Profile Highlight** (`profile-hi`) / **Profile Shadow** (`profile-lo`) / **Profile Hover** (`profile-up`): The extrusion that frames light. `profile-hi` at low alpha is the value behind nearly every hairline border in the build (`rgb(78 112 153 / .2–.5)`).
- **Standoff Pin** (`pin`): The 6–7px fixing pins on the portrait frame and plan cards, always gradient-to-`#2A4363` with a 1px drop.
- **Edge Hardware** (`thread`, `thread-lo`, `fillet`): The light thread on the profile's top edge, its underside counterpart, and the divider between plates. Never written as literals.

### Neutral
- **Night** (`night`): Page top and bottom, the contact section ground, scrollbar track, and behind every project window.
- **Wall** (`wall`) / **Wall Up** (`wall-up`) / **Wall Lit** (`wall-lit`): The three stops of the fixed wall gradient; `wall-lit` also serves as perk hover and the deadline course's lifted band.
- **Vinyl White** (`vinyl`): Headings, strong text, cut-vinyl labels.
- **Ink** (`ink`) / **Ink Dim** (`ink-dim`): Body and secondary body. `ink-dim` is the floor for supporting prose on the standard wall; on the lighter deadline band it steps up to `ink`.
- **Ink on Lit** (`ink-on-lit`): The only dark text colour, used exclusively on lit acrylic faces.

### Named Rules

**The Bounded Light Rule.** Light is always contained by a fabricated edge: a face, a 1px rim or inset thread, and a *displaced* halo behind. Nothing emits loose glow into space. Zero-offset radial glow is permitted only on genuine point emitters ≤9px — the brand pin (9px), the trust-strip dots (5px), the plan bullet dots (6px), and the nav LED underline (2px).

**The One Blue Rule.** The palette is one blue in many values. New emphasis is made by lighting a surface or dimming it, never by introducing a new hue. The only non-blue colours in the system are the WhatsApp green of the floating CTA (a third-party brand identity, carried in its own fabricated aluminium housing) and the error reds (`#FF8A8A` / `#FFB4B4`).

**The Lit-State Rule.** Lit versus unlit carries meaning. The Pro plan is a lit face brighter than the wall; Essencial and Premium are unlit faces darker than the wall. That contrast is how "most chosen" is said. But an unlit plate's CTA stays a live filled control — the sign is off, the pushbutton still works.

### State, face and quarantined families

Added after the first documentation pass, when 27 literal colours were still loose in the stylesheet. All are tokens now; none may be written as a literal again.

- **Edges carry state.** `--edge-lit` / `--edge-lit-2` / `--edge-off`: the same light at two intensities plus its absence. A lit panel takes `--edge-lit`; a lit marker takes `--edge-lit-2`; an unlit panel takes `--edge-off`. This is how a new component announces whether it is on, without introducing a hue.
- **Faces are a matched pair.** `--face-on-1` / `--face-on-2` and `--face-off-1` / `--face-off-2` are the lit and unlit plan surfaces, plus `--ink-on-face` for secondary copy on an unlit one. Use the pair, never one half: the unlit face only reads as off because the lit one is beside it.
- **The word plate.** `--plate-1` / `--plate-2` / `--plate-edge` build the lit plate behind the H1's single lit word. It is the hero's signature object and went through a review round to get there; do not reuse it for anything else, and do not soften its fillet.
- **Alert is quarantined.** `--alert`, `--alert-ink`, `--alert-deep`, `--alert-ring` are the only warm values in the system and exist solely for form validation. They are not an accent.
- **WhatsApp is quarantined.** `--wa-1`, `--wa-2`, `--wa-ink`, `--wa-rim` are a third party's brand mark. They appear on one element. Borrowing this green for anything else breaks The One Blue Rule.

## Typography

**Display / Body / Label Font:** Archivo, one self-hosted variable file (weight 400–900, width 75–125), split latin and latin-ext by unicode-range, `font-display: swap`, with `system-ui, -apple-system, 'Segoe UI', sans-serif` as fallback.

**Character:** Two registers cut from one file. The *fabricated letter* is heavy and expanded with tight negative tracking — the sign face, seen from the street. The *vinyl cut* is condensed, uppercase and widely tracked — the small legend cut from adhesive film and applied to the aluminium.

### Hierarchy
- **Display** (800, `clamp(2.3rem, 6.2vw, 3.9rem)`, 1.03, `-.035em`, width 112%): The hero H1 only. `text-wrap: balance`.
- **Headline** (800, `clamp(1.65rem, 4.6vw, 2.9rem)`, 1.08, `-.028em`, width 106%): Every section H2.
- **Title** (700, `clamp(1.06rem, 2.1vw, 1.22rem)`, 1.3): H3s across marks, perks, stages, FAQ.
- **Stat / Price** (800, `1.3rem` for card names, `clamp(2.1rem, 5.5vw, 2.6rem)` for plan values, tabular-nums): Project names, plan names, prices.
- **Lede** (400, `clamp(1.02rem, 2.3vw, 1.22rem)`, 1.62): Section intros and the hero subheadline, capped at 46–56ch.
- **Body** (400, `1rem`, 1.62): Default. Prose capped at 68ch on the two long-copy blocks; grids are never capped.
- **Label** (700, `0.72rem`, `.14em`, width 86%, uppercase): Trust seals, field labels, chips, category tags, footer headings, plan notes.

### Named Rules

**The Two Registers Rule.** Type is either a fabricated letter (weight ≥700, width ≥104%, letter-spacing ≤ −.02em) or a vinyl cut (weight ≥600, width ≤88%, letter-spacing ≥ .1em, uppercase). There is no third voice, and no mid-weight expanded uppercase.

**The Closed Ramp Rule.** The size ramp is tokens only, `--fs-display` down to `--fs-label`. Adding a size means adding a token, never a literal. `--fs-label` at 0.72rem (11.5px) is the functional floor; nothing functional goes below it. The one intentional exception is the browser-chrome caption inside the project miniatures (9px), which is a picture of a URL bar, not site text.

**The No-Eyebrow Rule.** A small uppercase label never sits above a heading. Where a project needs a category, it is a chip placed *below* the name (`.work__cat`).

## Layout

Mobile-first, in two files: `style.css` is the complete phone build; `responsive.css` holds breakpoints only. Every cut exists because the content asked, not because a device has a name — 30em, 40em, 48em, 64em, 80em, 100em, plus a 1023.98px ceiling for the mobile shutter menu and a short-landscape and print pass.

The container is `.shell` (max 76rem, `padding-inline: var(--gutter)`), with `.shell--narrow` at 46rem for reading columns. Vertical rhythm is the `.course` section: `padding-block: clamp(4.5rem, 12vw, 9rem)`, and consecutive courses are separated by a 1px aluminium fillet that fades to transparent at both ends — a fabricated seam, not a border.

Spacing is a 4px base ramp `--s1`…`--s10` (0.25rem to 8rem). Grid counts step honestly: projects 1 → 2 → 6-column (with wide spans), perks 1 → 2 → 4, stages 1 → 2 → 3 → 5, quotes 1 → 2 → 4, plans 1 → 2 → 3, form 1 → 2, footer 1 → 3. The hero becomes two columns at 64em (`1.32fr / .68fr`), widening to `1.28fr / .72fr` at 80em.

Motion: one authored gesture reused everywhere — things light up when they enter view. JS adds `data-lit`, then `.is-on`, then **removes both** after the transition so an element can never strand invisible in a throttled tab. Content is fully visible with JS disabled and under `prefers-reduced-motion`. The five process stages are the deliberate exception: they light in a 140ms-staggered sequence and stay lit, because there the sequence *is* the information.

### Named Rules

**The No-Sticky Rule.** There is no `position: sticky` anywhere. The hero and contact sections need clipped overflow for their backgrounds, and clipped overflow annuls sticky in descendants. The only fixed elements are the fascia navbar, the WhatsApp CTA, the skip link, and the two wall layers.

**The Clip-Not-Hidden Rule.** Horizontal overflow on `body` is `overflow-x: clip` with an `@supports not (overflow: clip)` fallback to `hidden`. `hidden` makes `body` a scroll container; `clip` trims without that side effect.

**The Zero-Byte First Viewport Rule.** The hero's first frame is architectural, not a placeholder: `.hero__fallback` (pure CSS radial + linear gradients) plus `.hero__conduit` (inline data-URI SVG circuit motif) paint the complete first viewport before any media request. The video is a deferred enhancement that fades to `opacity: .52` only once playing. Do not replace this with a raster poster.

## Elevation & Depth

Depth is physical mounting, not a generic shadow scale. Every raised surface composes three things in one `box-shadow`: the profile edge, the lift off the wall, and — only if the surface is lit — the halo.

### Shadow Vocabulary
- **Edge** (`--edge`: `inset 0 1px 0 var(--thread), inset 0 -1px 0 rgb(0 0 0 / .5)`): The aluminium extrusion. Top arête catches light, base sits in shadow. Present on essentially every fabricated surface.
- **Lift 1** (`--lift-1`: `0 2px 6px rgb(2 6 14 / .5), 0 10px 24px -12px rgb(2 6 14 / .7)`): Standard standoff from the wall. Cards, plates, chips at rest.
- **Lift 2** (`--lift-2`: `0 4px 12px rgb(2 6 14 / .55), 0 22px 48px -20px rgb(2 6 14 / .8)`): Deeper standoff — the portrait panel, the form plate, and any card on hover.
- **Halo** (`--halo`: `0 14px 40px -14px rgb(47 134 255 / .38)`): The light escaping a lit panel onto the wall behind. Short, blue, and **displaced downward** — never centred.
- **Halo Hot** (`--halo-hot`: `0 18px 54px -14px rgb(47 134 255 / .62)`): The lit plan face and the primary CTA on hover.

Composition order is always `var(--edge), var(--lift-N), var(--halo)`. Hover raises a card by `translateY(-4px)` (buttons `-2px`) and swaps lift-1 for lift-2, adding the halo.

### Named Rules

**The Displaced Halo Rule.** A halo is directional: positive Y-offset, negative spread, blue. A zero-offset blur around a panel is an orb and is refused. The hero's lit word carries this at panel scale — a bounded wall plate behind the glyphs with a 1px fillet border and an inset top thread, plus `0 10px 26px -10px` of halo. It went through a review round precisely because a blurred version read as a floating orb. If someone softens that edge, the hero regresses to the thing this build refuses.

**The Mounting Clearance Rule.** A plate with a hard edge needs physical clearance or it clips its neighbours. `.sign__line em` carries `margin-inline: .3em` for exactly this reason. Any new bounded inline plate needs the same clearance.

## Shapes

Rectangles with barely-there corners. The radius ramp is four steps and deliberately small: `2px` hairline (LED underlines, focus outlines, shutter bars), `3px` small (inline plates, chips, category tags, the violator seal), `5px` base (buttons, inputs, stages, plates, social tiles), `8px` large (panels: cards, plans, FAQ plate, form, portrait frame). Nothing is pill-shaped except genuine circles: emitter dots, standoff pins, the initials disc, and the WhatsApp button.

Borders are 1px hairlines in the aluminium family at 0.18–0.5 alpha, never full-strength. Where a group of items belongs to one plate — the perks grid and the FAQ — the build uses a single bordered plate divided by 1px fillets (`gap: 1px` over a `--thread-lo` background), not a scatter of separate cards. Icons are a single stroke system: 1.25rem at 1.6 stroke-width, 1.6rem at 1.4, `fill: none`, `stroke: currentColor`, round caps and joins. All icons are inline SVG; there is no icon font.

## Components

### Buttons
- **Shape:** Softly cut corners (`5px`), min-height 3rem, `.95rem 1.6rem` padding, weight 700 at normal width. `.btn--sm` drops to 2.4rem / `.6rem 1.05rem`.
- **Lit (primary):** A lit acrylic face — vertical gradient `#FFFFFF → acryl-on 62% → #CFE2F8`, dark `ink-on-lit` text, and `edge + lift-1 + halo`.
- **Hover / Focus:** Lifts 2px, upgrades to `lift-2 + halo-hot`; active returns to 0. Focus-visible is a 2px `led-hot` outline at 3px offset, page-wide.
- **Vinyl (secondary):** Cut outline only — 1px `rgb(78 112 153 / .5)` border on a `rgb(10 21 36 / .5)` ground with the profile edge. Hover shifts the border to `led`, text to `led-hot`, ground to `rgb(23 64 107 / .7)`.

### Chips
- **Style:** Vinyl-cut label on a dark ground, 1px aluminium border, `3px` radius, `.38rem .8rem`, `ink-dim`. Hover lights the text to `led-hot` and the border to `rgb(47 134 255 / .5)`.
- **Variant:** `.work__cat` is the same shape in `led-hot` on `rgb(23 64 107 / .5)` — used *below* a heading, never above it.

### Cards / Containers
- **Corner Style:** `8px` for panels, `5px` for smaller plates.
- **Background:** A vertical two-stop gradient between two wall values at 0.6–0.92 alpha, so the wall shows through slightly.
- **Shadow Strategy:** `edge + lift-1` at rest; `edge + lift-2 + halo` on hover with a `-4px` rise and a border shift to `rgb(47 134 255 / .42)`.
- **Border:** 1px aluminium hairline at 0.22–0.3 alpha.
- **Internal Padding:** `clamp(1.5rem, 4vw, 2rem)` for content cards; `var(--s5)` for project bodies.

### Inputs / Fields
- **Style:** Recessed — `rgb(5 14 26 / .72)` ground, 1px aluminium border, `5px` radius, `inset 0 1px 2px rgb(0 0 0 / .35)`, min-height 2.9rem, `caret-color: led-hot`. Labels are vinyl-cut. Selects are `appearance: none` with an inline SVG chevron.
- **Focus:** Border becomes `led`, plus a 3px `rgb(47 134 255 / .22)` ring outside the inset shadow. The native outline is suppressed only because that ring replaces it.
- **Error:** Border `#FF8A8A` with a `rgb(255 138 138 / .16)` ring; the message is `#FFB4B4` at `--fs-xs` behind a filled `!` disc.

### Navigation
- **Fascia:** Fixed aluminium band, already fabricated at rest — a `rgb(17 40 70 / .55) → rgb(9 22 40 / .3)` gradient with an inset light thread on the top edge and a thread below. On scroll (`.is-stuck`) it gains body: `rgb(9 21 38 / .84)` with `blur(14px) saturate(140%)` and compressed 0.75rem block padding.
- **Links:** `--fs-md`, weight 500, `ink` → `vinyl` on hover, with a 2px LED strip under the link that scales in from the left (`led → led-hot`, 10px glow). The current section keeps it lit.
- **Mobile (<1024px):** A roller shutter — the panel drops from the fascia at `rgb(8 22 40 / .97)` with `blur(18px)`, slats suggested by a 1px repeating gradient every 9px, items divided by hairlines, background scroll locked. The hamburger is the three shutter slats, crossing on open.

### Signature: The Lit / Unlit Plan Face
The plan row is the system's thesis stated in three objects. Unlit faces are a `#0A1A2E → #071322` gradient — darker than the wall — with recessed text and no halo. The lit face is `#1E4F8C → #14355E` with a `rgb(80 165 255 / .62)` border and `halo-hot`. Each card carries a standoff pin at its top-left; the lit one carries a stamped acrylic violator seal that breaks the top border at `-1.4deg`. Contrast overrides on the lit face (`#C3DCF8`, `#BCD6F4`, `#EAF3FF`) exist because `ink-dim` fails against the only light surface on the page.

### Signature: The Project Window
Each project sits in a shop window: a 16:10 `container-type: inline-size` frame over `night`, wearing a fake browser chrome bar, containing a `.mini` — a fictional client website drawn entirely in CSS with real miniature text, sized in `cqi` so it scales with its window rather than the page. Each `.mini` carries its own `--acc/--pap/--gry/--tx/--tx2` set, is `aria-hidden`, and the window applies `filter: brightness(.93) saturate(.95)` plus a night-air scrim so it sits at the wall's key instead of outranking the hero.

## Do's and Don'ts

### Do:
- **Do** bound every light: a face, a 1px rim or inset thread, and a displaced halo. Compose shadows as `var(--edge), var(--lift-N), var(--halo)`.
- **Do** use zero-offset radial glow only on genuine point emitters ≤9px (brand pin, trust dots, bullet dots, nav LED).
- **Do** say emphasis with lit-versus-unlit, not with a new hue. Keep unlit CTAs live, filled controls.
- **Do** add a new size as a token in the `--fs-*` ramp; keep `--fs-label` (0.72rem) as the functional floor.
- **Do** give any new bounded inline plate mounting clearance (`margin-inline: .3em`), so its hard edge cannot clip a neighbouring letter.
- **Do** keep the two type registers: fabricated letter (heavy, expanded, tight) or vinyl cut (condensed, uppercase, wide-tracked).
- **Do** paint any new above-the-fold surface at zero bytes first; treat media as a deferred enhancement layered over CSS.
- **Do** keep animations self-erasing: add the start state, transition, then remove both the attribute and the class so nothing can strand invisible.
- **Do** ship all icons as inline single-stroke SVG at 1.6 / 1.4 stroke-width.
- **Do** group items that belong to one plate into a single bordered surface divided by 1px fillets.

### Don't:
- **Don't** blur a light source itself. No text-shadow glow radiating off glyphs, no zero-offset panel glow, no floating orbs — the hero's lit word already failed review as a blurred version once.
- **Don't** use `position: sticky` anywhere; the hero and contact sections clip their overflow and would annul it in descendants.
- **Don't** use `overflow-x: hidden` on `body`; it makes `body` a scroll container.
- **Don't** put an uppercase label above a heading. Category and status labels go below, as chips.
- **Don't** borrow the `.mini` palettes (`--acc/--pap/--gry/--tx/--tx2`). They are pictures of other people's websites, not this site's surfaces, and they must never outrank the hero in brightness.
- **Don't** introduce a font. One Archivo variable file, self-hosted, is the whole type system — no system display faces, no second family.
- **Don't** add a build step, a framework, or a third-party request. Everything ships as static HTML, two stylesheets, and one script.
- **Don't** make text below `--fs-label` functional, and don't place `--ink-dim` prose on the lighter `.course--prazo` band (it drops to 4.41:1; that band steps text up to `--ink`).
