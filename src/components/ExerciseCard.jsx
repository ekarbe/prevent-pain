import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { exercises } from "../content/index.js";
import { pick, useLang, useT } from "../i18n/lang.js";
import Note from "./Note.jsx";

// Nothing is requested from YouTube until the runner taps, and then only from the no-cookie domain.
function VideoEmbed({ video, name }) {
  const t = useT();
  const lang = useLang();
  const [open, setOpen] = useState(false);
  const frame = useRef(null);
  // The tapped button is replaced by the player, so focus moves to the player.
  useEffect(() => {
    if (open) frame.current?.focus();
  }, [open]);
  const v = video ? (video[lang] ?? video.en) : null;
  if (!v) return <p className="fine">{t.videoNone}</p>;

  if (open) {
    const params = new URLSearchParams({ autoplay: "1", rel: "0", hl: lang });
    if (v.start) params.set("start", String(v.start));
    if (v.end) params.set("end", String(v.end));
    return (
      <figure className="flex flex-col gap-1.5">
        <div className="aspect-video w-full overflow-hidden rounded-[var(--radius-inner)] bg-ink">
          <iframe
            ref={frame}
            src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.id)}?${params}`}
            title={t.videoTitle(name)}
            className="size-full"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <figcaption className="fine">
          {t.videoBy(v.channel || v.title)}
        </figcaption>
      </figure>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="flex min-h-16 w-full items-center gap-3 rounded-[var(--radius-inner)] border border-line bg-surface-2 px-3 py-2.5 text-left"
    >
      <span className="grid size-10 flex-none place-items-center rounded-full bg-accent text-accent-ink">
        <Play
          className="ml-0.5 size-[18px]"
          fill="currentColor"
          aria-hidden="true"
        />
      </span>
      <span className="flex flex-col">
        <strong className="text-[15px]">
          {t.video}
          <span className="sr-only">: {name}</span>
        </strong>
        <small className="text-xs text-ink-2">{t.videoNote}</small>
      </span>
    </button>
  );
}

export default function ExerciseCard({ id, later = false }) {
  const t = useT();
  const lang = useLang();
  const exercise = exercises[id];
  const x = pick(exercise, lang);
  return (
    <article className="card flex flex-col gap-2.5 p-3.5 text-[15px]">
      <header className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
        <h3 className="flex-auto font-display text-[19px] leading-tight">
          {x.name}
        </h3>
        <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[13px] font-bold text-accent tabular-nums">
          {x.dose}
        </span>
      </header>
      {later ? <Note tone="warn">{t.laterNote}</Note> : null}
      <p>{x.how}</p>
      <VideoEmbed video={exercise.video} name={x.name} />
    </article>
  );
}
