import { Moon, Sun } from "lucide-react";
import { useLang, useT } from "../i18n/lang.js";
import { LANGS } from "../lib/router.js";
import { setDark, useDark } from "../lib/prefs.js";
import Link from "./Link.jsx";
import Logo from "./Logo.jsx";

// The language switch links to the same page in the other language, which is also what search
// engines follow. Picking one in the app remembers it.
export default function AppBar({ route, onLang }) {
  const lang = useLang();
  const t = useT();
  const dark = useDark();

  return (
    <header className="mx-auto flex w-full max-w-3xl items-center justify-between gap-3 pt-3.5 pb-2.5">
      <Link
        to={{ ...route, screen: "start" }}
        className="flex items-center gap-2 rounded-lg font-display text-lg tracking-[-0.01em]"
      >
        <Logo className="size-[26px] text-accent" />
        Prevent Pain
      </Link>
      <div className="flex items-center gap-1.5">
        <div
          role="group"
          aria-label={t.language}
          className="flex rounded-full border border-line bg-surface p-0.5"
        >
          {LANGS.map((l) => (
            <Link
              key={l}
              to={{ ...route, lang: l }}
              replace
              onNavigate={() => onLang(l)}
              lang={l}
              hrefLang={l}
              aria-current={l === lang ? "true" : undefined}
              className={`grid min-h-11 min-w-11 place-items-center rounded-full px-2 text-[13px] font-bold tracking-[0.04em] ${
                l === lang ? "bg-accent text-accent-ink" : "text-ink-2"
              }`}
            >
              {l.toUpperCase()}
            </Link>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setDark(!dark)}
          aria-label={dark ? t.toLight : t.toDark}
          className="grid size-11 place-items-center rounded-full text-ink-2 hover:bg-surface-2 hover:text-ink"
        >
          {dark ? (
            <Sun className="size-5" aria-hidden="true" />
          ) : (
            <Moon className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
}
