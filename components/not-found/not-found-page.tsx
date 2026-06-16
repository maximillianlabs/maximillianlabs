"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { NotFoundContent } from "@/components/not-found/not-found-content";
import { SiteFooter } from "@/components/site-footer";
import { SpeakToUsButton } from "@/components/speak-to-us-button";
import { cn } from "@/lib/utils";

function usePrefersDark() {
  const [prefersDark, setPrefersDark] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    function update() {
      setPrefersDark(media.matches);
    }

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return prefersDark;
}

export function NotFoundPage() {
  const prefersDark = usePrefersDark();

  return (
    <main
      className={cn(
        "not-found-page w-full",
        prefersDark ? "not-found-page--dark" : "not-found-page--light",
      )}
    >
      <Navbar variant={prefersDark ? "dark" : "light"} />

      <NotFoundContent prefersDark={prefersDark} />

      <SiteFooter />

      <SpeakToUsButton />

      <p className="sr-only">
        Page not found.{" "}
        <Link href="/">Return to the Maximillian Labs homepage</Link> or{" "}
        <Link href="/contact-us">contact our team</Link> for help.
      </p>
    </main>
  );
}
