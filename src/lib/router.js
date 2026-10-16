// Hash routes, so every screen has a link that works on GitHub Pages without a 404 fallback.
//   #/en               red-flag check
//   #/en/check         "get this checked first"
//   #/en/where         region picker
//   #/en/knee          spot picker for a region
//   #/en/knee/below-kneecap                  cause cards
//   #/en/knee/below-kneecap/patellar-tendon?t=ktw1.sls0   plan, with self-test results
export const LANGS = ["en", "de"];

export function parseTests(value) {
  const out = {};
  if (!value) return out;
  for (const token of value.split(".")) {
    const m = /^([a-z0-9-]+)([01])$/.exec(token);
    if (m) out[m[1]] = m[2] === "1" ? "pos" : "neg";
  }
  return out;
}

export function formatTests(tests) {
  return Object.entries(tests)
    .filter(([, v]) => v === "pos" || v === "neg")
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => k + (v === "pos" ? "1" : "0"))
    .join(".");
}

export function parseHash(hash) {
  const raw = (hash || "").replace(/^#\/?/, "");
  const q = raw.indexOf("?");
  const path = q === -1 ? raw : raw.slice(0, q);
  const params = new URLSearchParams(q === -1 ? "" : raw.slice(q + 1));
  const parts = path
    .split("/")
    .filter(Boolean)
    .map((p) => {
      try {
        return decodeURIComponent(p);
      } catch {
        return p;
      }
    });
  const lang = LANGS.includes(parts[0]) ? parts.shift() : null;
  const route = {
    lang,
    screen: "start",
    region: null,
    spot: null,
    cause: null,
    tests: {},
  };
  if (parts[0] === "check") route.screen = "stop";
  else if (parts[0] === "where") route.screen = "region";
  else if (parts.length) {
    [route.region, route.spot = null, route.cause = null] = parts;
    route.screen = route.cause ? "plan" : route.spot ? "causes" : "spot";
  }
  if (route.screen === "plan") route.tests = parseTests(params.get("t"));
  return route;
}

export function formatHash(route) {
  const base = `#/${route.lang}`;
  switch (route.screen) {
    case "stop":
      return `${base}/check`;
    case "region":
      return `${base}/where`;
    case "spot":
      return `${base}/${route.region}`;
    case "causes":
      return `${base}/${route.region}/${route.spot}`;
    case "plan": {
      const t = formatTests(route.tests || {});
      return `${base}/${route.region}/${route.spot}/${route.cause}${t ? `?t=${t}` : ""}`;
    }
    default:
      return base;
  }
}

// The deepest valid route for the given content, so a stale or mistyped link lands somewhere sensible.
export function validate(route, { regionById, causes }) {
  const r = { ...route };
  if (!["spot", "causes", "plan"].includes(r.screen)) return r;
  const region = regionById[r.region];
  if (!region)
    return { ...r, screen: "region", region: null, spot: null, cause: null };
  const spot = region.spots.find((s) => s.id === r.spot);
  if (r.screen === "spot") return r;
  if (!spot) return { ...r, screen: "spot", spot: null, cause: null };
  if (r.screen === "causes") return r;
  if (!spot.causes.includes(r.cause) || !causes[r.cause])
    return { ...r, screen: "causes", cause: null };
  return r;
}
