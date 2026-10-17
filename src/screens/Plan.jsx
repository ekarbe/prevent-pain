import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Share2,
  TriangleAlert,
} from "lucide-react";
import {
  causeAt,
  causes,
  exercises,
  findSpot,
  links,
  regionById,
  returnToRun,
  tests,
  warnings,
} from "../content/index.js";
import { pick, useLang, useT } from "../i18n/lang.js";
import { rankChain, weekPlan } from "../lib/rank.js";
import Note from "../components/Note.jsx";
import PainScale from "../components/PainScale.jsx";
import ExerciseCard from "../components/ExerciseCard.jsx";
import { ChainStrip, SuspectCard, TestAnswer } from "../components/Chain.jsx";
import Link from "../components/Link.jsx";
import { href } from "../lib/useRoute.js";
import ReturnSteps from "../components/ReturnSteps.jsx";
import Sources from "../components/Sources.jsx";

function SectionTitle({ n, children }) {
  return (
    <h2 className="sec-title">
      {n ? <span className="sec-num">{n}</span> : null}
      {children}
    </h2>
  );
}

function YouthBadge() {
  const t = useT();
  return (
    <span className="self-start rounded-full bg-surface-2 px-2.5 py-0.5 text-[13px] font-bold text-ink-2">
      {t.youthBadge}
    </span>
  );
}

