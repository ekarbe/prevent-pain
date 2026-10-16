// How a weak link's weight (1–3) changes with its self-test result.
export const FACTOR = { pos: 2, none: 1, neg: 0.2 };

// Ranked chain for a cause: weak links first, untested by weight, links that tested fine last.
export function rankChain(chain, tests, links) {
  return chain
    .map(([id, weight, why], i) => ({
      id,
      weight,
      why,
      i,
      result: tests[links[id].test] ?? "none",
    }))
    .sort(
      (a, b) =>
        b.weight * FACTOR[b.result] - a.weight * FACTOR[a.result] || a.i - b.i,
    );
}

// The exercises a weak link adds for this cause. A cause can swap them (`linkExercises`), for
// example when its own local exercises already train that link.
export const linkExercisesFor = (cause, linkId, links) =>
  cause.linkExercises?.[linkId] ?? links[linkId].exercises;

// The week: the cause's local exercises, then exercises from every link that tested weak. No repeats.
// Exercises the cause lists under `later` (e.g. stretching a freshly strained muscle) are marked to
// start once the pain has settled.
export function weekPlan(cause, tests, links) {
  const later = new Set(cause.later || []);
  const items = (cause.local || []).map((id) => ({
    id,
    from: null,
    later: later.has(id),
  }));
  for (const [linkId] of cause.chain || []) {
    if (tests[links[linkId].test] !== "pos") continue;
    for (const id of linkExercisesFor(cause, linkId, links))
      items.push({ id, from: linkId, later: later.has(id) });
  }
  const seen = new Set();
  return items.filter((it) => (seen.has(it.id) ? false : seen.add(it.id)));
}
