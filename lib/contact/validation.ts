import { z } from "zod";

import {
  ALLOWED_PDF_MIME_TYPES,
  MAX_PDF_SIZE_BYTES,
} from "@/lib/contact/constants";
import { sanitizeFilename, sanitizeTextInput } from "@/lib/contact/sanitize";
import type { ContactSubmission } from "@/lib/contact/types";
import { ContactValidationError } from "@/lib/contact/errors";

const emailSchema = z
  .string()
  .trim()
  .min(1, "Email address is required.")
  .email("Please enter a valid email address.");

const contactFieldsSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Full name is required.")
    .max(200, "Full name must be 200 characters or fewer."),
  email: emailSchema,
  phone: z
    .string()
    .trim()
    .max(30, "Phone number must be 30 characters or fewer.")
    .optional()
    .default(""),
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required.")
    .max(300, "Subject must be 300 characters or fewer."),
  message: z
    .string()
    .trim()
    .min(1, "Message is required.")
    .max(10_000, "Message must be 10,000 characters or fewer."),
});

export type ParsedContactFormData = z.infer<typeof contactFieldsSchema>;

function validatePdfAttachment(file: File): void {
  const isPdfMime =
    ALLOWED_PDF_MIME_TYPES.has(file.type) ||
    file.name.toLowerCase().endsWith(".pdf");

  if (!isPdfMime) {
    throw new ContactValidationError("Only PDF files are allowed.");
  }

  if (file.size > MAX_PDF_SIZE_BYTES) {
    throw new ContactValidationError("File size must be under 10MB.");
  }

  if (file.size === 0) {
    throw new ContactValidationError("The uploaded PDF file is empty.");
  }
}

function parseAttachment(formData: FormData): File | null {
  const value = formData.get("attachment");

  if (value === null || value === "") {
    return null;
  }

  if (!(value instanceof File)) {
    throw new ContactValidationError("Invalid attachment upload.");
  }

  if (value.size === 0) {
    return null;
  }

  validatePdfAttachment(value);
  return value;
}

export function parseContactFormData(formData: FormData): ContactSubmission {
  const rawFields = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = contactFieldsSchema.safeParse(rawFields);

  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message ?? "Invalid form data.";
    throw new ContactValidationError(firstIssue);
  }

  const attachment = parseAttachment(formData);

  return {
    name: sanitizeTextInput(parsed.data.name),
    email: sanitizeTextInput(parsed.data.email),
    phone: sanitizeTextInput(parsed.data.phone ?? ""),
    subject: sanitizeTextInput(parsed.data.subject),
    message: sanitizeTextInput(parsed.data.message),
    attachment,
  };
}

export function getSanitizedAttachmentFilename(file: File): string {
  return sanitizeFilename(file.name);
}
