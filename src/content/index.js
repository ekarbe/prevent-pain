export { regions } from "./regions.js";
export { causes, causeList, causeFiles } from "./causes/index.js";
export { links, regionAt } from "./links.js";
export { tests } from "./tests.js";
export { exercises } from "./exercises.js";
export { sources, sourceUrl } from "./sources.js";
export { warnings } from "./warnings.js";

import { regions } from "./regions.js";

export const regionById = Object.fromEntries(regions.map((r) => [r.id, r]));

export function findSpot(regionId, spotId) {
  return regionById[regionId]?.spots.find((s) => s.id === spotId) ?? null;
}
