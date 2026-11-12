import type { ContactFormValues } from "../types";

const SIMULATED_DELAY_MS = 800;

/**
 * Mock submission. The challenge asks for local data only, so this resolves
 * after a short delay instead of calling a backend. Swapping it for a real
 * request (or a Server Action) would not change the form component.
 */
export async function submitContactForm(
  values: ContactFormValues,
): Promise<void> {
  void values;
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));
}
