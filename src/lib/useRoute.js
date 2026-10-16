import { useSyncExternalStore } from "react";
import { formatHash, parseHash } from "./router.js";

// Self-test results describe the runner, not the cause, so they carry over when you switch causes.
// The plan URL is their source of truth; other screens reuse the last plan's results.
let lastTests = {};
let current = read();
const listeners = new Set();

function read() {
  const route = parseHash(window.location.hash);
  if (route.screen === "plan") lastTests = route.tests;
  return { ...route, tests: route.screen === "plan" ? route.tests : lastTests };
}

function emit() {
  current = read();
  listeners.forEach((l) => l());
}

window.addEventListener("hashchange", emit);

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useRoute() {
  return useSyncExternalStore(subscribe, () => current);
}

// Each in-app step is its own history entry that knows how many steps it is from the entry page,
// so the in-app Back button can go back through history instead of piling up new entries.
export function navigate(route, { replace = false } = {}) {
  const hash = formatHash(route);
  if (hash === window.location.hash) return;
  const { history } = window;
  if (replace) history.replaceState(history.state, "", hash);
  else history.pushState({ depth: (history.state?.depth ?? 0) + 1 }, "", hash);
  emit();
}

export const canGoBack = () => (window.history.state?.depth ?? 0) > 0;
