import { useState } from "react";
import { Share2, TriangleAlert } from "lucide-react";
import {
  causes,
  exercises,
  findSpot,
  links,
  regionById,
  sources,
  sourceUrl,
  tests,
} from "../content/index.js";
import { pick, useLang, useT } from "../i18n/lang.js";
import { rankChain, weekPlan } from "../lib/rank.js";
import Note from "../components/Note.jsx";
import PainScale from "../components/PainScale.jsx";
import ExerciseCard from "../components/ExerciseCard.jsx";
import { ChainStrip, SuspectCard, TestAnswer } from "../components/Chain.jsx";
import Link from "../components/Link.jsx";

function SectionTitle({ n, children }) {
  return (
    <h2 className="sec-title">
      {n ? <span className="sec-num">{n}</span> : null}
      {children}
    </h2>
  );
}

function Sources({ ids }) {
  const t = useT();
  return (
    <section className="sec">
      <h2 className="sec-title text-[19px]">{t.sources}</h2>
      <ol className="flex list-decimal flex-col gap-2 pl-5 text-[13px] leading-[1.45] text-ink-2">
        {ids.map((id) => {
          const s = sources[id];
          return (
            <li key={id} lang={s.lang ?? "en"}>
              <a
                href={sourceUrl(s)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline decoration-1 underline-offset-2"
              >
                {s.who} ({s.year}). {s.title}.
              </a>{" "}
              <i>{s.where}</i>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function Refer({ cause, eyebrow, route }) {
  const t = useT();
  const lang = useLang();
  const c = pick(cause, lang);
  const today = cause.urgency === "today";
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-4">
      <p className="eyebrow">{eyebrow}</p>
      <div className="grid size-[52px] place-items-center rounded-full bg-stop-soft text-stop">
        <TriangleAlert className="size-7" aria-hidden="true" />
      </div>
      <h1 tabIndex={-1} className="page-title">
        {today ? t.referToday : t.referSoon}
      </h1>
      <p className="lead">{t.referLead}</p>
      <div className="card flex flex-col gap-2 p-4 text-[15px]">
        <p className="font-display text-[19px] leading-tight">{c.title}</p>
        <p className="text-[13px] text-ink-2">
          <span className="mr-1 font-bold tracking-[0.03em]">{t.medName}</span>
          {c.name}
        </p>
        <p>{c.about}</p>
      </div>
      <Note tone={today ? "stop" : "warn"}>
        <span className="label">{t.meanwhile}</span> {c.meanwhile}
      </Note>
      <Link
        to={{ ...route, screen: "causes", cause: null }}
        className="btn btn-ghost"
      >
        {t.referBack}
      </Link>
      <Sources ids={cause.sources} />
    </div>
  );
}

export default function Plan({ route, go, notify }) {
  const t = useT();
  const lang = useLang();
  const [announce, setAnnounce] = useState("");
  const cause = causes[route.cause];
  const region = regionById[route.region];
  const spot = findSpot(route.region, route.spot);
  const regionName = pick(region, lang).name;
  const eyebrow = `${regionName} · ${pick(spot, lang).name}`;

  if (cause.kind === "refer")
    return <Refer cause={cause} eyebrow={eyebrow} route={route} />;

  const c = pick(cause, lang);
  const results = route.tests;
  const answer = (testId, result) => {
    const next = { ...results };
    if (result) next[testId] = result;
    else delete next[testId];
    go({ tests: next }, { replace: true });
    setAnnounce(
      `${pick(tests[testId], lang).name}: ${t.legend[result ?? "none"]}`,
    );
  };
  const ranked = rankChain(cause.chain, results, links);
  const week = weekPlan(cause, results, links);
  const minutes = week
    .filter((it) => !it.later)
    .reduce((sum, it) => sum + exercises[it.id].min, 0);
  const anyWeak = cause.chain.some(([id]) => results[links[id].test] === "pos");
  const anyOpen = cause.chain.some(([id]) => !results[links[id].test]);

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share && window.matchMedia("(pointer: coarse)").matches) {
        await navigator.share({ title: c.name, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      notify(t.shared);
    } catch (err) {
      if (err?.name !== "AbortError") notify(t.sharedFail);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-4">
      <p className="eyebrow">{eyebrow}</p>
      <h1 tabIndex={-1} className="page-title">
        {c.name}
      </h1>
      <p role="status" aria-live="polite" className="sr-only">
        {announce}
      </p>
      <p className="lead">{c.about}</p>

      <section className="sec">
        <SectionTitle n={1}>{t.calm}</SectionTitle>
        <div className="card flex flex-col gap-2.5 p-3.5 text-[15px]">
          <div>
            <p className="label">{t.painRule}</p>
            <p>{t.ruleText}</p>
          </div>
          <PainScale />
          <p className="text-ink-2">{c.load}</p>
        </div>
        <TestAnswer
          testId="load"
          result={results.load ?? null}
          onAnswer={answer}
          posText={t.loadYes}
          negText={t.loadNo}
        />
        {cause.local.length ? (
          cause.local.map((id) => (
            <ExerciseCard
              key={id}
              id={id}
              later={(cause.later || []).includes(id)}
            />
          ))
        ) : (
          <Note>{t.noLocal}</Note>
        )}
      </section>

      <section className="sec">
        <SectionTitle n={2}>{t.chainTitle}</SectionTitle>
        <p className="lead">{t.chainLead}</p>
        <ChainStrip
          chain={cause.chain}
          regionId={region.id}
          results={results}
        />
        {ranked.map((item, i) => (
          <SuspectCard
            key={item.id}
            item={item}
            rank={i + 1}
            onAnswer={answer}
            added={week.filter((w) => w.from === item.id).length}
          />
        ))}
      </section>

      <section className="sec">
        <SectionTitle n={3}>{t.weekTitle}</SectionTitle>
        {week.length ? (
          <>
            <p className="lead">
              {minutes ? t.weekLead(minutes) : t.weekLeadRuns}
            </p>
            <ul className="card flex flex-col divide-y divide-line">
              {week.map((it) => (
                <li
                  key={it.id}
                  className="grid grid-cols-[1fr_auto_auto] items-baseline gap-2.5 px-3.5 py-[11px] text-[15px]"
                >
                  <span>{pick(exercises[it.id], lang).name}</span>
                  <span className="rounded-full bg-surface-2 px-2 py-px text-xs font-bold text-ink-2">
                    {it.from
                      ? pick(links[it.from], lang).short
                      : pick(region, lang).short}
                  </span>
                  <span className="min-w-[3.5em] text-right text-[13px] text-ink-2 tabular-nums">
                    {it.later
                      ? t.later
                      : exercises[it.id].min
                        ? `${exercises[it.id].min} ${t.min}`
                        : t.duringRuns}
                  </span>
                </li>
              ))}
            </ul>
          </>
        ) : null}
        {anyWeak ? null : <Note>{anyOpen ? t.weekEmpty : t.weekAllFine}</Note>}
        {week
          .filter((it) => it.from)
          .map((it) => (
            <ExerciseCard key={it.id} id={it.id} later={it.later} />
          ))}
        <button type="button" className="btn btn-ghost" onClick={share}>
          <Share2 className="size-[18px]" aria-hidden="true" />
          {t.share}
        </button>
      </section>

      <section className="sec">
        <h2 className="sec-title text-[19px]">{t.physioTitle}</h2>
        <ul className="flex list-disc flex-col gap-1.5 pl-5 text-[15px]">
          {t.physio.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>

      <Sources ids={cause.sources} />
    </div>
  );
}
