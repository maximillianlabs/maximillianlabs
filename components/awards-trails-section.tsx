"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";
import { media } from "@/lib/brand";

const trailVisuals = media.about.gallery.slice(0, 4);
const trailCardPositions = [
  { left: "8%", top: "4%", rotate: -10 },
  { left: "36%", top: "28%", rotate: -6 },
  { left: "62%", top: "52%", rotate: 2 },
  { left: "86%", top: "10%", rotate: 8 },
] as const;

export function AwardsTrailsSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-[#0a0a0a] section-padding text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#00ffff]/15 blur-3xl"
      />

      <div className="container-wide relative z-10 mx-auto max-w-[1400px] text-center">
        <FadeIn>
          <SectionLabel inverted className="justify-center">
            Why Maximillian Labs
          </SectionLabel>
          <h2 className="text-[clamp(1.75rem,3vw+1rem,2.75rem)] leading-[1.12] tracking-[-0.02em]">
            Engineered for growth
          </h2>
          <Link
            href="/about"
            className="mt-8 inline-flex h-11 items-center rounded-[var(--brand-radius)] border border-white px-8 text-sm transition-colors hover:bg-white/10"
          >
            About Us
          </Link>
        </FadeIn>

        <div
          aria-hidden="true"
          className="pointer-events-none relative mt-16 h-56 md:h-72"
        >
          {trailVisuals.map((src, i) => (
            <div
              key={src}
              className="absolute h-24 w-32 overflow-hidden rounded-xl border border-white/25 bg-white/10 p-1 shadow-[0_1rem_2.5rem_rgba(0,0,0,0.45)] md:h-32 md:w-44"
              style={{
                left: trailCardPositions[i]?.left ?? "8%",
                top: trailCardPositions[i]?.top ?? "0%",
                transform: `translateX(-50%) rotate(${
                  trailCardPositions[i]?.rotate ?? 0
                }deg)`,
              }}
            >
              <Image
                src={src}
                alt=""
                width={320}
                height={220}
                className="h-full w-full rounded-[0.6rem] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
