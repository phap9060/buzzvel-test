import { siteConfig } from "@/shared/config/site";
import type { ContactChannel, ContactFormCopy } from "./types";

export const contactContent = {
  eyebrow: "Contact",
  title: "Get in touch",
  description:
    "Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.",
  form: {
    title: "Contact us",
    description: {
      mobile: "Preencha os campos e entraremos em contato.",
      desktop: "Fill out the fields and we will get in touch.",
      mobileLang: "pt",
    },
    submitLabel: {
      mobile: "Enviar mensagem",
      desktop: "Send message",
      mobileLang: "pt",
    },
    submittingLabel: "Sending…",
    successMessage:
      "Thanks! Your message was sent. We’ll reply within 24 hours.",
  },
} as const;

export const contactFormCopy: ContactFormCopy = {
  name: {
    label: { mobile: "Nome completo", desktop: "Full name", mobileLang: "pt" },
    placeholder: { mobile: "Seu nome", desktop: "Your name", mobileLang: "pt" },
  },
  email: {
    label: { mobile: "E-mail", desktop: "Email", mobileLang: "pt" },
    placeholder: {
      mobile: "seuemail@exemplo.com",
      desktop: "youremail@example.com",
      mobileLang: "pt",
    },
  },
  message: {
    label: { mobile: "Sua dúvida", desktop: "Your question", mobileLang: "pt" },
    placeholder: {
      mobile: "Conte como podemos ajudar...",
      desktop: "Tell us how we can help...",
      mobileLang: "pt",
    },
  },
};

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
