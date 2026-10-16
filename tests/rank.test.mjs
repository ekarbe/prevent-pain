import { test } from "node:test";
import assert from "node:assert/strict";
import { rankChain, weekPlan } from "../src/lib/rank.js";

const links = {
  a: { test: "ta", exercises: ["ex-a", "shared"] },
  b: { test: "tb", exercises: ["ex-b"] },
  c: { test: "tc", exercises: ["shared"] },
};
const cause = {
  local: ["local-1", "shared"],
  chain: [
    ["a", 3],
    ["b", 2],
    ["c", 1],
  ],
};

test("untested links rank by weight, in listed order on ties", () => {
  assert.deepEqual(
    rankChain(
      [
        ["a", 2],
        ["b", 2],
        ["c", 3],
      ],
      {},
      links,
    ).map((x) => x.id),
    ["c", "a", "b"],
  );
});

test("a weak result lifts a link and a fine result drops it", () => {
  const order = rankChain(cause.chain, { tc: "pos", ta: "neg" }, links).map(
    (x) => x.id,
  );
  assert.deepEqual(order, ["b", "c", "a"]);
});

test("the week adds exercises only from weak links, without repeats", () => {
  assert.deepEqual(weekPlan(cause, {}, links), [
    { id: "local-1", from: null, later: false },
    { id: "shared", from: null, later: false },
  ]);
  assert.deepEqual(
    weekPlan(cause, { ta: "pos", tc: "pos" }, links).map((x) => x.id),
    ["local-1", "shared", "ex-a"],
  );
});

test("exercises a cause lists under later are marked, not dropped", () => {
  const withLater = { ...cause, later: ["ex-a"] };
  const week = weekPlan(withLater, { ta: "pos" }, links);
  assert.deepEqual(
    week.find((x) => x.id === "ex-a"),
    { id: "ex-a", from: "a", later: true },
  );
  assert.equal(week.find((x) => x.id === "local-1").later, false);
});
