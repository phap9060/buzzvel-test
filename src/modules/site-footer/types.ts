export type FooterLink = {
  label: string;
  href?: string;
};

export type FooterGroup = {
  id: string;
  title: string;
  links: readonly FooterLink[];
};
