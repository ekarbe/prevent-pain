import { ArrowRight } from "lucide-react";
import { prevent } from "../content/index.js";
import { pick, useLang, useT } from "../i18n/lang.js";
import ExerciseCard from "../components/ExerciseCard.jsx";
import Link from "../components/Link.jsx";
import Sources from "../components/Sources.jsx";

// Staying injury-free: the single-run rule, two short strength sessions a week, and a risk check.
export default function Prevent({ route }) {
  const t = useT();
  const lang = useLang();
  const p = pick(prevent, lang);

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-4 pt-3">
      <h1 tabIndex={-1} className="page-title">
        {p.title}
      </h1>
      <p className="lead">{p.lead}</p>

      <section className="card flex flex-col gap-2 border border-accent p-4 text-[15px]">
        <h2 className="font-display text-[22px] leading-tight">
          {p.ruleTitle}
        </h2>
        <p className="text-[17px] font-bold">{p.rule}</p>
        <p className="text-ink-2">{p.ruleNote}</p>
      </section>

      <section className="sec">
        <h2 className="sec-title">{p.strengthTitle}</h2>
        <p className="text-[15px]">{p.strength}</p>
        {prevent.blocks.map((block) => (
          <div key={block.id} className="flex flex-col gap-2.5">
            <h3 className="mt-2 font-display text-xl leading-tight">
              {p.blocks[block.id].title}
            </h3>
            <p className="text-[15px] text-ink-2">{p.blocks[block.id].note}</p>
            {block.exercises.map((id) => (
              <ExerciseCard key={id} id={id} />
            ))}
          </div>
        ))}
      </section>

      <section className="sec">
        <h2 className="sec-title">{p.risksTitle}</h2>
        <p className="text-[15px]">{p.risksLead}</p>
        <ul className="card flex flex-col divide-y divide-line">
          {p.risks.map((r) => (
            <li
              key={r.q}
              className="flex flex-col gap-1 px-3.5 py-3 text-[15px]"
            >
              <strong>{r.q}</strong>
              <span>
                <span className="mr-1 font-bold text-accent">{t.ifYes}:</span>
                {r.a}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {p.topics.map((topic) => (
        <section key={topic.title} className="sec">
          <h2 className="sec-title text-[20px]">{topic.title}</h2>
          <p className="text-[15px]">{topic.text}</p>
        </section>
      ))}

      <Link
        to={{ ...route, screen: "region" }}
        className="card flex min-h-14 items-center justify-between gap-3 p-3.5 text-[15px] font-bold text-accent"
      >
        {t.preventStart}
        <ArrowRight className="size-5 flex-none" aria-hidden="true" />
      </Link>
      <Sources ids={prevent.sources} />
    </div>
  );
}
