import { regions } from "../content/index.js";
import { pick, useLang, useT } from "../i18n/lang.js";
import { BodyFigure } from "../components/Figures.jsx";

export default function Regions({ route, go }) {
  const t = useT();
  const lang = useLang();
  const names = Object.fromEntries(
    regions.map((r) => [r.id, pick(r, lang).name]),
  );
  const choose = (region) =>
    go({ screen: "spot", region, spot: null, cause: null });

  return (
    <div className="flex flex-col gap-4">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-4 md:max-w-none">
        <h1 tabIndex={-1} className="page-title">
          {t.regionTitle}
        </h1>
        <p className="lead">{t.regionLead}</p>
      </div>
      <div className="mx-auto grid w-full max-w-xl gap-6 md:max-w-none md:grid-cols-[minmax(0,1fr)_minmax(0,18rem)] md:items-center">
        <div className="grid grid-cols-2 gap-1.5">
          {[
            ["front", t.front],
            ["back", t.backView],
          ].map(([side, label]) => (
            <figure key={side} className="flex flex-col items-center gap-1.5">
              <BodyFigure
                side={side}
                selected={route.region}
                onSelect={choose}
                names={names}
              />
              <figcaption className="text-[13px] text-ink-2">
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 md:flex-col md:items-stretch">
          {regions.map((r, i) => (
            <button
              key={r.id}
              type="button"
              className="chip"
              aria-pressed={route.region === r.id}
              onClick={() => choose(r.id)}
            >
              <span className="key">{i + 1}</span>
              <span>{names[r.id]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
