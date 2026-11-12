import { describe, expect, it } from "vitest";
import { EMPTY_VALUES, validateContactForm } from "./validation";

const validValues = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  message: "I would like to know more about team plans.",
};

describe("validateContactForm", () => {
  it("accepts a complete, well-formed submission", () => {
    expect(validateContactForm(validValues)).toEqual({});
  });

  it("requires every field", () => {
    expect(Object.keys(validateContactForm(EMPTY_VALUES))).toEqual([
      "name",
      "email",
      "message",
    ]);
  });

  it("treats whitespace-only input as empty", () => {
    const errors = validateContactForm({ ...validValues, name: "   " });
    expect(errors.name).toBeDefined();
  });

  it.each(["ada", "ada@", "ada@example", "ada @example.com"])(
    "rejects the malformed email %j",
    (email) => {
      const errors = validateContactForm({ ...validValues, email });
      expect(errors.email).toBe("Please enter a valid email address.");
    },
  );

  it("asks for a longer message when it is too short", () => {
    const errors = validateContactForm({ ...validValues, message: "Hi" });
    expect(errors.message).toMatch(/at least 10 characters/);
  });
});
