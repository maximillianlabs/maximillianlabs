"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronLeft, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/social-icons";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Our Work", href: "#" },
  { label: "Our Agency", href: "/about" },
  { label: "Services", href: "#", submenu: true },
  { label: "Blog", href: "#" },
  { label: "SEO Checker", href: "#" },
  { label: "Cost Guide", href: "#" },
  { label: "Contact", href: "/contact-us" },
];

const serviceItems = [
  { label: "Website Design", href: "#" },
  { label: "SEO & Digital Marketing", href: "#" },
  { label: "GEO", href: "#" },
  { label: "Hosting & Website Support", href: "#" },
  { label: "Branding", href: "#" },
  { label: "Website Audit", href: "#" },
  { label: "Ecommerce", href: "#" },
];

const accentColor = "#e91e8c";

function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-baseline gap-0.5", className)}>
      <span className="text-xl font-normal tracking-tight md:text-2xl">maximillianlabs</span>
      <span className="text-xl font-normal text-[#e63946] md:text-2xl">.</span>
    </Link>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 16"
      fill="none"
      className={cn("h-4 w-6", className)}
    >
      <path
        d="M0 1.5H14"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M0 14.5H24"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ContactSidebar({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-8 md:space-y-10 lg:pt-1"
    >
      <div>
        <p className="mb-2 text-sm text-white/80">Phone</p>
        <p className="text-lg font-normal text-white md:text-xl">(+44) 0207 870 5794</p>
      </div>

      <div>
        <p className="mb-2 text-sm text-white/80">E-Mail</p>
        <p className="text-lg font-normal break-words text-white md:text-xl">
          contact@maximillianlabs.com
        </p>
      </div>

      <div>
        <p className="mb-3 text-sm text-white/80">Follow</p>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            aria-label="LinkedIn"
            className="text-white transition-opacity hover:opacity-70"
          >
            <LinkedinIcon />
          </Link>
          <Link
            href="#"
            aria-label="Instagram"
            className="text-white transition-opacity hover:opacity-70"
          >
            <InstagramIcon />
          </Link>
          <Link
            href="#"
            aria-label="Facebook"
            className="text-white transition-opacity hover:opacity-70"
          >
            <FacebookIcon />
          </Link>
        </div>
      </div>

      <Button
        variant="outline"
        onClick={onClose}
        className="h-11 rounded-md border border-white bg-transparent px-6 text-sm font-normal text-white shadow-none"
      >
        Start A Project
      </Button>
    </motion.div>
  );
}

