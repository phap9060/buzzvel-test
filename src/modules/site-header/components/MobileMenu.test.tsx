import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { loginLink, primaryNav, signupLink } from "../data";
import { MobileMenu } from "./MobileMenu";

const renderMenu = () =>
  render(
    <MobileMenu links={primaryNav} login={loginLink} signup={signupLink} />,
  );

describe("MobileMenu", () => {
  it("starts closed", () => {
    renderMenu();

    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });

  it("opens a panel with every link and points aria-controls at it", async () => {
    const user = userEvent.setup();
    renderMenu();

    await user.click(screen.getByRole("button", { name: "Open menu" }));

    const toggle = screen.getByRole("button", { name: "Close menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(
      document.getElementById(toggle.getAttribute("aria-controls") ?? ""),
    ).toContainElement(screen.getByRole("navigation", { name: "Main" }));
    for (const link of [...primaryNav, loginLink, signupLink]) {
      const item = screen.getByText(link.label);
      if (link.href) {
        expect(item).toHaveAttribute("href", link.href);
      } else {
        expect(item).not.toHaveAttribute("href");
      }
    }
  });

  it("can be operated from the keyboard", async () => {
    const user = userEvent.setup();
    renderMenu();

    await user.tab();
    await user.keyboard("{Enter}");
    expect(screen.getByRole("navigation")).toBeInTheDocument();

    await user.tab();
    expect(
      screen.getByRole("link", { name: primaryNav[0].label }),
    ).toHaveFocus();
  });

  it("closes on Escape and returns focus to the toggle", async () => {
    const user = userEvent.setup();
    renderMenu();

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    await user.tab();
    await user.keyboard("{Escape}");

    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Open menu" })).toHaveFocus();
  });

  it("keeps actions without a destination out of the tab order", async () => {
    const user = userEvent.setup();
    renderMenu();

    await user.click(screen.getByRole("button", { name: "Open menu" }));

    expect(screen.queryByRole("link", { name: loginLink.label })).toBeNull();
    expect(screen.queryByRole("link", { name: signupLink.label })).toBeNull();
    expect(screen.getAllByRole("link")).toHaveLength(
      primaryNav.filter((link) => link.href).length,
    );
  });

  it("closes when a link is chosen", async () => {
    const user = userEvent.setup();
    renderMenu();

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    await user.click(screen.getByRole("link", { name: primaryNav[0].label }));

    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });
});
