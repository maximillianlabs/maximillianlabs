"use client";

import { useEffect, useRef } from "react";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";
import { media } from "@/lib/brand";

const features = [
  {
    title: "Highly Rated",
    description:
      "No.1 UK & Europe ranked web agency on Clutch out of 40,000 other agencies. Not to brag, but we're independently recognised as one of the best at what we do.",
    video: media.features.highlyRated,
    reverse: false,
  },
  {
    title: "Fully Accredited",
    description:
      "With quality standard certifications like ISO and Google Partner, we're a trusted partner you can rely on.",
    video: media.features.accredited,
    reverse: true,
  },
  {
    title: "Fully Bespoke",
    description:
      "Everything we create is custom-designed and developed by our team, tailored specifically to your needs. No templates, no generic designs, just something unique and made for you!",
    video: media.features.bespoke,
    reverse: false,
  },
  {
    title: "Guaranteed Service",
    description:
      "Leading brands rely on us. Our service is fully guaranteed and backed by a warranty, ensuring complete support for every project we take on.",
    video: media.features.guaranteed,
    reverse: true,
  },
];

function FeatureVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      className="h-full w-full object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export function FeaturesSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-wide mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionLabel>Award winning website design</SectionLabel>
          <h2 className="mb-12 max-w-2xl text-[clamp(1.75rem,3vw+1rem,2.75rem)] leading-[1.12] tracking-[-0.02em] text-[#151717] lg:mb-16">
            What makes us different?
          </h2>
        </FadeIn>

        <div className="space-y-16 lg:space-y-24">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={0.06 * index}>
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                  feature.reverse ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <h3 className="text-2xl tracking-tight text-[#151717] md:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[#151717]/75">
                    {feature.description}
                  </p>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-[var(--brand-radius)] bg-[#151717]">
                  <FeatureVideo src={feature.video} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
