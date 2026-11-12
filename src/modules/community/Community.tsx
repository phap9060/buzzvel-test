import { Button, Container, Eyebrow, Section } from "@/shared/ui";
import { PhotoMosaic } from "./components/PhotoMosaic";
import { communityContent, mosaicColumns } from "./data";

const HEADING_ID = "community-heading";

export function Community() {
  const { action } = communityContent;

  return (
    <Section id="community" labelledBy={HEADING_ID} className="bg-cream">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-15">
        <div className="lg:min-w-0 lg:flex-1">
          <Eyebrow>{communityContent.eyebrow}</Eyebrow>
          <h2 id={HEADING_ID} className="mt-2 text-h3 text-ink">
            {communityContent.title}
          </h2>
          <p className="mt-6 text-subtitle-1 text-ink-secondary lg:mt-8">
            {communityContent.description}
          </p>
          <Button
            href={action.href}
            variant="secondary"
            className="mt-6 lg:mt-8"
          >
            {action.label}
          </Button>
        </div>

        <div className="flex justify-center lg:min-w-0 lg:flex-1">
          <PhotoMosaic columns={mosaicColumns} />
        </div>
      </Container>
    </Section>
  );
}
