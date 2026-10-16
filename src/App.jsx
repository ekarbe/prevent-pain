import { useEffect, useRef, useState } from "react";
import * as content from "./content/index.js";
import { LangContext, pick } from "./i18n/lang.js";
import { ui } from "./i18n/ui.js";
import { site } from "./site.js";
import { formatHash, validate } from "./lib/router.js";
import { canGoBack, navigate, useRoute } from "./lib/useRoute.js";
import { preferredLang, saveLang } from "./lib/prefs.js";
import AppBar from "./components/AppBar.jsx";
import StepHeader from "./components/StepHeader.jsx";
import Toast from "./components/Toast.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Start from "./screens/Start.jsx";
import Stop from "./screens/Stop.jsx";
import Regions from "./screens/Regions.jsx";
import Spots from "./screens/Spots.jsx";
import Causes from "./screens/Causes.jsx";
import Plan from "./screens/Plan.jsx";

const STEP = { region: 1, spot: 2, causes: 3, plan: 4 };
const YEAR = new Date().getFullYear();
const PARENT = {
  stop: "start",
  region: "start",
  spot: "region",
  causes: "spot",
  plan: "causes",
};

function docTitle(route, lang) {
  const t = ui[lang];
  const region = content.regionById[route.region];
  const spot = content.findSpot(route.region, route.spot);
  const cause = content.causes[route.cause];
  const name =
    route.screen === "plan" && cause
      ? pick(cause, lang).name
      : route.screen === "causes" && spot
        ? `${pick(region, lang).name} · ${pick(spot, lang).name}`
        : route.screen === "spot" && region
          ? pick(region, lang).name
          : t.titles[route.screen];
  return name ? `${name} · Prevent Pain` : "Prevent Pain";
}

// A language picked in this session wins over the one in older history entries or links, so browser
// Back doesn't flip the interface back. Only an explicit pick is saved for future visits.
const session = { lang: null };

export default function App() {
  const route = useRoute();
  const lang = session.lang ?? route.lang ?? preferredLang();
  const valid = validate({ ...route, lang }, content);
  const target = formatHash(valid);
  const [toast, setToast] = useState(null);
  const [flags, setFlags] = useState([]);
  const mainRef = useRef(null);
  const pageKey = `${valid.screen}/${valid.region}/${valid.spot}/${valid.cause}`;
  const lastPage = useRef(pageKey);

  // Normalise the address: add the language, drop unknown regions, spots or causes.
  useEffect(() => {
    if (target !== window.location.hash) navigate(valid, { replace: true });
  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    document.title = docTitle(valid, lang);
  });

  // A new screen starts at the top, with focus on its heading for keyboard and screen-reader users.
  useEffect(() => {
    if (lastPage.current === pageKey) return;
    lastPage.current = pageKey;
    window.scrollTo(0, 0);
    mainRef.current?.querySelector("h1")?.focus({ preventScroll: true });
  }, [pageKey]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(timer);
  }, [toast]);

  const go = (patch, opts) => navigate({ ...valid, ...patch }, opts);
  const back = () => {
    if (canGoBack()) window.history.back();
    else go({ screen: PARENT[valid.screen] ?? "start" }, { replace: true });
  };
  const chooseLang = (l) => {
    session.lang = l;
    saveLang(l);
    go({ lang: l }, { replace: true });
  };
  const step = STEP[valid.screen];

  let screen;
  switch (valid.screen) {
    case "stop":
      screen = <Stop go={go} back={back} />;
      break;
    case "region":
      screen = <Regions go={go} />;
      break;
    case "spot":
      screen = <Spots key={valid.region} route={valid} go={go} />;
      break;
    case "causes":
      screen = (
        <Causes key={`${valid.region}/${valid.spot}`} route={valid} go={go} />
      );
      break;
    case "plan":
      screen = (
        <Plan
          route={valid}
          go={go}
          notify={(msg) => setToast({ msg, at: Date.now() })}
        />
      );
      break;
    default:
      screen = <Start go={go} ticked={flags} setTicked={setFlags} />;
  }

  return (
    <LangContext.Provider value={lang}>
      <div className="flex min-h-dvh flex-col pr-[max(18px,env(safe-area-inset-right))] pl-[max(18px,env(safe-area-inset-left))]">
        <AppBar onLang={chooseLang} />
        <main
          ref={mainRef}
          className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 pt-1 pb-10"
        >
          {step ? <StepHeader step={step} onBack={back} /> : null}
          <ErrorBoundary
            key={pageKey}
            fallback={{ ...ui[lang].broken, href: `#/${lang}/where` }}
          >
            {screen}
          </ErrorBoundary>
        </main>
        <footer className="mx-auto w-full max-w-3xl border-t border-line py-5 text-[13px] leading-normal text-ink-2">
          <p className="max-w-xl">{ui[lang].footer}</p>
          <p className="mt-3">
            © {YEAR} {site.author}
          </p>
          <nav aria-label={ui[lang].links} className="flex flex-wrap gap-x-5">
            {[
              [site.homepage, site.homepage.replace("https://", "")],
              [site.github, "GitHub"],
              [site.linkedin, "LinkedIn"],
              [site.repo, ui[lang].source],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="inline-flex min-h-11 items-center underline underline-offset-2"
              >
                {label}
              </a>
            ))}
          </nav>
        </footer>
        <Toast message={toast?.msg} />
      </div>
    </LangContext.Provider>
  );
}
