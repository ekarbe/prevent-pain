import { useT } from "../i18n/lang.js";

// Return-to-running checks and walk-run steps for one variant (standard, bone, calf, postpartum).
// headingLevel keeps the outline right wherever it's shown.
export default function ReturnSteps({ steps, headingLevel = 3 }) {
  const t = useT();
  const H = `h${headingLevel}`;
  return (
    <div className="flex flex-col gap-3 text-[15px]">
      <div className="card flex flex-col gap-2 p-3.5">
        <H className="font-display text-lg leading-tight">{t.gatesTitle}</H>
        <ul className="flex list-disc flex-col gap-1.5 pl-5">
          {steps.gates.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
      <div className="card flex flex-col gap-1 p-3.5">
        <H className="font-display text-lg leading-tight">{t.phasesTitle}</H>
        <ol className="flex flex-col divide-y divide-line">
          {steps.phases.map((p) => (
            <li key={p.name} className="flex flex-col gap-0.5 py-2.5">
              <strong>{p.name}</strong>
              <span>{p.what}</span>
              <span className="text-[13px] text-ink-2">
                {t.phaseNext}: {p.next}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
