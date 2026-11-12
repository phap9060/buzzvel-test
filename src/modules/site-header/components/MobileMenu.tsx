"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/shared/ui";
import type { NavLink } from "../types";

type MobileMenuProps = {
  links: readonly NavLink[];
  login: NavLink;
  signup: NavLink;
};

/** Matches the Tailwind `md` breakpoint where the inline navigation takes over. */
const DESKTOP_QUERY = "(min-width: 48rem)";

/**
 * Disclosure menu for small screens. The Figma file only shows the closed
 * state, so the open panel reuses the header surface and the desktop link
 * styles.
 */
export function MobileMenu({ links, login, signup }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    // Close when the viewport grows into the desktop layout.
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="-mr-1.5 flex size-9 items-center justify-center rounded-lg"
      >
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 5L19 19M19 5L5 19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <Image src="/icons/menu.svg" alt="" width={24} height={24} />
        )}
      </button>

      {isOpen && (
        <div
          id={panelId}
          className="absolute inset-x-0 top-full border-b border-line bg-cream px-5 pt-2 pb-6 shadow-card"
        >
          <nav aria-label="Main">
            <ul>
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={close}
                    className="block py-3 text-subtitle-1 text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <Button href={signup.href} onClick={close} fullWidth>
              {signup.label}
            </Button>
            <Button
              href={login.href}
              onClick={close}
              variant="secondary"
              fullWidth
            >
              {login.label}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
