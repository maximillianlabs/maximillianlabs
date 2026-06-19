"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { FolderOpen, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const services = [
  "Web Design & Development",
  "Web Rebuild",
  "Website Maintenance",
];

function StepIndicator({ step }: { step: 1 | 2 }) {
  return (
    <div className="relative mb-12 md:mb-16">
      <div className="h-px w-full bg-[#00ffff]" />
      <div
        className={cn(
          "absolute top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sm font-normal text-black md:h-9 md:w-9",
          step === 1 ? "left-0" : "right-0"
        )}
      >
        {step}
      </div>
    </div>
  );
}

export function ContactForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [briefFile, setBriefFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDetails: "",
  });

  function toggleService(service: string) {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  }

  function handleBriefChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    setBriefFile(file);
    setSubmitError(null);
  }

  function clearBrief() {
    setBriefFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function handleStepOneSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitError(null);
    setStep(2);
  }

  async function handleFinalSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("projectDetails", formData.projectDetails);
      payload.append("services", selectedServices.join(", "));

      if (briefFile) {
        payload.append("brief", briefFile);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to submit the form.");
      }

      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to submit the form. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="relative px-6 pb-16 pt-4 md:px-14 md:pb-20 md:pt-6 lg:px-24 lg:pb-24">
        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <div className="max-w-xl lg:max-w-2xl">
            <div className="mb-5 flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-[#00ffff]" />
              <span className="text-sm text-zinc-400">Thank you</span>
            </div>
            <h1 className="max-w-lg text-[2rem] font-normal leading-[1.15] tracking-tight text-white md:text-[2.5rem] lg:text-[2.75rem]">
              We&apos;ve received your enquiry.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400">
              Thanks for reaching out, {formData.name}. We&apos;ll review your
              project details and get back to you shortly.
            </p>
          </div>
        </div>
      </div>
    );
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
                  placeholder="What's your name? *"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, name: event.target.value }))
                  }
                />
                <Input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter your Email *"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, email: event.target.value }))
                  }
                />
                <Input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="Enter your Phone"
                  value={formData.phone}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, phone: event.target.value }))
                  }
                />
              </div>

              <p className="max-w-md text-sm leading-relaxed text-zinc-500">
                If you begin filling in this form but don&apos;t finish, we may still
                contact you based on the details you&apos;ve entered so far.
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
            <form onSubmit={handleFinalSubmit} className="space-y-8">
              <div>
                <h2 className="text-[2rem] font-normal tracking-tight text-white md:text-[2.5rem] lg:text-[2.75rem]">
                  Project Scope
                </h2>
                <p className="mt-4 text-base font-normal text-white md:text-lg">
                  You can select multiple services
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 md:gap-3">
                {services.map((service) => {
                  const isSelected = selectedServices.includes(service);

                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm font-normal transition-colors md:px-5 md:py-2.5",
                        isSelected
                          ? "border-white bg-white text-black"
                          : "border-white/60 bg-transparent text-white hover:border-white"
                      )}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>

              <Textarea
                name="projectDetails"
                placeholder="Tell us more about your project"
                value={formData.projectDetails}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    projectDetails: event.target.value,
                  }))
                }
              />

              <label className="flex cursor-pointer items-center gap-4 rounded-lg border border-dashed border-zinc-600 bg-[#1c1c1c] px-5 py-5 transition-colors hover:border-zinc-400">
                <FolderOpen className="h-6 w-6 shrink-0 text-zinc-400" strokeWidth={1.5} />
                <div className="flex-1">
                  <p className="text-sm font-normal text-white">Send us your brief</p>
                  <p className="text-xs text-zinc-500">
                    {briefFile ? briefFile.name : "PDF, DOC"}
                  </p>
                </div>
                {briefFile ? (
                  <button
                    type="button"
                    onClick={(event) => {
                      event.preventDefault();
                      clearBrief();
                    }}
                    className="text-zinc-400 transition-colors hover:text-white"
                    aria-label="Remove file"
                  >
                    <X className="h-4 w-4" />
                  </button>
                ) : null}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="sr-only"
                  onChange={handleBriefChange}
                />
              </label>

              <p className="max-w-lg text-sm leading-relaxed text-zinc-500">
                This form collects your contact information so that we can correspond
                with you. Check out our{" "}
                <Link href="#" className="underline hover:text-zinc-300">
                  privacy policy
                </Link>{" "}
                for more information about how we protect and manage your data.
              </p>

              {submitError ? (
                <p className="text-sm text-red-400">{submitError}</p>
              ) : null}

              <div className="flex flex-wrap items-center gap-5 md:gap-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="outline"
                  className="h-11 rounded-md border border-white bg-transparent px-7 text-sm font-normal text-white shadow-none hover:bg-white/10 disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Submit Form"}
                </Button>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm font-normal text-[#00ffff] transition-opacity hover:opacity-70"
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
