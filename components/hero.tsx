"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { brand, media } from "@/lib/brand";

const floatingAwards = [
  { src: media.awards.clutch, x: "8%", y: "18%", delay: 0 },
  { src: media.awards.bestUi, x: "78%", y: "12%", delay: 0.15 },
  { src: media.awards.bestInnovation, x: "85%", y: "62%", delay: 0.3 },
  { src: media.awards.awwwards, x: "12%", y: "68%", delay: 0.45 },
];

const badgeAwards = [
  { src: media.awards.sotd, label: "SOTD" },
  { src: media.awards.sotdCss, label: "SOTD" },
  { src: media.awards.cssWinner, label: "Awarded" },
  { src: media.awards.clutch4, label: "Awarded" },
];

function StarIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-[#fe0048]"
    >
      <path d="M12 2l2.9 6.9 7.1.6-5.4 4.6 1.7 7-6.3-3.8-6.3 3.8 1.7-7-5.4-4.6 7.1-.6z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center overflow-hidden px-6 pb-20 pt-8 md:px-10 md:pb-24 lg:min-h-[85vh]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.08]"
        aria-hidden="true"
      >
        <source src={media.heroVideo} type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <p className="select-none whitespace-nowrap text-[clamp(3.5rem,14vw,11rem)] font-normal leading-none tracking-tight text-[#151717]/[0.06]">
          be creative
        </p>
      </div>

      {floatingAwards.map((award, index) => (
        <motion.div
          key={award.src}
          aria-hidden="true"
          className="pointer-events-none absolute z-[1] hidden h-24 w-24 overflow-hidden rounded-2xl bg-white/80 p-3 shadow-lg backdrop-blur-sm lg:block xl:h-28 xl:w-28"
          style={{ left: award.x, top: award.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: award.delay },
            scale: { duration: 0.6, delay: award.delay },
            y: {
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: award.delay,
            },
          }}
        >
          <Image
            src={award.src}
            alt=""
            width={112}
            height={112}
            className="h-full w-full object-contain"
          />
        </motion.div>
      ))}

      <div className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 lg:left-10 lg:flex">
        <span className="origin-center -rotate-90 text-[11px] font-normal uppercase tracking-[0.23em] text-[#9d9d9b]">
          Scroll Down
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.75rem,7vw,5.25rem)] font-normal leading-[0.95] tracking-[-0.03em] text-[#151717]"
        >
          <span className="text-brand-gradient">Award Winning</span>
          <br />
          <span>Web Design Agency</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-2xl text-[15px] leading-relaxed text-[#151717]/80 md:mt-10 md:text-base md:leading-7"
        >
          We&apos;re Maximillian Labs an award-winning{" "}
          <span className="text-[#151717]">London based web design agency</span>
          , focused on creating bespoke and interactive{" "}
          <span className="text-[#151717]">web experiences</span> for aspiring
          &amp; established businesses and enterprises.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-8 md:mt-12"
        >
          <Button
            variant="outline"
            asChild
            className="h-11 rounded-[var(--brand-radius)] border border-[#151717] bg-transparent px-8 text-sm font-normal text-[#151717] shadow-none hover:bg-[#151717]/5 md:h-12 md:px-10 md:text-base"
          >
            <Link href="/about">Our Work</Link>
          </Button>

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm text-[#151717]/70">50+ Reviews</p>
                <p className="text-lg text-[#151717]">5.0</p>
              </div>
            </div>

            <div className="hidden h-10 w-px bg-[#151717]/10 sm:block" />

            <div className="flex items-center gap-3">
              {badgeAwards.map((badge) => (
                <div
                  key={badge.src}
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-white p-2 shadow-sm ring-1 ring-[#151717]/5"
                  title={badge.label}
                >
                  <Image
                    src={badge.src}
                    alt={badge.label}
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px"
        style={{ background: brand.gradient }}
      />
    </section>
  );
}
