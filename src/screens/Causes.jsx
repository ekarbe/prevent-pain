import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { causes, findSpot, regionById, warnings } from "../content/index.js";
import { pick, useLang, useT } from "../i18n/lang.js";
import Note from "../components/Note.jsx";
import Link from "../components/Link.jsx";

function CauseCard({ id, route }) {
  const t = useT();
  const lang = useLang();
  const cause = causes[id];
  const c = pick(cause, lang);
  return (
    <Link
      to={{ ...route, screen: "plan", cause: id }}
      className="card relative flex w-full flex-col gap-1.5 border border-transparent py-4 pr-11 pl-4 text-left hover:border-accent"
    >
      {cause.kind === "refer" ? (
        <span className="self-start rounded-full bg-stop-soft px-2 py-0.5 text-xs font-bold text-stop">
          {t.referBadge}
        </span>
      ) : null}
      <span className="font-display text-[19px] leading-tight">{c.title}</span>
      <span className="text-[15px] leading-snug text-ink-2">{c.desc}</span>
      <span className="text-[13px] text-ink-2">
        <span className="mr-1 font-bold tracking-[0.03em]">{t.medName}</span>
        {c.name}
      </span>
      <ChevronRight
        className="absolute top-1/2 right-3.5 size-5 -translate-y-1/2 text-accent"
        aria-hidden="true"
      />
    </Link>
  );
}

export default function Causes({ route }) {
  const t = useT();
  const lang = useLang();
  const region = regionById[route.region];
  const spot = findSpot(route.region, route.spot);
  const warning = spot.warn ? warnings[spot.warn] : null;
  const [noneOpen, setNoneOpen] = useState(false);
  const offered = spot.causes.filter((id) => causes[id]);
  const adult = offered.filter((id) => !causes[id].youth);
  const youth = offered.filter((id) => causes[id].youth);

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-4">
      <p className="eyebrow">
        {pick(region, lang).name} · {pick(spot, lang).name}
      </p>
      <h1 tabIndex={-1} className="page-title">
        {t.causesTitle}
      </h1>
      <p className="lead">{t.causesLead}</p>
      {warning ? <Note tone={warning.level}>{pick(warning, lang)}</Note> : null}
      <div className="flex flex-col gap-2.5">
        {adult.map((id) => (
          <CauseCard key={id} id={id} route={route} />
        ))}
        {youth.length ? (
          <section
            aria-labelledby="youth-title"
            className="mt-2 flex flex-col gap-2.5"
          >
            <div>
              <h2 id="youth-title" className="font-display text-xl">
                {t.youthTitle}
              </h2>
              <p className="text-[15px] text-ink-2">{t.youthLead}</p>
            </div>
            {youth.map((id) => (
              <CauseCard key={id} id={id} route={route} />
            ))}
          </section>
        ) : null}
        <button
          type="button"
          aria-expanded={noneOpen}
          onClick={() => setNoneOpen((o) => !o)}
          className="flex flex-col gap-1.5 rounded-[var(--radius-card)] border border-dashed border-line p-4 text-left"
        >
          <span className="text-[15px] font-bold">{t.none}</span>
          {noneOpen ? (
            <span className="text-[15px] leading-snug text-ink-2">
              {t.noneText}
            </span>
          ) : null}
        </button>
      </div>
    </div>
  );
}
