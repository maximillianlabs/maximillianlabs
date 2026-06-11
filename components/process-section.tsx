"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";
import { media } from "@/lib/brand";

const phases = [
  {
    number: "Phase 1 / 4",
    title: "Planning",
    steps: ["Discovery", "Wireframing", "Content"],
    description:
      "Our discovery phase includes gathering key data, brainstorming internally, and collaborating closely to develop a detailed project plan. We determine competitor analysis, target demographics, and design specifications before wireframing and content planning.",
    video: media.process.planning,
    poster: media.process.planningPoster,
  },
  {
    number: "Phase 2 / 4",
    title: "Design",
    steps: ["Concepts", "Site Design", "Interactivity"],
    description:
      "In the design concepts phase, we present a tailored homepage design through Figma for your feedback. Once approved, we develop the full site design with cohesive styling and custom interactive visuals.",
    video: media.process.designing,
    poster: media.process.designingPoster,
  },
  {
    number: "Phase 3 / 4",
    title: "Interactive Development",
    steps: ["Development", "Functionality", "CMS"],
    description:
      "Once design is approved, we build the site using HTML/CSS/JS with custom blocks for content management. We integrate animations, migrate data, and implement a bespoke WordPress theme.",
    video: media.process.designing,
    poster: media.process.designingPoster,
  },
  {
    number: "Phase 4 / 4",
    title: "Testing & Launch",
    steps: ["QA Testing", "Compliance", "SEO"],
    description:
      "After development, we run QA tests across browsers and devices. We review GDPR compliance and handle onsite SEO, Google tools integration, and strategic redirect policies before launch.",
    video: media.process.planning,
    poster: media.process.planningPoster,
  },
];

function PhaseVideo({
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
  const [activeIndex, setActiveIndex] = useState(0);
  const activePhase = phases[activeIndex];

  return (
    <section className="bg-[#fafafa] section-padding">
      <div className="container-wide mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionLabel>What We Do Best</SectionLabel>
          <h2 className="text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.12] tracking-[-0.02em] text-[#151717]">
            Our Process
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <FadeIn delay={0.08}>
            <div className="space-y-2">
              {phases.map((phase, index) => (
                <button
                  key={phase.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="block w-full py-4 text-left"
                  aria-expanded={activeIndex === index}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[#151717]/40">
                    {phase.number}
                  </p>
                  <p
                    className={`text-xl tracking-tight md:text-2xl ${
                      activeIndex === index ? "text-[#fe0168]" : "text-[#151717]"
                    }`}
                  >
                    {phase.title}
                  </p>
                </button>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="relative aspect-video overflow-hidden rounded-[var(--brand-radius)] bg-[#151717]">
              <PhaseVideo
                src={activePhase.video}
                poster={activePhase.poster}
                active
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {activePhase.steps.map((step) => (
                <span
                  key={step}
                  className="rounded-full border border-[#151717]/10 bg-white px-4 py-2 text-sm text-[#151717]/70"
                >
                  {step}
                </span>
              ))}
            </div>
            <p className="mt-6 text-base leading-relaxed text-[#151717]/75 md:text-lg">
              {activePhase.description}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
