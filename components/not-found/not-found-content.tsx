"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Home, LifeBuoy } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/about/section-label";
import { Button } from "@/components/ui/button";
import { NotFoundBackground } from "@/components/not-found/not-found-background";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

const helpfulLinks = [
  { label: "Our Work", href: "/#work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

type NotFoundContentProps = {
  prefersDark: boolean;
};

export function NotFoundContent({ prefersDark }: NotFoundContentProps) {
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="not-found-heading"
      className="not-found-section relative flex min-h-[calc(100vh-1px)] flex-col justify-center overflow-hidden py-[max(3rem,9vw)]"
    >
      <NotFoundBackground />

      <div className="container-wide relative z-10 mx-auto max-w-[1400px]">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={stagger}
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel
              inverted={prefersDark}
              className="not-found-label justify-center"
            >
              Error 404
            </SectionLabel>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="not-found-code mb-4 text-[clamp(4.5rem,16vw,9rem)] font-normal leading-[0.85] tracking-[-0.05em]"
            aria-hidden="true"
          >
            404
          </motion.p>

          <motion.h1
            id="not-found-heading"
            variants={fadeUp}
            className="text-balance text-[clamp(2rem,5vw+1rem,3.75rem)] leading-[1.05] tracking-[-0.03em] not-found-heading"
          >
            Oops! This page seems to be missing
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed sm:mt-6 sm:text-lg not-found-description"
          >
            The page you&apos;re looking for may have been moved, deleted, or
            never existed.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Button
              asChild
              className={cn(
                "h-11 w-full rounded-[var(--brand-radius)] border-0 px-8 text-sm font-normal shadow-none sm:w-auto md:h-12 md:px-10",
                "not-found-btn-primary",
              )}
            >
              <Link href="/">
                <Home aria-hidden="true" />
                Return Home
              </Link>
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              className={cn(
                "h-11 w-full rounded-[var(--brand-radius)] bg-transparent px-8 text-sm font-normal shadow-none sm:w-auto md:h-12 md:px-10",
                "not-found-btn-secondary",
              )}
            >
              <ArrowLeft aria-hidden="true" />
              Go Back
            </Button>

            <Button
              asChild
              variant="outline"
              className={cn(
                "h-11 w-full rounded-[var(--brand-radius)] bg-transparent px-8 text-sm font-normal shadow-none sm:w-auto md:h-12 md:px-10",
                "not-found-btn-secondary",
              )}
            >
              <Link href="/contact-us">
                <LifeBuoy aria-hidden="true" />
                Contact Support
              </Link>
            </Button>
          </motion.div>

          <motion.nav
            variants={fadeUp}
            aria-label="Helpful links"
            className="mt-12 sm:mt-14"
          >
            <p className="mb-4 text-[11px] uppercase tracking-[0.23em] not-found-links-label">
              Or explore
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {helpfulLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm transition-colors not-found-link"
                  >
                    <span>{link.label}</span>
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        </motion.div>
      </div>
    </section>
  );
}
