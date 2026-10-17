import { useEffect, useRef } from "react";
import { links, regionAt, tests } from "../content/index.js";
import { pick, useLang, useT } from "../i18n/lang.js";

// The chain at a glance: the pain in place among its weak links, in body order.
export function ChainStrip({ chain, regionId, results }) {
  const t = useT();
  const lang = useLang();
  const nodes = chain
    .map(([id]) => ({
      id,
      at: links[id].at,
      state: results[links[id].test] ?? "none",
      label: pick(links[id], lang).short,
    }))
    .concat({
      id: "pain",
      at: regionAt[regionId],
      state: "pain",
      label: t.legend.pain,
    })
    .sort((a, b) => a.at - b.at);
  const summary = nodes
    .map((n) =>
      n.state === "pain" ? n.label : `${n.label} (${t.legend[n.state]})`,
    )
    .join(", ");

  return (
    <div className="flex flex-col gap-2">
      <div
        role="img"
        aria-label={t.chainLabel(summary)}
        className="flex items-start px-1 pt-3.5 pb-1"
      >
        {nodes.map((n, i) => (
          <div key={n.id} className="contents">
            {i ? (
              <span
                aria-hidden="true"
                className={`mt-[9px] h-0.5 min-w-1 flex-[1_1_8px] ${n.state === "pain" || nodes[i - 1].state === "pain" ? "bg-ink-2" : "bg-line"}`}
              />
            ) : null}
            <span
              aria-hidden="true"
              className={`chain-node is-${n.state} flex min-w-0 flex-[0_1_4.25rem] flex-col items-center gap-1.5`}
            >
              <span className="chain-node-dot" />
              <span className="chain-node-label w-full text-center text-xs leading-tight font-bold [overflow-wrap:anywhere] text-ink-2">
                {n.label}
              </span>
            </span>
          </div>
        ))}
      </div>
      <div
        className="flex flex-wrap gap-x-3.5 gap-y-1.5 text-xs text-ink-2"
        aria-hidden="true"
      >
        <span className="inline-flex items-center gap-1.5">
          <i className="size-2.5 rounded-full border-2 border-ink-2" />
          {t.legend.none}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="size-2.5 rounded-full border-2 border-accent bg-accent" />
          {t.legend.pos}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="size-2.5 rounded-full border-2 border-dashed border-ink-2" />
          {t.legend.neg}
        </span>
      </div>
    </div>
  );
}

// Yes/no answer to a self-test, or its result with a way to redo it. Answering swaps the buttons for
// the result, so focus follows: to the result after an answer, back to the first answer after Redo.
export function TestAnswer({ testId, result, onAnswer, posText, negText }) {
  const t = useT();
  const lang = useLang();
  const test = pick(tests[testId], lang);
  const acted = useRef(false);
  const resultRef = useRef(null);
  const firstRef = useRef(null);

  useEffect(() => {
    if (!acted.current) return;
    acted.current = false;
    (result ? resultRef : firstRef).current?.focus();
  }, [result]);

  const answer = (r) => {
    acted.current = true;
    onAnswer(testId, r);
  };

  if (result) {
    return (
      <div
        ref={resultRef}
        tabIndex={-1}
        className={`flex items-center justify-between gap-2.5 rounded-[var(--radius-inner)] px-3 py-1.5 text-sm font-bold ${
          result === "pos"
            ? "bg-accent-soft text-accent"
            : "bg-surface-2 text-ink-2"
        }`}
      >
        <span>{result === "pos" ? posText : negText}</span>
        <button
          type="button"
          onClick={() => answer(null)}
          className="inline-flex min-h-11 flex-none items-center px-1 text-sm font-normal text-accent underline underline-offset-[3px]"
        >
          {t.redo}
          <span className="sr-only">: {test.name}</span>
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-2.5 rounded-[var(--radius-inner)] bg-surface-2 p-3">
      <div>
        <p className="label">{t.test}</p>
        <p>
          <strong>{test.name}.</strong> {test.how}
        </p>
      </div>
      <div
        role="group"
        aria-label={test.name}
        className="grid grid-cols-2 gap-2"
      >
        {[
          ["pos", test.pos],
          ["neg", test.neg],
        ].map(([r, label], i) => (
          <button
            key={r}
            ref={i === 0 ? firstRef : undefined}
            type="button"
            onClick={() => answer(r)}
            className="min-h-12 rounded-[var(--radius-inner)] border border-line bg-surface px-2.5 py-2 text-left text-sm leading-snug hover:border-accent"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

// One weak link: why it matters for this cause, its self-test, and what a weak result adds.
export function SuspectCard({ item, rank, onAnswer, added }) {
  const t = useT();
  const lang = useLang();
  const link = links[item.id];
  const x = pick(link, lang);
  const why = item.why ? pick(item.why, lang) : x.why;
  const state = item.result;

  return (
    <article
      className={`card flex flex-col gap-2.5 border p-3.5 text-[15px] ${
        state === "pos"
          ? "border-accent"
          : state === "neg"
            ? "border-dashed border-line shadow-none"
            : "border-transparent"
      }`}
    >
      <header className="flex items-start gap-3">
        <span
          className={`grid size-[30px] flex-none place-items-center rounded-full border-2 text-sm font-bold tabular-nums ${
            state === "pos"
              ? "border-accent bg-accent text-accent-ink"
              : state === "neg"
                ? "border-dashed border-ink-2"
                : "border-ink-2"
          }`}
        >
          {rank}
        </span>
        <div>
          <h3 className="font-display text-lg leading-tight">{x.name}</h3>
          <span className="mt-0.5 inline-flex items-center gap-1.5 text-[13px] text-ink-2">
            <span className="inline-flex gap-[3px]" aria-hidden="true">
              {[1, 2, 3].map((d) => (
                <i
                  key={d}
                  className={`size-2 rounded-full border-[1.5px] border-ink-2 ${d <= item.weight ? "bg-ink-2" : ""}`}
                />
              ))}
            </span>
            {t.likely[item.weight]}
          </span>
        </div>
      </header>
      <div>
        <p className="label">{t.why}</p>
        <p>{why}</p>
      </div>
      <TestAnswer
        testId={link.test}
        result={state === "none" ? null : state}
        onAnswer={onAnswer}
        posText={added ? t.pos(added) : t.posNone}
        negText={t.neg}
      />
    </article>
  );
}
