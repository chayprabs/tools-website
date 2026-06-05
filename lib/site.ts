export const site = {
  name: "Chaitanya Prabuddha",
  shortName: "Chaitanya Prabuddha",
  wordmark: "Chaitanya Prabuddha",
  monogram: "CP",
  // Update NEXT_PUBLIC_SITE_URL in Vercel once the subdomain is attached.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tools.chaitanyaprabuddha.com",
  description:
    "A free, fast directory of browser-based developer tools — SQL on CSV, PDF utilities, OpenAPI diffs, log analysis, and more. No installs, no accounts, runs in your browser.",
  tagline: "Free developer tools that run in your browser.",
  author: "Chaitanya Prabuddha",
  feedbackEmail: "chaitanyaplusplus@gmail.com",
  socials: {
    github: "https://github.com/chayprabs",
    githubProfile: "chayprabs",
    x: "https://x.com/chayprabs",
    xHandle: "@chayprabs",
    linkedin: "https://linkedin.com/in/chaitanya-prabuddha-bits94",
    personalSite: "https://www.chaitanyaprabuddha.com",
  },
} as const;
