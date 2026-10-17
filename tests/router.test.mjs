import { test } from "node:test";
import assert from "node:assert/strict";
import {
  formatPath,
  formatTests,
  parseHash,
  parsePath,
  parseTests,
  validate,
} from "../src/lib/router.js";
import { allRoutes, canonicalRoute } from "../src/lib/pages.js";
import * as content from "../src/content/index.js";

const { causes, regionById } = content;
const BASE = "/prevent-pain/";
const at = (path, search = "") => parsePath(BASE + path, search, BASE);

test("parses every screen", () => {
  assert.equal(at("").screen, "start");
  assert.equal(at("").lang, null);
  assert.equal(at("de/").lang, "de");
  assert.equal(at("en/check/").screen, "stop");
  assert.equal(at("en/where/").screen, "region");
  assert.equal(at("en/topics/").screen, "topics");
  assert.equal(at("de/prevent/").screen, "prevent");
  assert.equal(at("en/back-to-running/").screen, "return");
  assert.equal(
    formatPath({ lang: "de", screen: "return" }, BASE),
    "/prevent-pain/de/back-to-running/",
  );
  assert.equal(at("en/knee/").screen, "spot");
  assert.equal(at("en/knee/index.html").screen, "spot");
  assert.deepEqual(
    {
      ...at("en/knee/below-kneecap/pfp/", "?t=sls1.ktw0"),
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

test("round-trips every page and plan links with test results", () => {
  for (const route of allRoutes(content)) {
    const url = formatPath(route, BASE);
    assert.ok(url.startsWith(BASE) && /\/$/.test(url), url);
    const [path, search] = url.split("?");
    assert.deepEqual(parsePath(path, search, BASE), route);
  }
  const url =
    "/prevent-pain/de/knee/below-kneecap/patellar-tendon/?t=ktw1.sls0";
  const [path, search] = url.split("?");
  assert.equal(formatPath(parsePath(path, search, BASE), BASE), url);
});

test("reads old hash links", () => {
  const route = parseHash(
    "#/de/knee/below-kneecap/patellar-tendon?t=ktw1.sls0",
  );
  assert.equal(
    formatPath(route, BASE),
    "/prevent-pain/de/knee/below-kneecap/patellar-tendon/?t=ktw1.sls0",
  );
  assert.equal(parseHash("#/en/where").screen, "region");
  assert.equal(parseHash("").screen, "start");
});

test("a cause at several spots has one canonical page", () => {
  const pfp = (spot) => ({
    ...at(`en/knee/${spot}/pfp/`),
    tests: { sls: "pos" },
  });
  const a = canonicalRoute(pfp("below-kneecap"), content);
  const b = canonicalRoute(pfp("around-kneecap"), content);
  assert.equal(formatPath(a, BASE), formatPath(b, BASE));
  assert.deepEqual(a.tests, {});
});

test("ignores malformed test tokens and keeps a stable order", () => {
  assert.deepEqual(parseTests("ktw1.bad.sls0.x2"), { ktw: "pos", sls: "neg" });
  assert.equal(formatTests({ sls: "neg", ktw: "pos", cad: null }), "ktw1.sls0");
});

test("an unknown language falls back to no language", () => {
  const r = at("fr/knee/");
  assert.equal(r.lang, null);
  assert.equal(r.region, "fr");
});

test("validate trims a link to its deepest valid part", () => {
  const ctx = { regionById, causes };
  assert.equal(validate(at("en/nowhere/x/y/"), ctx).screen, "region");
  assert.equal(validate(at("en/knee/nowhere/"), ctx).screen, "spot");
  assert.equal(
    validate(at("en/knee/below-kneecap/itbs/"), ctx).screen,
    "causes",
  );
  assert.equal(validate(at("en/knee/below-kneecap/pfp/"), ctx).screen, "plan");
});

test("ids that are built-in object properties don't resolve to them", () => {
  const ctx = { regionById, causes };
  for (const id of ["constructor", "toString", "__proto__", "hasOwnProperty"]) {
    assert.equal(validate(at(`en/${id}/`), ctx).screen, "region");
    assert.equal(
      validate(at(`en/knee/below-kneecap/${id}/`), ctx).screen,
      "causes",
    );
  }
});

test("causeAt keeps the spot when it offers the cause, else finds one", () => {
  const route = { ...at("en/knee/below-kneecap/pfp/"), tests: {} };
  assert.equal(content.causeAt(route, "patellar-tendon").spot, "below-kneecap");
  const away = content.causeAt(route, "itbs");
  assert.equal(away.region, "knee");
  assert.equal(away.spot, "outer-knee");
  assert.equal(content.causeAt(route, "nope"), null);
});
