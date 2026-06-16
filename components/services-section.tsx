"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { services, type Service, type ServiceFeature } from "@/lib/services";

function ServiceImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[7/5] w-full overflow-hidden rounded-[var(--brand-radius)]">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
    </div>
  );
}

function FeatureAccordion({
  features,
}: {
  features: ServiceFeature[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <dl className="mt-12 divide-y divide-[#0a0a0a]/10 border-t border-[#0a0a0a]/10">
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
                <h4 className="text-lg text-[#0a0a0a]">{feature.title}</h4>
                {isOpen ? (
                  <Minus className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                ) : (
                  <Plus className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                )}
              </button>
            </dt>
            {isOpen ? (
              <dd className="pb-5">
                <div className="space-y-4 text-sm leading-relaxed text-[#0a0a0a]/75">
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
                ? "text-[#0a0a0a]"
                : isPast
                  ? "text-[#0a0a0a]/20"
                  : "text-[#0a0a0a]/25"
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
        <ServiceImage src={service.image} alt={service.title.join(" ")} />

        {service.description.length > 0 ? (
          <div className="mt-8 space-y-5 text-base leading-relaxed text-[#0a0a0a]/80">
            {service.description.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        ) : null}

        <Link
          href="/services"
          className="mt-6 inline-flex h-11 items-center rounded-[var(--brand-radius)] border border-[#0a0a0a] px-6 text-sm text-[#0a0a0a] transition-colors hover:bg-[#0a0a0a]/5"
        >
          View all services
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
    <section id="services" ref={sectionRef} className="bg-[#f0f0f0] pt-0 pb-[max(3rem,9vw)]">
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
