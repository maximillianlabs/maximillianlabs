import type { Metadata } from "next";
import { kollektifSans } from "@/lib/fonts";
import { getSiteUrl } from "@/lib/site";
import { AppToaster } from "@/components/app-toaster";
import { CookieConsentModal } from "@/components/cookie-consent-modal";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Maximillian Labs | Software Development Company",
    template: "%s | Maximillian Labs",
  },
  description:
    "Nigerian software development company building bespoke SaaS products, websites, and high-performance digital experiences for businesses worldwide.",
  keywords: [
    "software development company",
    "SaaS development",
    "Nigerian software company",
    "web development",
    "UI UX design",
    "product engineering",
  ],
  authors: [{ name: "Maximillian Labs" }],
  creator: "Maximillian Labs",
  publisher: "Maximillian Labs",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    title: "Maximillian Labs | Software Development Company",
    description:
      "Bespoke SaaS products and digital experiences built from Nigeria for a global clientele.",
    siteName: "Maximillian Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maximillian Labs | Software Development Company",
    description:
      "Bespoke SaaS products and digital experiences built for growth-focused brands worldwide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icons/icon-black.png",
    shortcut: "/icons/icon-black.png",
    apple: "/icons/icon-black.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kollektifSans.variable} bg-[#f0f0f0]`}
    >
      <body
        className={`${kollektifSans.className} font-sans font-normal antialiased bg-[#f0f0f0] text-[#0a0a0a]`}
      >
        {children}
        <AppToaster />
        <CookieConsentModal />
      </body>
    </html>
  );
}