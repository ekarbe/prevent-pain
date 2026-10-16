import { TriangleAlert } from "lucide-react";
import { useT } from "../i18n/lang.js";
import Note from "../components/Note.jsx";
import Link from "../components/Link.jsx";

export default function Stop({ route, back }) {
  const t = useT();
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-4 pt-3">
      <div className="grid size-[52px] place-items-center rounded-full bg-stop-soft text-stop">
        <TriangleAlert className="size-7" aria-hidden="true" />
      </div>
      <h1 tabIndex={-1} className="page-title">
        {t.stopTitle}
      </h1>
      <p className="lead">{t.stopLead}</p>
      <Note tone="stop">{t.stopUrgent}</Note>
      <div className="flex flex-col gap-2.5">
        <button type="button" className="btn" onClick={back}>
          {t.stopBack}
        </button>
        <Link to={{ ...route, screen: "region" }} className="btn btn-ghost">
          {t.stopCleared}
        </Link>
      </div>
    </div>
  );
}
