import { AvatarStack, Button, Container } from "@/shared/ui";
import { Decorations } from "./components/Decorations";
import { communityAvatars, finalCtaContent } from "./data";

const HEADING_ID = "final-cta-heading";

export function FinalCta() {
  const { primaryAction, secondaryAction } = finalCtaContent;

  return (
    <section
      aria-labelledby={HEADING_ID}
      className="relative overflow-hidden bg-sun-soft py-15 md:py-20 lg:py-25"
    >
      <Decorations />
      <Container className="relative flex flex-col items-center text-center">
        <AvatarStack
          avatars={communityAvatars}
          size={40}
          ringClassName="border-sun"
        />
        <h2
          id={HEADING_ID}
          className="mt-8 font-display text-h2 lg:text-h2-lg text-ink"
        >
          {finalCtaContent.title}
        </h2>
        <p className="mt-4 text-subtitle-1 lg:text-subtitle-1-lg text-ink-secondary">
          {finalCtaContent.description}
        </p>
        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button href={primaryAction.href}>{primaryAction.label}</Button>
          <Button href={secondaryAction.href} variant="secondary">
            {secondaryAction.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
