import { useSyncExternalStore } from "react";

// Small per-device preferences. Storage can be blocked (private mode), so every access is guarded.
function get(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function set(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* preference just isn't remembered */
  }
}

export function preferredLang() {
  const saved = get("lang");
  if (saved === "en" || saved === "de") return saved;
  return (navigator.language || "").toLowerCase().startsWith("de")
    ? "de"
    : "en";
}

export const saveLang = (lang) => set("lang", lang);

const isDark = () => document.documentElement.classList.contains("dark");
const darkListeners = new Set();

// The saved scheme is applied by a script in index.html before React loads. Pre-rendered pages
// are light, so hydration starts light and switches straight after.
export function useDark() {
  return useSyncExternalStore(
    (listener) => {
      darkListeners.add(listener);
      return () => darkListeners.delete(listener);
    },
    isDark,
    () => false,
  );
}

// The phone's status and address bar follow the page background.
const paintBar = (dark) =>
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", dark ? "#0f1715" : "#f1f5f1");

export function setDark(dark) {
  document.documentElement.classList.toggle("dark", dark);
  paintBar(dark);
  set("theme", dark ? "dark" : "light");
  darkListeners.forEach((l) => l());
}
