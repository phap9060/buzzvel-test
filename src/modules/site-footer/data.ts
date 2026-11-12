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
      { label: "Instructors", href: "#community" },
      { label: "For Teams", href: "#contact" },
    ],
  },
  {
    id: "company",
    title: "Company",
    links: [
      { label: "About", href: "#how-it-works" },
      { label: "Careers", href: "#contact" },
      { label: "Journal", href: "#top" },
    ],
  },
  {
    id: "support",
    title: "Support",
    links: [
      { label: "Help Center", href: "#contact" },
      { label: "Contact", href: "#contact" },
      { label: "Terms", href: "#top" },
      { label: "Privacy", href: "#top" },
    ],
  },
];
