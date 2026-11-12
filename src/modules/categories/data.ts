import type { Category } from "./types";

export const categoriesContent = {
  eyebrow: "Find your next skill",
  title: "Learn something worth knowing.",
  description:
    "Short, practical courses designed around skills you can put to work immediately.",
  linkLabel: "Explore",
} as const;

export const categories: readonly Category[] = [
  {
    id: "product-design",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
    href: "#featured-course",
  },
  {
    id: "technology",
    title: "Technology",
    description:
      "Build a stronger understanding of the tools shaping digital products.",
    href: "#featured-course",
  },
  {
    id: "business",
    title: "Business",
    description:
      "Develop practical skills for better decisions and stronger teams.",
    href: "#featured-course",
  },
  {
    id: "creative",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
    href: "#featured-course",
  },
];
