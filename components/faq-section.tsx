"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";

const faqs = [
  {
    question: "How long does it take to build a website or software product?",
    answer:
      "A simple brochure-style website might take 4–6 weeks, while a custom SaaS product or web application can take 8–16 weeks or more depending on scope. We'll give you a realistic timeline after understanding your requirements.",
  },
  {
    question: "What is the cost of a project?",
    answer:
      "Our pricing depends on your project requirements, with flexible payments made in phases. Contact us for a free consultation and we'll provide a tailored quote based on your goals — whether it's a website, web app, or full SaaS platform.",
  },
  {
    question: "Will I retain full ownership of the design, code, and product?",
    answer:
      "Yes. Once the project is complete and full payment has been made, all designs, source code, and product files are delivered to you with full ownership transferred.",
  },
  {
    question: "Will the product be mobile-friendly and scalable?",
    answer:
      "Absolutely. We design and build mobile-first, and architect every product to scale — whether that means more users, more data, or more features down the line.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. We offer post-launch support and maintenance packages to keep your product running smoothly, along with ongoing feature development as your business grows.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. While we're based in Nigeria, we serve clients globally. Geography is no barrier to excellence — we collaborate remotely with businesses and startups worldwide.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="overflow-hidden bg-white section-padding">
      <div className="container-wide mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionLabel>FAQ&apos;s</SectionLabel>
          <h2 className="mb-12 text-[clamp(1.75rem,3vw+1rem,2.75rem)] leading-[1.12] tracking-[-0.02em] text-[#0a0a0a] lg:mb-16">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <div className="mx-auto max-w-3xl divide-y divide-[#0a0a0a]/10 border-y border-[#0a0a0a]/10">
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
                  <h3 className="text-lg text-[#0a0a0a]">{faq.question}</h3>
                  {isOpen ? (
                    <Minus className="mt-1 h-4 w-4 shrink-0" strokeWidth={1.5} />
                  ) : (
                    <Plus className="mt-1 h-4 w-4 shrink-0" strokeWidth={1.5} />
                  )}
                </button>
                {isOpen ? (
                  <p className="pb-6 text-base leading-relaxed text-[#0a0a0a]/75">
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