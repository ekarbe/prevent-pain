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

// The week: the cause's local exercises, then exercises from every link that tested weak. No repeats.
export function weekPlan(cause, tests, links) {
  const items = (cause.local || []).map((id) => ({ id, from: null }));
  for (const [linkId] of cause.chain || []) {
    const link = links[linkId];
    if (tests[link.test] === "pos")
      for (const id of link.exercises) items.push({ id, from: linkId });
  }
  const seen = new Set();
  return items.filter((it) => (seen.has(it.id) ? false : seen.add(it.id)));
}
