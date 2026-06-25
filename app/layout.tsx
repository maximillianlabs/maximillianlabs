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
    default: "Maximillian Labs | Web Design Agency",
    template: "%s | Maximillian Labs",
  },
  description:
    "Nigerian web design agency creating bespoke, high-performance digital experiences for businesses worldwide.",
  keywords: [
    "web design agency",
    "Nigerian web design",
    "UI UX design",
    "digital agency",
    "web development",
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
    title: "Maximillian Labs | Web Design Agency",
    description:
      "Bespoke web design and digital experiences built from Nigeria for a global clientele.",
    siteName: "Maximillian Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maximillian Labs | Web Design Agency",
    description:
      "Bespoke web design and digital experiences built for growth-focused brands worldwide.",
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
    icon: [
      {
        url: "/icons/icon-black.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icons/icon-white.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
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
