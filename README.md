# Luma — Buzzvel Front-End challenge (November 2026)

A responsive landing page for "Luma", a fictional learning platform, built from the supplied Figma file with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**.

## Getting started

Developed and tested on Node.js 22.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | What it does                               |
| ------------------- | ------------------------------------------ |
| `npm run dev`       | Development server                         |
| `npm run build`     | Production build (the page is fully static) |
| `npm run start`     | Serves the production build                |
| `npm run lint`      | ESLint                                     |
| `npm run typecheck` | TypeScript, no emit                        |
| `npm test`          | Unit tests (Vitest)                        |

## Project structure

The page is split into self-contained modules, one per section of the design. `app/page.tsx` only composes them.

```
src/
  app/                 layout (fonts, metadata) and page composition
  theme/               design tokens in TypeScript: colours, typography, shadows, base defaults
  modules/
    site-header/       each module owns its section component,
    hero/              its sub-components, its typed local data
    categories/        and its types, and exposes one entry
    featured-course/   point through index.ts
    how-it-works/
    testimonial/
    community/
    contact/           components/ + lib/ (validation, mock submit, tests)
    final-cta/
    site-footer/
  shared/
    ui/                Button, Container, Section, Eyebrow, AvatarStack, ArrowIcon
    lib/, config/      class-name helper, site-wide constants
```

Rules I followed: modules never import from each other, only from `shared/`; content lives in each module's `data.ts` (mock data, no CMS); everything is a Server Component except the two pieces that need state — the mobile menu and the contact form.

## Key decisions

- **Theme in TypeScript.** `src/theme/` holds the design system as typed modules: `colors.ts` (the Figma colour variables), `typography.ts` (fonts and the `Mobile/*` and `Desktop/*` text styles as tokens such as `text-h1` and `text-h1-lg`), `shadows.ts` and `base.ts` (site-wide defaults — surface, focus ring, smooth scrolling, reduced motion — registered as a Tailwind plugin and composed from utilities). `tailwind.config.ts` assembles them. The only stylesheet is the two-line `app/globals.css` that Tailwind v4 needs as its entry point (`@import "tailwindcss"` and `@config`).
- **Breakpoints.** The file has a 402px mobile frame and a 1280px desktop frame, and no tablet frame. Mobile layouts apply below `lg` (1024px) and desktop layouts from `lg` up. In between I made these choices: the header shows the full navigation from `md`, category cards go to two columns from `sm`, the steps go to three columns from `md`, and button pairs sit side by side from `sm`.
- **Content width.** Content is capped at the 1120px column of the desktop frame and centred on wider screens; backgrounds stay full-bleed.
- **Photo mosaic.** The collage is sized in container-query units (`cqw`) taken from the Figma measurements, so it scales as one piece at any width, with separate mobile and desktop measures because the two frames crop the photos differently.
- **Final CTA shapes.** They are anchored to the nearest edge or to the centre so the composition holds at any width, and hidden below `lg`, as in the mobile frame.
- **Sticky header.** The design does not say; I made it sticky so navigation stays reachable on a long page, with scroll padding so anchors are not hidden under it.

### Where the design was unclear or inconsistent

| In the Figma file | What I did |
| --- | --- |
| Desktop steps all read "Step 01"; mobile reads 01, 02, 03 | Numbers are derived from the list order (01–03) |
| Contact form copy is English on desktop and Portuguese on mobile | English everywhere, like the rest of the page |
| Step 2 copy differs ("who use" vs "who actually use these skills") | Used the desktop copy |
| Step 2 mark uses different oranges on the two frames | Used the desktop colour |
| No open state for the mobile menu | A panel under the header reusing the header surface and button styles |
| No hover, focus, error or success states | Added restrained hover states, a visible focus ring, inline field errors and a success message |
| "The people" paragraph is lorem ipsum | Kept as designed |
| Navigation and button destinations are not specified | They point at the closest matching section of the page |
| Three text colours measure 4.45:1 against their background | Used the next darker palette colour to meet WCAG AA (step labels, "Response time" value, "Browse all courses") |

## Interactions

- **Mobile menu:** a disclosure button with `aria-expanded`/`aria-controls`; closes on Escape (focus returns to the button), on link selection and when the viewport reaches the desktop layout.
- **Contact form:** validation in code (required fields, email format, minimum message length), errors linked with `aria-describedby`, focus moved to the first invalid field, and a mocked submission (`lib/submitContactForm.ts`) with a pending state and a success message announced through `role="status"`. Nothing is sent anywhere.
- **In-page navigation:** smooth scrolling, disabled under `prefers-reduced-motion`, as are all transitions.

## Accessibility and performance

- Landmarks (`header`, `nav`, `main`, `footer`), one `h1`, labelled sections, lists for repeated content, `figure`/`blockquote` for the quote, `dl` for the stats, a skip link.
- Meaningful photos have descriptions; decorative images and shapes have empty `alt` or `aria-hidden`.
- Images go through `next/image` with `sizes`; the hero photo is preloaded with high fetch priority and the rest are lazy. Fonts are self-hosted by `next/font`, limited to the weights the design uses.
- Only the menu and the form ship client-side JavaScript of their own.

## How it was checked

- `npm run lint`, `npm run typecheck`, `npm test` (8 tests) and `npm run build` all pass.
- Screenshots from headless Chromium at 402px and 1280px were compared with the Figma frames, section by section, including rendered section heights (within a few pixels of the frames; total desktop height 5703px against 5691px in Figma).
- No horizontal overflow at 320, 360, 402, 640, 768, 1024, 1280, 1440 and 1920px.
- The menu and the form flows were exercised with a scripted browser session against the production build, with no console errors.
- Lighthouse on the local production build: 99 performance, 100 accessibility, 100 best practices, 100 SEO, on both the mobile and the desktop presets.

## Known gaps

- Checked in headless Chromium only. Not tested in Safari or Firefox, on physical devices, or with a screen reader.
- Text renders slightly wider than in the Figma export (a few pixels per line), so some line widths differ marginally.
- Form inputs use the design's 14px text, which makes iOS Safari zoom in on focus.
- No Storybook and no end-to-end tests in the repository; the unit tests cover the form validation only.
- Open Graph metadata has no image, since there is no deployed URL to resolve it against.
- All links are in-page anchors and the form submission is mocked.

## AI tools

Built with **Claude Code** (Anthropic), connected to Figma through the official **Figma MCP server**, which supplied the frame structure, measurements, design variables and exported assets.

I set the direction — the stack required by the brief, the modular architecture and an incremental commit history — and Claude Code wrote the implementation, one section per commit. Results were verified as described in "How it was checked": automated checks, screenshot comparison against the Figma frames at several widths, scripted interaction tests and Lighthouse.

## Time spent

Approximately 1 hour of AI-assisted implementation and verification.
