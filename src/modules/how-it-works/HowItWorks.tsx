import { Container, Eyebrow, ResponsiveText, Section } from "@/shared/ui";
import { StepIcon } from "./components/StepIcon";
import { howItWorksContent, steps } from "./data";

const HEADING_ID = "how-it-works-heading";

export function HowItWorks() {
  return (
    <Section id="how-it-works" labelledBy={HEADING_ID} className="bg-cream">
      <Container>
        <div className="text-center">
          <Eyebrow>{howItWorksContent.eyebrow}</Eyebrow>
          <h2
            id={HEADING_ID}
            className="mt-4 font-display text-h3 lg:text-h3-lg text-ink"
          >
            {howItWorksContent.title}
          </h2>
        </div>

        <div className="relative mt-10 [--step-gap:2rem] md:mt-20 lg:mt-27 lg:pb-7 lg:[--step-gap:5rem]">
          <div
            aria-hidden="true"
            className="absolute top-7 right-[calc((100%-2*var(--step-gap))/3-13px)] left-13 hidden h-px bg-line md:block"
          />
          <ol className="relative flex flex-col md:flex-row md:gap-(--step-gap)">
            {steps.map((step, index) => (
              <li
                key={step.id}
                className="relative pb-19 last:pb-0 md:flex-1 md:pb-0"
              >
                <StepIcon variant={step.icon} />
                <p className="mt-6 text-overline uppercase text-ink-secondary">
                  <ResponsiveText text={step.label} />
                </p>
                <h3 className="mt-2 font-display text-h5 lg:text-h5-lg text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-subtitle-2 lg:text-subtitle-2-lg text-ink-secondary">
                  <ResponsiveText text={step.description} />
                </p>
                {index < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-7 h-[50px] w-px bg-line md:hidden"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
