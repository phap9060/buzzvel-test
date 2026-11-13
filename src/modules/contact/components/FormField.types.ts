export type FormFieldProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (value: string) => void;
  type?: "text" | "email";
  autoComplete?: string;
  multiline?: boolean;
};
