import { useState } from "react";
import { useT } from "../i18n/lang.js";

export default function Start({ go }) {
  const t = useT();
  const [ticked, setTicked] = useState([]);
  const toggle = (i) =>
    setTicked((cur) =>
      cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i],
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
      <div className="sticky-cta">
        <button
          type="button"
          className={`btn ${n ? "btn-stop" : ""}`}
          onClick={() => go({ screen: n ? "stop" : "region" })}
        >
          {n ? t.startSome(n) : t.startNone}
        </button>
      </div>
      <p className="fine">{t.startFine}</p>
    </div>
  );
}
