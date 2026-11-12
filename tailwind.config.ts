import type { Config } from "tailwindcss";
import { base, boxShadow, colors, fontFamily, fontSize } from "./src/theme";

const config: Config = {
  theme: {
    extend: {
      colors,
      fontFamily,
      fontSize,
      boxShadow,
    },
  },
  plugins: [base],
};

export default config;
