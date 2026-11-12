import Image from "next/image";
import { Container, Eyebrow, Section } from "@/shared/ui";
import { ContactForm } from "./components/ContactForm";
import { contactChannels, contactContent } from "./data";

const HEADING_ID = "contact-heading";
const FORM_HEADING_ID = "contact-form-heading";

export function Contact() {
  const { form } = contactContent;

  return (
    <Section id="contact" labelledBy={HEADING_ID} className="bg-white">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-15">
        <div className="lg:w-[480px] lg:max-w-[45%]">
          <Eyebrow>{contactContent.eyebrow}</Eyebrow>
          <h2 id={HEADING_ID} className="mt-4 text-h3 text-ink">
            {contactContent.title}
          </h2>
          <p className="mt-4 text-subtitle-1 text-ink-secondary">
            {contactContent.description}
          </p>

          <ul className="mt-10 flex flex-col gap-4">
            {contactChannels.map((channel) => (
              <li
                key={channel.id}
                className="flex items-center gap-4 rounded-xl bg-cream p-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft">
                  <Image
                    src={channel.icon.src}
                    alt=""
                    width={channel.icon.size}
                    height={channel.icon.size}
                  />
                </span>
                <p className="flex flex-col gap-1 text-body">
                  <span className="text-ink">{channel.label}</span>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="rounded-sm text-brand underline-offset-2 hover:underline"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <span className="text-ink-tertiary">{channel.value}</span>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <section
          aria-labelledby={FORM_HEADING_ID}
          className="rounded-2xl border border-line bg-white p-5 shadow-card lg:w-[540px] lg:max-w-[50%] lg:shrink-0 lg:p-10"
        >
          <h3 id={FORM_HEADING_ID} className="text-h5 text-ink">
            {form.title}
          </h3>
          <p className="mt-2 mb-6 text-body text-ink-secondary">
            {form.description}
          </p>
          <ContactForm
            submitLabel={form.submitLabel}
            submittingLabel={form.submittingLabel}
            successMessage={form.successMessage}
          />
        </section>
      </Container>
    </Section>
  );
}
