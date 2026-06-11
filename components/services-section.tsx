"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { media } from "@/lib/brand";

type ServiceFeature = {
  title: string;
  paragraphs: string[];
};

type Service = {
  id: string;
  title: string[];
  cta: string;
  description: string[];
  features: ServiceFeature[];
  video: string;
  poster?: string;
};

const services: Service[] = [
  {
    id: "website-design",
    title: ["Website", "Design"],
    cta: "Website Design",
    description: [
      "Maximillian Labs is recognised as a leading UK web design agency on Clutch out of 7,000+ providers. We're experts in crafting high-performance, unique, and scalable websites that stand out.",
      "As an award-winning London web design agency, our team takes a thorough and creative approach to every web design project, ensuring we build a website that's perfectly tailored to your needs.",
    ],
    features: [
      {
        title: "Fully Bespoke Web Design",
        paragraphs: [
          "Our London based web design team creates websites tailored to your specific needs with zero templates, site builders, or boring designs!",
          "We focus on delivering a custom-built website that's fully aligned with your goals and reflects your brands uniqueness.",
        ],
      },
      {
        title: "Animated & Interactive",
        paragraphs: [
          "We specialise in creating dynamic and animated designs that grab users attention and engage visitors.",
          "By using animation techniques like Canvas elements, Lottie.js, and WebGL, we bring your website to life, making it not only visually stunning but also highly interactive.",
        ],
      },
      {
        title: "Engaging User Experience",
        paragraphs: [
          "During the discovery & wireframing stages, taking the time to research everything from your website's user journey, target demographics, and user interface needs enables us to create a website with a smooth, strategically designed user flow.",
        ],
      },
      {
        title: "SEO Optimised Websites",
        paragraphs: [
          "From day one, our websites are built SEO-optimised, ensuring they're ready to rank well in competitive search engine results.",
          "Thanks to this strong SEO foundation, an immediate effect takes place on your SEO performance.",
        ],
      },
      {
        title: "WordPress CMS",
        paragraphs: [
          "As WordPress experts, we build our websites using the WordPress CMS, the industry-leading and most robust platform.",
          "We develop the front end of your site separately from the CMS, resulting in a completely unique frontend development integrated into a custom theme.",
        ],
      },
      {
        title: "Multilingual Websites",
        paragraphs: [
          "We design and develop multilingual & multi-regional websites that effectively reach a global audience.",
          "Featuring intuitive language switching and region-specific SEO, we make sure your website is effectively optimised for the appropriate country and region.",
        ],
      },
    ],
    video: media.services.websiteDesign,
  },
  {
    id: "branding",
    title: ["Branding"],
    cta: "Branding",
    description: [
      "Our talented London-based web design team includes highly experienced graphic designers who specialise in creating stunning brand identities that truly capture the essence of your business.",
      "Let us guide you in building a strong, authentic brand foundation that truly connects with your audience and sets you apart.",
    ],
    features: [
      {
        title: "Logo Design",
        paragraphs: [
          "We design your logo with your brand at heart. Our logo design service develops clean, vectored artwork that makes your logo stand out across platforms.",
        ],
      },
      {
        title: "Visual Identity",
        paragraphs: [
          "Create a standout brand with our bespoke Visual Identity service, designed to give you a cohesive, eye-catching look across all platforms.",
          "We help you leave a lasting impression with your brand through developing custom colour palettes, typography, and imagery.",
        ],
      },
      {
        title: "Brand guidelines",
        paragraphs: [
          "Our bespoke Brand Guidelines service keeps your brand consistent across all platforms with detailed colour palette and typography guides.",
        ],
      },
      {
        title: "Communications",
        paragraphs: [
          "Create powerful and clean brand materials that truly stand out, from emails and brochures to presentations, infographics, and social media content.",
        ],
      },
    ],
    video: media.services.branding,
    poster: media.services.brandingPoster,
  },
  {
    id: "digital-marketing",
    title: ["Digital", "Marketing"],
    cta: "Digital Marketing & SEO",
    description: [
      "As a Google certified web design agency, we provide complete SEO and digital marketing solutions, all managed in-house by our dedicated account managers.",
      "We're focused on delivering measurable ROI, ensuring your business reaches the right audience, stands out, and drives meaningful growth.",
    ],
    features: [
      {
        title: "Certified Google Partners",
        paragraphs: [
          "As a Certified Google Partner, we have the latest tools and insights from Google at our disposal.",
        ],
      },
      {
        title: "Dedicated Account Managers",
        paragraphs: [
          "Our account managers offer a dedicated hands-on approach, partnering you with one expert fully committed to the success of your campaign.",
        ],
      },
      {
        title: "Comprehensive reporting",
        paragraphs: [
          "As part of our SEO service, we provide you with detailed, transparent updates on your campaign's progress, rankings, conversions, and ROI.",
        ],
      },
      {
        title: "Full Service",
        paragraphs: [
          "Our all-encompassing digital marketing services cover everything from onsite technical and offsite SEO to comprehensive content strategies, and social media management.",
        ],
      },
    ],
    video: media.services.digitalMarketing,
  },
  {
    id: "other-services",
    title: ["Other", "Services"],
    cta: "Other Services",
    description: [],
    features: [
      {
        title: "Ecommerce",
        paragraphs: [
          "We offer industry-leading, enterprise standard e-commerce systems as part of our website services. Our e-commerce websites are fully bespoke, adapted to work seamlessly with your business model.",
        ],
      },
      {
        title: "Website Support & Hosting",
        paragraphs: [
          "Experience lightning-fast performance with our servers, delivering up to five times faster Time To First Byte than traditional shared hosting services.",
        ],
      },
      {
        title: "Website Audit and Consultation",
        paragraphs: [
          "Our team carry out a thorough review of your website to determine both its strengths and areas that could use polish, with actionable steps to improve your site.",
        ],
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
      { threshold: 0.25 },
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
      className="aspect-[7/5] h-auto w-full rounded-[var(--brand-radius)] object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

function FeatureAccordion({
  features,
}: {
  features: ServiceFeature[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <dl className="mt-12 divide-y divide-[#151717]/10 border-t border-[#151717]/10">
      {features.map((feature, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={feature.title}>
            <dt>
              <button
                type="button"
                className="flex w-full items-center justify-between py-5 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <h4 className="text-lg text-[#151717]">{feature.title}</h4>
                {isOpen ? (
                  <Minus className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                ) : (
                  <Plus className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                )}
              </button>
            </dt>
            {isOpen ? (
              <dd className="pb-5">
                <div className="space-y-4 text-sm leading-relaxed text-[#151717]/75">
                  {feature.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </dd>
            ) : null}
          </div>
        );
      })}
    </dl>
  );
}

function ServiceBlock({
  service,
  index,
  activeId,
}: {
  service: Service;
  index: number;
  activeId: string;
}) {
  const blockRef = useRef<HTMLDivElement>(null);
  const isActive = activeId === service.id;
  const isPast =
    services.findIndex((s) => s.id === activeId) > index;

  return (
    <div
      ref={blockRef}
      data-service-id={service.id}
      className="relative flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-12"
      style={{ paddingTop: index === 0 ? undefined : "calc(114px + 1.5rem)" }}
    >
      <div className="w-full lg:w-2/5">
        <div className="lg:sticky lg:top-[calc(114px+1.5rem)]">
          <h2
            className={`text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.03em] transition-colors duration-500 ${
              isActive
                ? "text-[#151717]"
                : isPast
                  ? "text-[#151717]/20"
                  : "text-[#151717]/25"
            }`}
          >
            {service.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <ServiceVideo src={service.video} poster={service.poster} />

        {service.description.length > 0 ? (
          <div className="mt-8 space-y-5 text-base leading-relaxed text-[#151717]/80">
            {service.description.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        ) : null}

        <Link
          href="/contact-us"
          className="mt-6 inline-flex h-11 items-center rounded-[var(--brand-radius)] border border-[#151717] px-6 text-sm text-[#151717] transition-colors hover:bg-[#151717]/5"
        >
          {service.cta}
        </Link>

        <FeatureAccordion features={service.features} />
      </div>
    </div>
  );
}

export function ServicesSection() {
  const [activeId, setActiveId] = useState(services[0].id);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const blocks = sectionRef.current?.querySelectorAll("[data-service-id]");
    if (!blocks?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          const id = visible[0].target.getAttribute("data-service-id");
          if (id) setActiveId(id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    blocks.forEach((block) => observer.observe(block));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#fafafa] pt-0 pb-[max(3rem,9vw)]">
      <div className="container-wide mx-auto max-w-[1400px]">
        <div className="space-y-0">
          {services.map((service, index) => (
            <ServiceBlock
              key={service.id}
              service={service}
              index={index}
              activeId={activeId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
