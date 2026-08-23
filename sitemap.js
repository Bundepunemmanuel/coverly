import { calculators } from "../data";

// Update this once you have the real domain.
const SITE_URL = "https://coverly-com.vercel.app";

export default function sitemap() {
  const staticRoutes = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const calculatorRoutes = calculators.map((calc) => ({
    url: `${SITE_URL}/${calc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...calculatorRoutes];
}
