"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";
import { aboutContent } from "@/lib/about-content";
import { media } from "@/lib/brand";

const values = [
  "Mission-driven approach to every project",
  "Collaborative partnership with clients",
  "Remote-first, globally connected team",
  "Commitment to quality and precision",
  "Continuous learning and evolution",
];

export function AboutCulture() {
  return (
    <section className="overflow-hidden bg-[#f0f0f0] px-6 py-[calc(3rem+3vh)] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <div className="w-full sm:w-2/3">
            <SectionLabel>Our Philosophy</SectionLabel>
            <h2 className="text-balance text-[clamp(1.75rem,3vw+1rem,2.75rem)] font-normal leading-[1.12] tracking-[-0.02em] text-[#0a0a0a]">
              {aboutContent.whoWeAre.closing}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative mx-auto h-[420px] w-full max-w-xl sm:h-[500px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-8 h-[58%] w-[72%] overflow-hidden rounded-xl"
            >
              <Image
                src={media.about.cultureWide}
                alt="Creative collaboration"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 bottom-0 h-[62%] w-[58%] overflow-hidden rounded-xl shadow-2xl"
            >
              <Image
                src={media.about.cultureTall}
                alt="Design workspace"
                fill
                sizes="(max-width: 1024px) 70vw, 35vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          <FadeIn delay={0.12}>
            <div className="space-y-8">
              <p className="text-base leading-relaxed text-[#0a0a0a]/80 sm:text-lg">
                {aboutContent.whoWeAre.paragraphs[1]}
              </p>

              <div>
                <p className="mb-4 text-sm font-normal tracking-wide text-[#0a0a0a]/60 uppercase">
                  How we work:
                </p>
                <ul className="space-y-2.5 text-sm leading-relaxed text-[#0a0a0a]/80 sm:text-base">
                  {values.map((value) => (
                    <li key={value} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ffff]" />
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
