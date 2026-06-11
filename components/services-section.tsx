"use client";

import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";

const services = [
  {
    title: "Website Design",
    description:
      "Maximillian Labs is recognised as a leading UK web design agency on Clutch. We craft high-performance, unique, and scalable websites with fully bespoke design, animation, and SEO optimisation built in from day one.",
    features: [
      "Fully Bespoke Web Design",
      "Animated & Interactive",
      "Engaging User Experience",
      "SEO Optimised Websites",
      "WordPress CMS",
      "Multilingual Websites",
    ],
    accent: "#fe0168",
  },
  {
    title: "Branding",
    description:
      "Our talented London-based team includes highly experienced graphic designers who specialise in creating stunning brand identities that truly capture the essence of your business.",
    features: [
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines",
      "Communications",
    ],
    accent: "#ac0bd9",
  },
  {
    title: "Digital Marketing",
    description:
      "As a Google certified web design agency, we provide complete SEO and digital marketing solutions, all managed in-house by our dedicated account managers.",
    features: [
      "Certified Google Partners",
      "Dedicated Account Managers",
      "Comprehensive Reporting",
      "Full Service",
    ],
    accent: "#fe802d",
  },
];

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#151717] section-padding text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[20vw] top-0 h-[70vw] w-[70vw] rounded-full bg-[#fe802d]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[15vw] bottom-0 h-[55vw] w-[55vw] rounded-full bg-[#ac0bd9]/20 blur-3xl"
      />

      <div className="container-wide relative mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionLabel inverted>Our Services</SectionLabel>
          <h2 className="max-w-3xl text-balance text-[clamp(1.75rem,3vw+1rem,3rem)] font-normal leading-[1.12] tracking-[-0.02em]">
            End-to-end digital solutions
          </h2>
        </FadeIn>

        <div className="mt-12 space-y-6 lg:mt-16">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={0.08 + index * 0.06}>
              <div className="group rounded-[var(--brand-radius)] border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-white/20 hover:bg-white/[0.05] md:p-10">
                <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-start lg:gap-12">
                  <div>
                    <h3
                      className="text-2xl font-normal tracking-tight md:text-3xl"
                      style={{ color: service.accent }}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-sm text-white/80"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: service.accent }}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center lg:mt-16">
            <Link
              href="/contact-us"
              className="inline-flex h-11 items-center rounded-[var(--brand-radius)] border border-white px-8 text-sm font-normal transition-colors hover:bg-white/10 md:h-12"
            >
              Start A Project
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
