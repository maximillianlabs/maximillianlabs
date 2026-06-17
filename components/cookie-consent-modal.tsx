"use client";

import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "maximillianlabs_cookie_consent";

type ConsentState = "accepted" | "declined";

export function CookieConsentModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const savedConsent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!savedConsent) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  function handleConsent(consent: ConsentState) {
    try {
      window.localStorage.setItem(
        COOKIE_CONSENT_KEY,
        JSON.stringify({
          consent,
          timestamp: new Date().toISOString(),
        }),
      );
    } catch {
      // Fallback: hide the modal even if storage is blocked.
    }

    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-[60] w-[min(92vw,23rem)] overflow-hidden rounded-2xl border border-[#00ffff]/20 bg-[#0a0a0a]/95 p-4 text-white shadow-[0_24px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:bottom-6 sm:left-6 sm:p-5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#00ffff]/20 blur-2xl"
      />
      <p className="text-xs tracking-[0.2em] text-[#00ffff]/85">COOKIE NOTICE</p>
      <h3 className="mt-2 text-lg leading-tight text-white">We use cookies</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/75">
        We use cookies to improve your browsing experience, analyze traffic, and
        personalize content.
      </p>
      <div className="mt-4 flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={() => handleConsent("declined")}
          className="inline-flex h-10 items-center rounded-full border border-white/20 px-4 text-xs text-white/80 transition-colors hover:bg-white/10 hover:text-white"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => handleConsent("accepted")}
          className="inline-flex h-10 items-center rounded-full bg-[#00ffff] px-4 text-xs text-[#0a0a0a] transition-colors hover:bg-[#7affff]"
        >
          Accept cookies
        </button>
      </div>
    </div>
  );
}
