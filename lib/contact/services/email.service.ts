import { Resend } from "resend";

import {
  buildContactEmailHtml,
  buildContactEmailSubject,
  buildContactEmailText,
} from "@/lib/contact/email-template";
import { ContactConfigurationError, ContactEmailError } from "@/lib/contact/errors";
import type { ContactEmailPayload } from "@/lib/contact/types";

type ContactEmailConfig = {
  apiKey: string;
  from: string;
  to: string;
};

function getEmailConfig(): ContactEmailConfig {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FORM_FROM?.trim();
  const to =
    process.env.CONTACT_FORM_TO?.trim() ??
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();

  if (!apiKey) {
    throw new ContactConfigurationError("RESEND_API_KEY is not configured.");
  }

  if (!from) {
    throw new ContactConfigurationError(
      "CONTACT_FORM_FROM is not configured. Use a verified Resend domain.",
    );
  }

  if (!to) {
    throw new ContactConfigurationError(
      "CONTACT_FORM_TO or NEXT_PUBLIC_CONTACT_EMAIL is not configured.",
    );
  }

  return { apiKey, from, to };
}

export async function sendContactEmail(
  payload: ContactEmailPayload,
): Promise<void> {
  const { apiKey, from, to } = getEmailConfig();
  const resend = new Resend(apiKey);

  const attachments = payload.attachment
    ? [
        {
          filename: payload.attachment.filename,
          content: payload.attachment.content,
        },
      ]
    : undefined;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject: buildContactEmailSubject(payload.name, payload.subject),
    text: buildContactEmailText(payload),
    html: buildContactEmailHtml(payload),
    attachments,
  });

  if (error) {
    console.error("Resend API error:", error);
    throw new ContactEmailError(error.message);
  }
}
