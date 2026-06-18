import { useState, useEffect } from "react";
import { Crosshair, RefreshCw } from "lucide-react";

// Precise SVG paths for Front (Anterior) and Back (Posterior) views
const MAP_PATHS = {
  front: [
    {
      id: "hips",
      name: "Hips (Hip Flexors)",
      paths: [
        "M 80 85 C 65 105 70 120 83 130 C 95 130 110 125 118 120 L 118 85 C 103 83 93 83 80 85 Z",
        "M 160 85 C 175 105 170 120 157 130 C 145 130 130 125 122 120 L 122 85 C 137 83 147 83 160 85 Z"
      ]
    },
    {
      id: "thighs",
      name: "Thighs (Quadriceps)",
      paths: [
        "M 83 130 C 68 160 70 200 83 230 C 93 230 110 225 118 220 L 118 120 Z",
        "M 157 130 C 172 160 170 200 157 230 C 147 230 130 225 122 220 L 122 120 Z"
      ]
    },
    {
      id: "knees",
      name: "Knees (Patella)",
      paths: [
        "M 83 230 C 80 245 80 255 86 265 C 93 268 103 268 111 265 C 115 255 115 245 118 230 Z",
        "M 157 230 C 160 245 160 255 154 265 C 147 268 137 268 129 265 C 125 255 125 245 122 230 Z"
      ],
      joints: [{ x: 97, y: 247 }, { x: 143, y: 247 }]
    },
    {
      id: "calves",
      name: "Shins (Tibialis)",
      paths: [
        "M 86 265 C 80 300 80 340 90 380 C 97 380 102 380 106 375 L 111 265 Z",
        "M 154 265 C 160 300 160 340 150 380 C 143 380 138 380 134 375 L 129 265 Z"
      ]
    },
    {
      id: "ankles",
      name: "Ankles & Feet",
      paths: [
        "M 90 380 C 88 395 86 405 88 410 C 92 420 102 425 106 420 C 108 405 106 395 106 380 Z",
        "M 150 380 C 152 395 154 405 152 415 C 148 420 138 425 134 420 C 132 405 134 395 134 380 Z"
      ],
      joints: [{ x: 97, y: 397 }, { x: 143, y: 397 }]
    }
  ],
  back: [
    {
      id: "lower-back",
      name: "Lower Back (Lumbar)",
      paths: [
        "M 85 45 C 95 40 145 40 155 45 C 160 60 160 70 155 80 C 145 85 95 85 85 80 C 80 70 80 60 85 45 Z"
      ]
    },
    {
      id: "hips",
      name: "Hips (Glutes)",
      paths: [
        "M 85 80 C 95 85 118 85 118 90 L 118 133 C 100 138 82 138 70 127 C 65 113 70 93 85 80 Z",
        "M 155 80 C 145 85 122 85 122 90 L 122 133 C 140 138 158 138 170 127 C 175 113 170 93 155 80 Z"
      ]
    },
    {
      id: "thighs",
      name: "Thighs (Hamstrings)",
      paths: [
        "M 70 127 C 82 138 118 133 118 133 L 115 230 C 105 230 85 230 75 230 C 63 200 60 160 70 127 Z",
        "M 170 127 C 158 138 122 133 122 133 L 125 230 C 135 230 155 230 165 230 C 177 200 180 160 170 127 Z"
      ]
    },
    {
      id: "knees",
      name: "Knees (Back Knee)",
      paths: [
        "M 75 230 C 72 245 72 255 78 265 C 88 268 98 268 108 265 L 115 230 Z",
        "M 165 230 C 168 245 168 255 162 265 C 152 268 142 268 132 265 L 125 230 Z"
      ],
      joints: [{ x: 96, y: 247 }, { x: 144, y: 247 }]
    },
    {
      id: "calves",
      name: "Calves",
      paths: [
        "M 78 265 C 72 300 70 345 82 380 L 108 265 Z",
        "M 162 265 C 168 300 170 345 158 380 L 132 265 Z"
      ]
    },
    {
      id: "ankles",
      name: "Ankles (Achilles/Heel)",
      paths: [
        "M 82 380 C 80 395 78 405 80 415 C 85 420 95 425 102 420 L 102 380 Z",
        "M 158 380 C 160 395 162 405 160 415 C 155 420 145 425 138 420 L 138 380 Z"
      ],
      joints: [{ x: 91, y: 400 }, { x: 149, y: 400 }]
    }
  ]
};

