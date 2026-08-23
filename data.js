// All calculator configs live here. To add a new calculator, add a new
// object to this array — the [slug]/page.js route reads everything it
// needs (fields, formula inputs, copy) from this file.

export const calculators = [
  {
    slug: "gravel-calculator",
    name: "Gravel Calculator",
    category: "Yard & Landscape",
    intro:
      "Figure out how many cubic yards or tons of gravel you need for a driveway, path, or drainage bed — just enter the area and how deep you want it.",
    fields: [
      { key: "length", label: "Length", unit: "ft", placeholder: "20" },
      { key: "width", label: "Width", unit: "ft", placeholder: "10" },
      { key: "depth", label: "Depth", unit: "in", placeholder: "3" },
    ],
    // cubic yards = (L * W * depth-in-feet) / 27, with a waste allowance
    wasteFactor: 0.1,
    cuFtPerBag: 0.5, // standard bagged gravel size
    lbsPerCuYd: 2700, // typical gravel density, for the ton estimate
    infoItems: [
      {
        title: "How deep should gravel be?",
        body: "3–4 inches for a walking path, 4–6 inches for a driveway base layer, and 2 inches for a decorative top-dress over an existing base.",
      },
      {
        title: "Bagged vs. bulk",
        body: "Bagged gravel makes sense under about 1 cubic yard. Past that, bulk delivery from a landscape supplier is almost always cheaper per unit.",
      },
    ],
    faq: [
      {
        q: "How much gravel do I need for a 10x20 driveway?",
        a: "At a standard 4-inch depth, a 10x20 ft area needs just over 2.5 cubic yards of gravel, before waste allowance. Enter your exact dimensions above for a precise number.",
      },
      {
        q: "How many bags of gravel are in a cubic yard?",
        a: "A cubic yard is 27 cubic feet. With standard 0.5 cubic-foot bags, that's about 54 bags — which is why bulk delivery usually wins for anything over a small patch.",
      },
      {
        q: "Does gravel calculator include compaction?",
        a: "This calculator estimates loose, spread volume. Gravel compacts roughly 10–15% once tamped, which is part of why we build in a waste allowance rather than have you buy the bare minimum.",
      },
      {
        q: "How much does a cubic yard of gravel weigh?",
        a: "Around 2,700 lbs (roughly 1.35 tons), though it varies by stone type and moisture content. Use this to sanity-check delivery truck capacity or trailer weight limits.",
      },
    ],
    related: [],
  },
];

export function getCalculatorBySlug(slug) {
  return calculators.find((c) => c.slug === slug);
}
