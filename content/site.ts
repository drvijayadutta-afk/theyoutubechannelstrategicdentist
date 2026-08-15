export const site = {
  name: "The Strategic Dentist",
  tagline: "Where theory becomes practical execution.",
  description:
    "A learning-in-public platform exploring AI, branding, marketing, healthcare and career learning — and what actually happens when you try the ideas instead of just saving them.",
  url: "https://thestrategicdentist.com",
  author: "Vijaya Dutta",
  locale: "en_IN",
  newsletter: {
    name: "The Strategic Notes",
    promise: "Things I'm learning before I forget them.",
    detail:
      "Experiments, ideas, frameworks and practical lessons from the intersection of AI, marketing, communication and healthcare. Roughly once a week, only when there's something worth sending.",
    cta: "Send me the notes",
  },
  social: {
    email: "drvijayadutta@gmail.com",
    youtube: "https://www.youtube.com/@thestrategicdentist",
    linkedin: "https://www.linkedin.com/in/drvijayathestrategicdentist/",
  },
  youtubeHandle: "@thestrategicdentist",
} as const;

/** Single source for the header, footer and sitemap. Add /resume or /shop here. */
export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Content" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
] as const;
