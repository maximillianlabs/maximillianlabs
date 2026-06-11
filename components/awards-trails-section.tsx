"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";
import { media } from "@/lib/brand";

const trailAwards = [
  media.awards.clutch,
  media.awards.bestUi,
  media.awards.bestInnovation,
  media.awards.awwwards,
  media.awards.sotd,
  media.awards.sotdCss,
  media.awards.cssWinner,
  media.awards.clutch4,
  media.awards.iso,
  media.awards.googlePartner,
];

export function AwardsTrailsSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-[#151717] section-padding text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#ac0bd9]/25 blur-3xl"
      />

      <div className="container-wide relative z-10 mx-auto max-w-[1400px] text-center">
        <FadeIn>
          <SectionLabel inverted className="justify-center">
            Multi Award Winning
          </SectionLabel>
          <h2 className="text-[clamp(1.75rem,3vw+1rem,2.75rem)] leading-[1.12] tracking-[-0.02em]">
            Don&apos;t take our word for it.
          </h2>
          <Link
            href="/about"
            className="mt-8 inline-flex h-11 items-center rounded-[var(--brand-radius)] border border-white px-8 text-sm transition-colors hover:bg-white/10"
          >
            About Us
          </Link>
        </FadeIn>

        <div aria-hidden="true" className="pointer-events-none relative mt-16 h-48 md:h-64">
          {trailAwards.map((src, i) => (
            <div
              key={src}
              className="absolute h-20 w-20 overflow-hidden rounded-2xl bg-white/10 p-2 md:h-24 md:w-24"
              style={{
                left: `${10 + (i % 5) * 18}%`,
                top: `${(i % 3) * 28}%`,
                transform: `rotate(${(i % 5) * 6 - 12}deg)`,
              }}
            >
              <Image src={src} alt="" width={80} height={80} className="h-full w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
