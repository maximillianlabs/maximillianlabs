export type ContactFormFields = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type ContactSubmission = ContactFormFields & {
  attachment: File | null;
};

export type ContactApiSuccessResponse = {
  success: true;
  message: string;
};

export type ContactApiErrorResponse = {
  success: false;
  message: string;
};

export type ContactApiResponse = ContactApiSuccessResponse | ContactApiErrorResponse;

export type EmailAttachment = {
  filename: string;
  content: Buffer;
};

export type ContactEmailPayload = ContactFormFields & {
  attachment: EmailAttachment | null;
};
