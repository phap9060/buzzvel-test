import type { ResponsiveCopy } from "@/shared/ui";

export type StepIconVariant = "focus" | "experience" | "practice";

export type Step = {
  id: string;
  title: string;
  label: string | ResponsiveCopy;
  description: string | ResponsiveCopy;
  icon: StepIconVariant;
};
