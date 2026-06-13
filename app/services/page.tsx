import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { SpeakToUsButton } from "@/components/speak-to-us-button";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesChaptersLayout } from "@/components/services/services-chapters-layout";
import { ServicesCapabilities } from "@/components/services/services-capabilities";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, branding, digital marketing, and support services from Maximillian Labs — a Nigerian agency crafting bespoke digital experiences worldwide.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Maximillian Labs",
    description:
      "Explore bespoke website design, branding, SEO, and digital support from Maximillian Labs.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="w-full bg-[#f0f0f0]">
      <div className="bg-[#0a0a0a]">
        <Navbar variant="dark" />
      </div>

      <ServicesHero />
      <ServicesChaptersLayout />
      <ServicesCapabilities />
      <SiteFooter />
      <SpeakToUsButton />
    </main>
  );
}
