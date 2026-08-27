import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maximillian Labs",
    short_name: "Max Labs",
    description:
      "Nigerian software development company building bespoke SaaS products and digital experiences for clients worldwide.",
    start_url: "/",
    display: "standalone",
    background_color: "#f0f0f0",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/icons/icon-black.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icons/icon-black.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}