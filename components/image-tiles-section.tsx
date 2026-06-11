"use client";

import Image from "next/image";
import { media } from "@/lib/brand";

const row1 = media.team.slice(0, 4);
const row2 = media.team.slice(4, 8);

export function ImageTilesSection() {
  return (
    <section className="relative h-[50vmax] overflow-hidden bg-[#fafafa]">
      <div className="absolute left-1/2 top-1/2 h-[180%] w-[150%] -translate-x-1/2 -translate-y-1/2 rotate-[22.5deg]">
        <div className="flex translate-x-[10%] justify-center gap-4 animate-[scroll-left_40s_linear_infinite]">
          {row1.map((src) => (
            <figure
              key={src}
              className="relative h-[calc(18vmax-1.5rem)] w-[calc(16.6666%-1.5rem)] min-w-[140px] shrink-0 overflow-hidden rounded-[var(--brand-radius)]"
            >
              <Image src={src} alt="" fill className="object-cover" sizes="200px" />
            </figure>
          ))}
        </div>
        <div className="mt-4 flex -translate-x-[10%] justify-center gap-4 animate-[scroll-right_40s_linear_infinite]">
          {row2.map((src) => (
            <figure
              key={src}
              className="relative h-[calc(18vmax-1.5rem)] w-[calc(16.6666%-1.5rem)] min-w-[140px] shrink-0 overflow-hidden rounded-[var(--brand-radius)]"
            >
              <Image src={src} alt="" fill className="object-cover" sizes="200px" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
