// All calculator configs live here. To add a new calculator: pick an
// existing `formula` type from calc.js (or add a new one), add an entry
// below with its fields/params/copy, and it appears on the homepage,
// gets its own route, and is included in the sitemap automatically.
//
// FAQ content is drawn from real Google Keyword Planner long-tail data
// (Aug 2025–Jul 2026), grouped by theme rather than listing every near-
// duplicate phrasing. Worked examples in howItWorks are verified against
// calc.js — see /tmp/calc_test.mjs during development for the numbers.

const SOURCE_NOTE =
  "Coverage rates and waste allowances above reflect commonly used industry rules of thumb from landscaping and building-supply guidance, not a single manufacturer spec. Product coverage varies by brand and site conditions — always confirm the exact figure on your product's label or with your supplier before buying.";

export const calculators = [
  {
    slug: "mulch-calculator",
    name: "Mulch Calculator",
    category: "Yard & Landscape",
    intro:
      "Figure out how many bags or cubic yards of mulch you need for a flower bed or yard — enter the area and how deep you want it spread.",
    formula: "area-depth",
    diagramType: "area-depth",
    fields: [
      { key: "length", label: "Length", unit: "ft", placeholder: "10" },
      { key: "width", label: "Width", unit: "ft", placeholder: "10" },
      { key: "depth", label: "Depth", unit: "in", placeholder: "3" },
    ],
    params: { wasteFactor: 0.1, cuFtPerBag: 2, lbsPerCuYd: 600 },
    howItWorks: {
      formula:
        "Length × width gives the area, then area × depth (converted from inches to feet) gives volume. We add a 10% waste allowance for settling and uneven spreading, then convert to cubic yards and standard 2-cubic-foot bags.",
      example:
        "Example: a 10×10 ft bed at 3 in deep needs about 25 cu ft of mulch before waste — roughly 1.02 cu yd, or 14 bags, once the waste allowance is included.",
    },
    infoItems: [
      {
        title: "How deep should mulch be?",
        body: "2–3 inches is standard for most beds. Go deeper than 4 inches and you risk suffocating roots and encouraging rot against tree trunks and stems.",
      },
      {
        title: "Bagged vs. bulk",
        body: "Bagged mulch (2 cu ft bags) makes sense under about 1 cubic yard. Past that, bulk delivery is almost always cheaper per unit — ask your supplier about delivery minimums.",
      },
    ],
    faq: [
      {
        q: "How do I figure out how much mulch I need?",
        a: "Measure the length and width of your bed in feet, decide how deep you want the mulch (2–3 inches is typical), and enter both above. The calculator handles the volume and waste math for you.",
      },
      {
        q: "How much mulch is in a bag?",
        a: "Most bagged mulch comes in 2 cubic foot bags. A cubic yard is 27 cubic feet, so it takes roughly 13–14 bags to equal one cubic yard.",
      },
      {
        q: "How much does a yard of mulch cost compared to bags?",
        a: "Bulk mulch by the yard is almost always cheaper per cubic foot than bagged mulch, but bags win for small jobs where you don't want leftover material or a big delivery minimum. Exact pricing varies by region and mulch type — check with a local supplier.",
      },
      {
        q: "Does Home Depot have its own mulch calculator?",
        a: "Yes, most big box retailers offer one, but it's usually tied to their own product SKUs and bag sizes. This calculator works with whatever bag size or bulk supplier you're actually using.",
      },
      {
        q: "How much mulch do I need for 100 square feet?",
        a: "At a standard 3-inch depth, 100 sq ft needs about 25 cubic feet of mulch (just under 1 cubic yard) before waste. Enter your exact depth above since deeper coverage needs proportionally more.",
      },
      {
        q: "Does mulch compress or settle over time?",
        a: "Yes — mulch settles as it decomposes and gets rained on, which is exactly why this calculator builds in a waste allowance rather than having you buy the bare minimum.",
      },
      {
        q: "How often should I add new mulch?",
        a: "Once a year is typical for most organic mulches, since they break down and thin out. Some coarser wood chip mulches can go 18–24 months between refreshes.",
      },
    ],
    related: ["gravel-calculator", "pine-straw-calculator"],
  },
  {
    slug: "gravel-calculator",
    name: "Gravel Calculator",
    category: "Yard & Landscape",
    intro:
      "Figure out how many cubic yards or tons of gravel you need for a driveway, path, or drainage bed — just enter the area and how deep you want it.",
    formula: "area-depth",
    diagramType: "area-depth",
    fields: [
      { key: "length", label: "Length", unit: "ft", placeholder: "20" },
      { key: "width", label: "Width", unit: "ft", placeholder: "10" },
      { key: "depth", label: "Depth", unit: "in", placeholder: "3" },
    ],
    params: { wasteFactor: 0.1, cuFtPerBag: 0.5, lbsPerCuYd: 2700 },
    howItWorks: {
      formula:
        "Length × width gives the area, then area × depth (converted from inches to feet) gives volume. We add a 10% waste allowance for compaction and spillage, then convert to cubic yards, standard 0.5 cu ft bags, and bulk tonnage.",
      example:
        "Example: a 10×20 ft driveway section at 4 in deep needs about 66.7 cu ft before waste — roughly 2.72 cu yd, 147 bags, or about 3.67 tons in bulk.",
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
        q: "How much gravel do I need for a driveway?",
        a: "At a standard 4-inch base depth, a 10×20 ft driveway section needs about 2.72 cubic yards. Enter your exact dimensions above — driveway length and width vary a lot, so this is worth calculating precisely rather than estimating.",
      },
      {
        q: "How many bags of gravel are in a cubic yard?",
        a: "A cubic yard is 27 cubic feet. With standard 0.5 cubic-foot bags, that's about 54 bags — which is why bulk delivery usually wins for anything over a small patch.",
      },
      {
        q: "Should I calculate gravel in tons or cubic yards?",
        a: "Cubic yards measure volume (how much space it fills); tons measure weight (what a delivery truck or trailer can carry). This calculator gives you both, since suppliers commonly quote either one.",
      },
      {
        q: "What is pea gravel, and does this calculator work for it?",
        a: "Pea gravel is small, rounded, pea-sized stone often used for pathways and drainage. Yes — the volume math is the same regardless of stone size, though very fine or very coarse gravel can pack slightly differently.",
      },
      {
        q: "Does this calculator include compaction?",
        a: "This estimates loose, spread volume. Gravel compacts roughly 10–15% once tamped, which is part of why we build in a waste allowance rather than have you buy the bare minimum.",
      },
      {
        q: "How much does a cubic yard of gravel weigh?",
        a: "Around 2,700 lbs (roughly 1.35 tons), though it varies by stone type and moisture content. Use this to sanity-check delivery truck capacity or trailer weight limits.",
      },
      {
        q: "What's the difference between crushed rock and gravel?",
        a: "Crushed rock has sharp, angular edges from being mechanically broken; gravel is typically naturally rounded from water or weathering. Crushed rock generally locks together and compacts better, which is why it's often preferred as a driveway base.",
      },
    ],
    related: ["fence-calculator", "mulch-calculator"],
  },
  {
    slug: "sod-calculator",
    name: "Sod Calculator",
    category: "Yard & Landscape",
    intro:
      "Work out how much sod and how many pallets you need for a new lawn — just enter the area you're covering.",
    formula: "sod",
    diagramType: "area-only",
    fields: [
      { key: "length", label: "Length", unit: "ft", placeholder: "30" },
      { key: "width", label: "Width", unit: "ft", placeholder: "20" },
    ],
    params: { wasteFactor: 0.05, sqFtPerPallet: 450 },
    howItWorks: {
      formula:
        "Length × width gives the area to cover. We add a 5% waste allowance for cutting and fitting around edges and obstacles, then divide by a standard pallet's coverage to get the pallet count.",
      example:
        "Example: a 30×20 ft yard is 600 sq ft — about 630 sq ft with waste — which comes to 2 standard pallets at roughly 450 sq ft per pallet.",
    },
    infoItems: [
      {
        title: "How do I measure an irregular yard?",
        body: "Break the yard into rectangles (a main section plus side strips), measure each one separately, and add the areas together before entering the total.",
      },
      {
        title: "Sod vs. seed",
        body: "Sod gives an instant, mature-looking lawn but costs more upfront. Seed is cheaper and can match the sod already on your property more precisely, but takes weeks to establish and needs consistent watering.",
      },
    ],
    faq: [
      {
        q: "How much sod do I need for my yard?",
        a: "Measure your yard's length and width in feet and enter them above. For irregular shapes, break the yard into rectangles, measure each, and add the totals together.",
      },
      {
        q: "How many pallets of sod do I need?",
        a: "A standard pallet covers roughly 450 sq ft, though this varies by supplier — some cut pallets to cover 400 or 500 sq ft. Confirm your supplier's exact pallet coverage before finalizing your order.",
      },
      {
        q: "How much does sod cost?",
        a: "Sod is usually priced per pallet or per square foot, and pricing varies a lot by grass type and region. This calculator gives you the exact area and pallet count to request accurate pricing from a local supplier.",
      },
      {
        q: "How do I measure my yard for sod installation?",
        a: "Walk the perimeter with a tape measure or measuring wheel, breaking irregular shapes into simple rectangles. Measure twice — sod is bought in whole pallets, so being short means a second delivery trip.",
      },
      {
        q: "How much sod is on a pallet?",
        a: "Typically 450 sq ft, though this ranges roughly 400–500 sq ft depending on the supplier and grass type. Always confirm with your specific supplier since it affects how many pallets you'll need.",
      },
      {
        q: "Does this calculator include waste for cutting and fitting?",
        a: "Yes — a 5% allowance is built in for trimming around curves, beds, and edges, which is lower than mulch or gravel since sod pieces are typically cut to fit rather than compacted.",
      },
      {
        q: "When's the best time to lay sod?",
        a: "Early fall or spring is usually best, when temperatures are moderate and rainfall is more consistent, giving roots time to establish before extreme heat or cold.",
      },
    ],
    related: ["pine-straw-calculator", "mulch-calculator"],
  },
  {
    slug: "pine-straw-calculator",
    name: "Pine Straw Calculator",
    category: "Yard & Landscape",
    intro:
      "Find out how many bales of pine straw you need to cover a bed — enter the area you're mulching.",
    formula: "pine-straw",
    diagramType: "area-only",
    fields: [
      { key: "length", label: "Length", unit: "ft", placeholder: "20" },
      { key: "width", label: "Width", unit: "ft", placeholder: "15" },
    ],
    params: { wasteFactor: 0.1, sqFtPerBale: 50 },
    howItWorks: {
      formula:
        "Length × width gives the area to cover. We add a 10% waste allowance, then divide by a standard bale's coverage at typical spread thickness to get the bale count.",
      example:
        "Example: a 20×15 ft bed is 300 sq ft — about 330 sq ft with waste — which comes to 7 bales at roughly 50 sq ft of coverage per bale.",
    },
    infoItems: [
      {
        title: "How deep should pine straw be?",
        body: "2–3 inches is standard, similar to wood mulch. Longleaf pine straw compresses less than loblolly, so it can look fuller at a slightly shallower depth.",
      },
      {
        title: "Pine straw vs. wood mulch",
        body: "Pine straw breaks down slower, doesn't float away in heavy rain as easily, and is often preferred around acid-loving plants. Wood mulch usually covers a bit more area per dollar.",
      },
    ],
    faq: [
      {
        q: "How many bales of pine straw do I need?",
        a: "Measure your bed's length and width in feet and enter them above. Most standard bales cover roughly 50 sq ft at a typical 2–3 inch spread depth.",
      },
      {
        q: "How much area does one bale of pine straw cover?",
        a: "About 50 sq ft at standard thickness, though this varies by bale size and how thick you spread it — some regional bale sizes cover closer to 35–40 sq ft.",
      },
      {
        q: "How deep should pine straw be spread?",
        a: "2–3 inches is typical. Much deeper than that and it can mat down and block water from reaching the soil.",
      },
      {
        q: "What's the difference between pine straw and mulch?",
        a: "Pine straw is dried pine needles, baled and spread as a ground cover, while \"mulch\" more commonly refers to shredded or chipped wood. Both serve the same purpose — moisture retention and weed suppression — but differ in look, cost, and how often they need replacing.",
      },
      {
        q: "How often do I need to replace pine straw?",
        a: "Every 6–12 months for most beds, since pine straw breaks down and fades faster than wood mulch, especially in humid climates.",
      },
      {
        q: "Does pine straw work as well as wood mulch for weed control?",
        a: "Yes, when applied at a full 2–3 inch depth. Thin, patchy spreading is the main reason pine straw underperforms on weed suppression — not the material itself.",
      },
    ],
    related: ["mulch-calculator", "sod-calculator"],
  },
  {
    slug: "fence-calculator",
    name: "Fence Calculator",
    category: "Yard & Landscape",
    intro:
      "Get a materials count for a new fence line — enter the total run length, how far apart you want posts, and how many gates you're including.",
    formula: "fence",
    diagramType: "fence",
    fields: [
      { key: "length", label: "Fence length", unit: "ft", placeholder: "100" },
      { key: "postSpacing", label: "Post spacing", unit: "ft", placeholder: "8" },
      { key: "gates", label: "Number of gates", unit: "count", placeholder: "1" },
    ],
    params: { railsPerPanel: 3 },
    howItWorks: {
      formula:
        "We divide the total fence length by your post spacing to get the number of panels, add one extra post to close the run, then add an extra post per gate opening. Rails are panels × rails-per-panel (3 is standard for a 6 ft privacy fence).",
      example:
        "Example: a 100 ft run at 8 ft spacing with 1 gate needs 15 posts, 12 panels, and 36 rails.",
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
        a: "At standard 8 ft spacing, a 100 ft straight run needs about 15 posts including the closing post, before accounting for corners or gates. Enter your exact spacing and gate count above for a precise number.",
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
      {
        q: "How much concrete do I need per fence post?",
        a: "A common rule of thumb is one 50 lb bag of concrete mix per standard post hole (roughly 8–10 inches wide, 24 inches deep). Larger posts or deeper holes in wind-prone areas may need two bags.",
      },
      {
        q: "What's the standard post spacing for a wood privacy fence?",
        a: "8 ft center-to-center is the most common spacing for wood privacy fencing. Going wider saves on posts but puts more stress on each panel; going tighter adds cost but more rigidity.",
      },
      {
        q: "Does chain link fence use the same post spacing as wood?",
        a: "Chain link often runs slightly wider, around 10 ft spacing, since the mesh fabric doesn't need panel-by-panel support the way solid wood panels do.",
      },
    ],
    related: ["gravel-calculator", "deck-stain-calculator"],
  },
  {
    slug: "drywall-calculator",
    name: "Drywall Calculator",
    category: "Walls",
    intro:
      "Work out how many sheets of drywall (also called sheetrock or wallboard) you need for a room — enter your wall perimeter, ceiling height, and the total area taken up by doors and windows.",
    formula: "wall-area",
    diagramType: "wall-area",
    fields: [
      { key: "perimeter", label: "Wall perimeter", unit: "ft", placeholder: "40" },
      { key: "height", label: "Ceiling height", unit: "ft", placeholder: "8" },
      { key: "openings", label: "Doors & windows", unit: "sq ft", placeholder: "40" },
    ],
    params: { wasteFactor: 0.1, sqFtPerSheet: 32 },
    howItWorks: {
      formula:
        "Perimeter × height gives total wall area, minus your door/window openings. We add a 10% waste allowance for cuts and mistakes, then divide by a standard 4x8 ft (32 sq ft) sheet.",
      example:
        "Example: a room with a 40 ft wall perimeter, 8 ft ceilings, and 40 sq ft of openings needs 280 sq ft of drywall — 308 sq ft with waste — which is 10 standard sheets.",
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
        a: "Yes — they're different names for the same gypsum board product. \"Sheetrock\" is technically a USG brand name that became generic, similar to how people say \"Kleenex.\" This calculator's math works the same regardless of which name your project uses.",
      },
      {
        q: "How much waste should I plan for on drywall?",
        a: "10% is standard for a simple rectangular room. Bump it up toward 15–20% for rooms with lots of corners, angles, or a ceiling with fixtures cut into it.",
      },
      {
        q: "Do I need extra drywall for the ceiling?",
        a: "Yes, calculate it separately — ceiling area is length × width of the room floor, not part of the wall perimeter calculation above.",
      },
      {
        q: "How much does drywall repair cost?",
        a: "Repair cost depends on the hole size, whether it's a simple patch or a full sheet replacement, and local labor rates. A small nail-hole patch is largely just compound and time; a full section replacement approaches new-install cost for that area.",
      },
      {
        q: "How much joint compound (mud) do I need?",
        a: "A rough rule of thumb is about one gallon of pre-mixed joint compound per 100 sq ft of drywall for a standard three-coat finish — more for heavily textured or hand-taped work.",
      },
      {
        q: "What thickness of drywall should I use?",
        a: "1/2 inch is standard for most interior walls. 5/8 inch is common for ceilings (less sagging) and is often required by code for fire-rated walls, like those shared with a garage.",
      },
      {
        q: "How many screws do I need per sheet of drywall?",
        a: "A common rule of thumb is about 32 screws per 4x8 sheet on studs spaced 16 inches apart — roughly one screw every 12 inches along each stud line.",
      },
    ],
    related: ["sheetrock-calculator", "paint-calculator"],
  },
  {
    slug: "sheetrock-calculator",
    name: "Sheetrock Calculator",
    category: "Walls",
    intro:
      "Work out how many sheets of Sheetrock you need for a room — enter your wall perimeter, ceiling height, and the total area taken up by doors and windows.",
    formula: "wall-area",
    diagramType: "wall-area",
    fields: [
      { key: "perimeter", label: "Wall perimeter", unit: "ft", placeholder: "40" },
      { key: "height", label: "Ceiling height", unit: "ft", placeholder: "8" },
      { key: "openings", label: "Doors & windows", unit: "sq ft", placeholder: "40" },
    ],
    params: { wasteFactor: 0.1, sqFtPerSheet: 32 },
    howItWorks: {
      formula:
        "Perimeter × height gives total wall area, minus your door/window openings. We add a 10% waste allowance for cuts and mistakes, then divide by a standard 4x8 ft (32 sq ft) sheet.",
      example:
        "Example: a room with a 40 ft wall perimeter, 8 ft ceilings, and 40 sq ft of openings needs 280 sq ft of Sheetrock — 308 sq ft with waste — which is 10 standard sheets.",
    },
    infoItems: [
      {
        title: "What makes Sheetrock different?",
        body: "Sheetrock is USG's trademarked brand name for gypsum board — the underlying product and installation math are the same as any standard drywall.",
      },
      {
        title: "Standard sheet sizes",
        body: "4x8 ft (32 sq ft) is most common. 4x10 and 4x12 sheets are available for taller walls with fewer horizontal seams.",
      },
    ],
    faq: [
      {
        q: "How many sheets of Sheetrock do I need for my room?",
        a: "Enter your wall perimeter, ceiling height, and total door/window area above. For a typical 12x12 room with 8 ft ceilings, expect around 12–14 sheets including waste.",
      },
      {
        q: "Does Lowe's have a Sheetrock calculator?",
        a: "Some retailers offer basic calculators tied to their own inventory and sheet sizes. This one works the same way regardless of which store or brand you're buying from.",
      },
      {
        q: "Does Home Depot sell Sheetrock by the sheet?",
        a: "Most home improvement stores sell gypsum board by the individual sheet as well as in bulk pallets, in standard 4x8 ft sizes and a few larger options.",
      },
      {
        q: "What is USG Sheetrock, and is it different from regular drywall?",
        a: "USG is the manufacturer that owns the Sheetrock trademark — it's a brand name, not a different product category. Generic drywall from other manufacturers uses the same gypsum-core construction.",
      },
      {
        q: "How much does Sheetrock cost per sheet?",
        a: "Pricing depends on thickness, moisture resistance, and fire rating, and varies by region and retailer. This calculator gives you the exact sheet count so you can get an accurate quote from your supplier.",
      },
      {
        q: "How do I estimate Sheetrock joint compound needed?",
        a: "A rough rule of thumb is about one gallon of pre-mixed compound per 100 sq ft of Sheetrock for a standard finish — more if the walls are heavily textured.",
      },
      {
        q: "Is Sheetrock heavier than standard drywall?",
        a: "Weight depends on thickness and moisture/fire-rated variants, not the brand name itself — a 5/8 inch fire-rated sheet from any manufacturer will weigh noticeably more than a standard 1/2 inch sheet.",
      },
    ],
    related: ["drywall-calculator", "paint-calculator"],
  },
  {
    slug: "paint-calculator",
    name: "Paint Calculator",
    category: "Painting & Finishing",
    intro:
      "Find out how many gallons of paint you need — enter your wall perimeter, ceiling height, how many coats, and how much space doors and windows take up.",
    formula: "paint",
    diagramType: "wall-area",
    fields: [
      { key: "perimeter", label: "Wall perimeter", unit: "ft", placeholder: "40" },
      { key: "height", label: "Ceiling height", unit: "ft", placeholder: "8" },
      { key: "openings", label: "Doors & windows", unit: "sq ft", placeholder: "40" },
      { key: "coats", label: "Number of coats", unit: "coats", placeholder: "2" },
    ],
    params: { coveragePerGallon: 350, defaultCoats: 2 },
    howItWorks: {
      formula:
        "Perimeter × height gives total wall area, minus your door/window openings. That area is multiplied by your number of coats, then divided by a standard coverage rate, rounded up to the nearest quart.",
      example:
        "Example: a room with a 40 ft wall perimeter, 8 ft ceilings, 40 sq ft of openings, and 2 coats needs 560 sq ft of total coverage — about 1.75 gallons at 350 sq ft/gallon.",
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
        q: "How many square feet does a gallon of paint cover?",
        a: "About 350–400 sq ft per coat on a smooth, primed surface — less on textured walls, unprimed drywall, or when covering a much darker existing color.",
      },
      {
        q: "Do I need to paint the ceiling too?",
        a: "This calculator covers walls only. Ceilings usually take a separate flat paint and should be calculated using the room's floor area (length × width).",
      },
      {
        q: "Does this calculator work for Behr or Benjamin Moore paint?",
        a: "Yes — coverage rates are similar across most quality mid-to-premium brands. For an exact figure, check the coverage number printed on your specific can, since it can vary by product line.",
      },
      {
        q: "How much paint do I need for a whole house exterior?",
        a: "The same wall-area math applies, but exterior surfaces like stucco or wood siding are more textured and porous than interior drywall, which can lower real coverage by 20–30% below the can's stated rate.",
      },
      {
        q: "Should I buy extra paint for touch-ups?",
        a: "A quart is usually enough. This calculator already rounds up to the nearest quart increment, so you'll typically have a little extra for small touch-ups.",
      },
      {
        q: "How many coats of paint do I actually need?",
        a: "2 coats is standard for a color change or fresh drywall. A single coat can work for a refresh in the same color family over a clean, previously painted surface.",
      },
      {
        q: "Do I need primer as well as paint?",
        a: "Primer is recommended on new drywall, bare wood, or when making a big color change (especially light over dark). Skipping it on those surfaces often means needing an extra coat of paint anyway.",
      },
    ],
    related: ["drywall-calculator", "flooring-calculator"],
  },
  {
    slug: "deck-stain-calculator",
    name: "Deck Stain Calculator",
    category: "Painting & Finishing",
    intro:
      "Find out how many gallons of stain you need for a deck or fence — enter the surface area and how many coats you're applying.",
    formula: "deck-stain",
    diagramType: "area-only",
    fields: [
      { key: "length", label: "Length", unit: "ft", placeholder: "16" },
      { key: "width", label: "Width", unit: "ft", placeholder: "12" },
      { key: "coats", label: "Number of coats", unit: "coats", placeholder: "2" },
    ],
    params: { coveragePerGallon: 200, defaultCoats: 2 },
    howItWorks: {
      formula:
        "Length × width gives the surface area, multiplied by your number of coats. We use a 200 sq ft/gallon coverage rate — lower than paint, since stain soaks into porous, rough-sawn wood — and round up to the nearest quart.",
      example:
        "Example: a 16×12 ft deck with 2 coats needs 384 sq ft of total coverage, which comes to 2 gallons at 200 sq ft/gallon.",
    },
    infoItems: [
      {
        title: "New wood vs. weathered wood",
        body: "Fresh, rough-sawn lumber is more porous and soaks up more stain per square foot than older, weathered decking — budget extra on a brand-new deck.",
      },
      {
        title: "Solid vs. semi-transparent stain",
        body: "Solid stain sits more like paint and typically covers less per gallon. Semi-transparent and clear sealers soak in further and often cover more area per gallon.",
      },
    ],
    faq: [
      {
        q: "How much deck stain do I need?",
        a: "Enter your deck's length and width and the number of coats above. A 16×12 ft deck at 2 coats needs about 2 gallons at a standard 200 sq ft/gallon coverage rate.",
      },
      {
        q: "How much does a gallon of stain cover?",
        a: "Roughly 200 sq ft per coat on rough-sawn decking — less than paint, since stain soaks into the wood instead of sitting on top of it.",
      },
      {
        q: "Can I use this calculator for a fence instead of a deck?",
        a: "Yes — enter your fence's total surface area (height × length of the boards) the same way you would a deck. The coverage math is the same for both.",
      },
      {
        q: "How many coats of stain does a deck need?",
        a: "2 coats is standard for a solid, even finish. A single coat can work for a light refresh on a deck that already has stain in reasonably good condition.",
      },
      {
        q: "Does new wood need more stain than weathered wood?",
        a: "Yes — fresh, rough-sawn lumber is more porous and absorbs more stain per square foot. Weathered wood that's been sealed before generally needs less.",
      },
      {
        q: "Does solid stain cover less than semi-transparent stain?",
        a: "Generally yes. Solid stain applies more like paint and sits on the surface, while semi-transparent stain soaks in further — solid often needs closer to 150 sq ft/gallon rather than 200+.",
      },
      {
        q: "How long should I wait before staining a new deck?",
        a: "Most manufacturers recommend waiting 30–90 days after installation for new pressure-treated lumber to dry out enough to properly absorb stain — check your specific lumber and stain product's guidance.",
      },
    ],
    related: ["paint-calculator", "fence-calculator"],
  },
  {
    slug: "flooring-calculator",
    name: "Flooring Calculator",
    category: "Flooring",
    intro:
      "Work out how many boxes of flooring you need for a room — enter your room's dimensions and we'll handle the waste allowance for cuts and layout.",
    formula: "flooring",
    diagramType: "area-only",
    fields: [
      { key: "length", label: "Room length", unit: "ft", placeholder: "12" },
      { key: "width", label: "Room width", unit: "ft", placeholder: "10" },
    ],
    params: { wasteFactor: 0.1, sqFtPerBox: 20 },
    howItWorks: {
      formula:
        "Length × width gives the room's floor area. We add a 10% waste allowance for cuts and fitting, then divide by a standard box's coverage — check your specific product's box, since coverage varies by material.",
      example:
        "Example: a 12×10 ft room is 120 sq ft — about 132 sq ft with waste — which comes to 7 boxes at a typical 20 sq ft per box.",
    },
    infoItems: [
      {
        title: "Coverage varies by material",
        body: "20 sq ft per box is a reasonable middle estimate for laminate and vinyl plank, but boxes range roughly 18–24 sq ft. Always check the actual coverage printed on your product's box.",
      },
      {
        title: "Pattern layouts need more waste",
        body: "Diagonal, herringbone, or other angled layouts create more offcuts than a straight install — plan for 15–20% waste instead of the standard 10%.",
      },
    ],
    faq: [
      {
        q: "How do I calculate square footage for flooring?",
        a: "Measure your room's length and width in feet and multiply them together. For rooms with alcoves or irregular shapes, break the space into rectangles, calculate each separately, and add them up.",
      },
      {
        q: "How much extra flooring should I buy for waste?",
        a: "10% is standard for a straightforward rectangular room installed straight. Bump that up to 15–20% for diagonal layouts, herringbone patterns, or rooms with a lot of cuts around corners and fixtures.",
      },
      {
        q: "Does this work for hardwood, laminate, vinyl, and tile?",
        a: "Yes, the area and waste math is the same across materials — what changes is the coverage per box or per unit, which you'll find printed on your specific product's packaging.",
      },
      {
        q: "How many boxes of flooring do I need?",
        a: "Take your total area with waste included and divide by your product's stated coverage per box. This calculator uses a 20 sq ft/box estimate by default — adjust based on what your product's box actually states.",
      },
      {
        q: "Do I need extra material for diagonal or herringbone patterns?",
        a: "Yes — these layouts create more angled offcuts than a straight installation. Plan for 15–20% waste instead of the standard 10% used for straight layouts.",
      },
      {
        q: "Should I measure room by room or the whole house at once?",
        a: "Measure room by room and add up the totals, since flooring type, transition strips, and waste needs often differ between rooms — especially where flooring changes at a doorway.",
      },
    ],
    related: ["drywall-calculator", "paint-calculator"],
  },
];

export const sourceNote = SOURCE_NOTE;

export function getCalculatorBySlug(slug) {
  return calculators.find((c) => c.slug === slug);
}
