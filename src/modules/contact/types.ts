export type ContactChannel = {
  id: string;
  label: string;
  value: string;
  href?: string;
  icon: { src: string; size: number };
};

export type ContactFieldName = "name" | "email" | "message";

export type ContactFieldsCopy = Record<
  ContactFieldName,
  { label: string; placeholder: string }
>;

export type ContactFormValues = Record<ContactFieldName, string>;

export type ContactFormErrors = Partial<Record<ContactFieldName, string>>;
