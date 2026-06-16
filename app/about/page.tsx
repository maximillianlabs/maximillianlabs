import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { SpeakToUsButton } from "@/components/speak-to-us-button";
import { AboutHero } from "@/components/about/about-hero";
import { AboutIntro } from "@/components/about/about-intro";
import { AboutMissionVision } from "@/components/about/about-mission-vision";
import { AboutImageGrid } from "@/components/about/about-image-grid";
import { AboutDifferentiators } from "@/components/about/about-differentiators";
import { AboutValuesSection } from "@/components/about/about-values-section";
import { AboutCulture } from "@/components/about/about-culture";

export const metadata: Metadata = {
  title: "Our Agency",
  description:
    "Who we are, our mission, and our vision — Maximillian Labs architects digital legacies from Nigeria for a global clientele.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Our Agency | Maximillian Labs",
    description:
      "Discover the values and philosophy behind Maximillian Labs — precision, quality, and results from Nigeria to the world.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="w-full">
      <div className="bg-[#0a0a0a]">
        <Navbar variant="dark" />
      </div>

      <AboutHero />
      <AboutIntro />
      <AboutMissionVision />
      <AboutImageGrid />
      <AboutDifferentiators />
      <AboutValuesSection />
      <AboutCulture />

      <SiteFooter />
      <SpeakToUsButton />
    </main>
  );
}
