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

export const isDark = () => document.documentElement.classList.contains("dark");

export function setDark(dark) {
  document.documentElement.classList.toggle("dark", dark);
  set("theme", dark ? "dark" : "light");
}
