"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "A simple brochure-style website might take 6-8 weeks, while a more complex site like an eCommerce store could take 12 weeks or more. The time frame depends on the size, complexity, and specific features you require.",
  },
  {
    question: "What is the cost of a web design project?",
    answer:
      "Our pricing depends on your project requirements, with flexible payments made in phases. Typically, our projects range from £10k to £120k, with an average cost of around £15-20k.",
  },
  {
    question: "Will I retain full ownership of the design, development, and code?",
    answer:
      "Yes! Once the project is complete and full payment has been made the website designs and all files will be delivered to you, and full ownership signed over.",
  },
  {
    question: "Will the website be mobile-friendly and responsive?",
    answer:
      "Absolutely, not just mobile-friendly, but fully mobile-optimised. We design and wireframe the mobile versions of our websites from the start.",
  },
  {
    question: "Will my website be optimised for search engines?",
    answer:
      "Absolutely, this is one of our strengths as an agency. We have a dedicated SEO team involved in every project to ensure the websites we build are fully optimised to rank effectively from the start.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="overflow-hidden bg-white section-padding">
      <div className="container-wide mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionLabel>FAQ&apos;s</SectionLabel>
          <h2 className="mb-12 text-[clamp(1.75rem,3vw+1rem,2.75rem)] leading-[1.12] tracking-[-0.02em] text-[#151717] lg:mb-16">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <div className="mx-auto max-w-3xl divide-y divide-[#151717]/10 border-y border-[#151717]/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={faq.question} delay={0.05 * index}>
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 py-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg text-[#151717]">{faq.question}</h3>
                  {isOpen ? (
                    <Minus className="mt-1 h-4 w-4 shrink-0" strokeWidth={1.5} />
                  ) : (
                    <Plus className="mt-1 h-4 w-4 shrink-0" strokeWidth={1.5} />
                  )}
                </button>
                {isOpen ? (
                  <p className="pb-6 text-base leading-relaxed text-[#151717]/75">
                    {faq.answer}
                  </p>
                ) : null}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
