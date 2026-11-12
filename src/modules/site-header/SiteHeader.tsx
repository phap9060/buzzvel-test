import Image from "next/image";
import { Button, Container } from "@/shared/ui";
import { MobileMenu } from "./components/MobileMenu";
import { loginLink, primaryNav, signupLink } from "./data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream">
      <Container className="relative flex h-17 items-center justify-between md:h-[69px] lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <a href="#top" className="justify-self-start rounded-sm">
          <Image
            src="/logo.svg"
            alt="Luma home"
            width={54}
            height={17}
            preload
          />
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {primaryNav.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="rounded-sm text-body text-ink-secondary transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center justify-end gap-2 md:flex">
          <a
            href={loginLink.href}
            className="rounded-lg px-4 py-2.5 text-body text-ink-secondary transition-colors duration-200 hover:text-ink"
          >
            {loginLink.label}
          </a>
          <Button href={signupLink.href} size="md">
            {signupLink.label}
          </Button>
        </div>

        <MobileMenu links={primaryNav} login={loginLink} signup={signupLink} />
      </Container>
    </header>
  );
}
