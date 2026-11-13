import type { ResponsiveCopy } from "@/shared/ui";

export type ContactChannel = {
  id: string;
  label: string;
  value: string;
  href?: string;
  icon: { src: string; size: number };
};

export type ContactFieldName = "name" | "email" | "message";

export type ContactFormCopy = Record<
  ContactFieldName,
  { label: ResponsiveCopy; placeholder: ResponsiveCopy }
>;

export type ContactFormValues = Record<ContactFieldName, string>;

export type ContactFormErrors = Partial<Record<ContactFieldName, string>>;
