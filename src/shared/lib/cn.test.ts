import { describe, expect, it } from "vitest";
import { cn } from "./cn";

describe("cn", () => {
  it("joins conditional classes", () => {
    expect(
      cn("flex", false, null, undefined, { "gap-2": true, "gap-4": false }),
    ).toBe("flex gap-2");
  });

  it("lets a later utility override an earlier one", () => {
    expect(cn("px-4 py-2", "px-6")).toBe("py-2 px-6");
  });

  it("keeps a theme text style next to a theme colour", () => {
    expect(cn("text-h1 text-ink", "text-white")).toBe("text-h1 text-white");
  });

  it("resolves conflicts between theme tokens", () => {
    expect(
      cn("text-body text-ink-secondary", "text-subtitle-1 text-brand"),
    ).toBe("text-subtitle-1 text-brand");
    expect(cn("bg-cream", "bg-brand-soft")).toBe("bg-brand-soft");
    expect(cn("shadow-card", "shadow-photo")).toBe("shadow-photo");
  });
});
