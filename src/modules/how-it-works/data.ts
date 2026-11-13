import type { Step } from "./types";

export const howItWorksContent = {
  eyebrow: "How Luma works",
  title: "Less browsing. More learning.",
  stepLabel: "Step",
} as const;

export const steps: readonly Step[] = [
  {
    id: "focus",
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    icon: "focus",
  },
  {
    id: "experience",
    title: "Learn from experience",
    description:
      "Follow concise lessons created by professionals who use these skills.",
    icon: "experience",
  },
  {
    id: "practice",
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    icon: "practice",
  },
];
