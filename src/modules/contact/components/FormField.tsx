import type { ChangeEvent } from "react";
import { cn } from "@/shared/lib/cn";

type FormFieldProps = {
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

const controlClasses =
  "block w-full scroll-mt-28 rounded-lg border bg-cream px-4 py-[11px] text-body text-ink placeholder:text-ink-tertiary transition-colors duration-200 focus:border-brand";

/** Labelled text input or textarea with an inline, announced error message. */
export function FormField({
  id,
  name,
  label,
  value,
  placeholder,
  error,
  onChange,
  type = "text",
  autoComplete,
  multiline = false,
}: FormFieldProps) {
  const errorId = `${id}-error`;
  const shared = {
    id,
    name,
    value,
    placeholder,
    autoComplete,
    required: true,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(event.target.value),
    className: cn(controlClasses, error ? "border-danger" : "border-line"),
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-body font-bold text-ink">
        {label}
      </label>
      {multiline ? (
        <textarea
          {...shared}

          rows={4}
          className={cn(shared.className, "h-25 resize-y lg:h-30")}
        />
      ) : (
        <input {...shared} type={type} />
      )}
      {error && (
        <p id={errorId} className="text-body text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