const ImageMap = ({ selectedPart, onSelect }) => {
  const [viewMode, setViewMode] = useState("front");
  const [hoveredZone, setHoveredZone] = useState(null);

  // Auto-switch view when external selections occur (e.g. lower-back is only visible on the back)
  useEffect(() => {
    if (selectedPart === "lower-back") {
      setViewMode("back");
    }
  }, [selectedPart]);

  const currentZones = MAP_PATHS[viewMode];

  return (
    <div className="relative w-full h-full min-h-[520px] flex flex-col items-center justify-between bg-zinc-50/70 dark:bg-zinc-900/40 backdrop-blur-md rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 p-6 shadow-sm transition-colors duration-300">
      
      {/* Header Controls */}
      <div className="w-full flex items-center justify-between mb-4">
        <div className="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md px-2.5 py-1.5 rounded-lg text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest shadow-sm border border-zinc-200/50 dark:border-zinc-800/50 flex items-center gap-1.5">
          <Crosshair className="w-3 h-3 text-blue-600 dark:text-blue-500 animate-pulse" />
          {selectedPart ? "Zone Selected" : "Select Pain Area"}
        </div>

        {/* View Toggle */}
        <div className="flex bg-zinc-150 dark:bg-zinc-800/60 p-0.5 rounded-lg border border-zinc-200/50 dark:border-zinc-700/50">
          <button
            type="button"
            onClick={() => setViewMode("front")}
            className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all duration-200 ${
              viewMode === "front"
                ? "bg-white dark:bg-zinc-700 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
            }`}
          >
            Anterior (Front)
          </button>
          <button
            type="button"
            disabled={selectedPart === "lower-back"} // Lock back if lower-back is selected
            onClick={() => setViewMode("back")}
            className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all duration-200 disabled:opacity-50 ${
              viewMode === "back"
                ? "bg-white dark:bg-zinc-700 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
            }`}
            title={selectedPart === "lower-back" ? "Lower Back is only visible on posterior view" : ""}
          >
            Posterior (Back)
          </button>
        </div>
      </div>

      {/* SVG Canvas Container */}
      <div className="relative w-full max-w-[280px] h-[420px] flex items-center justify-center">
        <svg
          viewBox="0 0 240 460"
          className="w-full h-full select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Soft Glow Filter for selected states */}
            <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Premium Metallic Gradient for the default anatomical fill */}
            <linearGradient id="bodyMesh" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e4e4e7" className="dark:stop-color-zinc-800" />
              <stop offset="100%" stopColor="#d4d4d8" className="dark:stop-color-zinc-900" />
            </linearGradient>
          </defs>

          {/* Symmetrical grid/medical guidelines in background */}
          <line x1="120" y1="10" x2="120" y2="450" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800" strokeWidth="1" strokeDasharray="5 5" />
          <line x1="10" y1="230" x2="230" y2="230" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800" strokeWidth="1" strokeDasharray="5 5" />

          {/* 1. ANATOMICAL BASE LAYER (Shows the physical leg structure) */}
          {currentZones.map((zone) => (
            <g key={`base-${zone.id}`} className="transition-all duration-300">
              {zone.paths.map((d, index) => (
                <path
                  key={index}
                  d={d}
                  className="fill-zinc-200/70 dark:fill-zinc-800/40 stroke-zinc-300 dark:stroke-zinc-800 transition-colors duration-300"
                  strokeWidth="1.5"
                />
              ))}
            </g>
          ))}

          {/* 2. INTERACTIVE SELECTION LAYER */}
          {currentZones.map((zone) => {
            const isSelected = selectedPart === zone.id;
            const isHovered = hoveredZone === zone.id;

            return (
              <g
                key={`interactive-${zone.id}`}
                onClick={() => onSelect(zone.id)}
                onMouseEnter={() => setHoveredZone(zone.id)}
                onMouseLeave={() => setHoveredZone(null)}
                className="cursor-pointer group focus:outline-none"
              >
                {/* Invisible larger stroke buffer for easy touch targets */}
                {zone.paths.map((d, index) => (
                  <path
                    key={`hitbox-${index}`}
                    d={d}
                    fill="transparent"
                    stroke="transparent"
                    strokeWidth="12"
                  />
                ))}

                {/* Visible interactive paths */}
                {zone.paths.map((d, index) => (
                  <path
                    key={`visual-${index}`}
                    d={d}
                    className={`transition-all duration-300 ${
                      isSelected
                        ? "fill-blue-500/25 dark:fill-blue-500/35 stroke-blue-500 dark:stroke-blue-400 stroke-[2.5px]"
                        : isHovered
                        ? "fill-blue-500/10 dark:fill-blue-500/15 stroke-blue-400 dark:stroke-blue-500 stroke-2"
                        : "fill-transparent stroke-transparent"
                    }`}
                    filter={isSelected ? "url(#svgGlow)" : ""}
                  />
                ))}

                {/* Optional Joint Circles/Pulses when selected */}
                {isSelected &&
                  zone.joints &&
                  zone.joints.map((joint, idx) => (
                    <g key={`joint-${idx}`}>
                      <circle
                        cx={joint.x}
                        cy={joint.y}
                        r="10"
                        className="fill-blue-500/20 stroke-blue-500/40 stroke-1 animate-ping origin-center"
                      />
                      <circle
                        cx={joint.x}
                        cy={joint.y}
                        r="5"
                        className="fill-blue-500 dark:fill-blue-400 shadow-md"
                      />
                    </g>
                  ))}
              </g>
            );
          })}
        </svg>

        {/* Hover/Selection HUD Overlays */}
        <div className="absolute bottom-2 left-0 right-0 text-center pointer-events-none transition-all duration-300">
          <span className="inline-block bg-white/90 dark:bg-zinc-950/90 border border-zinc-200/50 dark:border-zinc-800/80 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-zinc-650 dark:text-zinc-350 shadow-sm uppercase backdrop-blur-md">
            {hoveredZone
              ? currentZones.find((z) => z.id === hoveredZone)?.name
              : selectedPart
              ? currentZones.find((z) => z.id === selectedPart)?.name || "Lower Back"
              : "Hover over body regions"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageMap;
