# Prevent Pain

Tap where running hurts, pick the description that fits, and get a plan: how to keep training, exercises for the sore spot, and 30-second self-tests that show which other links in your chain (hip, ankle, stride…) are adding to the problem. In English and German.

**Live:** https://ekarbe.github.io/prevent-pain/

> Training tips for overuse aches, not medical advice. The content is drafted from published research and has not been reviewed by a clinician. If something on the first screen applies to you, see a doctor or physiotherapist first.

## How it works

1. **Red-flag check.** Six questions (swelling after a fall, can't bear weight, locking, fever, numbness, night pain). Any yes leads to "get this checked first".
2. **Where.** Front and back figure of the lower body: lower back, hip and glute, thigh, knee, shin and calf, ankle and foot.
3. **Spot.** A close-up of that region in up to four views, with 3–7 tappable spots.
4. **Feels like.** Plain-language cause cards ("Pinpoint pain just below the kneecap…") with the medical name in small print. Some cards are referrals that say "get it checked" instead of offering a plan, for example possible stress fractures.
5. **Plan.**
   - _Calm it, then load it_: the 0–3/10 pain rule, how to adjust running, a training-load check and exercises for the sore tissue.
   - _Check your chain_: weak links ranked by how often research connects them to this problem. Each has a self-test; a weak result moves it up and adds its exercises.
   - _Your week_, when to see a physio, sources, and a share link that restores the plan including test results.

Every screen has its own link, e.g. `#/de/knee/below-kneecap/patellar-tendon?t=ktw1.load1`.

## Development

```bash
npm install
npm run dev            # http://localhost:5173/prevent-pain/
npm run lint
npm test               # router and ranking unit tests (node:test)
npm run check:content  # validates all content, see below
npm run build
```

Requires Node 22.12 or newer. Pushing to `main` runs `.github/workflows/deploy.yml`: lint, tests and the content check, then `vite build` and deploy to GitHub Pages.

## Content model

All content lives in `src/content/`, every text in both languages as `{ en: …, de: … }`. Ids are English in both languages so shared links work whatever the receiver's language.

| File                 | What it holds                                                                                                                                                                 |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `regions.js`         | Regions in body order, each with its spots. A spot lists the cause ids to offer and an optional warning.                                                                      |
| `causes/<region>.js` | Causes. `kind: "plan"` has `title`, `desc`, `name`, `about`, `load`, `local` exercises and a `chain`. `kind: "refer"` has `urgency` (`today`/`soon`) and `meanwhile` instead. |
| `links.js`           | The ten weak links (stride, trunk, hip flexors, side hip, glutes, quads, hamstrings, calf, ankle, foot). Each owns one self-test and the exercises it adds.                   |
| `tests.js`           | The 30-second self-tests, with what a weak (`pos`) and a fine (`neg`) result looks like. `load` is asked on every plan.                                                       |
| `exercises.js`       | Exercise library with dose, how-to, rough minutes and an optional YouTube demo.                                                                                               |
| `sources.js`         | Citations. Every cause cites at least two.                                                                                                                                    |
| `warnings.js`        | Spot warnings, such as clot signs behind the knee.                                                                                                                            |

A chain entry is `[linkId, weight]` or `[linkId, weight, { en, de }]` with a cause-specific "why". Weights: 3 often involved, 2 sometimes, 1 occasionally. On the plan, a weak test result doubles the weight and a fine result cuts it to a fifth (`src/lib/rank.js`).

Two optional cause fields tune the week. `later: [exerciseId]` keeps an exercise in the week but marks it "Later", for things that don't suit a fresh injury yet, such as stretching a strained muscle. `linkExercises: { linkId: [exerciseIds] }` swaps the exercises a weak link adds for this cause, for example when the cause's own exercises already train that link.

Close-up drawings live in `src/figures/closeups/<region>.js`: per view an outline path, detail strokes, spot positions in a 240 × 300 drawing and the two edge words.

`npm run check:content` fails on missing translations, unknown or unused ids, causes with fewer than two sources, links without a test or exercise, and spots that aren't placed in any figure view.

### Videos

Demo videos are YouTube ids per language. Nothing loads from YouTube until someone taps the video, and then only from `youtube-nocookie.com`.

## Tech

React 19, Vite 8, Tailwind CSS 4, ESLint 10, lucide icons, self-hosted Young Serif and Atkinson Hyperlegible Next. No backend, no tracking, no cookies.
