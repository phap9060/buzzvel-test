import type { NavLink } from "../types";

export type MobileMenuProps = {
  links: readonly NavLink[];
  login: NavLink;
  signup: NavLink;
};
