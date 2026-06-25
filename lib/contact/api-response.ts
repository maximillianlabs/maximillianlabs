import { NextResponse } from "next/server";

import {
  CONTACT_FAILURE_MESSAGE,
  CONTACT_SUCCESS_MESSAGE,
} from "@/lib/contact/constants";
import {
  ContactConfigurationError,
  ContactEmailError,
  ContactValidationError,
} from "@/lib/contact/errors";
import type { ContactApiResponse } from "@/lib/contact/types";

export function contactSuccessResponse(
  message: string = CONTACT_SUCCESS_MESSAGE,
): NextResponse<ContactApiResponse> {
  return NextResponse.json(
    { success: true, message },
    { status: 200 },
  );
}

export function contactErrorResponse(
  message: string,
  status: number,
): NextResponse<ContactApiResponse> {
  return NextResponse.json({ success: false, message }, { status });
}

export function handleContactError(error: unknown): NextResponse<ContactApiResponse> {
  if (error instanceof ContactValidationError) {
    return contactErrorResponse(error.message, error.statusCode);
  }

  if (error instanceof ContactEmailError) {
    console.error("Contact email delivery failed:", error.message);
    return contactErrorResponse(CONTACT_FAILURE_MESSAGE, error.statusCode);
  }

  if (error instanceof ContactConfigurationError) {
    console.error("Contact form configuration error:", error.message);
    return contactErrorResponse(CONTACT_FAILURE_MESSAGE, error.statusCode);
  }

  console.error("Unexpected contact form error:", error);
  return contactErrorResponse(CONTACT_FAILURE_MESSAGE, 500);
}
