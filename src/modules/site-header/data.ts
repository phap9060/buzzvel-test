import type { NavLink } from "./types";

export const primaryNav: readonly NavLink[] = [
  { label: "Courses", href: "#courses" },
  { label: "For Teams" },
  { label: "Community", href: "#community" },
  { label: "About" },
];

export const loginLink: NavLink = { label: "Log in" };
export const signupLink: NavLink = { label: "Start learning" };
