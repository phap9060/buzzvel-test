import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

type ButtonVariant = "primary" | "secondary" | "accent";
type ButtonSize = "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
};

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof CommonProps | "href"> & {
    href: string | undefined;
  };

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: never;
  };

export type ActionLink = {
  label: string;
  href?: string;
};

export type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand-strong",
  secondary: "border border-line bg-white text-ink hover:border-ink-tertiary",
  accent: "bg-sun text-ink hover:bg-sun-soft",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5",
  lg: "px-7 py-3.5",
};

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
    "inline-flex items-center justify-center rounded-lg text-center text-body font-bold whitespace-nowrap transition-colors duration-200",
    "disabled:cursor-not-allowed disabled:opacity-70",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );

  if ("href" in rest) {
    return (
      <a {...(rest as ComponentPropsWithoutRef<"a">)} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      {...(rest as ComponentPropsWithoutRef<"button">)}
      className={classes}
    >
      {children}
    </button>
  );
}
