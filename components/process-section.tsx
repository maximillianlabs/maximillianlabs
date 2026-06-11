"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SectionLabel } from "@/components/about/section-label";
import { media } from "@/lib/brand";

type ProcessStep = {
  label: string;
  content: string;
};

type ProcessPhase = {
  id: string;
  number: string;
  title: string;
  poster: string;
  video: string;
  steps: ProcessStep[];
};

const phases: ProcessPhase[] = [
  {
    id: "planning",
    number: "Phase 1 / 4",
    title: "Planning",
    poster: media.process.planningPoster,
    video: media.process.planning,
    steps: [
      {
        label: "Discovery",
        content:
          "Our discovery phase includes gathering key data, brainstorming internally, and collaborating closely to develop a detailed project plan. We determine competitor analysis, target demographics, and design specifications.",
      },
      {
        label: "Wireframing",
        content:
          "Next, the wireframing phase is where we develop detailed desktop and mobile wireframes to fine-tune site structure and user flow. To ensure we are all aligned, these are then all shared via Figma for your feedback.",
      },
      {
        label: "Content",
        content:
          "Finally, we move to the content planning stage, where we provide expert copywriting and image sourcing services to make sure your content hits the mark.",
      },
    ],
  },
  {
    id: "design",
    number: "Phase 2 / 4",
    title: "Design",
    poster: media.process.designingPoster,
    video: media.process.designing,
    steps: [
      {
        label: "Concepts",
        content:
          "In the design concepts phase, we present a tailored homepage design through Figma, so you can collaborate with us and share your feedback.",
      },
      {
        label: "Site Design",
        content:
          "Once approved, the full site design phase begins with the cohesive style across all your web pages, ensuring consistency and flow.",
      },
      {
        label: "Interactivity",
        content:
          "We will also integrate custom interactive visuals and animations to keep users engaged and bring the site to life.",
      },
    ],
  },
  {
    id: "development",
    number: "Phase 3 / 4",
    title: "Interactive Development",
    poster: media.process.developingPoster,
    video: media.process.developing,
    steps: [
      {
        label: "Development",
        content:
          "Once the design is approved, we move onto building the site using HTML/CSS/JS, with each section turned into a custom block, which simplifies content management and updates going forward.",
      },
      {
        label: "Functionality",
        content:
          "We then focus on bringing the site to life through adding the content, migrating data, and implementing interactive visuals & animations.",
      },
      {
        label: "CMS",
        content:
          "The site is built with mobile-first responsive in mind, using a custom-coded framework where we then integrate a bespoke WordPress theme for minimal bloat, faster loads, and better security.",
      },
    ],
  },
  {
    id: "testing",
    number: "Phase 4 / 4",
    title: "Testing & Launch",
    poster: media.process.testingPoster,
    video: media.process.testing,
    steps: [
      {
        label: "QA Testing",
        content:
          "After development, we use our QA test for compatibility across major browsers and devices, which covers speed, content accuracy, image quality, accessibility, security, and functionality.",
      },
      {
        label: "Compliance",
        content:
          "Our team reviews GDPR & CCPA compliance, cookie policies, and accessibility guidelines to ensure your site meets all necessary legal and regulatory requirements.",
      },
      {
        label: "SEO",
        content:
          "We handle onsite SEO, covering speed optimisation, Google tools integration, Yoast SEO setup, and implementing a strategic redirect policy.",
      },
    ],
  },
];

function GalleryVideo({
  src,
  poster,
  active,
}: {
  src: string;
  poster: string;
  active: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (active) void video.play().catch(() => undefined);
    else video.pause();
  }, [active]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      className="h-full w-full object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export function ProcessSection() {
  const [activePhaseId, setActivePhaseId] = useState(phases[0].id);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const activePhase =
    phases.find((p) => p.id === activePhaseId) ?? phases[0];
  const activeStep = activePhase.steps[activeStepIndex] ?? activePhase.steps[0];

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll("[data-process-step]");
    if (!items?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (!top) return;

        const phaseId = top.target.getAttribute("data-phase-id");
        const stepIndex = top.target.getAttribute("data-step-index");
        if (phaseId) setActivePhaseId(phaseId);
        if (stepIndex !== null) setActiveStepIndex(Number(stepIndex));
      },
      { rootMargin: "-30% 0px -40% 0px", threshold: [0, 0.25, 0.5] },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#fafafa] section-padding">
      <div className="container-wide mx-auto max-w-[1400px]">
        <div className="mb-12 lg:mb-16">
          <SectionLabel>What We Do Best</SectionLabel>
          <h2 className="text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.12] tracking-[-0.02em] text-[#151717]">
            Our Process
          </h2>
        </div>

        <div className="relative flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-24">
          <div className="w-full shrink-0 lg:max-w-2xl lg:w-6/12">
            {phases.map((phase) => (
              <div key={phase.id} className="mb-16 last:mb-0">
                <figure className="relative mb-8 aspect-video overflow-hidden rounded-[var(--brand-radius)] lg:hidden">
                  <Image
                    src={phase.poster}
                    alt={phase.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </figure>

                <div className="mb-6">
                  <p className="mb-2 text-sm text-[#151717]/40">{phase.number}</p>
                  <h3 className="flex items-center gap-2 text-3xl tracking-tight text-[#151717] md:text-4xl">
                    {phase.id === activePhaseId ? (
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#fe0168]" />
                    ) : null}
                    {phase.title}
                  </h3>
                </div>

                <ul className="mb-8 flex flex-wrap gap-6 border-b border-[#151717]/10 pb-4">
                  {phase.steps.map((step, stepIndex) => {
                    const isActive =
                      activePhaseId === phase.id &&
                      activeStepIndex === stepIndex;
                    return (
                      <li key={step.label}>
                        <span
                          className={`text-sm transition-colors ${
                            isActive
                              ? "border-b border-[#fe0168] pb-1 text-[#151717]"
                              : "text-[#151717]/40"
                          }`}
                        >
                          {step.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {phase.steps.map((step, stepIndex) => (
                  <div
                    key={step.label}
                    data-process-step
                    data-phase-id={phase.id}
                    data-step-index={stepIndex}
                    className="min-h-[40vh] scroll-mt-32 py-8 lg:min-h-[50vh]"
                  >
                    <p className="max-w-xl text-base leading-relaxed text-[#151717]/75 md:text-lg md:leading-8">
                      {step.content}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="hidden lg:block lg:w-5/12">
            <div className="sticky top-[calc(114px+2rem)]">
              <div className="relative min-h-[60vh] max-h-[60vh] overflow-hidden rounded-[1.5rem] bg-[#151717]">
                {phases.map((phase) => (
                  <div
                    key={phase.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      activePhaseId === phase.id
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                    }`}
                  >
                    <GalleryVideo
                      src={phase.video}
                      poster={phase.poster}
                      active={activePhaseId === phase.id}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-r from-black/70 via-black/20 to-transparent"
                    />
                  </div>
                ))}
                <div className="absolute bottom-8 left-8 z-10 text-white">
                  <p className="text-[clamp(2rem,4vw,4rem)] font-normal leading-none tracking-tight">
                    {activePhase.title}
                  </p>
                  <p className="mt-2 text-sm text-white/70">{activeStep.label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
