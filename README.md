# Luma — Buzzvel Front-End challenge (November 2026)

A responsive landing page for "Luma", a learning platform.
**Next.js (App Router)**, **TypeScript** and **Tailwind CSS**.

**Live demo:** https://buzzvel-luma.vercel.app/

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
| `npm test`          | Unit and component tests (Vitest)          |

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

Each component keeps its props and related types in a file of its own next to it (`Button.tsx` and `Button.types.ts`); a module's `types.ts` holds the types of its data.

Rules followed: modules never import from each other, only from `shared/`; content lives in each module's `data.ts` (mock data, no CMS); everything is a Server Component except the two pieces that need state — the mobile menu and the contact form.

## Key decisions

- **Theme in TypeScript.** `src/theme/` holds the design system as typed modules: `colors.ts` (the Figma colour variables), `typography.ts` (fonts and the `Mobile/*` and `Desktop/*` text styles as tokens such as `text-h1` and `text-h1-lg`), `shadows.ts` and `base.ts` (site-wide defaults — surface, focus ring, smooth scrolling, reduced motion — registered as a Tailwind plugin and composed from utilities). `tailwind.config.ts` assembles them. The only stylesheet is the two-line `app/globals.css` that Tailwind v4 needs as its entry point (`@import "tailwindcss"` and `@config`).
- **Class names with `clsx` and `tailwind-merge`.** The `cn()` helper resolves conditional classes and conflicts between utilities, and knows the theme tokens, so a `className` passed to a component replaces the matching default.
- **Breakpoints.** The file has a 402px mobile frame and a 1280px desktop frame, and no tablet frame. Mobile layouts apply below `lg` (1024px) and desktop layouts from `lg` up. In between I made these choices: the header shows the full navigation from `md`, category cards go to two columns from `sm`, the steps go to three columns from `md`, and button pairs sit side by side from `sm`.
- **Content width.** Content is capped at the 1120px column of the desktop frame and centred on wider screens; backgrounds stay full-bleed.
- **Photo mosaic.** The collage is sized in container-query units (`cqw`) taken from the Figma measurements, so it scales as one piece at any width, with separate mobile and desktop measures because the two frames crop the photos differently.
- **Final CTA shapes.** They are anchored to the nearest edge or to the centre so the composition holds at any width, and hidden below `lg`, as in the mobile frame.
- **Sticky header.** The design does not say; I made it sticky so navigation stays reachable on a long page, with scroll padding so anchors are not hidden under it.

### Design differences between mobile and web

The two Figma frames are not identical in content. Where they disagree I chose one version and used it at every width.

| What differs in Figma | What I chose | Why |
| --- | --- | --- |
| Step labels: "Step 01" on all three steps on desktop; "Step 01", "Step 02", "Step 03" on mobile | 01, 02, 03, derived from the list order | The desktop text looks like a copy that was not updated |
| Contact form: English on desktop; description, labels, placeholders and button in Portuguese on mobile | English | The rest of the page, including the form title, is in English |
| Step 2 copy: "…who use these skills." on desktop; "…who actually use these skills." on mobile | The desktop sentence | Neither is wrong; one version is enough, and I took the desktop frame as the reference |
| Step 2 icon: peach `#ffcb9f` on desktop; orange `#ff704d` at 15% opacity on mobile | The desktop peach | It is a solid palette colour; the mobile value is a one-off transparency |

### What the design does not define

| In the Figma file | What I did |
| --- | --- |
| No open state for the mobile menu | A panel under the header reusing the header surface and button styles |
| No hover, focus, error or success states | Added restrained hover states, a visible focus ring, inline field errors and a success message |
| "The people" paragraph is lorem ipsum | Kept as designed |
| Navigation and button destinations are not specified | Only links whose name matches a section that exists on the page navigate (Courses, Community, Explore courses, See how it works, Browse all courses, Explore all courses, Categories, Contact, the logo and the email). The rest — Log in, Start learning, For Teams, About, the category cards, View course, Explore teachers and students, Join Luma and the other footer links — would lead to pages that do not exist, so they have no function: they are `<a>` without `href`, do nothing on click and stay out of the Tab order |
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

