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

/**
 * Legacy reference media still hosted on cbwebsitedesign.co.uk.
 * Not wired into the landing page — kept for tracking until local replacements exist.
 */
const cbd = "https://www.cbwebsitedesign.co.uk/wp-content/uploads";

export const externalReferenceMedia = {
  aboutVideo: `${cbd}/2025/07/Creative-Brand-Design-Showreel-V3.mp4`,
  aboutVideoPoster: `${cbd}/2025/07/creativeweb-cover.png`,
  aboutImagePrimary: `${cbd}/2025/06/web-design-london.webp`,
  aboutImageSecondary: `${cbd}/2025/06/CBD-Mockup-V17-square.webp`,
  awards: {
    clutch: `${cbd}/2024/08/clutch3.svg`,
    bestUi: `${cbd}/2024/08/best-ui.svg`,
    bestInnovation: `${cbd}/2024/08/best-innovation.svg`,
    awwwards: `${cbd}/2024/08/awwwards.svg`,
    sotd: `${cbd}/2024/08/sotd.svg`,
    sotdCss: `${cbd}/2024/08/sotd-css.svg`,
    cssWinner: `${cbd}/2024/08/csswinner.svg`,
    clutch4: `${cbd}/2024/08/clutch4.svg`,
    iso: `${cbd}/2024/08/iso.svg`,
    googlePartner: `${cbd}/2024/08/google-partner.svg`,
  },
  portfolio: {
    recharge: `${cbd}/2025/01/Recharge-web-design-1.webp`,
    rechargeVideo: `${cbd}/2025/01/recharge-720p.mp4`,
    nato: `${cbd}/2024/08/nif-cover.webp`,
    natoVideo: `${cbd}/2024/08/nato-portfolio-cover-800x600-1.mp4`,
    greenAcres: `${cbd}/2025/01/Green-Acres-1.webp`,
    greenAcresVideo: `${cbd}/2025/01/GreenAcres-Portfolio-Animation-V1_720p.mp4`,
    strata: `${cbd}/2024/08/Strata-1.webp`,
    strataVideo: `${cbd}/2024/08/strata-square-v1.5_720p.mp4`,
  },
  services: {
    websiteDesign: `${cbd}/2025/02/Portfolio-Grid-V3_mp4.mp4`,
    branding: `${cbd}/2025/02/Branding-1-1080p.mp4`,
    brandingPoster: `${cbd}/2025/06/branding-poster.webp`,
    digitalMarketing: `${cbd}/2025/02/CBD-SEO-Animation-V3_mp4.mp4`,
    otherServices: `${cbd}/2025/02/Other-services-graphic_mp4.mp4`,
  },
  features: {
    highlyRated: `${cbd}/2025/04/Branding-Hero-Banner-Animation-V5-sized-home.mp4`,
    accredited: `${cbd}/2025/04/Awards-Falling-home-sized.mp4`,
    bespoke: `${cbd}/2025/04/Design-System-Recharge-V1-home-sized.mp4`,
    guaranteed: `${cbd}/2025/04/PortfolioTiles-home-sized.mp4`,
  },
  process: {
    planning: `${cbd}/2025/02/CBD_clip_planning3_compressed.mp4`,
    planningPoster: `${cbd}/2025/02/process-planning-poster.webp`,
    designing: `${cbd}/2025/02/CBD_clip_designing4_compressed.mp4`,
    designingPoster: `${cbd}/2025/02/process-designing-poster.webp`,
    developing: `${cbd}/2025/02/CBD_clip_developing2_compressed.mp4`,
    developingPoster: `${cbd}/2025/02/process-developing-poster.webp`,
    testing: `${cbd}/2025/02/CBD_clip_testing2_compressedmore.mp4`,
    testingPoster: `${cbd}/2025/02/process-testing-poster.webp`,
  },
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
    websiteDesign: "/media/services.png",
    otherServices: "/media/tips.png",
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
    projectShowcase: "/media/project-showcase.png",
    webFacts: [
      "/media/web-facts-1.png",
      "/media/web-facts-2.png",
      "/media/web-facts-3.png",
      "/media/web-facts-4.png",
    ],
    mockups: {
      site: "/mockups/site-mockup.png",
      wayfinder: "/mockups/wayfinder-mockup.png",
      businessCard: "/mockups/business-card-mockup.png",
    },
  },
} as const;
