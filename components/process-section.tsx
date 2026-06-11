"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionLabel } from "@/components/about/section-label";
import { media } from "@/lib/brand";

gsap.registerPlugin(ScrollTrigger);

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

const initialStepIndices = Object.fromEntries(
  phases.map((phase) => [phase.id, 0]),
) as Record<string, number>;

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
      className="h-full w-full rounded-[1.5rem] object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

function ProcessNavToggle({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <li className="relative cursor-pointer pb-2">
      <button
        type="button"
        onClick={onClick}
        className={`relative text-sm font-bold transition-colors ${
          active ? "text-[#151717]" : "text-[#151717]/40"
        }`}
      >
        {label}
        {active ? (
          <span
            aria-hidden="true"
            className="absolute -bottom-2 left-0 h-0.5 w-full bg-[#fe0168]"
          />
        ) : null}
      </button>
    </li>
  );
}

export function ProcessSection() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [stepIndices, setStepIndices] =
    useState<Record<string, number>>(initialStepIndices);

  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const galleryColRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activePhase = phases[activePhaseIndex] ?? phases[0];
  const activeStepIndex = stepIndices[activePhase.id] ?? 0;
  const activeStep = activePhase.steps[activeStepIndex] ?? activePhase.steps[0];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const gallery = galleryRef.current;
    const galleryCol = galleryColRef.current;
    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!section || !gallery || !galleryCol || !items.length) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1200px)", () => {
      const medias = gallery.querySelectorAll<HTMLElement>(".gallery-media");

      medias.forEach((mediaEl, index) => {
        gsap.set(mediaEl, { autoAlpha: index === 0 ? 1 : 0 });
      });

      const pinTrigger = ScrollTrigger.create({
        trigger: gallery,
        start: () => `top center-=${gallery.offsetHeight / 2}`,
        endTrigger: galleryCol,
        end: () => `bottom center+=${gallery.offsetHeight / 2}`,
        pin: true,
        invalidateOnRefresh: true,
      });

      const itemTriggers = items.map((item, index) => {
        const enter = () => {
          setActivePhaseIndex(index);
          medias.forEach((mediaEl, mediaIndex) => {
            gsap.killTweensOf(mediaEl);
            gsap.to(mediaEl, {
              autoAlpha: mediaIndex === index ? 1 : 0,
              duration: 0.15,
              ease: "none",
            });
          });
        };

        const fadeIn = gsap.fromTo(
          item,
          { opacity: 0 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom 30%",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          },
        );

        const phaseTrigger = ScrollTrigger.create({
          trigger: item,
          start: () => `top center-=${item.offsetHeight / 3}`,
          end: "bottom center",
          scrub: true,
          invalidateOnRefresh: true,
          onEnter: enter,
          onEnterBack: enter,
        });

        const mobileVideo = item.querySelector<HTMLVideoElement>("video");
        const desktopVideo = medias[index]?.querySelector("video");

        const videoTrigger = ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom top",
          invalidateOnRefresh: true,
          onEnter: () => {
            void mobileVideo?.play().catch(() => undefined);
            void desktopVideo?.play().catch(() => undefined);
          },
          onEnterBack: () => {
            void mobileVideo?.play().catch(() => undefined);
            void desktopVideo?.play().catch(() => undefined);
          },
          onLeave: () => {
            mobileVideo?.pause();
            desktopVideo?.pause();
          },
          onLeaveBack: () => {
            mobileVideo?.pause();
            desktopVideo?.pause();
          },
        });

        return { fadeIn, phaseTrigger, videoTrigger };
      });

      return () => {
        pinTrigger.kill();
        itemTriggers.forEach(({ fadeIn, phaseTrigger, videoTrigger }) => {
          fadeIn.scrollTrigger?.kill();
          fadeIn.kill();
          phaseTrigger.kill();
          videoTrigger.kill();
        });
      };
    });

    mm.add("(max-width: 1199px)", () => {
      const triggers = itemRefs.current
        .filter(Boolean)
        .map((item) => {
          const video = item?.querySelector<HTMLVideoElement>("video");
          if (!video) return null;

          return ScrollTrigger.create({
            trigger: item,
            start: "top center",
            end: "bottom center",
            invalidateOnRefresh: true,
            onEnter: () => void video.play().catch(() => undefined),
            onEnterBack: () => void video.play().catch(() => undefined),
            onLeave: () => video.pause(),
            onLeaveBack: () => video.pause(),
          });
        })
        .filter(Boolean);

      return () => {
        triggers.forEach((trigger) => trigger?.kill());
      };
    });

    return () => mm.revert();
  }, []);

  function setStepIndex(phaseId: string, index: number) {
    setStepIndices((current) => ({ ...current, [phaseId]: index }));
  }

  return (
    <section ref={sectionRef} className="bg-[#fafafa] section-padding">
      <div className="container-wide mx-auto max-w-[1400px]">
        <div className="mb-12 lg:mb-16">
          <SectionLabel>What We Do Best</SectionLabel>
          <h2 className="text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.12] tracking-[-0.02em] text-[#151717]">
            Our Process
          </h2>
        </div>

        <div className="relative flex flex-col justify-between gap-12 lg:flex-row lg:gap-24">
          <div className="w-full shrink-0 lg:max-w-2xl lg:w-6/12">
            {phases.map((phase, phaseIndex) => {
              const stepIndex = stepIndices[phase.id] ?? 0;

              return (
                <div
                  key={phase.id}
                  ref={(node) => {
                    itemRefs.current[phaseIndex] = node;
                  }}
                  className="process-item mb-16 flex min-h-[60vh] items-center last:mb-0"
                >
                  <div className="w-full">
                    <figure className="relative mb-7 aspect-video max-w-[24rem] overflow-hidden rounded-[var(--brand-radius)] lg:hidden">
                      <Image
                        src={phase.poster}
                        alt={phase.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </figure>

                    <div className="mb-10">
                      <p className="mb-2 text-base text-[#151717]/50">
                        {phase.number}
                      </p>
                      <h3 className="flex items-center gap-4 text-3xl tracking-tight text-[#151717] md:text-4xl">
                        <span
                          aria-hidden="true"
                          className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#fe0168]"
                        />
                        {phase.title}
                      </h3>
                    </div>

                    <ul className="flex flex-wrap items-start gap-5">
                      {phase.steps.map((step, index) => (
                        <ProcessNavToggle
                          key={step.label}
                          label={step.label}
                          active={stepIndex === index}
                          onClick={() => setStepIndex(phase.id, index)}
                        />
                      ))}
                    </ul>

                    <div className="relative mt-10 min-h-[8rem]">
                      {phase.steps.map((step, index) => (
                        <div
                          key={step.label}
                          className={`absolute inset-x-0 top-0 w-full transition-opacity duration-300 ${
                            stepIndex === index
                              ? "pointer-events-auto opacity-100"
                              : "pointer-events-none opacity-0"
                          }`}
                        >
                          <p className="max-w-xl text-base leading-relaxed text-[#151717]/75 md:text-lg md:leading-8">
                            {step.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            ref={galleryColRef}
            className="ml-auto hidden grow lg:block lg:w-5/12"
          >
            <div
              ref={galleryRef}
              className="relative flex min-h-[60vh] max-h-[60vh] items-center"
            >
              <div className="relative w-full flex-grow overflow-hidden rounded-[1.5rem] bg-[#151717]">
                <div className="gallery-medias relative aspect-[4/3] w-full">
                  {phases.map((phase, index) => (
                    <figure
                      key={phase.id}
                      className={`gallery-media ${
                        index === 0 ? "relative" : "absolute inset-0"
                      } h-full w-full`}
                    >
                      <GalleryVideo
                        src={phase.video}
                        poster={phase.poster}
                        active={activePhaseIndex === index}
                      />
                    </figure>
                  ))}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-[2] rounded-[1.5rem] bg-gradient-to-r from-black/70 via-black/20 to-transparent"
                  />
                </div>

                <div className="absolute bottom-8 left-8 z-[3] text-white">
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
