import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { colors } from "@/theme/colors";
import { boxShadow } from "@/theme/shadows";
import { fontFamily, fontSize } from "@/theme/typography";

const colorNames = Object.entries(colors).flatMap(([name, value]) =>
  typeof value === "string"
    ? [name]
    : Object.keys(value).map((shade) =>
        shade === "DEFAULT" ? name : `${name}-${shade}`,
      ),
);

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      color: colorNames,
      text: Object.keys(fontSize),
      font: Object.keys(fontFamily),
      shadow: Object.keys(boxShadow),
    },
  },
});

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
