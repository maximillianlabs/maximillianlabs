import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Maximillian Labs to discuss your next web design or digital project.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | Maximillian Labs",
    description:
      "Start a project with our team. Tell us about your goals and we'll get back to you.",
    url: "/contact-us",
  },
};

export default function ContactPage() {
  return (
    <main className="w-full">
      <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
        <Navbar variant="dark" />
        <ContactForm />
      </section>

      <ContactInfo />
      <SiteFooter />
    </main>
  );
}
