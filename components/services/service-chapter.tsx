"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";
import type { Service } from "@/lib/services";
import { cn } from "@/lib/utils";

function FeatureList({
  features,
  inverted = false,
}: {
  features: Service["features"];
  inverted?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-10 space-y-3">
      {features.map((feature, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={feature.title}
            className={cn(
              "overflow-hidden rounded-[var(--brand-radius)] border transition-colors",
              isOpen
                ? inverted
                  ? "border-[#00ffff]/50 bg-white/[0.04]"
                  : "border-[#00ffff]/50 bg-[#0a0a0a]/[0.02]"
                : inverted
                  ? "border-white/10 bg-transparent"
                  : "border-[#0a0a0a]/10 bg-transparent",
            )}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:gap-4 sm:px-5 sm:py-4"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="flex min-w-0 items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ffff]" />
                <span
                  className={cn(
                    "text-sm tracking-tight sm:text-base",
                    inverted ? "text-white" : "text-[#0a0a0a]",
                  )}
                >
                  {feature.title}
                </span>
              </span>
              {isOpen ? (
                <Minus
                  className={cn(
                    "h-4 w-4 shrink-0",
                    inverted ? "text-white/50" : "text-[#0a0a0a]/50",
                  )}
                  strokeWidth={1.5}
                />
              ) : (
                <Plus
                  className={cn(
                    "h-4 w-4 shrink-0",
                    inverted ? "text-white/50" : "text-[#0a0a0a]/50",
                  )}
                  strokeWidth={1.5}
                />
              )}
            </button>
            {isOpen ? (
              <div
                className={cn(
                  "space-y-3 border-t px-4 py-3.5 text-sm leading-relaxed sm:px-5 sm:py-4",
                  inverted
                    ? "border-white/10 text-white/70"
                    : "border-[#0a0a0a]/10 text-[#0a0a0a]/75",
                )}
              >
                {feature.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

type ServiceChapterProps = {
  service: Service;
  inverted?: boolean;
  isFirst?: boolean;
};

export function ServiceChapter({
  service,
  inverted = false,
  isFirst = false,
}: ServiceChapterProps) {
  return (
    <section
      id={service.id}
      className={cn(
        "scroll-mt-[calc(88px+4.5rem)] md:scroll-mt-[calc(92px+4.5rem)] xl:scroll-mt-32",
        inverted
          ? "rounded-[1.25rem] bg-[#0a0a0a] text-white sm:rounded-[1.5rem] xl:px-8 xl:py-2"
          : "bg-transparent text-[#0a0a0a]",
      )}
    >
      <div
        className={cn(
          "relative px-5 py-[max(2.5rem,6vw)] sm:px-6 sm:py-[max(3rem,7vw)] xl:px-0",
          isFirst && "pt-[max(1.5rem,3vw)] sm:pt-[max(2rem,4vw)]",
        )}
      >
        {inverted ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full bg-[#00ffff]/10 blur-3xl sm:-right-20 sm:h-64 sm:w-64"
          />
        ) : null}

        <div className="grid min-w-0 items-start gap-8 md:gap-10 xl:grid-cols-12 xl:gap-14">
          <FadeIn className="min-w-0 xl:col-span-5">
            <SectionLabel inverted={inverted}>Chapter {service.index}</SectionLabel>
            <p className="text-sm tracking-[0.25em] text-[#00ffff]">{service.index}</p>
            <h2 className="mt-4 text-[clamp(2.25rem,4vw+1rem,3.5rem)] leading-[1.05] tracking-[-0.03em]">
              {service.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p
              className={cn(
                "mt-5 text-base leading-relaxed sm:text-lg",
                inverted ? "text-white/75" : "text-[#0a0a0a]/75",
              )}
            >
              {service.headline}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {service.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs tracking-wide",
                    inverted
                      ? "border-white/15 text-white/70"
                      : "border-[#0a0a0a]/15 text-[#0a0a0a]/70",
                  )}
                >
                  {highlight}
                </span>
              ))}
            </div>

            {service.description.length > 0 ? (
              <div
                className={cn(
                  "mt-8 space-y-4 text-base leading-relaxed",
                  inverted ? "text-white/70" : "text-[#0a0a0a]/75",
                )}
              >
                {service.description.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            ) : null}

            <Link
              href="/contact-us"
              className={cn(
                "mt-8 inline-flex h-11 items-center rounded-[var(--brand-radius)] border px-6 text-sm transition-colors",
                inverted
                  ? "border-white text-white hover:bg-white/10"
                  : "border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a]/5",
              )}
            >
              {service.cta}
            </Link>
          </FadeIn>

          <FadeIn delay={0.08} className="min-w-0 xl:col-span-7">
            <div className="relative overflow-hidden">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 text-[clamp(3rem,8vw,7rem)] leading-none tracking-tight text-[#00ffff]/15"
              >
                {service.index}
              </span>
              <div
                className={cn(
                  "relative overflow-hidden rounded-[1.25rem] border p-2",
                  inverted ? "border-white/10 bg-white/5" : "border-[#0a0a0a]/10 bg-white",
                )}
              >
                <div className="relative aspect-[7/5] overflow-hidden rounded-[var(--brand-radius)]">
                  <Image
                    src={service.image}
                    alt={service.title.join(" ")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
              </div>
            </div>

            <FeatureList features={service.features} inverted={inverted} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
