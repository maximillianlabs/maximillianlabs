"use client";

import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";
import { aboutContent } from "@/lib/about-content";

const pillars = [aboutContent.mission, aboutContent.vision];

export function AboutMissionVision() {
  return (
    <section className="bg-white px-6 py-[calc(3rem+3vh)] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.label} delay={index * 0.08}>
              <article className="h-full rounded-[var(--brand-radius)] border border-[#0a0a0a]/10 bg-[#f0f0f0] p-8 sm:p-10">
                <SectionLabel>{pillar.label}</SectionLabel>
                <p className="text-base leading-relaxed text-[#0a0a0a]/80 sm:text-lg sm:leading-8">
                  {pillar.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
