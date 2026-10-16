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

export function navigate(route, { replace = false } = {}) {
  const hash = formatHash(route);
  if (hash === window.location.hash) return;
  if (replace) {
    window.history.replaceState(null, "", hash);
    emit();
  } else {
    window.location.hash = hash;
  }
}
