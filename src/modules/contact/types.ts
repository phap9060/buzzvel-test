export type ContactChannel = {
  id: string;
  label: string;
  value: string;
  /** When set, the value is rendered as a link. */
  href?: string;
  icon: { src: string; size: number };
};

export type ContactFieldName = "name" | "email" | "message";

export type ContactFormValues = Record<ContactFieldName, string>;

export type ContactFormErrors = Partial<Record<ContactFieldName, string>>;
