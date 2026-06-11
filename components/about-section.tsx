"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { media } from "@/lib/brand";

export function AboutSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative bg-white section-padding">
      <div className="container-wide mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="relative aspect-square w-full overflow-hidden rounded-[var(--brand-radius)]">
              <Image
                src={media.aboutImageSecondary}
                alt="Web design mockup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 16vw"
              />
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-[var(--brand-radius)]">
              <Image
                src={media.aboutImagePrimary}
                alt="London web design team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 16vw"
              />
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--brand-radius)] bg-[#151717]">
              {!isPlaying ? (
                <>
                  <Image
                    src={media.aboutImagePrimary}
                    alt="Agency showreel preview"
                    fill
                    className="object-cover opacity-80"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center transition-opacity hover:opacity-90"
                    aria-label="Play showreel"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform hover:scale-105 md:h-20 md:w-20">
                      <Play
                        className="ml-1 h-7 w-7 fill-white text-white md:h-9 md:w-9"
                        strokeWidth={0}
                      />
                    </span>
                  </button>
                </>
              ) : (
                <video
                  autoPlay
                  controls
                  playsInline
                  className="h-full w-full object-cover"
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src={media.aboutVideo} type="video/mp4" />
                </video>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-6">
            <div className="mb-4 inline-flex items-center gap-3 text-[clamp(0.85rem,0.7rem+0.35vw,1rem)] capitalize tracking-[0.2em] text-[#151717]/50">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#fe0168]" />
              <span>London Web Design Agency</span>
            </div>

            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[#151717]">
              Maximillian Labs<span className="text-[#fe0168]">.</span>
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-[#151717]/80">
              <p>
                We design unique and stunning websites for businesses and
                enterprises worldwide, offering a personalised, hands-on
                service, from our London web design team, that adds true value.
              </p>

              <p>
                We break the process down into easy, manageable steps, working
                closely with you at every turn. From{" "}
                <Link href="#" className="underline decoration-[#151717]/30 underline-offset-2 hover:text-[#fe0168]">
                  WordPress web design
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline decoration-[#151717]/30 underline-offset-2 hover:text-[#fe0168]">
                  interactive website design
                </Link>{" "}
                to branding,{" "}
                <Link href="#" className="underline decoration-[#151717]/30 underline-offset-2 hover:text-[#fe0168]">
                  SEO optimisation
                </Link>
                ,{" "}
                <Link href="#" className="underline decoration-[#151717]/30 underline-offset-2 hover:text-[#fe0168]">
                  multilingual web design
                </Link>{" "}
                and UI/UX, we take care of every detail to create a solution
                that&apos;s tailored just for you.
              </p>

              <p>
                With a passion for high-performance, immersive digital
                experiences, we focus on giving our clients a competitive edge
                and delivering strong ROI on their investment.
              </p>
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
