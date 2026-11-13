import type { Step } from "./types";

export const howItWorksContent = {
  eyebrow: "How Luma works",
  title: "Less browsing. More learning.",
} as const;

export const steps: readonly Step[] = [
  {
    id: "focus",
    label: "Step 01",
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    icon: "focus",
  },
  {
    id: "experience",
    label: { mobile: "Step 02", desktop: "Step 01" },
    title: "Learn from experience",
    description: {
      mobile:
        "Follow concise lessons created by professionals who actually use these skills.",
      desktop:
        "Follow concise lessons created by professionals who use these skills.",
    },
    icon: "experience",
  },
  {
    id: "practice",
    label: { mobile: "Step 03", desktop: "Step 01" },
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    icon: "practice",
  },
];
