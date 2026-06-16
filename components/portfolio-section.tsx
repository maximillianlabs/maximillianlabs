"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";
import { media } from "@/lib/brand";

const projects = [
  {
    title: "Client Project",
    tags: ["Web Design", "Coming Soon"],
    description:
      "Our first client projects are in progress. This space will showcase bespoke digital work as launches go live.",
    image: media.portfolio.clientProject,
    status: "In Progress",
    offset: false,
  },
  {
    title: "Brand Experience",
    tags: ["Web Design", "Coming Soon"],
    description:
      "End-to-end brand and web experiences crafted with aesthetic precision and performance at the core.",
    image: media.portfolio.brandExperience,
    status: "In Progress",
    offset: true,
  },
  {
    title: "Digital Product",
    tags: ["Web Development", "Coming Soon"],
    description:
      "Interactive, responsive builds engineered for growth — tailored to each partner we work with.",
    image: media.portfolio.digitalProduct,
    status: "In Progress",
    offset: false,
  },
  {
    title: "Your Project",
    tags: ["Let's Build", "Contact Us"],
    description:
      "Be among our first featured launches. We're partnering with visionaries ready to architect their digital legacy.",
    image: media.portfolio.yourProject,
    status: "Open Slot",
    offset: true,
  },
];

function WorkCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <Link href="/contact-us" className="group block">
      <figure className="relative aspect-square overflow-hidden rounded-[var(--brand-radius)] bg-[#0a0a0a]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, 42vw"
        />
        <ul className="absolute left-4 top-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-white/90 px-3 py-1 text-[0.65rem] uppercase tracking-[0.1em] text-[#0a0a0a]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </figure>

      <div className="mt-5 text-white">
        <h3 className="text-xl tracking-tight md:text-2xl">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          <li className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-[0.6rem] leading-tight text-white/70">
            {project.status}
          </li>
        </ul>
      </div>
    </Link>
  );
}

export function PortfolioSection() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#0a0a0a] section-padding text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#00ffff]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#00ffff]/10 blur-3xl"
      />

      <div className="container-wide relative mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionLabel inverted>What we do best</SectionLabel>
          <h2 className="mb-[max(3rem,9vw)] max-w-xl text-[clamp(1.75rem,3vw+1rem,2.75rem)] leading-[1.12] tracking-[-0.02em] md:w-5/12">
            Creating digital products &amp; experiences
          </h2>
        </FadeIn>

        <div className="flex flex-wrap justify-between gap-x-6 gap-y-12">
          {projects.map((project, index) => (
            <FadeIn
              key={project.title}
              delay={0.08 + index * 0.06}
              className={`w-full sm:w-[calc(50%-0.75rem)] lg:w-5/12 ${
                project.offset ? "lg:mt-16" : ""
              }`}
            >
              <WorkCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
