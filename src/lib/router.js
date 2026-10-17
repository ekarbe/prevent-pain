// Every screen is a real page under the site's base path, pre-rendered at build time:
//   /en/               red-flag check
//   /en/check/         "get this checked first"
//   /en/where/         region picker
//   /en/topics/        everything the app covers, as links
//   /en/prevent/       how to stay injury-free
//   /en/back-to-running/   returning to running after an injury
//   /en/knee/          spot picker for a region
//   /en/knee/below-kneecap/                   cause cards
//   /en/knee/below-kneecap/patellar-tendon/?t=ktw1.sls0   plan, with self-test results
// Version 1 used the same routes after a hash (#/en/knee/…); parseHash still reads those old links.
export const LANGS = ["en", "de"];

const SCREEN_AT = {
  check: "stop",
  where: "region",
  topics: "topics",
  prevent: "prevent",
  "back-to-running": "return",
};
const SEGMENT = Object.fromEntries(
  Object.entries(SCREEN_AT).map(([segment, screen]) => [screen, segment]),
);

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

function decode(part) {
  try {
    return decodeURIComponent(part);
  } catch {
    return part;
  }
}

function parseParts(path, query) {
  const parts = path.split("/").filter(Boolean).map(decode);
  if (parts.at(-1) === "index.html") parts.pop();
  const lang = LANGS.includes(parts[0]) ? parts.shift() : null;
  const route = {
    lang,
    screen: "start",
    region: null,
    spot: null,
    cause: null,
    tests: {},
  };
  if (Object.hasOwn(SCREEN_AT, parts[0])) route.screen = SCREEN_AT[parts[0]];
  else if (parts.length) {
    [route.region, route.spot = null, route.cause = null] = parts;
    route.screen = route.cause ? "plan" : route.spot ? "causes" : "spot";
  }
  if (route.screen === "plan")
    route.tests = parseTests(new URLSearchParams(query).get("t"));
  return route;
}

function formatParts(route) {
  if (SEGMENT[route.screen]) return [route.lang, SEGMENT[route.screen]];
  const deep = { spot: 1, causes: 2, plan: 3 }[route.screen] ?? 0;
  return [route.lang, route.region, route.spot, route.cause].slice(0, deep + 1);
}

// base is the site's base path with slashes on both ends, e.g. "/prevent-pain/".
export function parsePath(pathname, search, base = "/") {
  const path = pathname.startsWith(base)
    ? pathname.slice(base.length)
    : pathname;
  return parseParts(path, search);
}

export function formatPath(route, base = "/") {
  const t = route.screen === "plan" ? formatTests(route.tests || {}) : "";
  return `${base}${formatParts(route).join("/")}/${t ? `?t=${t}` : ""}`;
}

export function parseHash(hash) {
  const raw = (hash || "").replace(/^#\/?/, "");
  const q = raw.indexOf("?");
  return q === -1
    ? parseParts(raw, "")
    : parseParts(raw.slice(0, q), raw.slice(q + 1));
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
