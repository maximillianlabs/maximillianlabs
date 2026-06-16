"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { aboutContent } from "@/lib/about-content";
import { media } from "@/lib/brand";

export function AboutHero() {
  return (
    <section className="relative z-[2] overflow-hidden bg-[#0a0a0a] pb-0 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[#0a0a0a]" />

      <div className="relative z-20 mx-auto max-w-[1400px] px-6 pt-[calc(3rem+3vh)] sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full sm:w-3/4 md:w-1/2"
        >
          <h1 className="mb-6 text-[clamp(2.75rem,6vw+1rem,5.5rem)] font-normal leading-[1.05] tracking-[-0.02em]">
            Architecting Digital Legacies
          </h1>
          <p className="text-base leading-relaxed text-white/90 sm:text-lg">
            {aboutContent.whoWeAre.paragraphs[0]}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 mx-auto mt-[calc((6rem+6vh)*0.5)] max-w-[1400px] px-6 sm:px-10 lg:px-16"
      >
        <div className="relative overflow-hidden rounded-xl">
          <div className="relative w-full pb-[50%]">
            <Image
              src={media.about.hero}
              alt="Maximillian Labs studio"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1400px"
              className="object-cover"
            />
          </div>

          <Link
            href="/contact-us"
            className="absolute bottom-5 right-5 flex h-24 w-24 items-center justify-center rounded-full bg-[#00ffff] text-center text-sm font-normal leading-tight text-[#0a0a0a] shadow-2xl transition-transform hover:scale-105 sm:bottom-8 sm:right-8 sm:h-28 sm:w-28"
          >
            Speak To Us
          </Link>
        </div>
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[30vw] top-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"
      />
    </section>
  );
}
