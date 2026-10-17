export { regions } from "./regions.js";
export { causes, causeList, causeFiles } from "./causes/index.js";
export { links, regionAt } from "./links.js";
export { tests } from "./tests.js";
export { exercises } from "./exercises.js";
export { sources, sourceUrl } from "./sources.js";
export { warnings } from "./warnings.js";
export { returnToRun, prevent } from "./guides.js";

import { regions } from "./regions.js";

export const regionById = Object.assign(
  Object.create(null),
  Object.fromEntries(regions.map((r) => [r.id, r])),
);

export function findSpot(regionId, spotId) {
  return regionById[regionId]?.spots.find((s) => s.id === spotId) ?? null;
}

// The card for a cause in the context of a route: the same spot when it offers that cause, otherwise
// the first spot that does.
export function causeAt(route, causeId) {
  if (findSpot(route.region, route.spot)?.causes.includes(causeId))
    return { ...route, screen: "plan", cause: causeId };
  for (const region of regions)
    for (const spot of region.spots)
      if (spot.causes.includes(causeId))
        return {
          ...route,
          screen: "plan",
          region: region.id,
          spot: spot.id,
          cause: causeId,
        };
  return null;
}