// Yes/no questions that send the runner to a referral card when a serious look-alike is possible.
function Exits({ cause, route }) {
  const t = useT();
  const lang = useLang();
  const exits = (cause.exits || []).filter((x) => causes[x.to]);
  if (!exits.length) return null;
  return (
    <section
      aria-labelledby="exits-title"
      className="flex flex-col gap-2 rounded-[var(--radius-card)] bg-stop-soft p-3.5 text-[15px]"
    >
      <h2
        id="exits-title"
        className="flex items-center gap-2 font-display text-lg leading-tight"
      >
        <TriangleAlert
          className="size-5 flex-none text-stop"
          aria-hidden="true"
        />
        {t.exitsTitle}
      </h2>
      <p>{t.exitsLead}</p>
      <ul className="flex flex-col divide-y divide-stop/20">
        {exits.map((x, i) => (
          <li key={`${x.to}-${i}`} className="flex flex-col gap-0.5 py-2">
            <span>{pick(x, lang)}</span>
            <Link
              to={causeAt(route, x.to)}
              className="inline-flex min-h-11 items-center gap-1 font-bold text-stop underline underline-offset-2"
            >
              {pick(causes[x.to], lang).name}
              <ChevronRight className="size-4 flex-none" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function CauseWarnings({ cause }) {
  const lang = useLang();
  return (cause.warn || [])
    .filter((id) => warnings[id])
    .map((id) => (
      <Note key={id} tone={warnings[id].level}>
        {pick(warnings[id], lang)}
      </Note>
    ));
}

function Avoid({ text }) {
  const t = useT();
  if (!text) return null;
  return (
    <Note tone="warn">
      <span className="label">{t.avoidLabel}</span> {text}
    </Note>
  );
}

// Back to running: collapsed by default, so the plan stays about calming and loading the sore spot.
function ReturnSection({ variant, lead, n, route }) {
  const t = useT();
  const lang = useLang();
  const steps = returnToRun[variant] ? pick(returnToRun[variant], lang) : null;
  if (!steps) return null;
  return (
    <section className="sec">
      <SectionTitle n={n}>{t.rtrTitle}</SectionTitle>
      <p className="lead">{lead}</p>
      <details className="group">
        <summary className="btn btn-ghost">
          <span className="group-open:hidden">{t.rtrShow}</span>
          <span className="hidden group-open:inline">{t.rtrHide}</span>
          <ChevronDown
            className="size-[18px] flex-none transition-transform group-open:rotate-180 motion-reduce:transition-none"
            aria-hidden="true"
          />
        </summary>
        <div className="mt-3 flex flex-col gap-3">
          <p className="text-[15px]">{steps.lead}</p>
          <ReturnSteps steps={steps} />
          {/* A plain link to the matching version on the guide page; the pre-rendered page scrolls to it. */}
          <a
            href={`${href({ ...route, screen: "return" })}#${variant}`}
            className="inline-flex min-h-11 items-center gap-1 text-[15px] text-accent underline underline-offset-2"
          >
            {t.rtrMore}
          </a>
        </div>
      </details>
    </section>
  );
}

function PreventLink({ route }) {
  const t = useT();
  return (
    <Link
      to={{ ...route, screen: "prevent" }}
      className="card flex min-h-14 items-center justify-between gap-3 p-3.5 text-[15px] font-bold text-accent"
    >
      {t.preventNext}
      <ArrowRight className="size-5 flex-none" aria-hidden="true" />
    </Link>
  );
}

const REFER = {
  today: { title: "referToday", tone: "stop" },
  soon: { title: "referSoon", tone: "stop" },
  routine: { title: "referRoutine", tone: "warn" },
};

function Refer({ cause, eyebrow, route }) {
  const t = useT();
  const lang = useLang();
  const c = pick(cause, lang);
  const level = REFER[cause.urgency] ?? REFER.soon;
  const tone = cause.urgency === "today" ? "stop" : "warn";
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-4">
      <p className="eyebrow">{eyebrow}</p>
      <div
        className={`grid size-[52px] place-items-center rounded-full ${level.tone === "stop" ? "bg-stop-soft text-stop" : "bg-warn-soft text-warn"}`}
      >
        <TriangleAlert className="size-7" aria-hidden="true" />
      </div>
      {cause.youth ? <YouthBadge /> : null}
      <h1 tabIndex={-1} className="page-title">
        {t[level.title]}
      </h1>
      <p className="lead">{t.referLead}</p>
      <div className="card flex flex-col gap-2 p-4 text-[15px]">
        <p className="font-display text-[19px] leading-tight">{c.title}</p>
        <p className="text-ink-2">{c.desc}</p>
        <p className="text-[13px] text-ink-2">
          <span className="mr-1 font-bold tracking-[0.03em]">{t.medName}</span>
          {c.name}
        </p>
        <p>{c.about}</p>
      </div>
      <Exits cause={cause} route={route} />
      <CauseWarnings cause={cause} />
      <Note tone={tone}>
        <span className="label">{t.meanwhile}</span> {c.meanwhile}
      </Note>
      <Avoid text={c.avoid} />
      <Link
        to={{ ...route, screen: "causes", cause: null }}
        className="btn btn-ghost"
      >
        {t.referBack}
      </Link>
      {cause.rtr && cause.rtr !== "none" ? (
        <ReturnSection
          variant={cause.rtr}
          lead={t.rtrReferLead}
          route={route}
        />
      ) : null}
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
  const stages = cause.local.map((id) => exercises[id].stage).filter(Boolean);
  const ladder = new Set(stages).size > 1;
  // On a ladder, the plan's own exercises above its first stage come in later, stage by stage.
  const stageAhead = (it) =>
    ladder &&
    !it.from &&
    !it.later &&
    exercises[it.id].stage > Math.min(...stages)
      ? exercises[it.id].stage
      : 0;
  const minutes = week
    .filter((it) => !it.later && !stageAhead(it))
    .reduce((sum, it) => sum + exercises[it.id].min, 0);
  const anyWeak = cause.chain.some(([id]) => results[links[id].test] === "pos");
  const anyOpen = cause.chain.some(([id]) => !results[links[id].test]);
  const hasChain = cause.chain.length > 0;
  const rtr = cause.rtr || "standard";
  // A card without exercises or weak links has no week to show, only the share button.
  const showWeek = week.length > 0 || hasChain;
  const weekN = hasChain ? 3 : 2;

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
      {cause.youth ? <YouthBadge /> : null}
      <h1 tabIndex={-1} className="page-title">
        {c.name}
      </h1>
      <p role="status" aria-live="polite" className="sr-only">
        {announce}
      </p>
      <p className="lead">{c.about}</p>
      <Exits cause={cause} route={route} />
      <CauseWarnings cause={cause} />

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
        <Avoid text={c.avoid} />
        <TestAnswer
          testId="load"
          result={results.load ?? null}
          onAnswer={answer}
          posText={t.loadYes}
          negText={t.loadNo}
        />
        {ladder ? <p className="text-[15px] text-ink-2">{t.ladder}</p> : null}
        {cause.local.length ? (
          cause.local.map((id) => (
            <ExerciseCard
              key={id}
              id={id}
              later={(cause.later || []).includes(id)}
              showStage={ladder}
            />
          ))
        ) : (
          <Note>{hasChain ? t.noLocal : t.noLocalNoChain}</Note>
        )}
      </section>

      {hasChain ? (
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
      ) : null}

      <section className="sec">
        {showWeek ? <SectionTitle n={weekN}>{t.weekTitle}</SectionTitle> : null}
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
                      : stageAhead(it)
                        ? t.stageShort(stageAhead(it))
                        : exercises[it.id].min
                          ? `${exercises[it.id].min} ${t.min}`
                          : t.duringRuns}
                  </span>
                </li>
              ))}
            </ul>
          </>
        ) : null}
        {anyWeak || !hasChain ? null : (
          <Note>{anyOpen ? t.weekEmpty : t.weekAllFine}</Note>
        )}
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

      {rtr === "none" ? null : (
        <ReturnSection
          variant={rtr}
          lead={t.rtrPlanLead}
          n={showWeek ? weekN + 1 : weekN}
          route={route}
        />
      )}

      <section className="sec">
        <h2 className="sec-title text-[19px]">{t.physioTitle}</h2>
        <ul className="flex list-disc flex-col gap-1.5 pl-5 text-[15px]">
          {t.physio.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <PreventLink route={route} />
      </section>

      <Sources ids={cause.sources} />
    </div>
  );
}
