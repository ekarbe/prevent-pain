import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useLang, useT } from "../i18n/lang.js";
import { LANGS } from "../lib/router.js";
import { isDark, setDark } from "../lib/prefs.js";
import Logo from "./Logo.jsx";

export default function AppBar({ onLang }) {
  const lang = useLang();
  const t = useT();
  const [dark, setDarkState] = useState(isDark);

  const toggleTheme = () => {
    setDark(!dark);
    setDarkState(!dark);
  };

  return (
    <header className="mx-auto flex w-full max-w-3xl items-center justify-between gap-3 pt-3.5 pb-2.5">
      <a
        href={`#/${lang}`}
        className="flex items-center gap-2 rounded-lg font-display text-lg tracking-[-0.01em]"
      >
        <Logo className="size-[26px] text-accent" />
        Prevent Pain
      </a>
      <div className="flex items-center gap-1.5">
        <div
          role="group"
          aria-label={t.language}
          className="flex rounded-full border border-line bg-surface p-0.5"
        >
          {LANGS.map((l) => (
            <button
              key={l}
              type="button"
              lang={l}
              aria-pressed={l === lang}
              onClick={() => onLang(l)}
              className="min-h-11 min-w-11 rounded-full px-2 text-[13px] font-bold tracking-[0.04em] text-ink-2 aria-pressed:bg-accent aria-pressed:text-accent-ink"
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={toggleTheme}
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
