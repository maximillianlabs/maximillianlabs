import { handleContactPost } from "@/lib/contact/controllers/contact.controller";

export const runtime = "nodejs";

/** Allow up to 10 MB multipart uploads (PDF attachment limit). */
export const maxDuration = 30;

export async function POST(request: Request) {
  return handleContactPost(request);
}
