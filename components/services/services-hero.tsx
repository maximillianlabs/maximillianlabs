"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/about/section-label";
import { services } from "@/lib/services";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] pb-[max(2.5rem,6vw)] pt-[max(1.75rem,4vw)] text-white sm:pb-[max(3rem,8vw)] sm:pt-[max(2rem,5vw)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(#00ffff08 1px, transparent 1px), linear-gradient(90deg, #00ffff08 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 0%, black, transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#00ffff]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#00ffff]/10 blur-3xl"
      />

      <div className="container-wide relative mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <SectionLabel inverted>Capabilities</SectionLabel>
          <h1 className="text-balance text-[clamp(2.25rem,6vw+1rem,5rem)] leading-[1.02] tracking-[-0.03em]">
            The <span className="text-[#00ffff]">Lab</span> Catalogue
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg">
            Four disciplines, one standard of craft. Every service is bespoke,
            obsidian-sharp, and built to leave a digital legacy — from Nigeria to
            the world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:mt-14 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="group relative overflow-hidden rounded-[var(--brand-radius)] border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-[#00ffff]/40 hover:bg-white/[0.06] sm:p-5"
            >
              <span className="text-sm tracking-[0.2em] text-[#00ffff]">
                {service.index}
              </span>
              <p className="mt-2 text-base leading-tight tracking-tight text-white sm:mt-3 sm:text-lg">
                {service.title.join(" ")}
              </p>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-0 bg-[#00ffff] transition-all duration-500 group-hover:w-full"
              />
              <span className="sr-only">{`Jump to ${service.title.join(" ")}`}</span>
              <motion.span
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="pointer-events-none absolute -right-4 -top-4 text-[5rem] leading-none text-white/[0.03]"
              >
                {service.index}
              </motion.span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
