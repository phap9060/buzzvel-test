import type { StepIconProps } from "./StepIcon.types";

export function StepIcon({ variant }: StepIconProps) {
  if (variant === "focus") {
    return (
      <div
        aria-hidden="true"
        className="relative size-14 rounded-full bg-brand-soft"
      >
        <div className="absolute top-2 left-2 size-6 rounded-md bg-brand" />
      </div>
    );
  }

  if (variant === "experience") {
    return (
      <div aria-hidden="true" className="relative size-14">
        <div className="absolute inset-0 rotate-12 rounded-lg bg-peach" />
        <div className="absolute top-6 left-6 size-7 rounded-full bg-coral" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="relative size-14 rounded-xl bg-sun-soft">
      <div className="absolute top-7 left-2 size-5 rounded-full bg-mustard" />
    </div>
  );
}
