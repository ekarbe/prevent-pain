// Writes a static HTML page for every route after `vite build`, so each page has its own title,
// description and content for search engines and link previews, and loads without a blank screen.
// GitHub Pages serves dist/en/knee/index.html at /prevent-pain/en/knee/ and 404.html for anything else.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { BASE, pages, sitemap } from "../dist-ssr/entry-server.js";

const dist = fileURLToPath(new URL("../dist/", import.meta.url));
const template = await readFile(join(dist, "index.html"), "utf8");
const HEAD = /<!--head-->[\s\S]*?<!--\/head-->/;
const ROOT = '<div id="root"></div>';
if (!HEAD.test(template) || !template.includes(ROOT))
  throw new Error("index.html lost its <!--head--> markers or root element");

// Function replacements, so a "$" in page text is never read as a pattern.
const fill = ({ lang, head, html, route }) =>
  template
    .replace('<html lang="en">', () => `<html lang="${lang}">`)
    .replace(HEAD, () => head)
    .replace(ROOT, () => `<div id="root" data-route="${route}">${html}</div>`);

const write = async (file, text) => {
  await mkdir(dirname(join(dist, file)), { recursive: true });
  await writeFile(join(dist, file), text);
};

const list = pages();
for (const page of list)
  await write(
    join(page.path.slice(BASE.length), "index.html"),
    fill({ ...page, route: page.path }),
  );

// The bare address shows the English start page; the app moves on to the visitor's language.
const start = list.find((p) => p.path === `${BASE}en/`);
await write("index.html", fill({ ...start, route: start.path }));

await write(
  "404.html",
  template.replace(
    HEAD,
    () =>
      '<title>Prevent Pain</title>\n    <meta name="robots" content="noindex" />',
  ),
);
await write("sitemap.xml", sitemap(list));

console.log(
  `Pre-rendered ${list.length} pages, ${list.filter((p) => p.canonical).length} in the sitemap.`,
);
