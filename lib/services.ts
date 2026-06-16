import { media } from "@/lib/brand";

export type ServiceFeature = {
  title: string;
  paragraphs: string[];
};

export type Service = {
  id: string;
  index: string;
  title: string[];
  headline: string;
  cta: string;
  description: string[];
  features: ServiceFeature[];
  image: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    id: "website-design",
    index: "01",
    title: ["Website", "Design"],
    headline: "Bespoke websites engineered to perform",
    cta: "Start a website project",
    description: [
      "Maximillian Labs crafts high-performance, unique, and scalable websites that stand out — built from Nigeria for a global clientele.",
      "Our team takes a thorough and creative approach to every web design project, ensuring we build a website that's perfectly tailored to your needs.",
    ],
    highlights: ["Fully bespoke", "SEO-ready", "Interactive", "WordPress CMS"],
    features: [
      {
        title: "Fully Bespoke Web Design",
        paragraphs: [
          "Our Nigeria-based design team creates websites tailored to your specific needs with zero templates, site builders, or boring designs!",
          "We focus on delivering a custom-built website that's fully aligned with your goals and reflects your brands uniqueness.",
        ],
      },
      {
        title: "Animated & Interactive",
        paragraphs: [
          "We specialise in creating dynamic and animated designs that grab users attention and engage visitors.",
          "By using animation techniques like Canvas elements, Lottie.js, and WebGL, we bring your website to life, making it not only visually stunning but also highly interactive.",
        ],
      },
      {
        title: "Engaging User Experience",
        paragraphs: [
          "During the discovery & wireframing stages, taking the time to research everything from your website's user journey, target demographics, and user interface needs enables us to create a website with a smooth, strategically designed user flow.",
        ],
      },
      {
        title: "SEO Optimised Websites",
        paragraphs: [
          "From day one, our websites are built SEO-optimised, ensuring they're ready to rank well in competitive search engine results.",
          "Thanks to this strong SEO foundation, an immediate effect takes place on your SEO performance.",
        ],
      },
      {
        title: "WordPress CMS",
        paragraphs: [
          "As WordPress experts, we build our websites using the WordPress CMS, the industry-leading and most robust platform.",
          "We develop the front end of your site separately from the CMS, resulting in a completely unique frontend development integrated into a custom theme.",
        ],
      },
      {
        title: "Multilingual Websites",
        paragraphs: [
          "We design and develop multilingual & multi-regional websites that effectively reach a global audience.",
          "Featuring intuitive language switching and region-specific SEO, we make sure your website is effectively optimised for the appropriate country and region.",
        ],
      },
    ],
    image: media.services.websiteDesign,
  },
  {
    id: "other-services",
    index: "02",
    title: ["Other", "Services"],
    headline: "Support beyond the launch",
    cta: "Explore add-ons",
    description: [
      "From ecommerce builds to ongoing hosting and audits, we extend the life of your digital products with the same precision we bring to every new project.",
    ],
    highlights: ["Ecommerce", "Hosting", "Audits", "Consultation"],
    features: [
      {
        title: "Ecommerce",
        paragraphs: [
          "We offer industry-leading, enterprise standard e-commerce systems as part of our website services. Our e-commerce websites are fully bespoke, adapted to work seamlessly with your business model.",
        ],
      },
      {
        title: "Website Support & Hosting",
        paragraphs: [
          "Experience lightning-fast performance with our servers, delivering up to five times faster Time To First Byte than traditional shared hosting services.",
        ],
      },
      {
        title: "Website Audit and Consultation",
        paragraphs: [
          "Our team carry out a thorough review of your website to determine both its strengths and areas that could use polish, with actionable steps to improve your site.",
        ],
      },
    ],
    image: media.services.otherServices,
  },
];
