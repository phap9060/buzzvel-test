export type StepIconVariant = "focus" | "experience" | "practice";

export type Step = {
  id: string;
  title: string;
  description: string;
  icon: StepIconVariant;
};
