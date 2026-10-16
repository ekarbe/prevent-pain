import { test } from "node:test";
import assert from "node:assert/strict";
import {
  formatHash,
  formatTests,
  parseHash,
  parseTests,
  validate,
} from "../src/lib/router.js";
import { causes, regionById } from "../src/content/index.js";

test("parses every screen", () => {
  assert.equal(parseHash("").screen, "start");
  assert.equal(parseHash("#/de").lang, "de");
  assert.equal(parseHash("#/en/check").screen, "stop");
  assert.equal(parseHash("#/en/where").screen, "region");
  assert.deepEqual(
    {
      ...parseHash("#/en/knee/below-kneecap/pfp?t=sls1.ktw0"),
      tests: undefined,
    },
    {
      lang: "en",
      screen: "plan",
      region: "knee",
      spot: "below-kneecap",
      cause: "pfp",
      tests: undefined,
    },
  );
});

test("round-trips plan links with test results", () => {
  const hash = "#/de/knee/below-kneecap/patellar-tendon?t=ktw1.sls0";
  assert.equal(formatHash(parseHash(hash)), hash);
});

test("ignores malformed test tokens and keeps a stable order", () => {
  assert.deepEqual(parseTests("ktw1.bad.sls0.x2"), { ktw: "pos", sls: "neg" });
  assert.equal(formatTests({ sls: "neg", ktw: "pos", cad: null }), "ktw1.sls0");
});

test("an unknown language falls back to no language", () => {
  const r = parseHash("#/fr/knee");
  assert.equal(r.lang, null);
  assert.equal(r.region, "fr");
});

test("validate trims a link to its deepest valid part", () => {
  const ctx = { regionById, causes };
  assert.equal(validate(parseHash("#/en/nowhere/x/y"), ctx).screen, "region");
  assert.equal(validate(parseHash("#/en/knee/nowhere"), ctx).screen, "spot");
  assert.equal(
    validate(parseHash("#/en/knee/below-kneecap/itbs"), ctx).screen,
    "causes",
  );
  assert.equal(
    validate(parseHash("#/en/knee/below-kneecap/pfp"), ctx).screen,
    "plan",
  );
});
