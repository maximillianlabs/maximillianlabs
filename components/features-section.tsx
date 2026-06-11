"use client";

import { useEffect, useRef, useState } from "react";
import { SectionLabel } from "@/components/about/section-label";
import { media } from "@/lib/brand";

const features = [
  {
    id: "highly-rated",
    title: "Highly Rated",
    description:
      "No.1 UK & Europe ranked web agency on Clutch out of 40,000 other agencies. Not to brag, but we're independently recognised as one of the best at what we do. You'll also find us featured at the top of Design Rush, Good Firms, Sortlist, Top Interactive Agencies and more!",
    video: media.features.highlyRated,
  },
  {
    id: "fully-accredited",
    title: "Fully Accredited",
    description:
      "With quality standard certifications like ISO and Google Partner, we're a trusted partner you can rely on.",
    video: media.features.accredited,
  },
  {
    id: "fully-bespoke",
    title: "Fully Bespoke",
    description:
      "Everything we create is custom-designed and developed by our team, tailored specifically to your needs. No templates, no generic designs, just something unique and made for you!",
    video: media.features.bespoke,
  },
  {
    id: "guaranteed-service",
    title: "Guaranteed Service",
    description:
      "Leading brands rely on us. Our service is fully guaranteed and backed by a warranty, ensuring complete support for every project we take on.",
    video: media.features.guaranteed,
  },
];

function FeatureVideo({ src, active }: { src: string; active: boolean }) {
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
      className="aspect-square h-full w-full object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export function FeaturesSection() {
  const [activeId, setActiveId] = useState(features[0].id);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll("[data-feature-id]");
    if (!cards?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (top) {
          const id = top.target.getAttribute("data-feature-id");
          if (id) setActiveId(id);
        }
      },
      { rootMargin: "-25% 0px -35% 0px", threshold: [0, 0.2, 0.5, 0.8] },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#fafafa] section-padding">
      <div className="container-wide mx-auto max-w-[1400px]">
        <div className="mb-12 lg:mb-16 lg:w-10/12">
          <SectionLabel>Award winning website design</SectionLabel>
          <h2 className="text-[clamp(1.75rem,3vw+1rem,2.75rem)] leading-[1.12] tracking-[-0.02em] text-[#151717]">
            What makes us different?
          </h2>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <nav
            aria-label="Differentiators"
            className="hidden shrink-0 lg:flex lg:h-[60vh] lg:w-48 lg:items-center xl:w-56"
          >
            <ul className="sticky top-[calc(114px+2rem)] w-full space-y-5 text-right">
              {features.map((feature) => {
                const isActive = activeId === feature.id;
                return (
                  <li key={feature.id}>
                    <button
                      type="button"
                      onClick={() => {
                        document
                          .getElementById(`feature-${feature.id}`)
                          ?.scrollIntoView({ behavior: "smooth", block: "center" });
                      }}
                      className={`inline-flex items-center gap-3 text-base transition-colors ${
                        isActive
                          ? "text-[#151717]"
                          : "text-[#151717]/35 hover:text-[#151717]/60"
                      }`}
                    >
                      <span>{feature.title}</span>
                      {isActive ? (
                        <span
                          aria-hidden="true"
                          className="h-px w-10 shrink-0 bg-[#151717]"
                        />
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="min-w-0 flex-1 space-y-4">
            {features.map((feature) => {
              const isActive = activeId === feature.id;
              return (
                <article
                  key={feature.id}
                  id={`feature-${feature.id}`}
                  data-feature-id={feature.id}
                  className="flex min-h-[calc(100vh-8rem)] min-h-[calc(100svh-8rem)] scroll-mt-28"
                >
                  <div className="flex w-full flex-col overflow-hidden rounded-[2rem] bg-[#fafafa] shadow-[0_0.25rem_3.5rem_rgba(0,0,0,0.1)] sm:flex-row-reverse">
                    <div className="flex w-full items-center p-8 sm:w-1/2 sm:p-[clamp(2rem,8vh,4rem)] md:p-[clamp(3rem,15vh,6rem)]">
                      <div>
                        <h3 className="text-2xl tracking-tight text-[#151717] md:text-3xl">
                          {feature.title}
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed text-[#151717]/75 md:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <FeatureVideo src={feature.video} active={isActive} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
