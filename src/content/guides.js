// Shared guides: returning to running (variants by injury type) and staying injury-free.
// Placeholder until the drafted guides are merged.
const steps = (title) => ({
  title,
  lead: "…",
  gates: ["…"],
  phases: [{ name: "…", what: "…", next: "…" }],
});
const variant = {
  en: steps("Back to running"),
  de: steps("Zurück zum Laufen"),
};

export const returnToRun = {
  sources: [],
  standard: variant,
  bone: variant,
  calf: variant,
  postpartum: variant,
};

const page = (title) => ({
  title,
  lead: "…",
  ruleTitle: "…",
  rule: "…",
  ruleNote: "…",
  strengthTitle: "…",
  strength: "…",
  blocks: { foot: { title: "…", note: "…" }, hip: { title: "…", note: "…" } },
  risksTitle: "…",
  risksLead: "…",
  risks: [{ q: "…", a: "…" }],
  topics: [{ title: "…", text: "…" }],
});

export const prevent = {
  blocks: [
    { id: "foot", exercises: ["short-foot"] },
    { id: "hip", exercises: ["split-squat"] },
  ],
  sources: [],
  en: page("Stay injury-free"),
  de: page("Verletzungen vorbeugen"),
};
