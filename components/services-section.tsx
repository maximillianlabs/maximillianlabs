"use client";

import { useEffect, useRef } from "react";
import { FadeIn } from "@/components/fade-in";
import { media } from "@/lib/brand";

const services = [
  {
    title: ["Website", "Design"],
    description:
      "Maximillian Labs is recognised as a leading UK web design agency on Clutch. We're experts in crafting high-performance, unique, and scalable websites that stand out.",
    intro:
      "As an award-winning London web design agency, our team takes a thorough and creative approach to every web design project, ensuring we build a website that's perfectly tailored to your needs.",
    features: [
      {
        title: "Fully Bespoke Web Design",
        text: "Our London based web design team creates websites tailored to your specific needs with zero templates, site builders, or boring designs!",
      },
      {
        title: "Animated & Interactive",
        text: "We specialise in creating dynamic and animated designs that grab users attention and engage visitors using Canvas, Lottie.js, and WebGL.",
      },
      {
        title: "Engaging User Experience",
        text: "We research your user journey, target demographics, and interface needs to create a smooth, strategically designed user flow.",
      },
      {
        title: "SEO Optimised Websites",
        text: "From day one, our websites are built SEO-optimised with Google Search Console, Analytics, and essential tags integrated.",
      },
      {
        title: "WordPress CMS",
        text: "We develop the front end separately from the CMS, resulting in a completely unique frontend integrated into a custom theme.",
      },
      {
        title: "Multilingual Websites",
        text: "We design multilingual & multi-regional websites with intuitive language switching and region-specific SEO.",
      },
    ],
    video: media.services.websiteDesign,
  },
  {
    title: ["Branding"],
    description:
      "Our talented London-based web design team includes highly experienced graphic designers who specialise in creating stunning brand identities that truly capture the essence of your business.",
    intro:
      "Let us guide you in building a strong, authentic brand foundation that truly connects with your audience and sets you apart.",
    features: [
      {
        title: "Logo Design",
        text: "We design your logo with your brand at heart, developing clean, vectored artwork that makes your logo stand out across platforms.",
      },
      {
        title: "Visual Identity",
        text: "Create a standout brand with our bespoke Visual Identity service, designed to give you a cohesive, eye-catching look across all platforms.",
      },
      {
        title: "Brand guidelines",
        text: "Our bespoke Brand Guidelines service keeps your brand consistent with detailed colour palette and typography guides.",
      },
      {
        title: "Communications",
        text: "Create powerful brand materials from emails and brochures to presentations, social media content, and advertising creatives.",
      },
    ],
    video: media.services.branding,
    poster: media.services.brandingPoster,
  },
  {
    title: ["Digital", "Marketing"],
    description:
      "As a Google certified web design agency, we provide complete SEO and digital marketing solutions, all managed in-house by our dedicated account managers.",
    intro:
      "We're focused on delivering measurable ROI, ensuring your business reaches the right audience, stands out, and drives meaningful growth.",
    features: [
      {
        title: "Certified Google Partners",
        text: "As a Certified Google Partner, we have the latest tools and insights from Google at our disposal.",
      },
      {
        title: "Dedicated Account Managers",
        text: "Our account managers offer a dedicated hands-on approach, partnering you with one expert fully committed to your campaign.",
      },
      {
        title: "Comprehensive reporting",
        text: "We provide detailed, transparent updates on your campaign's progress, rankings, conversions, and ROI.",
      },
      {
        title: "Full Service",
        text: "Our all-encompassing digital marketing services cover onsite SEO, offsite SEO, content strategies, and social media management.",
      },
    ],
    video: media.services.digitalMarketing,
  },
  {
    title: ["Other", "Services"],
    description: "",
    intro: "",
    features: [
      {
        title: "Ecommerce",
        text: "Industry leading, scalable e-commerce systems adapted to work seamlessly with your business model, with SSL secure payments and easy management.",
      },
      {
        title: "Website Support & Hosting",
        text: "Lightning-fast performance with proactive server management, 24/7 monitoring, security protocols, and global CDN.",
      },
      {
        title: "Website Audit and Consultation",
        text: "A thorough review of your website covering design, UX, SEO, content quality, and technical performance with actionable feedback.",
      },
    ],
    video: media.services.otherServices,
  },
];

function ServiceVideo({
  src,
  poster,
}: {
  src: string;
  poster?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.3 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      className="h-full w-full rounded-[var(--brand-radius)] object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-[#fafafa]">
      {services.map((service, index) => (
        <div
          key={service.title.join("-")}
          className="section-padding border-t border-[#151717]/5 first:border-t-0"
        >
          <div className="container-wide mx-auto max-w-[1400px]">
            <FadeIn delay={index * 0.04}>
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                  <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.03em] text-[#151717]">
                    {service.title.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h2>
                  {service.description ? (
                    <p className="mt-8 max-w-lg text-base leading-relaxed text-[#151717]/75">
                      {service.description}
                    </p>
                  ) : null}
                  {service.intro ? (
                    <p className="mt-5 max-w-lg text-base leading-relaxed text-[#151717]/75">
                      {service.intro}
                    </p>
                  ) : null}
                </div>

                <div className="relative aspect-video overflow-hidden rounded-[var(--brand-radius)] bg-[#151717]/5">
                  <ServiceVideo src={service.video} poster={service.poster} />
                </div>
              </div>

              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
                {service.features.map((feature) => (
                  <div key={feature.title}>
                    <h4 className="mb-2 text-lg text-[#151717]">{feature.title}</h4>
                    <p className="text-sm leading-relaxed text-[#151717]/70">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      ))}
    </section>
  );
}
