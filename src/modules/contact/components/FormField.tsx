import type { ChangeEvent } from "react";
import { cn } from "@/shared/lib/cn";
import { ResponsiveText, type ResponsiveCopy } from "@/shared/ui";

type FormFieldProps = {
  id: string;
  name: string;
  label: ResponsiveCopy;
  value: string;
  placeholder: ResponsiveCopy;
  error?: string;
  onChange: (value: string) => void;
  type?: "text" | "email";
  autoComplete?: string;
  multiline?: boolean;
};

const controlClasses =
  "peer block w-full scroll-mt-28 rounded-lg border bg-cream px-4 py-[11px] text-body text-ink placeholder:text-ink-tertiary transition-colors duration-200 focus:border-brand";

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
    placeholder: " ",
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
        <ResponsiveText text={label} />
      </label>
      <div className="relative">
        {multiline ? (
          <textarea
            {...shared}
            rows={4}
            className={cn(shared.className, "h-25 resize-y lg:h-30")}
          />
        ) : (
          <input {...shared} type={type} />
        )}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[17px] top-3 truncate text-body text-ink-tertiary peer-[:not(:placeholder-shown)]:hidden"
        >
          <ResponsiveText text={placeholder} />
        </span>
      </div>
      {error && (
        <p id={errorId} className="text-body text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
