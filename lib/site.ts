/**
 * Site URL resolves from env at build time so metadata and sitemaps
 * follow the active deployment (e.g. Vercel) instead of a hardcoded domain.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

/** Set NEXT_PUBLIC_CONTACT_EMAIL in your deployment env when ready. */
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";
