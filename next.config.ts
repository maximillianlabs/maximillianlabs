import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve directly from /public — local assets only, no optimizer or external hosts.
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
