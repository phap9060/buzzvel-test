---
name: component-standards
description: Standards for building and changing UI in this project — module layout, component shape, theme tokens, class names, responsive copy, accessibility and tests. Use before creating or editing any component, section, style or test under src/.
---

# Component standards

Follow these rules for every change under `src/`. They describe how the existing code is built; new code must look like it.

## 1. Architecture

- One module per page section, in `src/modules/<section>/`:

  ```
  <section>/
    <Section>.tsx     the section component
    components/       sub-components used only by this section
    lib/              logic used only by this section (with its tests)
    data.ts           typed content (mock data, no CMS)
    types.ts          the module's types
    index.ts          the only entry point: export { <Section> } from "./<Section>"
  ```

- A module never imports from another module. Anything used by two modules moves to `src/shared/` (`ui/`, `lib/`, `config/`).
- `src/app/page.tsx` only composes modules. It holds no markup of its own beyond the skip link and `<main>`.
- Import shared UI through the barrel: `import { Button, Container } from "@/shared/ui"`.

## 2. Components

- Server Component by default. Add `"use client"` only when the component needs state, effects or event handlers, and keep that component as small as possible (today: `MobileMenu` and `ContactForm`).
- Named exports only: `export function Hero()`. No default exports outside `app/`.
- Props are a `type <Name>Props` declared above the component. Variants are string unions mapped to classes with a `Record<Variant, string>`.
- Content never lives in JSX. Text, links and image paths come from the module's `data.ts`, typed in `types.ts`.
- A component that renders a root element accepts `className` and merges it with `cn()` so the caller can override defaults.
- No code comments. Names and structure must make the intent clear; decisions that need explaining go in the README.

## 3. Styling

- Tailwind utilities only. No CSS files, no `style` attribute except for CSS custom properties computed from data.
- The theme lives in `src/theme/` as TypeScript (`colors.ts`, `typography.ts`, `shadows.ts`, `base.ts`) and is assembled by `tailwind.config.ts`. `src/app/globals.css` stays as the two-line Tailwind entry. A new colour, text style or shadow is added to the theme first, then used by name.
- Use theme tokens, not raw values: `text-ink-secondary`, `bg-brand`, `shadow-card`. No hex colours in class names.
- Typography uses the text-style tokens, mobile first with the desktop style at `lg`: `text-h3 lg:text-h3-lg`, `text-subtitle-1 lg:text-subtitle-1-lg`. Headings add `font-display`.
- Prefer the spacing scale (`max-w-130`, `h-102`) over arbitrary values (`max-w-[520px]`). One unit is 4px.
- Build class names with `cn()` from `@/shared/lib/cn` whenever they are conditional or merged. Never concatenate with template strings. When a token is added to the theme, `cn()` picks it up from `src/theme`; keep its tests passing.

## 4. Responsive

- Mobile first. The mobile frame (402px) applies below `lg` (1024px); the desktop frame (1280px) applies from `lg` up.
- Sections use `Section` for vertical rhythm and `Container` for the content column. Do not re-declare page padding inside a module.
- Follow each Figma frame as drawn. When the two frames differ in copy, render both with `ResponsiveText` (`{ mobile, desktop, mobileLang? }` in `data.ts`) instead of picking one, and record the difference in the README section "Design differences between mobile and web".
- No horizontal overflow from 320px up.

## 5. Accessibility

- Semantic elements first: `header`, `nav`, `main`, `footer`, `section`, lists for repeated items, `figure`/`blockquote` for quotes, `dl` for stats.
- Every `section` is labelled by its heading through `Section`'s `labelledBy`. One `h1` per page; heading levels never skip.
- Interactive elements are native `<a>`, `<button>`, `<input>`, `<textarea>`. Never attach `onClick` to a `div` or `span`.
- A link or button only gets an `href` when its destination exists on the page. An action whose destination does not exist (Log in, Start learning…) has no `href` in `data.ts`: it renders as `<a>` without `href`, does nothing and stays out of the tab order. Never point it at an unrelated section.
- Everything is reachable and operable with the keyboard, with the visible focus ring from the theme. Disclosures expose `aria-expanded` and `aria-controls` and close on Escape, returning focus to their trigger.
- Form fields have a `<label>`; errors are linked with `aria-describedby` and flagged with `aria-invalid`; status messages use `role="status"`.
- Meaningful images get descriptive `alt`; decorative images get `alt=""` or `aria-hidden="true"`. Text in another language carries `lang`.
- Text contrast meets WCAG AA (4.5:1). Motion respects `prefers-reduced-motion`.
- Images use `next/image` with `sizes`.

## 6. Tests

- Test code that has behaviour (state, branches, rules), not static markup. A test must be able to fail for a reason a user would notice.
- Vitest with Testing Library in jsdom. Test files sit next to the code: `<name>.test.ts(x)`.
- Query the way a user would: `getByRole`, `getByLabelText`. Do not assert on class names or internal state.
- Every new Client Component and every function in a module's `lib/` gets tests. Static Server Components do not.

## 7. Before finishing

Run all four and fix anything that fails:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Commits are small and follow Conventional Commits (`feat:`, `fix:`, `refactor:`, `test:`, `docs:`, `chore:`), one logical step each, so the history reads as a timeline.
