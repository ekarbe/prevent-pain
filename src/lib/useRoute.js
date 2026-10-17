import { useSyncExternalStore } from "react";
import { formatPath, parseHash, parsePath } from "./router.js";
import { preferredLang } from "./prefs.js";

export const BASE = import.meta.env.BASE_URL;
const browser = typeof window !== "undefined";

export const href = (route) => formatPath(route, BASE);
const here = () => window.location.pathname + window.location.search;

// Self-test results describe the runner, not the cause, so they carry over when you switch causes.
// The plan URL is their source of truth; other screens reuse the last plan's results.
let lastTests = {};
let current = null;
// The page being pre-rendered, when there is no browser address to read.
let serverRoute = null;
const listeners = new Set();

function read() {
  const route = parsePath(
    window.location.pathname,
    window.location.search,
    BASE,
  );
  if (route.screen === "plan") lastTests = route.tests;
  return { ...route, tests: route.screen === "plan" ? route.tests : lastTests };
}

// Old #/en/knee links and addresses without a language move to their page, before anything renders.
function migrate() {
  const { hash } = window.location;
  const legacy = hash.startsWith("#/");
  const route = legacy
    ? parseHash(hash)
    : parsePath(window.location.pathname, window.location.search, BASE);
  if (!legacy && route.lang) return;
  route.lang ??= preferredLang();
  window.history.replaceState(window.history.state, "", href(route));
}

function emit() {
  current = read();
  listeners.forEach((l) => l());
}

if (browser) {
  migrate();
  current = read();
  window.addEventListener("popstate", emit);
  window.addEventListener("hashchange", () => {
    migrate();
    emit();
  });
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setServerRoute(route) {
  serverRoute = route;
}

export function useRoute() {
  return useSyncExternalStore(
    subscribe,
    () => current,
    () => serverRoute ?? current,
  );
}

// Each in-app step is its own history entry that knows how many steps it is from the entry page,
// so the in-app Back button can go back through history instead of piling up new entries.
export function navigate(route, { replace = false } = {}) {
  const url = href(route);
  if (url === here()) return;
  const { history } = window;
  if (replace) history.replaceState(history.state, "", url);
  else history.pushState({ depth: (history.state?.depth ?? 0) + 1 }, "", url);
  emit();
}

export const isHere = (route) => href(route) === here();

export const canGoBack = () => (window.history.state?.depth ?? 0) > 0;
