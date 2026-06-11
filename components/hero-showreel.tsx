"use client";

import { useEffect, useRef } from "react";
import { media } from "@/lib/brand";

export function HeroShowreel() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container-wide relative z-10 mx-auto mt-12 max-w-[1400px] md:mt-16">
      <figure className="relative aspect-video w-full overflow-hidden rounded-[var(--brand-radius)] bg-[#151717]">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          poster="https://www.cbwebsitedesign.co.uk/wp-content/uploads/2025/07/creativeweb-cover.png"
          className="h-full w-full object-cover"
        >
          <source src={media.heroVideo} type="video/mp4" />
        </video>
      </figure>
    </div>
  );
}
