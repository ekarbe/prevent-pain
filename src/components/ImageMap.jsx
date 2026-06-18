import { useState, useRef } from "react";
import { Crosshair } from "lucide-react";
import { bodyZones } from "../data/content";

const EXPANSION_OFFSET = 2.5; // percentage padding expansion for touch targets

const ImageMap = ({ selectedPart, onSelect }) => {
  const [clickCoords, setClickCoords] = useState(null);
  const imgRef = useRef(null);

  const imgSrc = "anatomy.png";
  const fallbackSrc =
    "https://media.gettyimages.com/id/188057891/de/vektor/diagram-illustrating-muscle-groups-on-front-of-human-legs.webp?s=612x612&w=gi&k=20&c=sW0RfSlzalBYB4dBk92LWgrR_11AP4tl1vAx08ar3BY=";

  const handleImageClick = (e) => {
    if (!imgRef.current) return;

    // 1. Get click coordinates relative to the image
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 2. Convert to percentages (0-100) for responsive mapping
    const xPct = (x / rect.width) * 100;
    const yPct = (y / rect.height) * 100;

    // 3. Update click marker visual
    setClickCoords({ x: xPct, y: yPct });

    // 4. Check which zone was clicked (using expanded target bounds for better accessibility)
    const foundZone = bodyZones.find((zone) => {
      const xMin = Math.max(zone.xMin - EXPANSION_OFFSET, 0);
      const xMax = Math.min(zone.xMax + EXPANSION_OFFSET, 100);
      const yMin = Math.max(zone.yMin - EXPANSION_OFFSET, 0);
      const yMax = Math.min(zone.yMax + EXPANSION_OFFSET, 100);
      return xPct >= xMin && xPct <= xMax && yPct >= yMin && yPct <= yMax;
    });

    if (foundZone) {
      onSelect(foundZone.id);
    }

    // Debugging: Log coordinates to help map new zones
    console.log(`Clicked at X: ${xPct.toFixed(1)}%, Y: ${yPct.toFixed(1)}%`);
  };

  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center bg-zinc-50/70 dark:bg-zinc-900/40 backdrop-blur-md rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 overflow-hidden shadow-sm transition-colors duration-300 group">
      <div className="absolute top-4 left-4 z-10 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md px-2.5 py-1.5 rounded-lg text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest shadow-sm border border-zinc-200/50 dark:border-zinc-800/50 flex items-center gap-1.5">
        <Crosshair className="w-3 h-3 text-blue-600 dark:text-blue-500" />{" "}
        Interactive Map
      </div>

      <div
        className="relative h-full w-full max-w-[300px] cursor-crosshair"
        onClick={handleImageClick}
      >
        <img
          ref={imgRef}
          src={imgSrc}
          onError={(e) => (e.currentTarget.src = fallbackSrc)}
          alt="Anatomy Map"
          className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-screen opacity-90 dark:opacity-85 hover:opacity-100 dark:hover:opacity-100 transition-all duration-300 dark:invert"
        />

        {clickCoords && (
          <div
            className="absolute w-6 h-6 -ml-3 -mt-3 border-2 border-blue-600 bg-blue-500/30 rounded-full animate-ping pointer-events-none"
            style={{ left: `${clickCoords.x}%`, top: `${clickCoords.y}%` }}
          />
        )}
        {clickCoords && (
          <div
            className="absolute w-3 h-3 -ml-1.5 -mt-1.5 bg-blue-600 dark:bg-blue-500 rounded-full shadow-lg pointer-events-none transition-all duration-300"
            style={{ left: `${clickCoords.x}%`, top: `${clickCoords.y}%` }}
          />
        )}

        {bodyZones.map((zone) => {
          const xMin = Math.max(zone.xMin - EXPANSION_OFFSET, 0);
          const xMax = Math.min(zone.xMax + EXPANSION_OFFSET, 100);
          const yMin = Math.max(zone.yMin - EXPANSION_OFFSET, 0);
          const yMax = Math.min(zone.yMax + EXPANSION_OFFSET, 100);
          return (
            <div
              key={zone.id}
              title={zone.id}
              className={`absolute transition-all duration-200 cursor-pointer rounded-lg ${
                selectedPart === zone.id
                  ? "bg-blue-500/20 border-2 border-blue-500"
                  : "hover:bg-blue-500/10 hover:border hover:border-dashed hover:border-blue-500/40"
              }`}
              style={{
                left: `${xMin}%`,
                width: `${xMax - xMin}%`,
                top: `${yMin}%`,
                height: `${yMax - yMin}%`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageMap;
