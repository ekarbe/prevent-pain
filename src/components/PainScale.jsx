import { useT } from "../i18n/lang.js";

const zone = (n) => (n <= 3 ? "z-ok" : n <= 5 ? "z-warn" : "z-stop");

// The 0–10 pain-monitoring scale: 0–3 fine, 4–5 ease off, 6+ stop.
export default function PainScale() {
  const t = useT();
  return (
    <div role="img" aria-label={t.scaleLabel}>
      <div className="scale-bar" aria-hidden="true">
        {Array.from({ length: 11 }, (_, n) => (
          <span key={n} className={zone(n)}>
            {n}
          </span>
        ))}
      </div>
      <div
        className="mt-1 grid grid-cols-[4fr_2fr_5fr] gap-0.5 text-xs font-bold"
        aria-hidden="true"
      >
        <span className="text-ok">{t.scale[0]}</span>
        <span className="text-center whitespace-nowrap text-warn">
          {t.scale[1]}
        </span>
        <span className="text-right text-stop">{t.scale[2]}</span>
      </div>
    </div>
  );
}
