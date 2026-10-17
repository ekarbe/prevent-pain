# Prevent Pain

Tap where running hurts, pick the description that fits, and get a plan: how to keep training, exercises for the sore spot, and 30-second self-tests that show which other links in your chain (hip, ankle, stride…) are adding to the problem. In English and German.

**Live:** https://ekarbe.github.io/prevent-pain/

> Training tips for overuse aches, not medical advice. The content is drafted from published research and has not been reviewed by a clinician. If something on the first screen applies to you, see a doctor or physiotherapist first.

## How it works

1. **Red-flag check.** Six questions (swelling after a fall, can't bear weight, locking, fever, numbness, night pain). Any yes leads to "get this checked first".
2. **Where.** Front and back figure of the lower body: lower back, hip and glute, thigh, knee, shin and calf, ankle and foot.
3. **Spot.** A close-up of that region in up to four views, with 3–7 tappable spots.
4. **Feels like.** Plain-language cause cards ("Pinpoint pain just below the kneecap…") with the medical name in small print. Some cards are referrals that say "get it checked" instead of offering a plan: today, within days, or within the next few weeks. Cards for children and teenagers sit in their own "Under 18?" group.
5. **Plan.**
   - _Check this first_: yes/no questions that point to a referral card when a serious look-alike is possible (a stress fracture, a torn tendon, a growth-plate injury).
   - _Calm it, then load it_: the 0–3/10 pain rule, how to adjust running, what to skip for now, a training-load check and exercises for the sore tissue. Tendon exercises show their stage: hold, heavy and slow, springy.
   - _Check your chain_: weak links ranked by how often research connects them to this problem. Each has a self-test; a weak result moves it up and adds its exercises.
   - _Your week_, _Back to running_ (checks to pass and a walk-run ladder), when to see a physio, sources, and a share link that restores the plan including test results.
6. **Guides.** _Stay injury-free_ (the single-run rule, two strength sessions a week, a risk check) and _Back to running after an injury_, linked from the start page, every plan and the footer.

Every screen is its own page, e.g. `/prevent-pain/de/knee/below-kneecap/patellar-tendon/?t=ktw1.load1`. Links from version 1 (`/prevent-pain/#/de/knee/…`) still work and move to the new address. `/en/topics/` lists every cause as plain links.

## Development

```bash
npm install
npm run dev            # http://localhost:5173/prevent-pain/
npm run lint
npm test               # router and ranking unit tests (node:test)
npm run check:content  # validates all content, see below
npm run build          # client build, server build, then pre-renders every page into dist/
```

Requires Node 22.12 or newer. Pushing to `main` runs `.github/workflows/deploy.yml`: lint, tests and the content check, then `npm run build` and deploy to GitHub Pages.

## Pages and search

`npm run build` runs three steps:

1. `vite build` builds the app into `dist/`.
2. `vite build --ssr src/entry-server.jsx` builds a Node version of the same app into `dist-ssr/`.
3. `scripts/prerender.mjs` renders every route in both languages (`src/lib/pages.js`) to `dist/<lang>/<region>/<spot>/<cause>/index.html`. Each page gets its own title, description, canonical address, `hreflang` links to the other language, social preview tags and breadcrumbs (`src/lib/meta.js`). It also writes `dist/sitemap.xml` and `dist/404.html`.

In the browser, a pre-rendered page hydrates its HTML; anything else (a plan link with test results, the 404 page for an unknown address) renders from scratch and then corrects the address to the nearest valid page. A cause offered at several spots has one page per spot; all of them name the first spot's page as canonical, and only that one is in the sitemap.

GitHub Pages only reads `robots.txt` at the domain root, so submit `https://ekarbe.github.io/prevent-pain/sitemap.xml` in Google Search Console (as a URL-prefix property) instead.

## Content model

All content lives in `src/content/`, every text in both languages as `{ en: …, de: … }`. Ids are English in both languages so shared links work whatever the receiver's language.

| File                 | What it holds                                                                                                                                                                 |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `guides.js`          | `returnToRun` (checks and walk-run steps per variant: standard, bone, calf, postpartum) and `prevent` (the Stay injury-free page).                                            |
| `regions.js`         | Regions in body order, each with its spots. A spot lists the cause ids to offer and an optional warning.                                                                      |
| `causes/<region>.js` | Causes. `kind: "plan"` has `title`, `desc`, `name`, `about`, `load`, `local` exercises and a `chain`. `kind: "refer"` has `urgency` (`today`/`soon`) and `meanwhile` instead. |
| `links.js`           | The ten weak links (stride, trunk, hip flexors, side hip, glutes, quads, hamstrings, calf, ankle, foot). Each owns one self-test and the exercises it adds.                   |
| `tests.js`           | The 30-second self-tests, with what a weak (`pos`) and a fine (`neg`) result looks like. `load` is asked on every plan.                                                       |
| `exercises.js`       | Exercise library with dose, how-to, rough minutes and an optional YouTube demo.                                                                                               |
| `sources.js`         | Citations. Every cause cites at least two.                                                                                                                                    |
| `warnings.js`        | Warnings for a spot (`warn` on a spot) or a card (`warn` on a cause), such as clot signs or low energy availability on bone stress cards.                                     |

A chain entry is `[linkId, weight]` or `[linkId, weight, { en, de }]` with a cause-specific "why". Weights: 3 often involved, 2 sometimes, 1 occasionally. On the plan, a weak test result doubles the weight and a fine result cuts it to a fifth (`src/lib/rank.js`).

Optional cause fields:

- `urgency` on referrals: `today`, `soon` (within days) or `routine` (within the next few weeks).
- `youth: true` puts the card in the "Under 18?" group.
- `exits: [{ to, en, de }]`: yes/no questions shown under _Check this first_; `to` is a referral or youth card.
- `warn: [warningId]`: warnings shown on the card.
- `en.avoid` / `de.avoid`: one sentence under _Skip for now_.
- `rtr`: the _Back to running_ variant (`standard` by default for plans, `bone`, `calf`, `postpartum`, or `none`). Referrals show it only when set.
- A plan's `chain` can be empty when no weak link applies; the chain section is then hidden.

Exercises can carry `stage` (1 hold, 2 heavy and slow, 3 springy). When a plan's own exercises span more than one stage, the plan explains the ladder.

Two more optional cause fields tune the week. `later: [exerciseId]` keeps an exercise in the week but marks it "Later", for things that don't suit a fresh injury yet, such as stretching a strained muscle. `linkExercises: { linkId: [exerciseIds] }` swaps the exercises a weak link adds for this cause, for example when the cause's own exercises already train that link.

Close-up drawings live in `src/figures/closeups/<region>.js`: per view an outline path, detail strokes, spot positions in a 240 × 300 drawing and the two edge words.

`npm run check:content` fails on missing translations, unknown or unused ids, causes with fewer than two sources, links without a test or exercise, and spots that aren't placed in any figure view.

### Videos

Demo videos are YouTube ids per language. Nothing loads from YouTube until someone taps the video, and then only from `youtube-nocookie.com`.

## Tech

React 19, Vite 8, Tailwind CSS 4, ESLint 10, lucide icons, self-hosted Young Serif and Atkinson Hyperlegible Next. No backend, no tracking, no cookies.
