# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML5 + CSS3 + JavaScript Vanilla, no frameworks and no build step (pinned by the user's brief). Target is static hosting. Explicitly forbidden: React, Vue, Angular, Next.js, Bootstrap, Tailwind, jQuery, and any CSS/JS framework. Icons must be inline SVG rather than an icon library.

## Users

Primary visitor: a Brazilian small- or mid-sized business owner, self-employed professional, service provider, or licensed professional (dentist, lawyer, personal trainer and similar) who has no website, or has one that embarrasses them. They arrive from a WhatsApp link, an Instagram bio, or a referral, usually on a phone. They are not technical: they cannot evaluate code quality and will judge competence entirely by how the page itself looks and behaves. Their job is to decide, in under a minute, whether this person is safe to hand their business's public face to, and what it will cost.

Secondary visitor: an individual who needs a professional personal site.

## Product Purpose

A single commercial landing page that converts visitors into WhatsApp conversations about a paid website build. It is a sales page, not a portfolio. Success is a sent WhatsApp message with the visitor's name, contact, business type, and chosen plan already filled in. The page must answer seven questions in order: who Victor is, what he offers, why hire him, what he has built, what clients say, what it costs, and how to make contact.

## Positioning

The page is its own proof. Victor sells websites, so the surface a visitor is standing on is the demonstration — its speed, its behavior on their phone, and its finish are the portfolio. No competitor's claim about quality can substitute for the visitor experiencing it. Secondary differentiator: a stated commercial delivery window (7–15 days) against an industry norm of vague multi-month timelines, and transparent published pricing where most local competitors quote privately.

## Operating Context

- Contact happens on WhatsApp, never email or a backend form. There is no server: the form composes a `wa.me` deep link client-side.
- WhatsApp number: (22) 99289-9127 → `5522992899127`.
- The visitor is very likely on a mobile connection. Mobile-first is a requirement, not a preference — the mobile layout is designed for small screens, not shrunk from desktop.
- Payment is a one-time build fee plus an optional monthly fee; plans are Essencial (R$ 397,00 + R$ 69,90/mês), Pro (R$ 597,00 + R$ 159,90/mês, marked MAIS ESCOLHIDO), Premium (R$ 1.497,00 + R$ 239,90/mês).
- All copy is Brazilian Portuguese, in plain commercial language. Technical vocabulary is a failure mode: the buyer does not know what the DOM is.

## Capabilities and Constraints

- Services sold: front-end website development, responsive design, SEO structure, SSL, performance optimization, UX, ongoing maintenance.
- Performance is a hard requirement: target Lighthouse Performance 90+, with Core Web Vitals (LCP, CLS, INP) treated as acceptance criteria. Animation is restricted to `transform`, `opacity`, and `filter`.
- Accessibility: WCAG practice — visible focus, keyboard navigation, labelled fields, accessible error messages, adequate contrast, `prefers-reduced-motion` support.
- Plan pricing, plan names, benefit lists and all commercial copy must live directly in the HTML, editable by Victor without touching JavaScript.
- Undecided by the user, must not be invented as fact: real client names beyond Teccerâmica, real project URLs, real social profile URLs, real business address, real delivery statistics.

## Brand Commitments

- Name shown throughout: **Victor Gonçalves**.
- The user pinned blue as the dominant color and named the target impression: technological, premium, modern, professional, digital, sophisticated. It must read as a premium digital agency, not as a generic developer's personal site, and explicitly not as a "gamer" site.
- `https://www.doppler.com/` is a pinned reference for structure, typography, content organization, components, forms and spacing only — not for palette, and not to be copied.
- Named anti-patterns, binding: excess gradients, excess neon, gamer aesthetics, excess animation, heavy parallax, hard-to-read fonts, excessively rounded cards, excess glassmorphism, disconnected layouts, crowded information, long text blocks.
- Victor's appearance must not be artificially altered. Visual treatment (crop, shadow, glow, mask, lighting) is permitted; changing how he looks is not.
- **Visual direction, chosen by the user over a dice-assigned alternative: "Letreiro Luminoso"** — the illuminated commercial storefront at night. Its governing rule is that light is always bounded by a fabricated edge.

## Handoff — must happen before publishing

1. **Replace or remove the four testimonials.** They are invented people at invented companies, shown to the visitor with five stars and no visible label. None is attributed to a real client, deliberately — but synthetic social proof on a live page is a claim. Replace with real, authorized testimonials or delete the section.
2. Replace the three illustrative projects (Studio Marina Alves, Oficina Duarte, Dra. Helena Prado) and every `href="#"`. Only Teccerâmica is real.
3. **Re-encode the media before launch — this is now a prerequisite, not a nicety.** The user directed `video-1.mp4` (154 MB, 4K) into the hero and `video-2.mp4` (28 MB, 4K) into the contact section. Loading is deferred and gated (nothing downloads on 3G, 2G or save-data; the contact video never loads below 640px), but a phone on good Wi-Fi will pull the 154 MB hero file. Targets and commands are in the README. Portraits are ~1.7 MB PNG each.
4. Fill in the real domain, e-mail, and social profiles.

## Evidence on Hand

Everything usable is in `docs/` (copied into `assets/`). The user instructed that only files present in this folder may be used — no external or stock imagery.

- `perfil-1.png` (1.73 MB) — studio portrait, black shirt, hands in pockets, charcoal backdrop.
- `perfil-2.png` (1.67 MB) — studio portrait, black three-piece suit. The most authoritative of the three.
- `perfil-3.png` (1.68 MB) — studio portrait, black shirt, arms crossed.
- `video-1.mp4` — 3840×2160, 15 s, **154.5 MB**. Blue particle/constellation field with light rays. **Hero background, by the user's explicit direction.** The size concern was raised and the user confirmed the placement; loading is deferred and connection-gated, and re-encoding is recorded as a launch prerequisite.
- `video-2.mp4` — 3840×2160, 10 s, **27.95 MB**. Electric-blue light streaks over deep blue. This is the content the brief calls `video-home-azul.mp4`, under a different filename. **Contact-section background, by the user's explicit direction.** Never loads below 640px.

Two files the brief names do not exist in this folder: `video-home-azul.mp4` (satisfied by `video-2.mp4`, same content) and `circuito-1-bg.png` (replaced by an inline SVG circuit motif authored in CSS, which is lighter and scalable).

No project screenshots, logos, or client photographs exist. There are no real testimonials. The brief authorizes invented testimonials, client names, categories and descriptions provided they are marked as replaceable in the code; it does not authorize invented specific metrics or claims that read as verified.

## Product Principles

1. **The page is the portfolio.** Every craft decision is a sales argument; a visible defect is a lost sale.
2. **Phone first, literally.** The mobile composition is designed on its own terms; desktop is the expansion, not the origin.
3. **Speak the buyer's language.** Benefits in business terms, never implementation terms.
4. **Editable by its owner.** Prices, plans and copy stay in the HTML, plainly commented, so Victor can maintain the site without a developer.
5. **Fictional content is labelled, commercial claims are not invented.** Placeholder names and testimonials ship marked for replacement; prices, timelines and capabilities stay as the user stated them.

## Accessibility & Inclusion

WCAG-aligned practice is a stated requirement of the brief: adequate contrast, full keyboard operability with visible focus, `aria-label` where meaning is not in text, alt text on all imagery, semantically correct buttons and labelled form fields, accessible validation messaging, and honored `prefers-reduced-motion`.
