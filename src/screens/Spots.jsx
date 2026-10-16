import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { regionById } from "../content/index.js";
import { closeups } from "../figures/closeups/index.js";
import { pick, useLang, useT } from "../i18n/lang.js";
import { CloseupFigure } from "../components/Figures.jsx";

// The spot picked last per region, so going back from the cause cards keeps it selected.
const lastSpot = {};

function firstViewWith(figure, spotId) {
  return figure?.views.find((v) => figure[v].spots[spotId]) ?? figure?.views[0];
}

export default function Spots({ route, go }) {
  const t = useT();
  const lang = useLang();
  const region = regionById[route.region];
  const figure = closeups[region.id];
  const [selected, setSelected] = useState(lastSpot[region.id] ?? null);
  const [view, setView] = useState(() => firstViewWith(figure, selected));
  const names = Object.fromEntries(
    region.spots.map((s) => [s.id, pick(s, lang).name]),
  );

  const select = (spotId) => {
    lastSpot[region.id] = spotId;
    setSelected(spotId);
    if (figure && !figure[view].spots[spotId])
      setView(firstViewWith(figure, spotId));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-4 md:max-w-none">
        <h1 tabIndex={-1} className="page-title">
          {t.spotTitle(pick(region, lang).name)}
        </h1>
        <p className="lead">{figure ? t.spotLead : t.spotLeadList}</p>
      </div>
      <div className="mx-auto grid w-full max-w-xl gap-5 md:max-w-none md:grid-cols-2 md:items-start">
        {figure ? (
          <div className="flex flex-col gap-3">
            {figure.views.length > 1 ? (
              <div className="seg" role="group" aria-label={t.viewsLabel}>
                {figure.views.map((v) => (
                  <button
                    key={v}
                    type="button"
                    aria-pressed={view === v}
                    onClick={() => setView(v)}
                  >
                    {t.views[v]}
                  </button>
                ))}
              </div>
            ) : null}
            <figure className="flex flex-col items-center gap-1.5">
              <CloseupFigure
                view={figure[view]}
                selected={selected}
                onSelect={select}
                names={names}
                edges={t.edges}
              />
              <figcaption className="flex flex-col items-center gap-0.5 text-center text-[13px] text-ink-2">
                {selected ? (
                  <strong className="text-[15px] text-pain">
                    {names[selected]}
                  </strong>
                ) : null}
                <span>{pick(figure[view].caption, lang)}</span>
              </figcaption>
            </figure>
          </div>
        ) : null}
        <div className="flex flex-col gap-4 max-md:contents md:sticky md:top-4">
          <div className="flex flex-wrap gap-2 md:flex-col md:items-stretch">
            {region.spots.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`chip ${figure && !figure[view].spots[s.id] ? "opacity-70" : ""}`}
                aria-pressed={selected === s.id}
                onClick={() => select(s.id)}
              >
                <span className="key" aria-hidden="true">
                  {String.fromCharCode(97 + region.spots.indexOf(s))}
                </span>
                <span>{names[s.id]}</span>
              </button>
            ))}
          </div>
          <div className="sticky-cta">
            <button
              type="button"
              className="btn"
              disabled={!selected}
              onClick={() =>
                go({ screen: "causes", spot: selected, cause: null })
              }
            >
              {selected ? t.spotNext(names[selected]) : t.spotPick}
              {selected ? (
                <ChevronRight
                  className="size-[18px] flex-none"
                  aria-hidden="true"
                />
              ) : null}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
