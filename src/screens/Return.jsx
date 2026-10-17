import { returnToRun } from "../content/index.js";
import { pick, useLang, useT } from "../i18n/lang.js";
import ReturnSteps from "../components/ReturnSteps.jsx";
import Sources from "../components/Sources.jsx";

const VARIANTS = ["standard", "bone", "calf", "postpartum"];

// Coming back to running: the general version first, then the stricter or different versions.
export default function Return() {
  const t = useT();
  const lang = useLang();
  const all = VARIANTS.map((v) => ({ id: v, ...pick(returnToRun[v], lang) }));

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-4 pt-3">
      <h1 tabIndex={-1} className="page-title">
        {t.titles.return}
      </h1>
      <p className="lead">{t.meta.return}</p>
      {all.map((steps) => (
        <section key={steps.id} id={steps.id} className="sec">
          <h2 className="sec-title">{steps.title}</h2>
          <p className="text-[15px]">{steps.lead}</p>
          <ReturnSteps steps={steps} />
        </section>
      ))}
      <Sources ids={returnToRun.sources} />
    </div>
  );
}
