import Image from "next/image";
import { Container } from "@/shared/ui";
import { footerContent, footerGroups } from "./data";

export function SiteFooter() {
  return (
    <footer className="bg-ink pt-15 pb-5 lg:pt-20 lg:pb-10">
      <Container>
        <div className="grid grid-cols-2 gap-x-8 gap-y-[34px] lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-8 xl:grid-cols-[416px_208px_208px_1fr]">
          <div className="col-span-2 lg:col-span-1">
            <Image src="/logo-white.svg" alt="Luma" width={54} height={17} />
            <p className="mt-3 text-body text-on-dark-tertiary lg:max-w-[240px]">
              {footerContent.tagline}
            </p>
          </div>

          {footerGroups.map((group) => {
            const headingId = `footer-${group.id}`;
            return (
              <nav key={group.id} aria-labelledby={headingId}>
                <h2
                  id={headingId}
                  className="text-overline uppercase text-on-dark-secondary"
                >
                  {group.title}
                </h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="rounded-sm text-body text-on-dark-tertiary transition-colors duration-200 hover:text-white focus-visible:outline-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            );
          })}
        </div>

        <p className="mt-12 border-t border-ink-secondary pt-6 text-center text-[0.8125rem] leading-[1.5] text-on-dark-secondary lg:mt-16 lg:text-left">
          {footerContent.copyright}
        </p>
      </Container>
    </footer>
  );
}
