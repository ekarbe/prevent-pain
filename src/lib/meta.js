import { pick } from "../i18n/lang.js";
import { ui } from "../i18n/ui.js";
import { site } from "../site.js";
import { canonicalRoute } from "./pages.js";
import { formatPath, LANGS } from "./router.js";

const ORIGIN = new URL(site.url).origin;
const LOCALE = { en: "en_US", de: "de_DE" };

const url = (route, base) => ORIGIN + formatPath(route, base);

// Search snippets show about 160 characters; cut at a word so nothing ends mid-word.
function clip(text, max = 160) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.]$/, "")}…`;
}

// English spot names read as a list in lower case; German nouns keep their capital.
const lower = (s, lang) =>
  lang === "en" && !s.startsWith("Achilles")
    ? s[0].toLowerCase() + s.slice(1)
    : s;

const list = (items, lang) =>
  items.length < 2
    ? items.join("")
    : `${items.slice(0, -1).join(", ")} ${lang === "de" ? "oder" : "or"} ${items.at(-1)}`;

function text(route, lang, content) {
  const t = ui[lang];
  const m = t.meta;
  const region = content.regionById[route.region];
  const spot = content.findSpot(route.region, route.spot);
  const cause = content.causes[route.cause];
  const name = (x) => pick(x, lang).name;
  switch (route.screen) {
    case "spot":
      return {
        title: m.spot(name(region)),
        desc: m.spotDesc(
          name(region),
          region.spots.map((s) => lower(name(s), lang)).join("; "),
        ),
      };
    case "causes":
      return {
        title: m.causes(name(spot), name(region)),
        desc: m.causesDesc(
          name(spot),
          list(
            spot.causes
              .filter((id) => content.causes[id])
              .map((id) => name(content.causes[id])),
            lang,
          ),
        ),
      };
    case "plan": {
      const c = pick(cause, lang);
      return {
        title: (cause.kind === "refer" ? m.refer : m.plan)(c.name),
        desc: `${c.title}. ${c.about}`,
      };
    }
    case "start":
      return { title: m.start, desc: m.site };
    default:
      return { title: t.titles[route.screen], desc: m[route.screen] };
  }
}

// Breadcrumbs for search results: region, spot, cause.
function crumbs(route, lang, content, base) {
  const steps = { spot: 1, causes: 2, plan: 3 }[route.screen];
  if (!steps) return null;
  const at = { ...route, tests: {} };
  const items = [
    [content.regionById[route.region], { ...at, screen: "spot" }],
    [content.findSpot(route.region, route.spot), { ...at, screen: "causes" }],
    [content.causes[route.cause], at],
  ].slice(0, steps);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([item, r], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: pick(item, lang).name,
      item: url(r, base),
    })),
  };
}

// Everything that goes in <head> for one page: title, description, canonical address, the same page
// in the other language, social preview and structured data.
export function pageHead(route, content, base) {
  const { lang } = route;
  const canonical = canonicalRoute(route, content);
  const { title, desc } = text(route, lang, content);
  const fullTitle =
    route.screen === "start"
      ? `${site.name} · ${title}`
      : `${title} · ${site.name}`;
  const description = clip(desc);
  const tags = [
    { tag: "meta", attrs: { name: "description", content: description } },
    { tag: "link", attrs: { rel: "canonical", href: url(canonical, base) } },
    ...LANGS.map((l) => ({
      tag: "link",
      attrs: {
        rel: "alternate",
        hreflang: l,
        href: url({ ...canonical, lang: l }, base),
      },
    })),
    {
      tag: "link",
      attrs: {
        rel: "alternate",
        hreflang: "x-default",
        href: url({ ...canonical, lang: "en" }, base),
      },
    },
    { tag: "meta", attrs: { property: "og:type", content: "website" } },
    { tag: "meta", attrs: { property: "og:site_name", content: site.name } },
    { tag: "meta", attrs: { property: "og:title", content: fullTitle } },
    {
      tag: "meta",
      attrs: { property: "og:description", content: description },
    },
    {
      tag: "meta",
      attrs: { property: "og:url", content: url(canonical, base) },
    },
    { tag: "meta", attrs: { property: "og:locale", content: LOCALE[lang] } },
    {
      tag: "meta",
      attrs: { property: "og:image", content: `${site.url}og.png` },
    },
    {
      tag: "meta",
      attrs: { name: "twitter:card", content: "summary_large_image" },
    },
  ];
  const data =
    route.screen === "start"
      ? {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          url: site.url,
          inLanguage: lang,
          description: ui[lang].meta.site,
          author: { "@type": "Person", name: site.author, url: site.homepage },
        }
      : crumbs(canonical, lang, content, base);
  if (data)
    tags.push({
      tag: "script",
      attrs: { type: "application/ld+json" },
      // "<" can't close the script element when escaped.
      text: JSON.stringify(data).replace(/</g, "\\u003c"),
    });
  return { lang, title: fullTitle, tags };
}

const escape = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// Pre-rendered pages mark these tags so the app can swap them when you move to another page.
export function headHtml({ title, tags }) {
  const lines = tags.map(({ tag, attrs, text }) => {
    const a = Object.entries(attrs)
      .map(([k, v]) => ` ${k}="${escape(v)}"`)
      .join("");
    return tag === "script"
      ? `<script data-head${a}>${text}</script>`
      : `<${tag} data-head${a} />`;
  });
  return [`<title>${escape(title)}</title>`, ...lines].join("\n    ");
}

export function applyHead({ title, tags }) {
  document.title = title;
  document.head.querySelectorAll("[data-head]").forEach((el) => el.remove());
  for (const { tag, attrs, text } of tags) {
    const el = document.createElement(tag);
    el.setAttribute("data-head", "");
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    if (text) el.textContent = text;
    document.head.append(el);
  }
}
