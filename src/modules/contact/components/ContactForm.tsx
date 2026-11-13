"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/shared/ui";
import { submitContactForm } from "../lib/submitContactForm";
import {
  EMPTY_VALUES,
  FIELD_ORDER,
  validateContactForm,
} from "../lib/validation";
import type {
  ContactFieldName,
  ContactFormErrors,
  ContactFormValues,
} from "../types";
import { FormField } from "./FormField";
import type { ContactFormProps, FormStatus } from "./ContactForm.types";

export function ContactForm({
  submitLabel,
  submittingLabel,
  successMessage,
}: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const updateField = (name: ContactFieldName) => (value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    if (status === "success") setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);

    const firstInvalid = FIELD_ORDER.find((name) => nextErrors[name]);
    if (firstInvalid) {
      const field = event.currentTarget.elements.namedItem(firstInvalid);
      if (field instanceof HTMLElement) field.focus();
      return;
    }

    setStatus("submitting");
    await submitContactForm(values);
    setValues(EMPTY_VALUES);
    setStatus("success");
  };

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-5">
        <FormField
          id="contact-name"
          name="name"
          label="Full name"
          placeholder="Your name"
          autoComplete="name"
          value={values.name}
          error={errors.name}
          onChange={updateField("name")}
        />
        <FormField
          id="contact-email"
          name="email"
          type="email"
          label="Email"
          placeholder="youremail@example.com"
          autoComplete="email"
          value={values.email}
          error={errors.email}
          onChange={updateField("email")}
        />
        <FormField
          id="contact-message"
          name="message"
          label="Your question"
          placeholder="Tell us how we can help..."
          multiline
          value={values.message}
          error={errors.message}
          onChange={updateField("message")}
        />
      </div>

      <Button type="submit" fullWidth disabled={status === "submitting"}>
        {status === "submitting" ? submittingLabel : submitLabel}
      </Button>

      <p role="status" className="text-body font-bold text-ink empty:hidden">
        {status === "success" ? successMessage : ""}
      </p>
    </form>
  );
}
