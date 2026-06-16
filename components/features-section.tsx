"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionLabel } from "@/components/about/section-label";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: "highly-rated",
    title: "Aesthetic Precision",
    description:
      "Every visual choice is purposeful. We shape refined interfaces that reflect your brand and create an immediate, memorable first impression.",
    image: "/images/features/aesthetic-precision.svg",
    imageAlt: "Abstract composition representing aesthetic precision",
  },
  {
    id: "fully-accredited",
    title: "Performance Driven",
    description:
      "Fast, responsive, and reliable by default. We build digital products engineered for accessibility, scalability, and measurable business outcomes.",
    image: "/images/features/performance-driven.svg",
    imageAlt: "Dashboard style graphic representing performance metrics",
  },
  {
    id: "fully-bespoke",
    title: "Fully Bespoke",
    description:
      "No templates and no shortcuts. Every layout, interaction, and component is custom-crafted around your goals, users, and brand voice.",
    image: "/images/features/fully-bespoke.svg",
    imageAlt: "Layered design system graphic representing fully bespoke work",
  },
  {
    id: "guaranteed-service",
    title: "Global Reach",
    description:
      "Built for audiences anywhere. We create culturally aware digital experiences that help brands scale confidently across markets.",
    image: "/images/features/global-reach.svg",
    imageAlt: "Connected world illustration representing global reach",
  },
];

function getHeaderHeight() {
  const header = document.querySelector("header");
  const sticky = header?.parentElement;
  return sticky?.clientHeight ?? header?.clientHeight ?? 92;
}

export function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const outer = outerRef.current;
    const cards = cardsRef.current?.querySelectorAll<HTMLElement>(".feature-card");
    const nav = navRef.current;

    if (!wrapper || !outer || !cards?.length || !nav) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1200px)", () => {
      const cardList = Array.from(cards);
      const cardCount = cardList.length;
      const outerTop = outer.getBoundingClientRect().top + window.scrollY;
      let currentIndex = 0;

      const scrollDistance = () => outer.clientHeight - cardList[0].clientHeight;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          pin: true,
          start: () => `top ${getHeaderHeight()}`,
          pinSpacing: false,
          end: () => `+=${scrollDistance()}`,
          scrub: 0.5,
          invalidateOnRefresh: true,
          onUpdate(self) {
            const index = Math.round(self.progress * (cardCount - 1));
            if (index !== currentIndex) {
              currentIndex = index;
              setActiveIndex(index);
            }
          },
        },
      });

      cardList.forEach((card, index) => {
        if (index < cardCount - 1) {
          timeline.to(
            card,
            {
              scale: 1 - 0.03 * (cardCount - index - 1),
              duration: (cardCount - index - 1) * 0.6,
            },
            0.5 * index,
          );
        }
        if (index > 0) {
          timeline.to(
            card,
            {
              y: () =>
                -cardList
                  .slice(0, index)
                  .reduce((sum, c) => sum + c.clientHeight, 0),
              duration: index,
              ease: "none",
            },
            0,
          );
        }
      });

      const navLinks = nav.querySelectorAll("a");
      const cleanups: Array<() => void> = [];

      navLinks.forEach((link, index) => {
        const handler = (event: Event) => {
          event.preventDefault();
          const offset = cardList
            .slice(0, index)
            .reduce(
              (sum, card) =>
                sum +
                card.clientHeight +
                parseInt(window.getComputedStyle(card).marginBottom || "0", 10),
              0,
            );
          window.scrollTo({
            top: outerTop - getHeaderHeight() + offset,
            behavior: "smooth",
          });
        };
        link.addEventListener("click", handler);
        cleanups.push(() => link.removeEventListener("click", handler));
      });

      return () => {
        cleanups.forEach((cleanup) => cleanup());
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f0f0f0] section-padding">
      <div className="container-wide mx-auto max-w-[1400px]">
        <div className="mb-12 lg:mb-16 lg:w-10/12">
          <SectionLabel>Why Maximillian Labs</SectionLabel>
          <h2 className="text-[clamp(1.75rem,3vw+1rem,2.75rem)] leading-[1.12] tracking-[-0.02em] text-[#0a0a0a]">
            What makes us different?
          </h2>
        </div>

        <div ref={outerRef} className="cards-outer">
          <div ref={wrapperRef} className="cards-wrapper flex flex-col lg:flex-row lg:gap-12">
            <nav
              aria-label="Differentiators"
              className="hidden shrink-0 lg:flex lg:h-[60vh] lg:w-48 lg:items-center xl:w-56"
            >
              <ul ref={navRef} className="w-full space-y-5 text-right">
                {features.map((feature, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <li key={feature.id} className={isActive ? "active" : ""}>
                      <a
                        href={`#${feature.id}`}
                        className={`inline-flex items-center gap-3 text-base transition-colors ${
                          isActive
                            ? "text-[#0a0a0a]"
                            : "text-[#0a0a0a]/35 hover:text-[#0a0a0a]/60"
                        }`}
                      >
                        <span>{feature.title}</span>
                        {isActive ? (
                          <span
                            aria-hidden="true"
                            className="h-px w-10 shrink-0 bg-[#0a0a0a]"
                          />
                        ) : null}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="min-w-0 flex-1">
              <div ref={cardsRef} className="cards w-full">
                {features.map((feature, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <article
                      key={feature.id}
                      id={feature.id}
                      className="feature-card relative mb-4 flex min-h-[calc(100vh-92px-4rem)] min-h-[calc(100svh-92px-4rem)] flex-col overflow-hidden rounded-[1.5rem] bg-[#f0f0f0] shadow-[0_0.25rem_3.5rem_rgba(0,0,0,0.1)] sm:flex-row-reverse lg:min-h-0 lg:rounded-[2rem]"
                    >
                      <div className="flex w-full items-center p-6 sm:w-1/2 sm:p-[clamp(2rem,15vh,6rem)] sm:px-[20%] lg:min-h-[60vh]">
                        <div>
                          <h3 className="text-2xl tracking-tight text-[#0a0a0a] md:text-3xl">
                            {feature.title}
                          </h3>
                          <p className="mt-4 text-sm leading-relaxed text-[#0a0a0a]/75 md:text-base">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      <div className="w-full sm:w-1/2">
                        <Image
                          src={feature.image}
                          alt={feature.imageAlt}
                          width={900}
                          height={900}
                          className={`aspect-square h-full w-full object-cover transition-transform duration-500 ${
                            isActive ? "scale-[1.01]" : "scale-100"
                          }`}
                          sizes="(max-width: 640px) 100vw, 50vw"
                          priority={index === 0}
                        />
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
