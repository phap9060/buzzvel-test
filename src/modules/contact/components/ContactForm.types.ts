import type { ContactFieldsCopy } from "../types";

export type ContactFormProps = {
  fields: ContactFieldsCopy;
  submitLabel: string;
  submittingLabel: string;
  successMessage: string;
};

export type FormStatus = "idle" | "submitting" | "success";
