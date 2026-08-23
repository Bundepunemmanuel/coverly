// All calculator configs live here. To add a new calculator: pick an
// existing `formula` type from calc.js (or add a new one), add an entry
// below with its fields/params/copy, and it appears on the homepage,
// gets its own route, and is included in the sitemap automatically.

export const calculators = [
  {
    slug: "gravel-calculator",
    name: "Gravel Calculator",
    category: "Yard & Landscape",
    intro:
      "Figure out how many cubic yards or tons of gravel you need for a driveway, path, or drainage bed — just enter the area and how deep you want it.",
    formula: "area-depth",
    fields: [
      { key: "length", label: "Length", unit: "ft", placeholder: "20" },
      { key: "width", label: "Width", unit: "ft", placeholder: "10" },
      { key: "depth", label: "Depth", unit: "in", placeholder: "3" },
    ],
    params: {
      wasteFactor: 0.1,
      cuFtPerBag: 0.5,
      lbsPerCuYd: 2700,
    },
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
    related: ["fence-calculator", "drywall-calculator"],
  },
  {
    slug: "drywall-calculator",
    name: "Drywall Calculator",
    category: "Walls",
    intro:
      "Work out how many sheets of drywall you need for a room — enter your wall perimeter, ceiling height, and the total area taken up by doors and windows.",
    formula: "wall-area",
    fields: [
      { key: "perimeter", label: "Wall perimeter", unit: "ft", placeholder: "40" },
      { key: "height", label: "Ceiling height", unit: "ft", placeholder: "8" },
      { key: "openings", label: "Doors & windows", unit: "sq ft", placeholder: "40" },
    ],
    params: {
      wasteFactor: 0.1,
      sqFtPerSheet: 32,
    },
    infoItems: [
      {
        title: "Standard sheet size",
        body: "Most drywall sheets are 4x8 ft (32 sq ft). 4x12 sheets exist for fewer seams on tall walls, but they're heavier and harder to handle solo.",
      },
      {
        title: "Don't forget the ceiling",
        body: "This calculator covers walls only. If you're also drywalling the ceiling, add the room's floor area (length × width) to your total separately.",
      },
    ],
    faq: [
      {
        q: "How many sheets of drywall do I need for a 12x12 room?",
        a: "For a 12x12 room with 8 ft ceilings and typical door/window openings, expect around 12–14 standard 4x8 sheets, including waste. Enter your exact perimeter above for a precise count.",
      },
      {
        q: "Sheetrock vs drywall vs wallboard — same thing?",
        a: "Yes — they're different names for the same gypsum board product. \"Sheetrock\" is technically a USG brand name that became generic, similar to how people say \"Kleenex.\"",
      },
      {
        q: "How much waste should I plan for on drywall?",
        a: "10% is standard for a simple rectangular room. Bump it up toward 15–20% for rooms with lots of corners, angles, or a ceiling with fixtures cut into it.",
      },
      {
        q: "Do I need extra drywall for the ceiling?",
        a: "Yes, calculate it separately — ceiling area is length × width of the room floor, not part of the wall perimeter calculation above.",
      },
    ],
    related: ["paint-calculator", "gravel-calculator"],
  },
  {
    slug: "fence-calculator",
    name: "Fence Calculator",
    category: "Yard & Landscape",
    intro:
      "Get a materials count for a new fence line — enter the total run length, how far apart you want posts, and how many gates you're including.",
    formula: "fence",
    fields: [
      { key: "length", label: "Fence length", unit: "ft", placeholder: "100" },
      { key: "postSpacing", label: "Post spacing", unit: "ft", placeholder: "8" },
      { key: "gates", label: "Number of gates", unit: "count", placeholder: "1" },
    ],
    params: {
      railsPerPanel: 3,
    },
    infoItems: [
      {
        title: "Choosing post spacing",
        body: "8 ft is standard for wood privacy fencing. Chain link often runs 10 ft. Tighter spacing (6 ft) adds strength on slopes or in high-wind areas.",
      },
      {
        title: "Corner and end posts",
        body: "This estimate assumes a straight run. Corners need an extra post each, so add one post per corner on top of this count.",
      },
    ],
    faq: [
      {
        q: "How many fence posts do I need for 100 feet?",
        a: "At standard 8 ft spacing, a 100 ft straight run needs about 14 posts, before accounting for corners or gates. Enter your exact spacing above for a precise count.",
      },
      {
        q: "How deep should fence posts be set?",
        a: "A common rule is one-third of the post's above-ground height, with a minimum of 24 inches for most residential fencing — deeper in areas with frost heave.",
      },
      {
        q: "How many rails per fence panel?",
        a: "3 rails (top, middle, bottom) is standard for a 6 ft privacy fence. Taller fences or ones facing high wind loads often use 4.",
      },
      {
        q: "Does this account for corner posts?",
        a: "No — this estimates a straight run. Add one extra post for every corner in your fence line, since corners need their own dedicated post.",
      },
    ],
    related: ["gravel-calculator", "drywall-calculator"],
  },
  {
    slug: "paint-calculator",
    name: "Paint Calculator",
    category: "Painting & Finishing",
    intro:
      "Find out how many gallons of paint you need — enter your wall perimeter, ceiling height, how many coats, and how much space doors and windows take up.",
    formula: "paint",
    fields: [
      { key: "perimeter", label: "Wall perimeter", unit: "ft", placeholder: "40" },
      { key: "height", label: "Ceiling height", unit: "ft", placeholder: "8" },
      { key: "openings", label: "Doors & windows", unit: "sq ft", placeholder: "40" },
      { key: "coats", label: "Number of coats", unit: "coats", placeholder: "2" },
    ],
    params: {
      coveragePerGallon: 350,
      defaultCoats: 2,
    },
    infoItems: [
      {
        title: "Coverage varies by paint",
        body: "350 sq ft per gallon is a typical mid-grade estimate. Cheaper paint and rougher surfaces (like fresh drywall) can drop that closer to 250–300.",
      },
      {
        title: "How many coats do you actually need?",
        body: "2 coats is standard for a color change or new drywall. 1 coat can work for a simple refresh in the same color family over a clean surface.",
      },
    ],
    faq: [
      {
        q: "How many gallons of paint do I need for a 12x12 room?",
        a: "For a 12x12 room with 8 ft ceilings and 2 coats, expect around 1.5–2 gallons, depending on door/window area. Enter your exact dimensions above for a precise number.",
      },
      {
        q: "Do I need to paint the ceiling too?",
        a: "This calculator covers walls only. Ceilings usually take a separate flat paint and should be calculated using the room's floor area (length × width).",
      },
      {
        q: "How much paint does one gallon cover?",
        a: "About 350–400 sq ft per coat on a smooth, primed surface — less on textured walls, unprimed drywall, or when covering a much darker existing color.",
      },
      {
        q: "Should I buy extra paint for touch-ups?",
        a: "A quart is usually enough. This calculator already rounds up to the nearest quart increment, so you'll typically have a little extra for small touch-ups.",
      },
    ],
    related: ["drywall-calculator", "gravel-calculator"],
  },
];

export function getCalculatorBySlug(slug) {
  return calculators.find((c) => c.slug === slug);
}
