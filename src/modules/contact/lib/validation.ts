import type {
  ContactFieldName,
  ContactFormErrors,
  ContactFormValues,
} from "../types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 10;

export const FIELD_ORDER: readonly ContactFieldName[] = [
  "name",
  "email",
  "message",
];

export const EMPTY_VALUES: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (values.name.trim().length === 0) {
    errors.name = "Please enter your name.";
  }

  const email = values.email.trim();
  if (email.length === 0) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const message = values.message.trim();
  if (message.length === 0) {
    errors.message = "Please tell us how we can help.";
  } else if (message.length < MIN_MESSAGE_LENGTH) {
    errors.message = `Please write at least ${MIN_MESSAGE_LENGTH} characters.`;
  }

  return errors;
}
