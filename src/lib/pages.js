import { LANGS } from "./router.js";

const blank = { region: null, spot: null, cause: null, tests: {} };

// Every page the site pre-renders, in both languages.
export function allRoutes({ regions, causes }) {
  const out = [];
  for (const lang of LANGS) {
    for (const screen of [
      "start",
      "stop",
      "region",
      "topics",
      "prevent",
      "return",
    ])
      out.push({ ...blank, lang, screen });
    for (const region of regions) {
      out.push({ ...blank, lang, screen: "spot", region: region.id });
      for (const spot of region.spots) {
        const at = { ...blank, lang, region: region.id, spot: spot.id };
        out.push({ ...at, screen: "causes" });
        for (const cause of spot.causes)
          if (causes[cause]) out.push({ ...at, screen: "plan", cause });
      }
    }
  }
  return out;
}

// A cause offered at several spots has one page per spot that differ only in the small line above the
// title, so search engines get pointed at the first spot that offers it.
export function canonicalRoute(route, { regions }) {
  if (route.screen !== "plan") return { ...route, tests: {} };
  for (const region of regions)
    for (const spot of region.spots)
      if (spot.causes.includes(route.cause))
        return { ...route, region: region.id, spot: spot.id, tests: {} };
  return { ...route, tests: {} };
}
