"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";
import { aboutContent } from "@/lib/about-content";

export function AboutIntro() {
  const { whoWeAre } = aboutContent;

  return (
    <section className="bg-[#f0f0f0] px-6 py-[calc(3rem+3vh)] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto w-full text-center lg:w-3/4 xl:w-3/5">
          <FadeIn>
            <SectionLabel className="justify-center">{whoWeAre.label}</SectionLabel>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h2 className="text-balance text-[clamp(1.75rem,3vw+1rem,3rem)] font-normal leading-[1.15] tracking-[-0.02em] text-[#0a0a0a]">
              {whoWeAre.headline}
            </h2>
          </FadeIn>

          <FadeIn delay={0.16}>
            <div className="mx-auto mt-12 max-w-3xl space-y-6 text-pretty text-base leading-relaxed text-[#0a0a0a]/80 sm:text-lg sm:leading-8">
              {whoWeAre.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
              <p className="font-normal text-[#0a0a0a]">{whoWeAre.closing}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
