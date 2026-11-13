# Luma — Desafio Front-End Buzzvel (novembro de 2026)

**Idiomas:** [Português](#português) · [English](#english)

## Português

Uma landing page responsiva para a "Luma", uma plataforma de ensino.
**Next.js (App Router)**, **TypeScript** e **Tailwind CSS**.

### Como rodar

Desenvolvido e testado em Node.js 22.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | O que faz                                        |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Servidor de desenvolvimento                      |
| `npm run build`     | Build de produção (a página é totalmente estática) |
| `npm run start`     | Serve o build de produção                        |
| `npm run lint`      | ESLint                                           |
| `npm run typecheck` | TypeScript, sem emitir arquivos                  |
| `npm test`          | Testes unitários e de componente (Vitest)        |

### Estrutura do projeto

A página é dividida em módulos independentes, um por seção do design. O `app/page.tsx` apenas os compõe.

```
src/
  app/                 layout (fontes, metadata) e composição da página
  theme/               design tokens em TypeScript: cores, tipografia, sombras, padrões base
  modules/
    site-header/       cada módulo tem o componente da seção,
    hero/              seus subcomponentes, seus dados locais tipados
    categories/        e seus tipos, e expõe um único ponto
    featured-course/   de entrada pelo index.ts
    how-it-works/
    testimonial/
    community/
    contact/           components/ + lib/ (validação, envio simulado, testes)
    final-cta/
    site-footer/
  shared/
    ui/                Button, Container, Section, Eyebrow, AvatarStack, ArrowIcon
    lib/, config/      helper de classes, constantes do site
```

Regras seguidas: módulos nunca importam uns dos outros, apenas de `shared/`; o conteúdo fica no `data.ts` de cada módulo (dados simulados, sem CMS); tudo é Server Component, exceto as duas peças que precisam de estado — o menu mobile e o formulário de contato.

### Principais decisões

- **Tema em TypeScript.** `src/theme/` guarda o design system em módulos tipados: `colors.ts` (as variáveis de cor do Figma), `typography.ts` (fontes e os estilos de texto `Mobile/*` e `Desktop/*` como tokens, por exemplo `text-h1` e `text-h1-lg`), `shadows.ts` e `base.ts` (padrões do site — fundo, anel de foco, rolagem suave, movimento reduzido — registrados como plugin do Tailwind e compostos a partir de utilitários). O `tailwind.config.ts` reúne tudo. A única folha de estilo é o `app/globals.css`, de duas linhas, que o Tailwind v4 exige como ponto de entrada (`@import "tailwindcss"` e `@config`).
- **Classes com `clsx` e `tailwind-merge`.** O helper `cn()` resolve classes condicionais e conflitos entre utilitários, e conhece os tokens do tema, de modo que um `className` recebido por um componente substitui o padrão correspondente.
- **Breakpoints.** O arquivo tem um frame mobile de 402px e um desktop de 1280px, sem frame de tablet. O layout mobile vale abaixo de `lg` (1024px) e o desktop a partir de `lg`. No intervalo fiz estas escolhas: o cabeçalho mostra a navegação completa a partir de `md`, os cards de categoria passam a duas colunas a partir de `sm`, os passos passam a três colunas a partir de `md`, e os pares de botões ficam lado a lado a partir de `sm`.
- **Largura do conteúdo.** O conteúdo é limitado à coluna de 1120px do frame desktop e centralizado em telas maiores; os fundos ocupam a largura toda.
- **Mosaico de fotos.** A colagem é dimensionada em unidades de container query (`cqw`) tiradas das medidas do Figma, então escala como uma peça única em qualquer largura, com medidas separadas para mobile e desktop porque os dois frames recortam as fotos de forma diferente.
- **Formas do CTA final.** São ancoradas à borda mais próxima ou ao centro para que a composição se mantenha em qualquer largura, e ficam ocultas abaixo de `lg`, como no frame mobile.
- **Cabeçalho fixo.** O design não define; deixei-o sticky para que a navegação fique acessível numa página longa, com scroll padding para que as âncoras não fiquem escondidas atrás dele.

#### Diferenças de design entre mobile e web

Os dois frames do Figma não são idênticos em conteúdo. Implementei cada largura exatamente como o seu frame (mobile abaixo de `lg`, desktop a partir de `lg`), sem unificar nada, e registro aqui o que notei. Não sei se estas diferenças são intencionais; se não forem, cada uma se corrige em uma linha de `data.ts`.

| Onde | Mobile (402px) | Desktop (1280px) | Era para ser diferente? |
| --- | --- | --- | --- |
| How it works — rótulo dos passos | "Step 01", "Step 02", "Step 03" | "Step 01" nos três passos | Parece um texto não atualizado no desktop |
| How it works — texto do passo 2 | "…professionals who actually use these skills." | "…professionals who use these skills." | Não está claro qual é a versão final |
| How it works — ícone do passo 2 | Quadrado em laranja `#ff704d` a 15% de opacidade | Quadrado em pêssego `#ffcb9f` | Cores parecidas, mas valores diferentes |
| Contact — formulário | Descrição, rótulos, placeholders e botão em português ("Nome completo", "Enviar mensagem"…); o título "Contact us" está em inglês | Tudo em inglês | Parece um frame não traduzido, já que o resto da página está em inglês |

Como isso foi implementado: um componente `ResponsiveText` renderiza os dois textos e o CSS mostra o do breakpoint atual, sem JavaScript e sem salto na hidratação. Os trechos em português levam `lang="pt"` para leitores de tela. As mensagens de erro e de sucesso do formulário, que o design não define, ficam em inglês nas duas larguras.

#### O que o design não define

| No arquivo Figma | O que fiz |
| --- | --- |
| Não há estado aberto para o menu mobile | Um painel abaixo do cabeçalho, reutilizando o fundo do cabeçalho e os estilos de botão |
| Não há estados de hover, foco, erro ou sucesso | Adicionei hovers discretos, um anel de foco visível, erros junto aos campos e uma mensagem de sucesso |
| O parágrafo de "The people" é lorem ipsum | Mantido como no design |
| Os destinos da navegação e dos botões não são especificados | Apontam para a seção da página mais próxima do assunto |
| Três cores de texto medem 4,45:1 contra o fundo | Único ponto em que me afastei do Figma: usei a cor mais escura seguinte da paleta para cumprir WCAG AA (rótulos dos passos, valor de "Response time", "Browse all courses") |

### Interações

- **Menu mobile:** um botão de disclosure com `aria-expanded`/`aria-controls`; fecha com Escape (o foco volta ao botão), ao escolher um link e quando a tela chega ao layout desktop.
- **Formulário de contato:** validação em código (campos obrigatórios, formato de e-mail, tamanho mínimo da mensagem), erros associados com `aria-describedby`, foco levado ao primeiro campo inválido, e um envio simulado (`lib/submitContactForm.ts`) com estado de carregamento e mensagem de sucesso anunciada por `role="status"`. Nada é enviado a lugar nenhum.
- **Navegação na página:** rolagem suave, desativada com `prefers-reduced-motion`, assim como todas as transições.

### Acessibilidade e performance

- Landmarks (`header`, `nav`, `main`, `footer`), um único `h1`, seções rotuladas, listas para conteúdo repetido, `figure`/`blockquote` para o depoimento, `dl` para as estatísticas, um skip link.
- Fotos com significado têm descrição; imagens e formas decorativas têm `alt` vazio ou `aria-hidden`.
- As imagens passam pelo `next/image` com `sizes`; a foto do hero é pré-carregada com prioridade alta e as demais são lazy. As fontes são servidas pelo próprio site via `next/font`, limitadas aos pesos que o design usa.
- Apenas o menu e o formulário enviam JavaScript próprio para o cliente.

### Testes

```bash
npm test          # roda os 23 testes uma vez
npx vitest        # modo watch
```

**Critério.** Testei o código que tem comportamento — estado, ramificações, regras — e não o que é apenas marcação. Um teste só entra se puder falhar por um motivo que um usuário perceberia.

**O que é testado e por quê**

| Alvo | Testes | Por que este |
| --- | --- | --- |
| `contact/lib/validation.ts` | 8 | É a única regra de negócio da página (campos obrigatórios, formato de e-mail, tamanho mínimo). É uma função pura, com várias ramificações e casos de borda (entrada só com espaços, e-mails malformados), fácil de quebrar ao alterar uma regra. |
| `contact/components/ContactForm.tsx` | 6 | É um dos dois Client Components e o que tem mais estados: ocioso, com erros, enviando, sucesso. Os testes cobrem o que a validação sozinha não garante: o erro aparece associado ao campo (`aria-invalid`, `aria-describedby`), o foco vai para o primeiro campo inválido, o erro some ao editar, o botão fica desabilitado durante o envio e o sucesso é anunciado em `role="status"`. Um teste confirma que os textos em português do frame mobile estão marcados com `lang="pt"`. |
| `site-header/components/MobileMenu.tsx` | 5 | É o outro Client Component e a única navegação em telas pequenas: se quebrar, o site fica sem menu no mobile. Os testes cobrem abrir e fechar, `aria-expanded`/`aria-controls`, uso só por teclado, Escape devolvendo o foco ao botão e o fechamento ao escolher um link. |
| `shared/lib/cn.ts` | 4 | É usado por todos os componentes compartilhados. O `tailwind-merge` não conhece os tokens do tema por padrão; sem a configuração, `text-h1` (tamanho) e `text-ink` (cor) poderiam se anular. Os testes travam essa configuração. |

**O que não é testado e por quê**

- **Seções estáticas** (Hero, Categories, Featured course, How it works, Testimonial, Community, Final CTA, Footer): são Server Components sem estado nem lógica, que só renderizam os dados de `data.ts`. Um teste ali apenas repetiria a marcação e quebraria a cada ajuste de texto, sem pegar defeito real. A correção delas é visual, e foi verificada comparando capturas de tela com o Figma.
- **Primitivos de UI** (`Button`, `Container`, `Section`, `Eyebrow`…): sem lógica além de escolher classes; essa parte está coberta pelos testes do `cn()` e, indiretamente, pelos testes do formulário e do menu, que usam o `Button`.
- **Layout responsivo e aparência**: o jsdom não calcula layout nem aplica CSS, então testes unitários não conseguem verificar isso. Foi conferido em navegador real (ver "Como foi verificado").
- **`submitContactForm`**: é um envio simulado com um atraso fixo; nos testes do formulário ele é substituído por um mock.

**Como os testes são escritos.** Vitest com Testing Library em jsdom. Os componentes são usados como um usuário os usaria — encontrados por rótulo e papel (`getByLabelText`, `getByRole`), operados com clique e teclado — e não por classes ou estado interno. Assim os testes também funcionam como verificação de acessibilidade: se um campo perder o `label` ou o botão perder o nome, o teste falha. Conferi que eles detectam regressões removendo de propósito as chamadas de foco do formulário e do menu: 3 testes falharam, e o código foi restaurado.

### Como foi verificado

- `npm run lint`, `npm run typecheck`, `npm test` (23 testes) e `npm run build` passam.
- Capturas de tela do Chromium headless em 402px e 1280px foram comparadas com os frames do Figma, seção por seção, incluindo as alturas renderizadas (a poucos pixels dos frames; altura total no desktop de 5703px contra 5691px no Figma).
- Sem overflow horizontal em 320, 360, 402, 640, 768, 1024, 1280, 1440 e 1920px.
- Os fluxos do menu e do formulário foram exercitados com uma sessão de navegador automatizada contra o build de produção, sem erros no console.
- Lighthouse no build de produção local: 99 em performance, 100 em acessibilidade, 100 em boas práticas, 100 em SEO, nos presets mobile e desktop.

### Limitações conhecidas

- Verificado apenas em Chromium headless. Não testado em Safari ou Firefox, em dispositivos físicos nem com leitor de tela.
- O texto renderiza um pouco mais largo do que no export do Figma (alguns pixels por linha), então algumas larguras de linha diferem ligeiramente.
- Os campos do formulário usam o texto de 14px do design, o que faz o Safari do iOS dar zoom ao focar.
- Não há Storybook nem testes end-to-end no repositório; os testes (Vitest + Testing Library) cobrem a validação, o formulário de contato, o menu mobile e o helper de classes.
- O metadata de Open Graph não tem imagem, pois não há URL publicada para resolvê-la.
- Todos os links são âncoras internas e o envio do formulário é simulado.

### Ferramentas de IA

Construído com o **Claude Code** (Anthropic), conectado ao Figma pelo **servidor MCP oficial do Figma**, que forneceu a estrutura dos frames, as medidas, as variáveis de design e os assets exportados.

Eu defini a direção — a stack exigida pelo enunciado, a arquitetura modular e um histórico de commits incremental — e o Claude Code escreveu a implementação, uma seção por commit. Os resultados foram verificados como descrito em "Como foi verificado": checagens automatizadas, comparação de capturas de tela com os frames do Figma em várias larguras, testes de interação automatizados e Lighthouse.

### Tempo gasto

Aproximadamente 1 hora de implementação e verificação assistidas por IA.

---

## English

A responsive landing page for "Luma", a fictional learning platform, built from the supplied Figma file with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**.

### Getting started

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

### Project structure

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

### Key decisions

- **Theme in TypeScript.** `src/theme/` holds the design system as typed modules: `colors.ts` (the Figma colour variables), `typography.ts` (fonts and the `Mobile/*` and `Desktop/*` text styles as tokens such as `text-h1` and `text-h1-lg`), `shadows.ts` and `base.ts` (site-wide defaults — surface, focus ring, smooth scrolling, reduced motion — registered as a Tailwind plugin and composed from utilities). `tailwind.config.ts` assembles them. The only stylesheet is the two-line `app/globals.css` that Tailwind v4 needs as its entry point (`@import "tailwindcss"` and `@config`).
- **Class names with `clsx` and `tailwind-merge`.** The `cn()` helper resolves conditional classes and conflicts between utilities, and knows the theme tokens, so a `className` passed to a component replaces the matching default.
- **Breakpoints.** The file has a 402px mobile frame and a 1280px desktop frame, and no tablet frame. Mobile layouts apply below `lg` (1024px) and desktop layouts from `lg` up. In between I made these choices: the header shows the full navigation from `md`, category cards go to two columns from `sm`, the steps go to three columns from `md`, and button pairs sit side by side from `sm`.
- **Content width.** Content is capped at the 1120px column of the desktop frame and centred on wider screens; backgrounds stay full-bleed.
- **Photo mosaic.** The collage is sized in container-query units (`cqw`) taken from the Figma measurements, so it scales as one piece at any width, with separate mobile and desktop measures because the two frames crop the photos differently.
- **Final CTA shapes.** They are anchored to the nearest edge or to the centre so the composition holds at any width, and hidden below `lg`, as in the mobile frame.
- **Sticky header.** The design does not say; I made it sticky so navigation stays reachable on a long page, with scroll padding so anchors are not hidden under it.

#### Design differences between mobile and web

The two Figma frames are not identical in content. I implemented each width exactly as its frame (mobile below `lg`, desktop from `lg` up), without unifying anything, and I list here what I noticed. I do not know whether these differences are intentional; if they are not, each one is a one-line fix in `data.ts`.

| Where | Mobile (402px) | Desktop (1280px) | Was it meant to differ? |
| --- | --- | --- | --- |
| How it works — step labels | "Step 01", "Step 02", "Step 03" | "Step 01" on all three steps | Looks like text that was not updated on desktop |
| How it works — step 2 copy | "…professionals who actually use these skills." | "…professionals who use these skills." | Unclear which is the final version |
| How it works — step 2 icon | Square in orange `#ff704d` at 15% opacity | Square in peach `#ffcb9f` | Similar colours, different values |
| Contact — form | Description, labels, placeholders and button in Portuguese ("Nome completo", "Enviar mensagem"…); the "Contact us" title is in English | All in English | Looks like an untranslated frame, since the rest of the page is in English |

How this is implemented: a `ResponsiveText` component renders both texts and CSS shows the one for the current breakpoint, with no JavaScript and no hydration jump. The Portuguese strings carry `lang="pt"` for screen readers. The form's error and success messages, which the design does not define, stay in English at both widths.

#### What the design does not define

| In the Figma file | What I did |
| --- | --- |
| No open state for the mobile menu | A panel under the header reusing the header surface and button styles |
| No hover, focus, error or success states | Added restrained hover states, a visible focus ring, inline field errors and a success message |
| "The people" paragraph is lorem ipsum | Kept as designed |
| Navigation and button destinations are not specified | They point at the closest matching section of the page |
| Three text colours measure 4.45:1 against their background | The only place I departed from Figma: used the next darker palette colour to meet WCAG AA (step labels, "Response time" value, "Browse all courses") |

### Interactions

- **Mobile menu:** a disclosure button with `aria-expanded`/`aria-controls`; closes on Escape (focus returns to the button), on link selection and when the viewport reaches the desktop layout.
- **Contact form:** validation in code (required fields, email format, minimum message length), errors linked with `aria-describedby`, focus moved to the first invalid field, and a mocked submission (`lib/submitContactForm.ts`) with a pending state and a success message announced through `role="status"`. Nothing is sent anywhere.
- **In-page navigation:** smooth scrolling, disabled under `prefers-reduced-motion`, as are all transitions.

### Accessibility and performance

- Landmarks (`header`, `nav`, `main`, `footer`), one `h1`, labelled sections, lists for repeated content, `figure`/`blockquote` for the quote, `dl` for the stats, a skip link.
- Meaningful photos have descriptions; decorative images and shapes have empty `alt` or `aria-hidden`.
- Images go through `next/image` with `sizes`; the hero photo is preloaded with high fetch priority and the rest are lazy. Fonts are self-hosted by `next/font`, limited to the weights the design uses.
- Only the menu and the form ship client-side JavaScript of their own.

### Tests

```bash
npm test          # runs the 23 tests once
npx vitest        # watch mode
```

**Criterion.** I tested the code that has behaviour — state, branches, rules — and not the code that is only markup. A test is only there if it can fail for a reason a user would notice.

**What is tested, and why**

| Target | Tests | Why this one |
| --- | --- | --- |
| `contact/lib/validation.ts` | 8 | It is the only business rule on the page (required fields, email format, minimum length). It is a pure function with several branches and edge cases (whitespace-only input, malformed emails), easy to break when a rule changes. |
| `contact/components/ContactForm.tsx` | 6 | It is one of the two Client Components and the one with the most states: idle, with errors, submitting, success. The tests cover what validation alone does not guarantee: the error is tied to its field (`aria-invalid`, `aria-describedby`), focus moves to the first invalid field, the error clears on edit, the button is disabled while submitting, and success is announced through `role="status"`. One test confirms that the Portuguese copy of the mobile frame is marked with `lang="pt"`. |
| `site-header/components/MobileMenu.tsx` | 5 | It is the other Client Component and the only navigation on small screens: if it breaks, the site has no menu on mobile. The tests cover opening and closing, `aria-expanded`/`aria-controls`, keyboard-only use, Escape returning focus to the button, and closing when a link is chosen. |
| `shared/lib/cn.ts` | 4 | Every shared component uses it. `tailwind-merge` does not know the theme tokens by default; without the configuration, `text-h1` (size) and `text-ink` (colour) could cancel each other. The tests lock that configuration in. |

**What is not tested, and why**

- **Static sections** (Hero, Categories, Featured course, How it works, Testimonial, Community, Final CTA, Footer): they are Server Components with no state or logic that only render the data in `data.ts`. A test there would just restate the markup and break on every copy change without catching a real defect. Their correctness is visual, and it was checked by comparing screenshots with Figma.
- **UI primitives** (`Button`, `Container`, `Section`, `Eyebrow`…): no logic beyond choosing classes; that part is covered by the `cn()` tests and, indirectly, by the form and menu tests, which use `Button`.
- **Responsive layout and appearance**: jsdom does not compute layout or apply CSS, so unit tests cannot verify it. It was checked in a real browser (see "How it was checked").
- **`submitContactForm`**: a simulated submission with a fixed delay; the form tests replace it with a mock.

**How the tests are written.** Vitest with Testing Library in jsdom. Components are used the way a user would use them — found by label and role (`getByLabelText`, `getByRole`), operated with clicks and the keyboard — and not through classes or internal state. That makes the tests double as an accessibility check: if a field loses its `label` or the button loses its name, the test fails. I confirmed they detect regressions by deliberately removing the focus calls from the form and the menu: 3 tests failed, and the code was restored.

### How it was checked

- `npm run lint`, `npm run typecheck`, `npm test` (23 tests) and `npm run build` all pass.
- Screenshots from headless Chromium at 402px and 1280px were compared with the Figma frames, section by section, including rendered section heights (within a few pixels of the frames; total desktop height 5703px against 5691px in Figma).
- No horizontal overflow at 320, 360, 402, 640, 768, 1024, 1280, 1440 and 1920px.
- The menu and the form flows were exercised with a scripted browser session against the production build, with no console errors.
- Lighthouse on the local production build: 99 performance, 100 accessibility, 100 best practices, 100 SEO, on both the mobile and the desktop presets.

### Known gaps

- Checked in headless Chromium only. Not tested in Safari or Firefox, on physical devices, or with a screen reader.
- Text renders slightly wider than in the Figma export (a few pixels per line), so some line widths differ marginally.
- Form inputs use the design's 14px text, which makes iOS Safari zoom in on focus.
- No Storybook and no end-to-end tests in the repository; the tests (Vitest + Testing Library) cover the validation, the contact form, the mobile menu and the class-name helper.
- Open Graph metadata has no image, since there is no deployed URL to resolve it against.
- All links are in-page anchors and the form submission is mocked.

### AI tools

Built with **Claude Code** (Anthropic), connected to Figma through the official **Figma MCP server**, which supplied the frame structure, measurements, design variables and exported assets.

I set the direction — the stack required by the brief, the modular architecture and an incremental commit history — and Claude Code wrote the implementation, one section per commit. Results were verified as described in "How it was checked": automated checks, screenshot comparison against the Figma frames at several widths, scripted interaction tests and Lighthouse.

### Time spent

Approximately 2 hour of AI-assisted implementation and verification without tests.
