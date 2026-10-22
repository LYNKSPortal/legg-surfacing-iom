import { business } from "./business";
import type { ContactFormValues } from "./validation/contact";

type EnquiryPayload = ContactFormValues & { photoCount: number };

/**
 * Sends the enquiry notification email.
 *
 * This is intentionally provider-agnostic: set the RESEND_API_KEY
 * environment variable (never committed to the repo) to send via
 * Resend's HTTP API. Swap the implementation for any other transactional
 * email provider (SendGrid, Postmark, SES, etc.) without changing the
 * calling code in the API route.
 */
export async function sendEnquiryEmail(payload: EnquiryPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_TO_EMAIL || business.email;
  const fromAddress = process.env.CONTACT_FROM_EMAIL || "enquiries@leggsurfacing.co.uk";

  if (!apiKey) {
    // No email provider configured yet. Log server-side so enquiries are
    // never silently lost during local development or before an email
    // provider API key has been added to the environment.
    console.warn(
      "[contact] RESEND_API_KEY is not set. Enquiry was received but not emailed:",
      payload
    );
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromAddress,
      to: toAddress,
      reply_to: payload.email,
      subject: `New website enquiry from ${payload.fullName} — ${payload.service}`,
      text: [
        `Name: ${payload.fullName}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone}`,
        `Location: ${payload.location}`,
        `Service required: ${payload.service}`,
        `Photos attached: ${payload.photoCount}`,
        "",
        "Project description:",
        payload.description,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    throw new Error(`Email provider responded with status ${response.status}`);
  }
}
