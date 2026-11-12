const fallback = ["ui-sans-serif", "system-ui", "sans-serif"];

export const fontFamily = {
  sans: ["var(--font-inter)", ...fallback],
  display: ["var(--font-jakarta)", ...fallback],
};

type TextStyle = [
  fontSize: string,
  options: { lineHeight: string; letterSpacing?: string; fontWeight?: string },
];

export const fontSize: Record<string, TextStyle> = {
  h1: [
    "2.5rem",
    { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "800" },
  ],
  "h1-lg": ["clamp(3.25rem, 5vw, 4rem)", { lineHeight: "1.09375" }],
  h2: [
    "2.25rem",
    { lineHeight: "2.5rem", letterSpacing: "-0.025em", fontWeight: "800" },
  ],
  "h2-lg": ["3.5rem", { lineHeight: "4rem" }],
  h3: [
    "2rem",
    { lineHeight: "2.25rem", letterSpacing: "-0.025em", fontWeight: "800" },
  ],
  "h3-lg": ["3rem", { lineHeight: "3.5rem" }],
  h5: ["1.25rem", { lineHeight: "1.75rem", fontWeight: "700" }],
  "h5-lg": ["1.25rem", { lineHeight: "2rem" }],
  stat: [
    "clamp(2rem, 10vw, 2.5rem)",
    { lineHeight: "2.75rem", letterSpacing: "-0.025em", fontWeight: "800" },
  ],
  "stat-lg": ["4rem", { lineHeight: "4.375rem" }],
  quote: ["1.25rem", { lineHeight: "2rem", fontWeight: "600" }],
  "quote-lg": [
    "1.875rem",
    { lineHeight: "2.75rem", letterSpacing: "-0.025em" },
  ],
  "subtitle-1": ["1rem", { lineHeight: "1.625rem" }],
  "subtitle-1-lg": ["1.125rem", { lineHeight: "1.75rem" }],
  "subtitle-2": ["0.875rem", { lineHeight: "1.5rem" }],
  "subtitle-2-lg": ["1rem", { lineHeight: "1.75rem" }],
  body: ["0.875rem", { lineHeight: "1.5rem" }],
  overline: [
    "0.75rem",
    { lineHeight: "1rem", letterSpacing: "0.12em", fontWeight: "600" },
  ],
};
