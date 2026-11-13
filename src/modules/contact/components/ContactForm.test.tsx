import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { contactContent, contactFormCopy } from "../data";
import { submitContactForm } from "../lib/submitContactForm";
import { ContactForm } from "./ContactForm";

vi.mock("../lib/submitContactForm", () => ({
  submitContactForm: vi.fn(),
}));

const submit = vi.mocked(submitContactForm);

const renderForm = () =>
  render(
    <ContactForm
      fields={contactFormCopy}
      submitLabel={contactContent.form.submitLabel}
      submittingLabel="Sending..."
      successMessage="Thanks, we will be in touch."
    />,
  );

const fillValidForm = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.type(screen.getByLabelText(/Full name/), "Ada Lovelace");
  await user.type(screen.getByLabelText(/Email/), "ada@example.com");
  await user.type(
    screen.getByLabelText(/Your question/),
    "I would like to know more.",
  );
};

describe("ContactForm", () => {
  beforeEach(() => {
    submit.mockReset();
    submit.mockResolvedValue();
  });

  it("shows an error on every empty field and focuses the first one", async () => {
    const user = userEvent.setup();
    renderForm();

    await user.click(screen.getByRole("button", { name: /Send message/ }));

    const name = screen.getByLabelText(/Full name/);
    expect(name).toHaveFocus();
    expect(name).toBeInvalid();
    expect(name).toHaveAccessibleDescription("Please enter your name.");
    expect(screen.getByLabelText(/Email/)).toBeInvalid();
    expect(screen.getByLabelText(/Your question/)).toBeInvalid();
    expect(submit).not.toHaveBeenCalled();
  });

  it("focuses the first invalid field when earlier ones are valid", async () => {
    const user = userEvent.setup();
    renderForm();

    await user.type(screen.getByLabelText(/Full name/), "Ada Lovelace");
    await user.type(screen.getByLabelText(/Email/), "not-an-email");
    await user.click(screen.getByRole("button", { name: /Send message/ }));

    const email = screen.getByLabelText(/Email/);
    expect(email).toHaveFocus();
    expect(email).toHaveAccessibleDescription(
      "Please enter a valid email address.",
    );
  });

  it("clears a field error as soon as the field is edited", async () => {
    const user = userEvent.setup();
    renderForm();

    await user.click(screen.getByRole("button", { name: /Send message/ }));
    await user.type(screen.getByLabelText(/Full name/), "A");

    expect(screen.getByLabelText(/Full name/)).toBeValid();
    expect(
      screen.queryByText("Please enter your name."),
    ).not.toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInvalid();
  });

  it("submits valid values, then resets and announces success", async () => {
    const user = userEvent.setup();
    renderForm();

    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: /Send message/ }));

    expect(submit).toHaveBeenCalledWith({
      name: "Ada Lovelace",
      email: "ada@example.com",
      message: "I would like to know more.",
    });
    expect(await screen.findByRole("status")).toHaveTextContent(
      "Thanks, we will be in touch.",
    );
    expect(screen.getByLabelText(/Full name/)).toHaveValue("");
    expect(screen.getByLabelText(/Email/)).toHaveValue("");
    expect(screen.getByLabelText(/Your question/)).toHaveValue("");
  });

  it("disables the button while the submission is pending", async () => {
    let finish: () => void = () => {};
    submit.mockReturnValue(
      new Promise<void>((resolve) => {
        finish = resolve;
      }),
    );
    const user = userEvent.setup();
    renderForm();

    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: /Send message/ }));

    expect(screen.getByRole("button", { name: "Sending..." })).toBeDisabled();
    expect(screen.getByRole("status")).toBeEmptyDOMElement();

    finish();

    expect(
      await screen.findByRole("button", { name: /Send message/ }),
    ).toBeEnabled();
  });
});

describe("ContactForm copy", () => {
  it("renders the Portuguese copy of the mobile frame, marked as Portuguese", () => {
    renderForm();

    for (const text of ["Nome completo", "E-mail", "Sua dúvida"]) {
      expect(screen.getByText(text)).toHaveAttribute("lang", "pt");
    }
    expect(screen.getByText("Enviar mensagem")).toHaveAttribute("lang", "pt");
  });
});
