import type { ContactApiResponse } from "@/lib/contact/types";
import { CONTACT_FORM_FIELD_NAMES } from "@/lib/contact/constants";

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export const INITIAL_CONTACT_FORM_VALUES: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

type SubmitContactFormOptions = {
  values: ContactFormValues;
  attachment: File | null;
  onProgress?: (progress: number) => void;
};

export function submitContactForm({
  values,
  attachment,
  onProgress,
}: SubmitContactFormOptions): Promise<ContactApiResponse> {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append(CONTACT_FORM_FIELD_NAMES.name, values.name);
    formData.append(CONTACT_FORM_FIELD_NAMES.email, values.email);
    formData.append(CONTACT_FORM_FIELD_NAMES.phone, values.phone);
    formData.append(CONTACT_FORM_FIELD_NAMES.subject, values.subject);
    formData.append(CONTACT_FORM_FIELD_NAMES.message, values.message);

    if (attachment) {
      formData.append(CONTACT_FORM_FIELD_NAMES.attachment, attachment);
    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/contact");
    xhr.responseType = "json";

    xhr.upload.onprogress = (event) => {
      if (!event.lengthComputable) {
        return;
      }

      const progress = Math.round((event.loaded / event.total) * 100);
      onProgress?.(progress);
    };

    xhr.onload = () => {
      const response = xhr.response as ContactApiResponse | null;

      if (xhr.status >= 200 && xhr.status < 300 && response?.success) {
        resolve(response);
        return;
      }

      const message =
        response?.message ??
        "Unable to submit the form. Please try again.";

      reject(new Error(message));
    };

    xhr.onerror = () => {
      reject(new Error("Network error. Please check your connection and try again."));
    };

    xhr.onabort = () => {
      reject(new Error("Upload was cancelled."));
    };

    xhr.send(formData);
  });
}
