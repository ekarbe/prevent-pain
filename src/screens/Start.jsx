import { ArrowRight } from "lucide-react";
import { useT } from "../i18n/lang.js";
import Link from "../components/Link.jsx";

// The ticked flags live in App, so "Change my answers" reopens them as they were.
export default function Start({ route, go, ticked, setTicked }) {
  const t = useT();
  const toggle = (i) =>
    setTicked(
      ticked.includes(i) ? ticked.filter((x) => x !== i) : [...ticked, i],
    );
  const n = ticked.length;

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-4 pt-3">
      <h1 tabIndex={-1} className="page-title">
        {t.startTitle}
      </h1>
      <p className="lead">{t.startLead}</p>
      <fieldset className="flex flex-col gap-2">
        <legend className="sr-only">{t.startTitle}</legend>
        {t.flags.map((text, i) => (
          <label
            key={i}
            className="card flex cursor-pointer items-start gap-3 border border-transparent px-3.5 py-3 text-[15px] leading-snug has-checked:border-stop has-checked:bg-stop-soft"
          >
            <input
              type="checkbox"
              checked={ticked.includes(i)}
              onChange={() => toggle(i)}
              className="mt-px size-[22px] flex-none accent-stop"
            />
            <span>{text}</span>
          </label>
        ))}
      </fieldset>
      <button
        type="button"
        className={`btn ${n ? "btn-stop" : ""}`}
        onClick={() => go({ screen: n ? "stop" : "region" })}
      >
        {n ? t.startSome(n) : t.startNone}
      </button>
      <p className="fine">{t.startFine}</p>
      <Link
        to={{ ...route, screen: "prevent" }}
        className="card flex min-h-14 items-center justify-between gap-3 p-3.5 text-[15px] font-bold text-accent"
      >
        {t.startPrevent}
        <ArrowRight className="size-5 flex-none" aria-hidden="true" />
      </Link>
    </div>
  );
}
