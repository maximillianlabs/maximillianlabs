export const brand = {
  colors: {
    background: "#f0f0f0",
    black: "#0a0a0a",
    white: "#f0f0f0",
    red: "#00ffff",
    pink: "#00ffff",
    orange: "#00ffff",
    purple: "#0a0a0a",
    lime: "#00ffff",
    gray: "#9d9d9b",
    grayLight: "#d9d9d9",
    obsidian: "#0a0a0a",
    ivory: "#f0f0f0",
    cyan: "#00ffff",
  },
  gradient: "linear-gradient(60deg, #0a0a0a 0%, #00ffff 50%, #0a0a0a 100%)",
  radius: "0.75rem",
} as const;

export const logos = {
  primary: "/logos/logo-primary.png",
  white: "/logos/logo-white.png",
  black: "/logos/logo-black.png",
  cyan: "/logos/logo-cyan.png",
  iconWhite: "/icons/icon-white.png",
  iconBlack: "/icons/icon-black.png",
  iconCyan: "/icons/icon-cyan.png",
} as const;

const landingImages = [
  "/images/landing/landing-01.jfif",
  "/images/landing/landing-02.jfif",
  "/images/landing/landing-03.jfif",
  "/images/landing/landing-04.jfif",
  "/images/landing/landing-05.jfif",
  "/images/landing/landing-06.jfif",
  "/images/landing/landing-07.jfif",
  "/images/landing/landing-08.jfif",
] as const;

export const media = {
  aboutImagePrimary: landingImages[5],
  aboutImageSecondary: landingImages[6],
  aboutShowreelImage: landingImages[0],
  about: {
    hero: landingImages[5],
    cultureWide: landingImages[3],
    cultureTall: landingImages[7],
    gallery: [
      landingImages[0],
      landingImages[1],
      landingImages[2],
      landingImages[4],
      landingImages[3],
      landingImages[6],
      landingImages[2],
      landingImages[7],
      landingImages[1],
    ],
    team: [landingImages[2], landingImages[4], landingImages[1]],
  },
  services: {
    websiteDesign: landingImages[4],
    otherServices: "/media/tips.webp",
  },
  tiles: [...landingImages],
  portfolio: {
    clientProject: "/images/portfolio/client-project.jpg",
    brandExperience: "/images/portfolio/brand-experience.jpg",
    digitalProduct: "/images/portfolio/digital-product.jpg",
    yourProject: "/images/portfolio/your-project.jpg",
  },
  process: {
    planning: landingImages[1],
    designing: landingImages[4],
    developing: landingImages[5],
    testing: landingImages[6],
  },
  local: {
    projectShowcase: "/media/project-showcase.webp",
    webFacts: [
      "/media/web-facts-1.webp",
      "/media/web-facts-2.webp",
      "/media/web-facts-3.webp",
      "/media/web-facts-4.webp",
    ],
  },
} as const;
