// Each calculator declares a `formula` type in data.js. Add a new formula
// type here when a calculator's math doesn't fit the existing shapes.
// Every compute function returns the same shape so Calculator.js can
// render any of them generically:
//   { headline, subCopy, breakdown: [{ label, value }] }

function computeAreaDepth(calc, v) {
  const length = parseFloat(v.length);
  const width = parseFloat(v.width);
  const depthIn = parseFloat(v.depth);
  if (!length || !width || !depthIn || length <= 0 || width <= 0 || depthIn <= 0) {
    return null;
  }

  const { wasteFactor, cuFtPerBag, lbsPerCuYd } = calc.params;
  const areaSqFt = length * width;
  const volumeCuFt = areaSqFt * (depthIn / 12);
  const withWaste = volumeCuFt * (1 + wasteFactor);
  const cuYards = withWaste / 27;
  const bags = Math.ceil(withWaste / cuFtPerBag);
  const tons = (cuYards * lbsPerCuYd) / 2000;

  return {
    headline: `${cuYards.toFixed(2)} cu yd`,
    subCopy: `That's roughly ${bags} bags at ${cuFtPerBag} cu ft each, or about ${tons.toFixed(2)} tons if you're ordering bulk. Includes a ${Math.round(wasteFactor * 100)}% waste allowance.`,
    breakdown: [
      { label: "Area", value: `${areaSqFt.toFixed(1)} sq ft` },
      { label: "Volume (before waste)", value: `${volumeCuFt.toFixed(1)} cu ft` },
      { label: "Bags needed", value: bags },
      { label: "Bulk weight", value: `~${tons.toFixed(2)} tons` },
    ],
  };
}

function computeWallArea(calc, v) {
  const perimeter = parseFloat(v.perimeter);
  const height = parseFloat(v.height);
  const openings = parseFloat(v.openings) || 0;
  if (!perimeter || !height || perimeter <= 0 || height <= 0) {
    return null;
  }

  const { wasteFactor, sqFtPerSheet } = calc.params;
  const areaSqFt = Math.max(perimeter * height - openings, 0);
  const withWaste = areaSqFt * (1 + wasteFactor);
  const sheets = Math.ceil(withWaste / sqFtPerSheet);

  return {
    headline: `${sheets} sheets`,
    subCopy: `Covers about ${areaSqFt.toFixed(0)} sq ft of wall using standard 4x8 ft (${sqFtPerSheet} sq ft) sheets. Includes a ${Math.round(wasteFactor * 100)}% waste allowance for cuts and mistakes.`,
    breakdown: [
      { label: "Wall area", value: `${areaSqFt.toFixed(0)} sq ft` },
      { label: "Area with waste", value: `${withWaste.toFixed(0)} sq ft` },
      { label: "Sheets needed", value: sheets },
      { label: "Sq ft per sheet", value: sqFtPerSheet },
    ],
  };
}

function computeFence(calc, v) {
  const length = parseFloat(v.length);
  const postSpacing = parseFloat(v.postSpacing);
  const gates = parseFloat(v.gates) || 0;
  if (!length || !postSpacing || length <= 0 || postSpacing <= 0) {
    return null;
  }

  const { railsPerPanel } = calc.params;
  const panels = Math.max(Math.ceil(length / postSpacing) - gates, 0);
  const posts = Math.ceil(length / postSpacing) + 1 + gates;
  const rails = panels * railsPerPanel;

  return {
    headline: `${posts} posts`,
    subCopy: `Plan for about ${panels} fence panels and ${rails} rails at ${postSpacing} ft spacing, plus ${gates} gate opening${gates === 1 ? "" : "s"}.`,
    breakdown: [
      { label: "Fence length", value: `${length} ft` },
      { label: "Posts needed", value: posts },
      { label: "Panels needed", value: panels },
      { label: "Rails needed", value: rails },
    ],
  };
}

function computePaint(calc, v) {
  const perimeter = parseFloat(v.perimeter);
  const height = parseFloat(v.height);
  const coats = parseFloat(v.coats) || calc.params.defaultCoats;
  const openings = parseFloat(v.openings) || 0;
  if (!perimeter || !height || perimeter <= 0 || height <= 0) {
    return null;
  }

  const { coveragePerGallon } = calc.params;
  const areaSqFt = Math.max(perimeter * height - openings, 0);
  const totalCoverage = areaSqFt * coats;
  // round up to the nearest quart (0.25 gal), the usual purchase increment
  const gallonsRaw = totalCoverage / coveragePerGallon;
  const gallons = Math.ceil(gallonsRaw / 0.25) * 0.25;

  return {
    headline: `${gallons} gal`,
    subCopy: `Covers ${areaSqFt.toFixed(0)} sq ft at ${coats} coat${coats === 1 ? "" : "s"}, using a standard ${coveragePerGallon} sq ft/gallon coverage rate.`,
    breakdown: [
      { label: "Wall area", value: `${areaSqFt.toFixed(0)} sq ft` },
      { label: "Total coverage needed", value: `${totalCoverage.toFixed(0)} sq ft` },
      { label: "Coats", value: coats },
      { label: "Gallons needed", value: gallons },
    ],
  };
}

const FORMULAS = {
  "area-depth": computeAreaDepth,
  "wall-area": computeWallArea,
  fence: computeFence,
  paint: computePaint,
};

export function computeResult(calc, values) {
  const fn = FORMULAS[calc.formula];
  if (!fn) return null;
  return fn(calc, values);
}
