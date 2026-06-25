import { getSanitizedAttachmentFilename, parseContactFormData } from "@/lib/contact/validation";
import type { ContactEmailPayload } from "@/lib/contact/types";
import { sendContactEmail } from "@/lib/contact/services/email.service";

async function buildEmailPayload(
  formData: FormData,
): Promise<ContactEmailPayload> {
  const submission = parseContactFormData(formData);

  const attachment = submission.attachment
    ? {
        filename: getSanitizedAttachmentFilename(submission.attachment),
        content: Buffer.from(await submission.attachment.arrayBuffer()),
      }
    : null;

  return {
    name: submission.name,
    email: submission.email,
    phone: submission.phone,
    subject: submission.subject,
    message: submission.message,
    attachment,
  };
}

export async function processContactSubmission(
  formData: FormData,
): Promise<void> {
  const emailPayload = await buildEmailPayload(formData);
  await sendContactEmail(emailPayload);
}
