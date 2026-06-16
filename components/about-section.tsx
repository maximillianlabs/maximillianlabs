"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { media } from "@/lib/brand";
import { aboutContent } from "@/lib/about-content";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-white pb-[max(3rem,9vw)] pt-[max(2rem,5vw)]"
    >
      <div className="container-wide mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-24">
          <div className="w-full lg:w-6/12">
            <div className="flex items-center gap-6">
              <div className="flex w-[30%] shrink-0 flex-col items-end gap-6">
                <figure className="relative ml-auto aspect-[7/8] w-[70%] overflow-hidden rounded-[var(--brand-radius)]">
                  <Image
                    src={media.aboutImagePrimary}
                    alt="Maximillian Labs team at work"
                    fill
                    className="object-cover"
                    sizes="20vw"
                  />
                </figure>
                <figure className="relative aspect-[7/8] w-full overflow-hidden rounded-[var(--brand-radius)]">
                  <Image
                    src={media.aboutImageSecondary}
                    alt="Website design mockup"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </figure>
              </div>

              <figure className="relative mx-6 aspect-square min-w-0 flex-1 overflow-hidden rounded-[var(--brand-radius)] bg-[#151717]">
                <Image
                  src={media.aboutShowreelImage}
                  alt="Creative studio workspace"
                  fill
                  className="object-cover"
                  sizes="30vw"
                />
              </figure>
            </div>
          </div>

          <div className="w-full flex-1">
            <div className="mb-4 inline-flex items-center gap-3 text-[clamp(0.85rem,0.7rem+0.35vw,1rem)] capitalize tracking-[0.2em] text-[#151717]/50">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#fe0168]" />
              <span>{aboutContent.whoWeAre.label}</span>
            </div>

            <h2 className="text-[clamp(1.75rem,3vw+1rem,2.5rem)] leading-[1.3] tracking-[-0.02em] text-[#0a0a0a]">
              {aboutContent.whoWeAre.headline}
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-[#0a0a0a]/80 sm:w-11/12">
              {aboutContent.whoWeAre.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}

              <p className="text-[#0a0a0a]">{aboutContent.whoWeAre.closing}</p>
            </div>

            <div className="mt-8">
              <Button
                variant="outline"
                asChild
                className="h-11 rounded-[var(--brand-radius)] border border-[#151717] bg-white px-8 text-sm font-normal text-[#151717] shadow-none hover:bg-[#151717]/5 md:h-12"
              >
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
