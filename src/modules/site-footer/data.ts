import { siteConfig } from "@/shared/config/site";
import type { FooterGroup } from "./types";

export const footerContent = {
  tagline: "Practical learning for curious people.",
  copyright: `© 2026 ${siteConfig.legalName}`,
} as const;

export const footerGroups: readonly FooterGroup[] = [
  {
    id: "explore",
    title: "Explore",
    links: [
      { label: "Courses", href: "#courses" },
      { label: "Categories", href: "#courses" },
      { label: "Instructors" },
      { label: "For Teams" },
    ],
  },
  {
    id: "company",
    title: "Company",
    links: [{ label: "About" }, { label: "Careers" }, { label: "Journal" }],
  },
  {
    id: "support",
    title: "Support",
    links: [
      { label: "Help Center" },
      { label: "Contact", href: "#contact" },
      { label: "Terms" },
      { label: "Privacy" },
    ],
  },
];
