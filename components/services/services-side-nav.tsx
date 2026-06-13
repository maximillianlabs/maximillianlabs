"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { services } from "@/lib/services";

type ServicesSideNavProps = {
  className?: string;
  variant?: "sidebar" | "mobile";
};

export function ServicesSideNav({
  className,
  variant = "sidebar",
}: ServicesSideNavProps) {
  const [activeId, setActiveId] = useState(services[0].id);

  useEffect(() => {
    const sections = services
      .map((service) => document.getElementById(service.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0, 0.15, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const isSidebar = variant === "sidebar";

  return (
    <nav
      aria-label="Service chapters"
      className={cn(
        isSidebar
          ? "rounded-[1.25rem] border border-[#0a0a0a]/8 bg-white/90 p-6 shadow-[0_12px_40px_rgba(10,10,10,0.06)] backdrop-blur-sm"
          : "border-b border-[#0a0a0a]/10 bg-[#f0f0f0]/95 py-4 backdrop-blur-md",
        className,
      )}
    >
      <p
        className={cn(
          "mb-5 text-[0.7rem] tracking-[0.22em] text-[#9d9d9b] uppercase",
          !isSidebar && "container-wide mx-auto max-w-[1400px] px-0",
        )}
      >
        Chapters
      </p>

      <ol
        className={cn(
          "relative",
          isSidebar ? "space-y-1" : "container-wide mx-auto flex max-w-[1400px] gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
      >
        {isSidebar ? (
          <span
            aria-hidden="true"
            className="absolute bottom-3 left-[0.4rem] top-3 w-px bg-[#0a0a0a]/10"
          />
        ) : null}

        {services.map((service) => {
          const isActive = activeId === service.id;

          return (
            <li
              key={service.id}
              className={cn(!isSidebar && "shrink-0")}
            >
              <a
                href={`#${service.id}`}
                className={cn(
                  "group relative flex transition-colors",
                  isSidebar
                    ? "items-start gap-4 rounded-lg px-2 py-3"
                    : "flex-col rounded-lg border px-3 py-2.5",
                  isSidebar && isActive && "bg-[#00ffff]/[0.06]",
                  !isSidebar &&
                    (isActive
                      ? "border-[#0a0a0a]/20 bg-white"
                      : "border-transparent bg-transparent"),
                )}
              >
                {isSidebar ? (
                  <span
                    aria-hidden="true"
                    className={cn(
                      "mt-1.5 h-2 w-2 shrink-0 rounded-full border transition-colors",
                      isActive
                        ? "border-[#00ffff] bg-[#00ffff]"
                        : "border-[#0a0a0a]/20 bg-transparent group-hover:border-[#00ffff]/60",
                    )}
                  />
                ) : null}

                <span className={cn(isSidebar ? "min-w-0" : "text-center")}>
                  <span
                    className={cn(
                      "block text-[0.65rem] tracking-[0.2em]",
                      isActive ? "text-[#00ffff]" : "text-[#9d9d9b]",
                    )}
                  >
                    {service.index}
                  </span>
                  <span
                    className={cn(
                      "mt-1 block text-sm leading-tight tracking-tight transition-colors",
                      isSidebar ? "text-left" : "whitespace-nowrap",
                      isActive
                        ? "text-[#0a0a0a]"
                        : "text-[#9d9d9b] group-hover:text-[#0a0a0a]/80",
                    )}
                  >
                    {service.title.join(" ")}
                  </span>
                </span>

                {isSidebar && isActive ? (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-2 left-0 top-2 w-0.5 rounded-full bg-[#00ffff]"
                  />
                ) : null}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
