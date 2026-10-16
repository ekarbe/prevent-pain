import { useId } from "react";
import { body, silhouette } from "../figures/body.js";

// SVG ids must be safe inside url(#…); React's useId can contain characters that aren't.
const useSvgId = () => `f${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

// Front or back of the lower body. Bands are pointer targets only; the region list next to it is the
// accessible way to choose, so the drawing itself is hidden from assistive technology.
export function BodyFigure({ side, selected, onSelect, names }) {
  const id = useSvgId();
  const { bands, details } = body[side];
  return (
    <svg
      viewBox="-6 -8 172 414"
      className="h-auto w-full max-w-[168px]"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={id}>
          <path d={silhouette} />
        </clipPath>
      </defs>
      <path d={silhouette} className="fig-sil" />
      <g clipPath={`url(#${id})`}>
        {bands.map(([regionId, y, h]) => (
          <rect
            key={regionId}
            x="0"
            y={y}
            width="160"
            height={h}
            className={`fig-band ${selected === regionId ? "is-on" : ""}`}
            onClick={() => onSelect(regionId)}
          >
            <title>{names[regionId]}</title>
          </rect>
        ))}
        {bands.slice(1).map(([regionId, y]) => (
          <line
            key={regionId}
            x1="0"
            x2="160"
            y1={y}
            y2={y}
            className="fig-sep"
          />
        ))}
      </g>
      <path d={details} className="fig-detail" />
      <path d={silhouette} className="fig-outline" />
    </svg>
  );
}

// One view of a region close-up with tappable spots.
export function CloseupFigure({ view, selected, onSelect, names, edges }) {
  return (
    <svg
      viewBox="-10 -6 260 318"
      className="h-auto w-full max-w-[300px]"
      aria-hidden="true"
    >
      <path d={view.outline} className="fig-sil" />
      <path d={view.details} className="fig-detail" />
      <path d={view.outline} className="fig-outline" />
      {view.edges ? (
        <>
          <text x="-4" y="306" className="fig-edge">
            {edges[view.edges[0]]}
          </text>
          <text x="244" y="306" className="fig-edge" textAnchor="end">
            {edges[view.edges[1]]}
          </text>
        </>
      ) : null}
      {Object.entries(view.spots).map(([spotId, [x, y]]) => (
        <g
          key={spotId}
          className={`fig-spot ${selected === spotId ? "is-on" : ""}`}
          transform={`translate(${x} ${y})`}
          onClick={() => onSelect(spotId)}
        >
          <title>{names[spotId]}</title>
          <circle r="22" className="fig-spot-hit" />
          <circle r="13" className="fig-spot-ring" />
          <circle r="6.5" className="fig-spot-dot" />
        </g>
      ))}
    </svg>
  );
}
