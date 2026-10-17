// Content check: fails the build when content is incomplete or inconsistent.
// Run with `npm run check:content`. Prints every problem, then exits 1 if there were any.
import {
  regions,
  causeList,
  causeFiles,
  links,
  regionAt,
  tests,
  exercises,
  sources,
  warnings,
  returnToRun,
  prevent,
} from "../src/content/index.js";
import { closeups } from "../src/figures/closeups/index.js";

const LANGS = ["en", "de"];
const URGENCY = ["today", "soon", "routine"];
const RTR = ["standard", "bone", "calf", "postpartum", "none"];
const VIEWS = ["front", "side", "inside", "back", "sole", "top", "profile"];
const EDGES = ["inner", "outer", "front", "back", "toes", "heel", "up", "down"];
const errors = [];
const warns = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);

const text = (v) => typeof v === "string" && v.trim().length > 0;

function needText(where, obj, fields) {
  for (const lang of LANGS) {
    const o = obj?.[lang];
    if (!o) {
      err(where, `missing "${lang}" block`);
      continue;
    }
    for (const f of fields) if (!text(o[f])) err(where, `missing ${lang}.${f}`);
  }
}

function needString(where, obj) {
  for (const lang of LANGS)
    if (!text(obj?.[lang])) err(where, `missing ${lang} text`);
}

// regions and spots
const usedCauses = new Set();
const seenRegions = new Set();
for (const region of regions) {
  const where = `region ${region.id}`;
  if (seenRegions.has(region.id)) err(where, "duplicate region id");
  seenRegions.add(region.id);
  needText(where, region, ["name", "short"]);
  if (typeof regionAt[region.id] !== "number")
    err(where, "missing position in regionAt (links.js)");
  if (!region.spots?.length) err(where, "has no spots");
  const seenSpots = new Set();
  for (const spot of region.spots ?? []) {
    const sw = `spot ${region.id}/${spot.id}`;
    if (seenSpots.has(spot.id)) err(sw, "duplicate spot id");
    seenSpots.add(spot.id);
    needText(sw, spot, ["name"]);
    if (!spot.causes?.length) err(sw, "leads nowhere: no causes");
    for (const id of spot.causes ?? []) {
      usedCauses.add(id);
      if (!causeList.some((c) => c.id === id)) err(sw, `unknown cause "${id}"`);
    }
    if (spot.warn && !warnings[spot.warn])
      err(sw, `unknown warning "${spot.warn}"`);
  }
  if (!(region.id in causeFiles))
    err(where, "has no cause file in src/content/causes/");

  // close-up figure
  const fig = closeups[region.id];
  if (!fig) {
    warns.push(
      `${where}: no close-up figure, the spot list is shown on its own`,
    );
    continue;
  }
  const placed = new Set();
  for (const v of fig.views ?? []) {
    const vw = `figure ${region.id}/${v}`;
    if (!VIEWS.includes(v))
      err(vw, `unknown view name (use ${VIEWS.join(", ")})`);
    const view = fig[v];
    if (!view) {
      err(vw, "listed in views but not defined");
      continue;
    }
    needString(`${vw} caption`, view.caption);
    if (!text(view.outline) || !text(view.details))
      err(vw, "missing outline or details path");
    if (
      view.edges !== null &&
      (!Array.isArray(view.edges) ||
        view.edges.length !== 2 ||
        !view.edges.every((e) => EDGES.includes(e)))
    )
      err(vw, `edges must be null or two of ${EDGES.join(", ")}`);
    for (const [spotId, xy] of Object.entries(view.spots ?? {})) {
      if (!seenSpots.has(spotId))
        err(vw, `spot "${spotId}" is not a spot of ${region.id}`);
      if (
        !Array.isArray(xy) ||
        xy.length !== 2 ||
        xy.some((n) => typeof n !== "number" || n < 0 || n > 300)
      )
        err(vw, `spot "${spotId}" needs [x, y] inside the 240 × 300 drawing`);
      placed.add(spotId);
    }
  }
  for (const id of seenSpots)
    if (!placed.has(id))
      err(`figure ${region.id}`, `spot "${id}" is not placed in any view`);
}

