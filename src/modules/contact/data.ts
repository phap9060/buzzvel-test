import { siteConfig } from "@/shared/config/site";
import type { ContactChannel } from "./types";

export const contactContent = {
  eyebrow: "Contact",
  title: "Get in touch",
  description:
    "Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.",
  form: {
    title: "Contact us",
    description: "Fill out the fields and we will get in touch.",
    submitLabel: "Send message",
    submittingLabel: "Sending…",
    successMessage:
      "Thanks! Your message was sent. We’ll reply within 24 hours.",
  },
} as const;

export const contactChannels: readonly ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    value: siteConfig.contactEmail,
    href: `mailto:${siteConfig.contactEmail}`,
    icon: { src: "/icons/chat.svg", size: 24 },
  },
  {
    id: "response-time",
    label: "Response Time",
    value: "Up to 24 hours on business days",
    icon: { src: "/icons/clock.svg", size: 20 },
  },
];
