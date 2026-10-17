import { sources, sourceUrl } from "../content/index.js";
import { useT } from "../i18n/lang.js";

export default function Sources({ ids }) {
  const t = useT();
  if (!ids?.length) return null;
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
