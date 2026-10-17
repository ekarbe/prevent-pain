import { renderToString } from "react-dom/server";
import * as content from "./content/index.js";
import Root from "./Root.jsx";
import { allRoutes, canonicalRoute } from "./lib/pages.js";
import { headHtml, pageHead } from "./lib/meta.js";
import { formatPath, LANGS } from "./lib/router.js";
import { BASE, setServerRoute } from "./lib/useRoute.js";

export { BASE };
import { site } from "./site.js";

// Used by scripts/prerender.mjs after the client build.
export function pages() {
  return allRoutes(content).map((route) => {
    setServerRoute(route);
    const canonical = canonicalRoute(route, content);
    return {
      path: formatPath(route, BASE),
      canonical: formatPath(canonical, BASE) === formatPath(route, BASE),
      lang: route.lang,
      html: renderToString(<Root />),
      head: headHtml(pageHead(route, content, BASE)),
    };
  });
}

// Pages that aren't a duplicate of another, with their other-language versions.
export function sitemap(list) {
  const origin = new URL(site.url).origin;
  const other = (path, lang) =>
    path.replace(new RegExp(`^${BASE}[a-z]{2}/`), `${BASE}${lang}/`);
  const urls = list
    .filter((p) => p.canonical)
    .map((p) =>
      [
        "  <url>",
        `    <loc>${origin}${p.path}</loc>`,
        ...LANGS.map(
          (l) =>
            `    <xhtml:link rel="alternate" hreflang="${l}" href="${origin}${other(p.path, l)}"/>`,
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${origin}${other(p.path, "en")}"/>`,
        "  </url>",
      ].join("\n"),
    );
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
}
