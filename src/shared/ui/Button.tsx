import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

type ButtonVariant = "primary" | "secondary" | "accent";
type ButtonSize = "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Stretches to the container width (mobile call-to-actions). */
  fullWidth?: boolean;
  className?: string;
};

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof CommonProps> & { href: string };

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border-transparent bg-brand text-white hover:bg-brand-strong",
  secondary: "border-line bg-white text-ink hover:border-ink-tertiary",
  accent: "border-transparent bg-sun text-ink hover:bg-sun-soft",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5",
  lg: "px-7 py-3.5",
};

/**
 * Call-to-action. Renders an anchor when `href` is given and a native button
 * otherwise, so navigation and actions keep the right semantics.
 */
export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "lg",
    fullWidth = false,
    className,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center rounded-lg border text-center text-body font-bold whitespace-nowrap transition-colors duration-200",
    "disabled:cursor-not-allowed disabled:opacity-70",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );

  if (rest.href !== undefined) {
    return (
      <a {...rest} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" {...rest} className={classes}>
      {children}
    </button>
  );
}