// causes
const seenCauses = new Set();
const usedExercises = new Set();
const usedSources = new Set();
const byId = Object.fromEntries(causeList.map((c) => [c.id, c]));
for (const cause of causeList) {
  const where = `cause ${cause.id}`;
  if (seenCauses.has(cause.id)) err(where, "duplicate cause id");
  if (cause.youth !== undefined && cause.youth !== true)
    err(where, "youth must be true or left out");
  for (const exit of cause.exits ?? []) {
    const target = byId[exit.to];
    if (!target) err(where, `exit to unknown cause "${exit.to}"`);
    else if (target.kind !== "refer" && !target.youth)
      err(
        where,
        `exit to "${exit.to}", which is neither a referral nor a youth card`,
      );
    if (exit.to === cause.id) err(where, "exit points to itself");
    needString(`${where} exit ${exit.to}`, exit);
  }
  for (const id of cause.warn ?? [])
    if (!warnings[id]) err(where, `unknown warning "${id}"`);
  if (cause.rtr !== undefined && !RTR.includes(cause.rtr))
    err(where, `rtr must be one of ${RTR.join(", ")}`);
  if (Boolean(cause.en?.avoid) !== Boolean(cause.de?.avoid))
    err(where, "avoid in one language only");
  seenCauses.add(cause.id);
  if (!usedCauses.has(cause.id)) err(where, "not offered on any spot");
  if ((cause.sources?.length ?? 0) < 2) err(where, "needs at least 2 sources");
  for (const s of cause.sources ?? []) {
    usedSources.add(s);
    if (!sources[s]) err(where, `unknown source "${s}"`);
  }
  if (cause.kind === "refer") {
    needText(where, cause, ["title", "desc", "name", "about", "meanwhile"]);
    if (!URGENCY.includes(cause.urgency))
      err(where, `refer cause needs urgency ${URGENCY.join(", ")}`);
    if (cause.local?.length || cause.chain?.length)
      err(where, "refer causes have no local exercises or chain");
    continue;
  }
  if (cause.kind !== "plan") err(where, 'kind must be "plan" or "refer"');
  needText(where, cause, ["title", "desc", "name", "about", "load"]);
  if (!Array.isArray(cause.local))
    err(where, "needs a `local` array (it may be empty)");
  if ((cause.local?.length ?? 0) > 4) err(where, "at most 4 local exercises");
  const chainIds = (cause.chain ?? []).map(([id]) => id);
  for (const [linkId, ids] of Object.entries(cause.linkExercises ?? {})) {
    if (!chainIds.includes(linkId))
      err(where, `linkExercises names "${linkId}", which isn't in its chain`);
    for (const id of ids) {
      usedExercises.add(id);
      if (!exercises[id]) err(where, `linkExercises: unknown exercise "${id}"`);
    }
  }
  for (const id of cause.local ?? []) {
    usedExercises.add(id);
    if (!exercises[id]) err(where, `unknown exercise "${id}"`);
  }
  const reachable = new Set([
    ...(cause.local ?? []),
    ...chainIds.flatMap(
      (id) => cause.linkExercises?.[id] ?? links[id]?.exercises ?? [],
    ),
  ]);
  for (const id of cause.later ?? [])
    if (!reachable.has(id))
      err(
        where,
        `later lists "${id}", which is neither local nor added by a chain link`,
      );
  if (!Array.isArray(cause.chain) || cause.chain.length === 1)
    err(where, "chain needs at least 2 weak links, or none");
  const seenLinks = new Set();
  for (const entry of cause.chain ?? []) {
    const [id, weight, why] = entry;
    if (!links[id]) err(where, `unknown link "${id}"`);
    if (seenLinks.has(id)) err(where, `link "${id}" listed twice`);
    seenLinks.add(id);
    if (![1, 2, 3].includes(weight))
      err(where, `link "${id}" weight must be 1, 2 or 3`);
    if (why !== undefined) needString(`${where} chain ${id} why`, why);
  }
}

// links, tests, exercises, sources
for (const [id, link] of Object.entries(links)) {
  const where = `link ${id}`;
  needText(where, link, ["name", "short", "why"]);
  if (typeof link.at !== "number") err(where, "missing position `at`");
  if (!tests[link.test]) err(where, `unknown test "${link.test}"`);
  if (!link.exercises?.length) err(where, "needs at least one exercise");
  for (const ex of link.exercises ?? []) {
    usedExercises.add(ex);
    if (!exercises[ex]) err(where, `unknown exercise "${ex}"`);
  }
}
for (const [id, test] of Object.entries(tests))
  needText(`test ${id}`, test, ["name", "how", "pos", "neg"]);
