"use client";

import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SectionLabel } from "@/components/about/section-label";

const articles = [
  {
    title: "How to Rank on ChatGPT and Bing Copilot in 2026 [Full Guide]",
    category: "GEO & AI",
    href: "#",
  },
  {
    title: "GEO vs SEO: How Generative Search Is Changing Online Visibility",
    category: "GEO & AI",
    href: "#",
  },
  {
    title: "User Centred Design A Guide to UX and Usability",
    category: "Website Design",
    href: "#",
  },
];

export function LatestNewsSection() {
  return (
    <section className="bg-[#fafafa] section-padding">
      <div className="container-wide mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionLabel>The Latest and Greatest</SectionLabel>
          <h2 className="mb-12 text-[clamp(1.75rem,3vw+1rem,2.75rem)] leading-[1.12] tracking-[-0.02em] text-[#151717] lg:mb-16">
            Latest insights
          </h2>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article, index) => (
            <FadeIn key={article.title} delay={0.08 * index}>
              <Link href={article.href} className="group block">
                <div className="mb-4 aspect-[16/10] rounded-[var(--brand-radius)] bg-[#151717]/5" />
                <h3 className="text-lg leading-snug text-[#151717] transition-colors group-hover:text-[#fe0168]">
                  {article.title}
                </h3>
                <p className="mt-3 text-xs uppercase tracking-[0.15em] text-[#151717]/50">
                  {article.category}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
