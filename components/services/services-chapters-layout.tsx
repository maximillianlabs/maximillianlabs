"use client";

import { ServicesSideNav } from "@/components/services/services-side-nav";
import { ServiceChapter } from "@/components/services/service-chapter";
import { services } from "@/lib/services";

export function ServicesChaptersLayout() {
  return (
    <div className="overflow-x-hidden bg-[#f0f0f0]">
      <div className="sticky top-[88px] z-30 overflow-x-hidden border-b border-[#0a0a0a]/10 xl:hidden md:top-[92px]">
        <ServicesSideNav variant="mobile" />
      </div>

      <div className="container-wide mx-auto max-w-[1400px]">
        <div className="flex items-start gap-6 lg:gap-8 xl:gap-14">
          <aside className="sticky top-[calc(88px+1.5rem)] hidden w-48 shrink-0 self-start pt-8 xl:block xl:top-[calc(92px+2rem)] xl:w-56 xl:pt-10 2xl:w-64">
            <ServicesSideNav variant="sidebar" />
          </aside>

          <div className="min-w-0 flex-1">
            {services.map((service, index) => (
              <ServiceChapter
                key={service.id}
                service={service}
                inverted={index % 2 === 1}
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
