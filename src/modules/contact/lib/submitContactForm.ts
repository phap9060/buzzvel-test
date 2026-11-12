import type { ContactFormValues } from "../types";

const SIMULATED_DELAY_MS = 800;

export async function submitContactForm(
  values: ContactFormValues,
): Promise<void> {
  void values;
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));
}
