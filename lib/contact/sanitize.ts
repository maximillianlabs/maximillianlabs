/**
 * Strips HTML tags and normalizes whitespace to reduce injection risk in email content.
 */
export function sanitizeTextInput(value: string): string {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim();
}

/**
 * Sanitizes a filename for safe use as an email attachment name.
 */
export function sanitizeFilename(filename: string): string {
  const basename = filename.split(/[/\\]/).pop() ?? "attachment.pdf";
  const sanitized = basename.replace(/[^\w.\-() ]+/g, "_").trim();

  return sanitized.length > 0 ? sanitized : "attachment.pdf";
}