if (!tests.load) err("test load", "required: the plan asks it on every cause");

// guides
for (const [variant, v] of Object.entries(returnToRun)) {
  if (variant === "sources") continue;
  const where = `return ${variant}`;
  if (!RTR.includes(variant)) err(where, "unknown variant");
  needText(where, v, ["title", "lead"]);
  for (const lang of LANGS) {
    if (!v[lang]?.gates?.length) err(where, `${lang} needs gates`);
    if (!v[lang]?.phases?.length) err(where, `${lang} needs phases`);
    for (const p of v[lang]?.phases ?? [])
      if (!text(p.name) || !text(p.what) || !text(p.next))
        err(where, `${lang} phase needs name, what and next`);
  }
  if (
    v.en?.gates?.length !== v.de?.gates?.length ||
    v.en?.phases?.length !== v.de?.phases?.length
  )
    err(where, "en and de need the same number of gates and phases");
}
for (const v of ["standard", "bone", "calf", "postpartum"])
  if (!returnToRun[v]) err("return", `missing variant "${v}"`);
for (const s of [...(returnToRun.sources ?? []), ...(prevent.sources ?? [])]) {
  usedSources.add(s);
  if (!sources[s]) err("guides", `unknown source "${s}"`);
}
for (const block of prevent.blocks ?? []) {
  for (const id of block.exercises ?? []) {
    usedExercises.add(id);
    if (!exercises[id])
      err(`prevent block ${block.id}`, `unknown exercise "${id}"`);
  }
  for (const lang of LANGS)
    if (!text(prevent[lang]?.blocks?.[block.id]?.title))
      err(`prevent block ${block.id}`, `missing ${lang} title`);
}
needText("prevent", prevent, [
  "title",
  "lead",
  "ruleTitle",
  "rule",
  "ruleNote",
  "strengthTitle",
  "strength",
  "risksTitle",
  "risksLead",
]);
if (
  prevent.en?.risks?.length !== prevent.de?.risks?.length ||
  prevent.en?.topics?.length !== prevent.de?.topics?.length
)
  err("prevent", "en and de need the same number of risks and topics");

let withVideo = 0;
for (const [id, ex] of Object.entries(exercises)) {
  const where = `exercise ${id}`;
  needText(where, ex, ["name", "dose", "how"]);
  if (typeof ex.min !== "number") err(where, "missing minutes `min`");
  if (ex.stage !== undefined && ![1, 2, 3].includes(ex.stage))
    err(where, "stage must be 1, 2 or 3, or left out");
  if (!usedExercises.has(id)) err(where, "not used by any cause or link");
  if (ex.video === undefined)
    err(where, "missing `video` entry (use null if there is none yet)");
  else if (ex.video) {
    for (const [lang, v] of Object.entries(ex.video)) {
      if (!LANGS.includes(lang))
        err(where, `video for unknown language "${lang}"`);
      if (!/^[A-Za-z0-9_-]{11}$/.test(v?.id ?? ""))
        err(where, `video.${lang}.id is not a YouTube id`);
      if (!text(v?.title)) err(where, `video.${lang} needs a title`);
    }
    if (!ex.video.en) err(where, "video needs at least an English entry");
    withVideo++;
  }
}
const exCount = Object.keys(exercises).length;
if (withVideo < exCount)
  warns.push(
    `${exCount - withVideo} of ${exCount} exercises have no demo video yet`,
  );

for (const [id, s] of Object.entries(sources)) {
  if (
    !text(s.who) ||
    !text(s.title) ||
    !text(s.where) ||
    typeof s.year !== "number"
  )
    err(`source ${id}`, "needs who, year, title and where");
  if (!usedSources.has(id))
    warns.push(`source ${id} is not cited by any cause`);
}
for (const [id, w] of Object.entries(warnings)) {
  needString(`warning ${id}`, w);
  if (!["warn", "stop"].includes(w.level))
    err(`warning ${id}`, 'level must be "warn" or "stop"');
}

for (const w of warns) console.warn(`note  ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`error ${e}`);
  console.error(
    `\n${errors.length} content problem${errors.length === 1 ? "" : "s"}.`,
  );
  process.exit(1);
}
console.log(
  `Content OK: ${regions.length} regions, ${causeList.length} causes, ${Object.keys(links).length} links, ${exCount} exercises, ${Object.keys(sources).length} sources.`,
);
