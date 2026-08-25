"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  function scrollToAbout() {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative w-full overflow-hidden pb-20 pt-6 md:pb-28 md:pt-10 lg:pb-36">
      <div className="container-wide relative z-20 mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.75rem,7vw,5.25rem)] leading-[0.95] tracking-[-0.03em] text-[#0a0a0a]"
          >
            <span className="text-brand-gradient">Digital Products</span>
            <br />
            <span style={{ fontWeight: 300 }}>SaaS Development Company</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mx-auto mt-8 max-w-[46rem] text-base leading-relaxed text-[#0a0a0a]/80"
          >
            We&apos;re Maximillian Labs — a Nigeria-based software development
            company, building bespoke{" "}
            <Link
              href="/about"
              className="font-normal text-[#0a0a0a] underline decoration-[#00ffff]/50 underline-offset-2"
            >
              SaaS solutions
            </Link>{" "}
            and web experiences for aspiring &amp; established businesses
            worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-10"
          >
            <Button
              variant="outline"
              asChild
              className="h-11 rounded-[var(--brand-radius)] border border-[#0a0a0a] bg-transparent px-8 text-sm font-normal text-[#0a0a0a] shadow-none hover:bg-[#0a0a0a]/5 md:h-12 md:px-10"
            >
              <Link href="/contact-us">Start A Project</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToAbout}
        className="absolute left-6 top-1/2 z-30 hidden -translate-y-1/2 lg:left-10 lg:block"
        aria-label="Scroll down"
      >
        <span className="block origin-center -rotate-90 whitespace-nowrap text-[11px] uppercase tracking-[0.23em] text-[#9d9d9b]">
          Scroll Down
        </span>
      </button>
    </section>
  );
}