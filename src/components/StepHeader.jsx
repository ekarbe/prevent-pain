import { ChevronLeft } from "lucide-react";
import { useT } from "../i18n/lang.js";

export default function StepHeader({ step, onBack }) {
  const t = useT();
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex gap-1" aria-hidden="true">
        {[1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`h-1 flex-1 rounded-sm ${i <= step ? "bg-accent" : "bg-line"}`}
          />
        ))}
      </div>
      <div className="-ml-2.5 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex min-h-10 items-center gap-0.5 rounded-lg pr-2.5 pl-1 text-sm text-ink-2 hover:text-ink"
        >
          <ChevronLeft className="size-[18px]" aria-hidden="true" />
          {t.back}
        </button>
        <span className="text-[13px] text-ink-2">
          {t.stepOf(step, t.steps[step - 1])}
        </span>
      </div>
    </div>
  );
}
