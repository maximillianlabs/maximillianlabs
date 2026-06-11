"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { media } from "@/lib/brand";

export function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <>
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
                      alt="London web design team"
                      fill
                      className="object-cover"
                      sizes="20vw"
                    />
                  </figure>
                  <figure className="relative aspect-[7/8] w-full overflow-hidden rounded-[var(--brand-radius)]">
                    <Image
                      src={media.aboutImageSecondary}
                      alt="Web design mockup"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </figure>
                </div>

                <figure className="relative mx-6 aspect-square min-w-0 flex-1 overflow-hidden rounded-[var(--brand-radius)] bg-[#151717]">
                  <video
                    ref={videoRef}
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster={media.aboutVideoPoster}
                    className="h-full w-full object-cover"
                  >
                    <source src={media.aboutVideo} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setShowModal(true)}
                      aria-label="Play video"
                      className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-transform hover:scale-105 md:h-20 md:w-20"
                    >
                      <span className="ml-1 block h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white md:border-y-[12px] md:border-l-[20px]" />
                    </button>
                  </div>
                </figure>
              </div>
            </div>

            <div className="w-full flex-1">
              <div className="mb-4 inline-flex items-center gap-3 text-[clamp(0.85rem,0.7rem+0.35vw,1rem)] capitalize tracking-[0.2em] text-[#151717]/50">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#fe0168]" />
                <span>London Web Design Agency</span>
              </div>

              <h2 className="text-[clamp(1.75rem,3vw+1rem,2.5rem)] leading-[1.3] tracking-[-0.02em] text-[#151717]">
                <strong>Maximillian</strong>
                <span style={{ fontWeight: 300 }}> Labs</span>
                <span className="text-[#fe0048]">.</span>
              </h2>

              <div className="mt-6 space-y-5 text-base leading-relaxed text-[#151717]/80 sm:w-11/12">
                <p>
                  We design unique and stunning websites for businesses and
                  enterprises worldwide, offering a personalised, hands-on
                  service, from our London web design team, that adds true value.
                </p>

                <p>
                  We break the process down into easy, manageable steps, working
                  closely with you at every turn. From{" "}
                  <Link href="#" className="underline underline-offset-2">
                    WordPress web design
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="underline underline-offset-2">
                    interactive website design
                  </Link>{" "}
                  to branding,{" "}
                  <Link href="#" className="underline underline-offset-2">
                    SEO optimisation
                  </Link>
                  ,{" "}
                  <Link href="#" className="underline underline-offset-2">
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

      {showModal ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Showreel video"
        >
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="absolute right-6 top-6 text-white/80 hover:text-white"
            aria-label="Close video"
          >
            Close
          </button>
          <video
            autoPlay
            controls
            playsInline
            className="max-h-[85vh] w-full max-w-5xl rounded-[var(--brand-radius)]"
          >
            <source src={media.aboutVideo} type="video/mp4" />
          </video>
        </div>
      ) : null}
    </>
  );
}
