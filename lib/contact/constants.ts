/** Maximum PDF attachment size in bytes (10 MB). */
export const MAX_PDF_SIZE_BYTES = 10 * 1024 * 1024;

/** Allowed MIME types for contact form attachments. */
export const ALLOWED_PDF_MIME_TYPES = new Set(["application/pdf"]);

/** Allowed file extension for client-side accept attribute. */
export const PDF_ACCEPT = "application/pdf,.pdf";

export const CONTACT_FORM_FIELD_NAMES = {
  name: "name",
  email: "email",
  phone: "phone",
  subject: "subject",
  message: "message",
  attachment: "attachment",
} as const;

export const CONTACT_SUCCESS_MESSAGE =
  "Your message has been sent successfully.";

export const CONTACT_FAILURE_MESSAGE = "Unable to send message.";
