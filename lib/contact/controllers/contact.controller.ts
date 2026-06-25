import { contactSuccessResponse, handleContactError } from "@/lib/contact/api-response";
import { processContactSubmission } from "@/lib/contact/services/contact.service";

export async function handleContactPost(request: Request) {
  try {
    const formData = await request.formData();
    await processContactSubmission(formData);
    return contactSuccessResponse();
  } catch (error) {
    return handleContactError(error);
  }
}
