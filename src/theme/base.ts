import plugin from "tailwindcss/plugin";

export const base = plugin(({ addBase }) => {
  addBase({
    html: {
      "@apply scroll-pt-18 scroll-smooth antialiased motion-reduce:scroll-auto":
        {},
    },
    body: {
      "@apply bg-cream font-sans text-ink": {},
    },
    "a:not([href])": {
      "@apply cursor-default": {},
    },
    ":focus-visible": {
      "@apply outline-2 outline-offset-2 outline-brand": {},
    },
    "*, ::before, ::after": {
      "@apply motion-reduce:animate-none! motion-reduce:transition-none!": {},
    },
  });
});
