import type { ReactNode } from "react";
import Link from "next/link";
import { contactEmail } from "@/lib/site";
import { AwardBadge, FooterAwardsMarquee, awardBadges } from "@/components/award-badges";
import { Logo } from "@/components/logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/social-icons";

const services = [
  { label: "Website Design", href: "/#services" },
  { label: "Web Development", href: "/#services" },
  { label: "Website Maintenance", href: "/#services" },
];

const quickLinks = [
  { label: "FAQ's", href: "/#faq" },
  { label: "Contact", href: "/contact-us" },
  { label: "Our Agency", href: "/about" },
  { label: "Our Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Home", href: "/" },
];

const sectors = [
  "Startup Website Design",
  "Ecommerce Website Design",
  "SaaS & Tech Website Design",
  "Agency Website Design",
  "Brand & Portfolio Sites",
  "Health & Wellbeing Sites",
  "Enterprise Web Design",
];

function FooterLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`footer-link ${className}`}>
      {children}
    </Link>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-6 text-[clamp(1.125rem,1rem+0.35vw,1.625rem)] leading-none tracking-[-0.03em] text-white">
      {children}
    </h3>
  );
}

function SectorDot() {
  return (
    <span
      aria-hidden="true"
      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#00ffff]"
    />
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-25 overflow-hidden bg-[#f0f0f0]">
      <div className="relative overflow-hidden bg-[#0a0a0a] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="footer-oval footer-oval-cyan bottom left" />
          <div className="footer-oval footer-oval-cyan top left" />
          <div className="footer-oval footer-oval-cyan bottom right" />
        </div>

        <div className="relative px-6 pb-16 pt-16 md:px-10 lg:pt-[calc(6rem+6vh)]">
          <div className="container-wide mx-auto max-w-[1400px]">
            <div className="mb-12 lg:mb-16">
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
                <div className="sm:col-span-2 lg:col-span-3 xl:col-span-2">
                  <Logo variant="white" />
                  <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
                    World-class web design and development from Nigeria to the
                    world.
                  </p>
                </div>

                <div className="lg:col-span-3">
                  <FooterHeading>Contact</FooterHeading>
                  <div className="space-y-4 text-[0.9rem] leading-relaxed text-white/70">
                    <p>
                      Nigeria
                      <br />
                      Serving clients globally
                    </p>
                    {contactEmail ? (
                      <p>
                        <FooterLink
                          href={`mailto:${contactEmail}`}
                          className="text-white"
                        >
                          {contactEmail}
                        </FooterLink>
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <FooterHeading>Services</FooterHeading>
                  <ul className="space-y-1 text-[0.9rem] text-white/70">
                    {services.map((item) => (
                      <li key={item.label}>
                        <FooterLink href={item.href}>{item.label}</FooterLink>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-2">
                  <FooterHeading>Quick Links</FooterHeading>
                  <ul className="space-y-1 text-[0.9rem] text-white/70">
                    {quickLinks.map((item) => (
                      <li key={item.label}>
                        <FooterLink href={item.href}>{item.label}</FooterLink>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sm:col-span-2 lg:col-span-3">
                  <FooterHeading>Sector Spotlight</FooterHeading>
                  <ul className="space-y-4 text-[0.9rem] text-white/70">
                    {sectors.map((item) => (
                      <li key={item}>
                        <FooterLink
                          href="/contact-us"
                          className="inline-flex items-start gap-4"
                        >
                          <SectorDot />
                          <span>{item}</span>
                        </FooterLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12 hidden lg:block">
              <FooterAwardsMarquee />
            </div>

            <div className="mb-10 flex flex-wrap items-center justify-center gap-4 lg:hidden">
              {awardBadges.map((badge) => (
                <AwardBadge
                  key={badge.key}
                  logo={badge.logo}
                  content={badge.content}
                  variant="dark"
                />
              ))}
            </div>

            <div className="flex flex-col gap-6 border-t border-white/10 pt-12 lg:flex-row lg:items-center">
              <div className="text-[0.8rem] leading-relaxed text-white/45">
                <p>
                  © {new Date().getFullYear()} Maximillian Labs. All rights
                  reserved.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:ml-auto lg:flex-row lg:items-center lg:gap-6">
                <ul className="flex flex-wrap gap-6 text-[0.8rem] text-white/45">
                  <li>
                    <FooterLink href="#">Privacy Policy</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">Cookie Policy</FooterLink>
                  </li>
                </ul>

                <ul className="flex items-center gap-4">
                  <li>
                    <Link
                      href="#"
                      aria-label="LinkedIn"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-opacity hover:opacity-70"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      aria-label="Instagram"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-opacity hover:opacity-70"
                    >
                      <InstagramIcon className="h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      aria-label="Facebook"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-opacity hover:opacity-70"
                    >
                      <FacebookIcon className="h-4 w-4" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