function MenuNavItem({
  label,
  href,
  isActive,
  onHover,
  onLeave,
  onClick,
}: {
  label: string;
  href?: string;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick?: () => void;
}) {
  const content = (
    <>
      <motion.span
        aria-hidden="true"
        className="h-px shrink-0 bg-[#e91e8c]"
        initial={false}
        animate={{
          width: isActive ? 40 : 0,
          opacity: isActive ? 1 : 0,
          marginRight: isActive ? 12 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        initial={false}
        animate={{ color: isActive ? accentColor : "#ffffff" }}
        transition={{ duration: 0.25 }}
        className="text-2xl font-normal tracking-tight md:text-3xl lg:text-[2rem] lg:leading-tight"
      >
        {label}
      </motion.span>
    </>
  );

  const className =
    "group flex w-full items-center py-1 text-left outline-none transition-opacity";

  if (onClick) {
    return (
      <button
        type="button"
        className={className}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onFocus={onHover}
        onBlur={onLeave}
        onClick={onClick}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={href ?? "#"}
      className={className}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      onClick={onClick}
    >
      {content}
    </Link>
  );
}

type NavbarProps = {
  variant?: "light" | "dark";
};

export function Navbar({ variant = "light" }: NavbarProps) {
  const pathname = usePathname();
  const isDark = variant === "dark";
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
    setShowServices(false);
    setActiveItem(null);
  }

  function openMenu() {
    setIsOpen(true);
    setShowServices(false);
    setActiveItem(null);
  }

  return (
    <>
      <div
        className={cn(
          "sticky top-0 z-40 w-full",
          isDark
            ? "bg-[#080808]/90 backdrop-blur-md"
            : "bg-[#fafafa]/80 backdrop-blur-[30px]",
        )}
      >
        <header className="relative mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-6 md:px-10 md:py-8">
          <Logo
            className={cn(isDark && "[&_span:first-child]:text-white")}
          />

          <div className="flex items-center gap-4 md:gap-5">
            <Button
              variant="outline"
              asChild
              className={cn(
                "h-10 rounded-md border bg-transparent px-5 text-sm font-normal shadow-none md:h-11 md:px-6",
                isDark
                  ? "border-white text-white hover:bg-white/10"
                  : "border-black text-black hover:bg-black/5",
              )}
            >
              <Link href="/contact-us">Start A Project</Link>
            </Button>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            onClick={openMenu}
            className={cn(
              "flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-60",
              isDark ? "text-white" : "text-black",
            )}
          >
            <MenuIcon />
          </button>
        </div>
        </header>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#d4d4d8]"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(4rem,16vw,12rem)] font-normal leading-none tracking-tight text-white/70 select-none">
                maximillian
              </p>
            </div>

            <div className="relative flex h-full flex-col px-6 py-6 md:px-10 md:py-8">
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center justify-between"
              >
                <Logo className="text-white [&_span:first-child]:text-white" />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={closeMenu}
                  className="flex h-10 w-10 items-center justify-center text-white transition-opacity hover:opacity-70"
                >
                  <X className="h-7 w-7" strokeWidth={1.5} />
                </button>
              </motion.div>

              <div className="hidden lg:flex absolute left-10 top-1/2 -translate-y-1/2 -rotate-90">
                <span className="text-[11px] font-normal tracking-[0.2em] text-zinc-600 uppercase">
                  Scroll Down
                </span>
              </div>

              <div className="flex flex-1 items-center justify-center py-8 md:py-10">
                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.98 }}
                  transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1a0a0f] via-[#120812] to-[#2a1035] p-8 shadow-2xl md:rounded-[2.5rem] md:p-12 lg:p-14"
                >
                  <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-8 xl:gap-14">
                    <div className="relative min-h-[320px] overflow-hidden">
                      <AnimatePresence mode="wait">
                        {!showServices ? (
                          <motion.div
                            key="main-menu"
                            initial={{ opacity: 0, x: -32 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <p className="mb-6 text-sm font-normal text-white/80 md:mb-8">
                              Menu
                            </p>
                            <nav className="space-y-1 md:space-y-2">
                              {menuItems.map((item, index) => (
                                <motion.div
                                  key={item.label}
                                  initial={{ opacity: 0, x: -16 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.35,
                                    delay: 0.12 + index * 0.04,
                                    ease: [0.22, 1, 0.36, 1],
                                  }}
                                >
                                  {item.submenu ? (
                                    <MenuNavItem
                                      label={item.label}
                                      isActive={activeItem === item.label}
                                      onHover={() => setActiveItem(item.label)}
                                      onLeave={() => setActiveItem(null)}
                                      onClick={() => setShowServices(true)}
                                    />
                                  ) : (
                                    <MenuNavItem
                                      label={item.label}
                                      href={item.href}
                                      isActive={
                                        activeItem === item.label ||
                                        pathname === item.href
                                      }
                                      onHover={() => setActiveItem(item.label)}
                                      onLeave={() => setActiveItem(null)}
                                      onClick={closeMenu}
                                    />
                                  )}
                                </motion.div>
                              ))}
                            </nav>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="services-menu"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 40 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <button
                              type="button"
                              onClick={() => {
                                setShowServices(false);
                                setActiveItem(null);
                              }}
                              className="mb-8 flex items-center gap-1.5 text-sm text-white/80 transition-colors hover:text-white"
                            >
                              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
                              Back
                            </button>

                            <nav className="space-y-1 md:space-y-2">
                              {serviceItems.map((item, index) => (
                                <motion.div
                                  key={item.label}
                                  initial={{ opacity: 0, x: 24 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.35,
                                    delay: 0.08 + index * 0.04,
                                    ease: [0.22, 1, 0.36, 1],
                                  }}
                                >
                                  <MenuNavItem
                                    label={item.label}
                                    href={item.href}
                                    isActive={activeItem === item.label}
                                    onHover={() => setActiveItem(item.label)}
                                    onLeave={() => setActiveItem(null)}
                                    onClick={closeMenu}
                                  />
                                </motion.div>
                              ))}
                            </nav>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="hidden items-center self-center lg:flex">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <ArrowRight className="h-8 w-8 text-white/90" strokeWidth={1.25} />
                      </motion.div>
                    </div>

                    <ContactSidebar onClose={closeMenu} />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
