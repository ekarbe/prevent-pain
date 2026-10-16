import { ArrowRight } from "lucide-react";
import { causes, regions } from "../content/index.js";
import { pick, useLang, useT } from "../i18n/lang.js";
import Link from "../components/Link.jsx";

// Everything the app covers as plain links, for anyone who knows what they're looking for, and so
// search engines find every page.
export default function Topics({ route }) {
  const t = useT();
  const lang = useLang();
  const at = { ...route, tests: {} };

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-4 pt-3">
      <h1 tabIndex={-1} className="page-title">
        {t.titles.topics}
      </h1>
      <p className="lead">{t.topicsLead}</p>
      <Link to={{ ...at, screen: "region" }} className="btn">
        {t.topicsStart}
        <ArrowRight className="size-[18px] flex-none" aria-hidden="true" />
      </Link>
      {regions.map((region) => (
        <section key={region.id} className="sec">
          <h2 className="sec-title">
            <Link
              to={{ ...at, screen: "spot", region: region.id }}
              className="underline-offset-4 hover:underline"
            >
              {pick(region, lang).name}
            </Link>
          </h2>
          {region.spots.map((spot) => {
            const where = { ...at, region: region.id, spot: spot.id };
            return (
              <div key={spot.id} className="flex flex-col gap-1">
                <h3 className="font-bold">
                  <Link
                    to={{ ...where, screen: "causes" }}
                    className="underline-offset-4 hover:underline"
                  >
                    {pick(spot, lang).name}
                  </Link>
                </h3>
                <ul className="flex flex-col pl-0.5">
                  {spot.causes
                    .filter((id) => causes[id])
                    .map((id) => (
                      <li key={id}>
                        <Link
                          to={{ ...where, screen: "plan", cause: id }}
                          className="inline-flex min-h-11 items-center text-[15px] text-accent underline decoration-1 underline-offset-2"
                        >
                          {pick(causes[id], lang).name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            );
          })}
        </section>
      ))}
    </div>
  );
}
