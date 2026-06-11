import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ServicesSection } from "@/components/services-section";
import { AboutDifferentiators } from "@/components/about/about-differentiators";
import { ProcessSection } from "@/components/process-section";
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
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <AboutDifferentiators />
      <ProcessSection />
      <SiteFooter />
      <SpeakToUsButton />
    </main>
  );
}
