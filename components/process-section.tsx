"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";

const phases = [
  {
    number: "Phase 1 / 4",
    title: "Planning",
    steps: ["Discovery", "Wireframing", "Content"],
    description:
      "Our discovery phase includes gathering key data, brainstorming internally, and collaborating closely to develop a detailed project plan. We determine competitor analysis, target demographics, and design specifications before moving to wireframing and content planning.",
  },
  {
    number: "Phase 2 / 4",
    title: "Design",
    steps: ["Concepts", "Site Design", "Interactivity"],
    description:
      "In the design concepts phase, we present a tailored homepage design through Figma for your feedback. Once approved, we develop the full site design with cohesive styling and custom interactive visuals that bring the site to life.",
  },
  {
    number: "Phase 3 / 4",
    title: "Interactive Development",
    steps: ["Development", "Functionality", "CMS"],
    description:
      "Once design is approved, we build the site using HTML/CSS/JS with custom blocks for easy content management. We integrate animations, migrate data, and implement a bespoke WordPress theme for minimal bloat and faster loads.",
  },
  {
    number: "Phase 4 / 4",
    title: "Testing & Launch",
    steps: ["QA Testing", "Compliance", "SEO"],
    description:
      "After development, we run QA tests across browsers and devices covering speed, accessibility, and security. We review GDPR compliance and handle onsite SEO, Google tools integration, and strategic redirect policies before launch.",
  },
];

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePhase = phases[activeIndex];

  return (
    <section className="relative overflow-hidden bg-white section-padding">
      <div className="container-wide mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionLabel>What We Do Best</SectionLabel>
          <h2 className="text-balance text-[clamp(1.75rem,3vw+1rem,3rem)] font-normal leading-[1.12] tracking-[-0.02em] text-[#151717]">
            Our Process
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <FadeIn delay={0.08}>
            <div className="flex flex-col gap-2">
              {phases.map((phase, index) => (
                <button
                  key={phase.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group flex items-center gap-4 py-4 text-left transition-colors"
                  aria-expanded={activeIndex === index}
                >
                  <motion.span
                    className="h-px shrink-0 bg-[#fe0168]"
                    initial={false}
                    animate={{
                      width: activeIndex === index ? 40 : 0,
                      opacity: activeIndex === index ? 1 : 0,
                      marginRight: activeIndex === index ? 12 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#151717]/40">
                      {phase.number}
                    </p>
                    <p
                      className={`text-xl font-normal tracking-tight transition-colors md:text-2xl ${
                        activeIndex === index
                          ? "text-[#fe0168]"
                          : "text-[#151717] group-hover:text-[#151717]/70"
                      }`}
                    >
                      {phase.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.16}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[var(--brand-radius)] bg-[#fafafa] p-8 md:p-10"
              >
                <div className="mb-6 flex flex-wrap gap-3">
                  {activePhase.steps.map((step) => (
                    <span
                      key={step}
                      className="rounded-full border border-[#151717]/10 bg-white px-4 py-2 text-sm text-[#151717]/70"
                    >
                      {step}
                    </span>
                  ))}
                </div>
                <p className="text-base leading-relaxed text-[#151717]/75 md:text-lg md:leading-8">
                  {activePhase.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
