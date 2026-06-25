"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PdfUpload } from "@/components/contact/pdf-upload";
import {
  INITIAL_CONTACT_FORM_VALUES,
  submitContactForm,
  type ContactFormValues,
} from "@/lib/contact/client";
import { cn } from "@/lib/utils";

function StepIndicator({ step }: { step: 1 | 2 }) {
  return (
    <div className="relative mb-12 md:mb-16">
      <div className="h-px w-full bg-[#00ffff]" />
      <div
        className={cn(
          "absolute top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sm font-normal text-black md:h-9 md:w-9",
          step === 1 ? "left-0" : "right-0",
        )}
      >
        {step}
      </div>
    </div>
  );
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateStepOne(values: ContactFormValues): string | null {
  if (!values.name.trim()) {
    return "Full name is required.";
  }

  if (!values.email.trim()) {
    return "Email address is required.";
  }

  if (!EMAIL_PATTERN.test(values.email.trim())) {
    return "Please enter a valid email address.";
  }

  if (!values.subject.trim()) {
    return "Subject is required.";
  }

  return null;
}

function validateStepTwo(values: ContactFormValues): string | null {
  if (!values.message.trim()) {
    return "Message is required.";
  }

  return null;
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<ContactFormValues>(
    INITIAL_CONTACT_FORM_VALUES,
  );
  const [attachment, setAttachment] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  function updateField<K extends keyof ContactFormValues>(
    field: K,
    value: ContactFormValues[K],
  ) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function resetForm() {
    setFormData(INITIAL_CONTACT_FORM_VALUES);
    setAttachment(null);
    setUploadProgress(0);
    setStep(1);
    formRef.current?.reset();
  }

  function handleStepOneSubmit(event: React.FormEvent) {
    event.preventDefault();

    const validationError = validateStepOne(formData);
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setStep(2);
  }

  async function handleFinalSubmit(event: React.FormEvent) {
    event.preventDefault();

    const validationError = validateStepTwo(formData);
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setIsSubmitting(true);
    setUploadProgress(0);

    try {
      const result = await submitContactForm({
        values: formData,
        attachment,
        onProgress: setUploadProgress,
      });

      toast.success(result.message);
      resetForm();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Unable to submit the form. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  }

  return (
    <div className="relative px-6 pb-16 pt-4 md:px-14 md:pb-20 md:pt-6 lg:px-24 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#00ffff]/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 h-[360px] w-[360px] rounded-full bg-[#00ffff]/5 blur-[90px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <StepIndicator step={step} />

        <div className="max-w-xl lg:max-w-2xl">
          {step === 1 ? (
            <form onSubmit={handleStepOneSubmit} className="space-y-8">
              <div>
                <div className="mb-5 flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#00ffff]" />
                  <span className="text-sm text-zinc-400">Contact Us</span>
                </div>
                <h1 className="max-w-lg text-[2rem] font-normal leading-[1.15] tracking-tight text-white md:text-[2.5rem] lg:text-[2.75rem]">
                  Interested in discussing a project with us?
                </h1>
              </div>

              <div className="space-y-3">
                <Input
                  required
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Full name *"
                  value={formData.name}
                  onChange={(event) => updateField("name", event.target.value)}
                />
                <Input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email address *"
                  value={formData.email}
                  onChange={(event) => updateField("email", event.target.value)}
                />
                <Input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="Phone number (optional)"
                  value={formData.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                />
                <Input
                  required
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={(event) => updateField("subject", event.target.value)}
                />
              </div>

              <p className="max-w-md text-sm leading-relaxed text-zinc-500">
                If you begin filling in this form but don&apos;t finish, we may
                still contact you based on the details you&apos;ve entered so far.
              </p>

              <Button
                type="submit"
                variant="outline"
                className="h-11 rounded-md border border-white bg-transparent px-7 text-sm font-normal text-white shadow-none hover:bg-white/10"
              >
                Next Step
              </Button>
            </form>
          ) : (
            <form ref={formRef} onSubmit={handleFinalSubmit} className="space-y-8">
              <div>
                <h2 className="text-[2rem] font-normal tracking-tight text-white md:text-[2.5rem] lg:text-[2.75rem]">
                  Your Message
                </h2>
                <p className="mt-4 text-base font-normal text-white md:text-lg">
                  Tell us about your project and attach a brief if you have one.
                </p>
              </div>

              <Textarea
                required
                name="message"
                placeholder="Your message *"
                value={formData.message}
                onChange={(event) => updateField("message", event.target.value)}
                disabled={isSubmitting}
              />

              <PdfUpload
                file={attachment}
                onFileChange={setAttachment}
                onValidationError={(message) => toast.error(message)}
                disabled={isSubmitting}
              />

              {isSubmitting ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span>Sending your message…</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div
                    className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800"
                    role="progressbar"
                    aria-valuenow={uploadProgress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="Upload progress"
                  >
                    <div
                      className="h-full rounded-full bg-[#00ffff] transition-all duration-200"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                </div>
              ) : null}

              <p className="max-w-lg text-sm leading-relaxed text-zinc-500">
                This form collects your contact information so that we can
                correspond with you. Check out our{" "}
                <Link href="#" className="underline hover:text-zinc-300">
                  privacy policy
                </Link>{" "}
                for more information about how we protect and manage your data.
              </p>

              <div className="flex flex-wrap items-center gap-5 md:gap-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="outline"
                  className="h-11 rounded-md border border-white bg-transparent px-7 text-sm font-normal text-white shadow-none hover:bg-white/10 disabled:opacity-60"
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                </Button>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  disabled={isSubmitting}
                  className="text-sm font-normal text-[#00ffff] transition-opacity hover:opacity-70 disabled:opacity-40"
                >
                  Return To Previous
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