## Tests

```bash
npm test          # runs the 23 tests once
npx vitest        # watch mode
```

**Criterion.** I tested the code that has behaviour — state, branches, rules — and not the code that is only markup. A test is only there if it can fail for a reason a user would notice.

**What is tested, and why**

| Target | Tests | Why this one |
| --- | --- | --- |
| `contact/lib/validation.ts` | 8 | It is the only business rule on the page (required fields, email format, minimum length). It is a pure function with several branches and edge cases (whitespace-only input, malformed emails), easy to break when a rule changes. |
| `contact/components/ContactForm.tsx` | 5 | It is one of the two Client Components and the one with the most states: idle, with errors, submitting, success. The tests cover what validation alone does not guarantee: the error is tied to its field (`aria-invalid`, `aria-describedby`), focus moves to the first invalid field, the error clears on edit, the button is disabled while submitting, and success is announced through `role="status"`. |
| `site-header/components/MobileMenu.tsx` | 6 | It is the other Client Component and the only navigation on small screens: if it breaks, the site has no menu on mobile. The tests cover opening and closing, `aria-expanded`/`aria-controls`, keyboard-only use, Escape returning focus to the button, closing when a link is chosen, and actions without a destination staying out of the Tab order. |
| `shared/lib/cn.ts` | 4 | Every shared component uses it. `tailwind-merge` does not know the theme tokens by default; without the configuration, `text-h1` (size) and `text-ink` (colour) could cancel each other. The tests lock that configuration in. |

**What is not tested, and why**

- **Static sections** (Hero, Categories, Featured course, How it works, Testimonial, Community, Final CTA, Footer): they are Server Components with no state or logic that only render the data in `data.ts`. A test there would just restate the markup and break on every copy change without catching a real defect. Their correctness is visual, and it was checked by comparing screenshots with Figma.
- **UI primitives** (`Button`, `Container`, `Section`, `Eyebrow`…): no logic beyond choosing classes; that part is covered by the `cn()` tests and, indirectly, by the form and menu tests, which use `Button`.
- **Responsive layout and appearance**: jsdom does not compute layout or apply CSS, so unit tests cannot verify it. It was checked in a real browser (see "How it was checked").
- **`submitContactForm`**: a simulated submission with a fixed delay; the form tests replace it with a mock.

**How the tests are written.** Vitest with Testing Library in jsdom. Components are used the way a user would use them — found by label and role (`getByLabelText`, `getByRole`), operated with clicks and the keyboard — and not through classes or internal state. That makes the tests double as an accessibility check: if a field loses its `label` or the button loses its name, the test fails. I confirmed they detect regressions by deliberately removing the focus calls from the form and the menu: 3 tests failed, and the code was restored.

## How it was checked

- `npm run lint`, `npm run typecheck`, `npm test` (23 tests) and `npm run build` all pass.
- Once the page was finished, the design was checked closely to confirm that it matches the Figma design.
- Lighthouse on the local production build: 98 performance on the mobile preset and 100 on desktop; 100 accessibility, 100 best practices and 100 SEO on both.

## AI tools

Built with **Claude Code** (Anthropic), connected to Figma through the official **Figma MCP server**, which supplied the frame structure, measurements, design variables and exported assets.

I defined the direction and the standards for how components must be built: a modular architecture with one module per section, Server Components by default, typed content kept out of JSX, a TypeScript theme consumed through Tailwind tokens, class names built with `clsx` and `tailwind-merge`, code without comments, semantic HTML with full keyboard support, and the criterion for what deserves a test. Claude Code wrote the code following those definitions, and I reviewed the result.

Those standards are recorded in [`.claude/skills/component-standards/SKILL.md`](.claude/skills/component-standards/SKILL.md), a skill file that Claude Code loads before creating or changing any component, so that further work follows the same rules.

## Time spent

- Approximately 1 hour of AI-assisted implementation and verification.
- Approximately 1 hour validating the page, testing every feature and checking that the defined code standards were followed.
