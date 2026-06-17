"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const fabColor = "#00ffff";
const fabTextColor = "#0a0a0a";

function FabCircle({
  label,
  href,
  size,
  className,
  onClick,
}: {
  label: string;
  href?: string;
  size: "main" | "secondary";
  className?: string;
  onClick?: () => void;
}) {
  const dimensions =
    size === "main"
      ? "h-20 w-20 text-xs"
      : "h-14 w-14 text-[10px] leading-tight";

  const sharedClassName = cn(
    "flex items-center justify-center rounded-full text-center font-normal shadow-2xl transition-transform hover:scale-105",
    dimensions,
    className,
  );

  const style = { backgroundColor: fabColor, color: fabTextColor };

  if (href && !onClick) {
    return (
      <Link href={href} className={sharedClassName} style={style}>
        {label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={sharedClassName}
      style={style}
      aria-expanded={size === "main" ? undefined : false}
    >
      {label}
    </button>
  );
}

export function SpeakToUsButton() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  if (pathname === "/contact-us") {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 right-5 z-50 h-20 w-20 overflow-visible sm:bottom-6 sm:right-6"
      role="group"
      aria-label="Contact options"
    >
      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              key="chat-now"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-[calc(100%+0.5rem)] right-0"
            >
              <FabCircle
                label="Chat now"
                href="/contact-us"
                size="secondary"
              />
            </motion.div>

            <motion.div
              key="book-call"
              initial={{ opacity: 0, scale: 0.5, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.5, x: 20 }}
              transition={{
                duration: 0.25,
                delay: 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-0 right-[calc(100%+0.5rem)]"
            >
              <FabCircle
                label="Book a call"
                href="/contact-us"
                size="secondary"
              />
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={cn(
          "absolute bottom-0 right-0 flex h-20 w-20 items-center justify-center rounded-full text-center text-xs font-normal shadow-2xl transition-transform hover:scale-105",
        )}
        style={{ backgroundColor: fabColor, color: fabTextColor }}
      >
        Speak To Us
      </button>
    </div>
  );
}
