"use client";

import { ServicesSideNav } from "@/components/services/services-side-nav";
import { ServiceChapter } from "@/components/services/service-chapter";
import { services } from "@/lib/services";

export function ServicesChaptersLayout() {
  return (
    <div className="bg-[#f0f0f0]">
      <div className="sticky top-[92px] z-30 border-b border-[#0a0a0a]/10 lg:hidden">
        <ServicesSideNav variant="mobile" />
      </div>

      <div className="container-wide mx-auto max-w-[1400px]">
        <div className="flex items-start gap-10 xl:gap-14">
          <aside className="sticky top-[calc(92px+2rem)] hidden w-56 shrink-0 self-start pt-10 lg:block xl:w-64">
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
