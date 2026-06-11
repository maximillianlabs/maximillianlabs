import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ServicesSection } from "@/components/services-section";
import { ImageTilesSection } from "@/components/image-tiles-section";
import { FeaturesSection } from "@/components/features-section";
import { ProcessSection } from "@/components/process-section";
import { AwardsTrailsSection } from "@/components/awards-trails-section";
import { LatestNewsSection } from "@/components/latest-news-section";
import { FaqSection } from "@/components/faq-section";
import { SiteFooter } from "@/components/site-footer";
import { SpeakToUsButton } from "@/components/speak-to-us-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore Maximillian Labs - a London web design agency delivering bespoke websites, branding, and interactive digital experiences.",
};

export default function Page() {
  return (
    <main className="w-full bg-[#fafafa]">
      <Navbar />
      <Hero />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <ImageTilesSection />
      <FeaturesSection />
      <ProcessSection />
      <AwardsTrailsSection />
      <LatestNewsSection />
      <FaqSection />
      <SiteFooter />
      <SpeakToUsButton />
    </main>
  );
}
