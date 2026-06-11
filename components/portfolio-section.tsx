"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
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
    video: media.portfolio.rechargeVideo,
    awards: ["Special Kudos", "SOTD Awarded", "SOTD Awarded"],
  },
  {
    title: "NATO Innovation Fund",
    tags: ["Web Design", "Web Development"],
    description:
      "We partnered with NATO Innovation Fund, a €1B deep tech venture, to create an interactive, minimalist website that reflects their innovative mission and future-focused identity.",
    image: media.portfolio.nato,
    video: media.portfolio.natoVideo,
    awards: ["Honorable Mention", "Special Kudos", "SOTD Awarded"],
    offset: true,
  },
  {
    title: "GreenAcres",
    tags: ["Web Design", "Web Development", "Hosting"],
    description:
      "Explore how we revamped GreenAcres Group's website, enhancing sustainability, usability, and accessibility for their natural burial and ceremonial services.",
    image: media.portfolio.greenAcres,
    video: media.portfolio.greenAcresVideo,
    awards: ["5.0", "SOTD Awarded", "SOTD Awarded"],
  },
  {
    title: "Strata",
    tags: ["Web Design", "Web Development"],
    description:
      "We partnered with Strata to redesign their website, reflecting innovation, engaging audiences, and providing a vibrant, updated presence.",
    image: media.portfolio.strata,
    video: media.portfolio.strataVideo,
    awards: ["Honorable Mention", "SOTD Awarded", "SOTD Awarded"],
    offset: true,
  },
];

function WorkCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <Link href="/about" className="group block">
      <figure className="relative aspect-square overflow-hidden rounded-[var(--brand-radius)] bg-[#151717]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-opacity duration-500 group-hover:opacity-0"
          sizes="(max-width: 640px) 100vw, 42vw"
        />
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        >
          <source src={project.video} type="video/mp4" />
        </video>
        <ul className="absolute left-4 top-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-white/90 px-3 py-1 text-[0.65rem] uppercase tracking-[0.1em] text-[#151717]"
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
          {project.awards.map((award) => (
            <li
              key={award}
              className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-[0.6rem] leading-tight text-white/70"
            >
              {award}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

export function PortfolioSection() {
  return (
    <section className="relative overflow-hidden bg-[#151717] section-padding text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#fe802d]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#ac0bd9]/20 blur-3xl"
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
