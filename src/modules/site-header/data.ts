import type { NavLink } from "./types";

// The design is a single page, so navigation points at in-page sections.
export const primaryNav: readonly NavLink[] = [
  { label: "Courses", href: "#courses" },
  { label: "For Teams", href: "#contact" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#how-it-works" },
];

export const loginLink: NavLink = { label: "Log in", href: "#contact" };
export const signupLink: NavLink = {
  label: "Start learning",
  href: "#courses",
};
