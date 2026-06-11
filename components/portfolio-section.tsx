"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";
import { media } from "@/lib/brand";

const projects = [
  {
    title: "Recharge",
    tags: ["Web Design", "Web Development"],
    description:
      "Discover how we built a fresh, engaging, & interactive web design for Recharge, a global gift & top-up card provider, boosting user engagement & brand impact.",
    image: media.portfolio.recharge,
    awards: ["Special Kudos", "SOTD", "Awarded"],
    offset: false,
  },
  {
    title: "NATO Innovation Fund",
    tags: ["Web Design", "Web Development"],
    description:
      "We partnered with NATO Innovation Fund, a €1B deep tech venture, to create an interactive, minimalist website that reflects their innovative mission.",
    image: media.portfolio.nato,
    awards: ["Honorable Mention", "Special Kudos", "SOTD"],
    offset: true,
  },
  {
    title: "GreenAcres",
    tags: ["Web Design", "Web Development", "Hosting"],
    description:
      "Explore how we revamped GreenAcres Group's website, enhancing sustainability, usability, and accessibility for their natural burial services.",
    image: media.portfolio.greenAcres,
    awards: ["5.0", "SOTD", "Awarded"],
    offset: false,
  },
  {
    title: "Strata",
    tags: ["Web Design", "Web Development"],
    description:
      "We partnered with Strata to redesign their website, reflecting innovation, engaging audiences, and providing a vibrant, updated presence.",
    image: media.portfolio.strata,
    awards: ["Honorable Mention", "SOTD", "Awarded"],
    offset: true,
  },
];

export function PortfolioSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] section-padding">
      <div className="container-wide mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionLabel>What we do best</SectionLabel>
          <h2 className="max-w-3xl text-balance text-[clamp(1.75rem,3vw+1rem,3rem)] font-normal leading-[1.12] tracking-[-0.02em] text-[#151717]">
            Creating digital products &amp; experiences
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:gap-10">
          {projects.map((project, index) => (
            <FadeIn
              key={project.title}
              delay={0.08 + index * 0.06}
              className={project.offset ? "lg:mt-16" : ""}
            >
              <Link
                href="/about"
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--brand-radius)] bg-[#151717]/5">
                  <Image
                    src={project.image}
                    alt={`${project.title} web design project`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151717]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div className="mt-5">
                  <h3 className="text-xl font-normal tracking-tight text-[#151717] transition-colors group-hover:text-[#fe0168] md:text-2xl">
                    {project.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs uppercase tracking-[0.15em] text-[#151717]/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[#151717]/70 md:text-base">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.awards.map((award) => (
                      <span
                        key={award}
                        className="rounded-full bg-white px-3 py-1 text-xs text-[#151717]/60 ring-1 ring-[#151717]/10"
                      >
                        {award}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
