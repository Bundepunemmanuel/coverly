// Area x depth formula, shared by any calculator whose fields are
// length/width/depth (gravel, mulch, sod, etc. all reduce to this).
// When a calculator needs a different formula, branch on calc.slug here.
export function computeResult(calc, values) {
  const length = parseFloat(values.length);
  const width = parseFloat(values.width);
  const depthIn = parseFloat(values.depth);

  if (!length || !width || !depthIn || length <= 0 || width <= 0 || depthIn <= 0) {
    return null;
  }

  const areaSqFt = length * width;
  const depthFt = depthIn / 12;
  const volumeCuFt = areaSqFt * depthFt;
  const volumeWithWaste = volumeCuFt * (1 + calc.wasteFactor);
  const cuYards = volumeWithWaste / 27;
  const bags = Math.ceil(volumeWithWaste / calc.cuFtPerBag);
  const tons = (cuYards * calc.lbsPerCuYd) / 2000;

  return { areaSqFt, volumeCuFt, cuYards, bags, tons };
}
