import type { NavLink } from "./types";

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
