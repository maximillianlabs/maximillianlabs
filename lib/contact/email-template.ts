import type { ContactFormFields } from "@/lib/contact/types";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatField(label: string, value: string): string {
  return `
    <tr>
      <td style="padding: 8px 0; color: #71717a; font-size: 13px; font-weight: 600; width: 120px; vertical-align: top;">
        ${escapeHtml(label)}
      </td>
      <td style="padding: 8px 0; color: #18181b; font-size: 15px; line-height: 1.6;">
        ${escapeHtml(value)}
      </td>
    </tr>`;
}

export function buildContactEmailSubject(name: string, subject: string): string {
  return `New Contact Form Submission: ${subject} — ${name}`;
}

export function buildContactEmailText(data: ContactFormFields): string {
  const lines = [
    "New Contact Form Submission",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    `Subject: ${data.subject}`,
    "",
    "Message:",
    data.message,
  ].filter((line): line is string => line !== null);

  return lines.join("\n");
}

export function buildContactEmailHtml(data: ContactFormFields): string {
  const phoneRow = data.phone
    ? formatField("Phone", data.phone)
    : "";

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Contact Form Submission</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f5; padding: 32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);">
            <tr>
              <td style="background-color: #0a0a0a; padding: 28px 32px;">
                <h1 style="margin: 0; color: #00ffff; font-size: 22px; font-weight: 600; letter-spacing: -0.02em;">
                  New Contact Form Submission
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  ${formatField("Name", data.name)}
                  ${formatField("Email", data.email)}
                  ${phoneRow}
                  ${formatField("Subject", data.subject)}
                </table>
                <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e4e4e7;">
                  <p style="margin: 0 0 12px; color: #71717a; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;">
                    Message
                  </p>
                  <p style="margin: 0; color: #18181b; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">
                    ${escapeHtml(data.message)}
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px 32px; background-color: #fafafa; border-top: 1px solid #e4e4e7;">
                <p style="margin: 0; color: #a1a1aa; font-size: 12px; line-height: 1.5;">
                  This message was sent via the contact form on your website. Reply directly to this email to respond to the sender.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
