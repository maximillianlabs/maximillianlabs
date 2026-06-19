import { NextResponse } from "next/server";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_FILE_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const projectDetails = String(formData.get("projectDetails") ?? "").trim();
    const services = String(formData.get("services") ?? "").trim();
    const brief = formData.get("brief");

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (brief instanceof File && brief.size > 0) {
      if (!ALLOWED_FILE_TYPES.has(brief.type)) {
        return NextResponse.json(
          { error: "Only PDF and DOC files are allowed." },
          { status: 400 },
        );
      }

      if (brief.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: "File size must be under 10MB." },
          { status: 400 },
        );
      }
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail =
      process.env.CONTACT_FORM_TO ?? process.env.NEXT_PUBLIC_CONTACT_EMAIL;

    if (resendApiKey && contactEmail) {
      const attachments =
        brief instanceof File && brief.size > 0
          ? [
              {
                filename: brief.name,
                content: Buffer.from(await brief.arrayBuffer()).toString(
                  "base64",
                ),
              },
            ]
          : undefined;

      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FORM_FROM ?? "onboarding@resend.dev",
          to: [contactEmail],
          reply_to: email,
          subject: `New project enquiry from ${name}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            phone ? `Phone: ${phone}` : null,
            services ? `Services: ${services}` : null,
            "",
            "Project details:",
            projectDetails || "No additional details provided.",
          ]
            .filter(Boolean)
            .join("\n"),
          attachments,
        }),
      });

      if (!emailResponse.ok) {
        const errorBody = await emailResponse.text();
        console.error("Resend API error:", errorBody);
        return NextResponse.json(
          { error: "Unable to send your message right now. Please try again." },
          { status: 502 },
        );
      }
    } else {
      console.info("Contact form submission received:", {
        name,
        email,
        phone,
        services,
        projectDetails,
        hasBrief: brief instanceof File && brief.size > 0,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
