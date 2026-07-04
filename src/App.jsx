import { useState, useEffect } from "react";
import {
  ChevronRight,
  Activity,
  ArrowLeft,
  Info,
  AlertCircle,
  CheckCircle2,
  Sun,
  Moon,
} from "lucide-react";

import { bodyData } from "./data/content";
import Logo from "./components/Logo";
import ImageMap from "./components/ImageMap";
import ExerciseCard from "./components/ExerciseCard";
import TiltCard from "./components/TiltCard";

const App = () => {
  const [selectedPart, setSelectedPart] = useState(null);
  const [selectedCauseId, setSelectedCauseId] = useState(null);
  const [showWipModal, setShowWipModal] = useState(true);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handlePartSelect = (partId) => {
    setSelectedPart(partId);
    setSelectedCauseId(null);
    const panel = document.getElementById("control-panel");
    if (panel && window.innerWidth < 768) {
      setTimeout(() => panel.scrollIntoView({ behavior: "smooth" }), 100);
    }
  };

  const handleCauseSelect = (causeId) => {
    setSelectedCauseId(causeId);
  };

  const currentPartData = selectedPart ? bodyData[selectedPart] : null;
  const currentCauseData =
    currentPartData && selectedCauseId
      ? currentPartData.causes.find((c) => c.id === selectedCauseId)
      : null;

  return (
    <div className="min-h-screen relative font-sans pb-12 transition-colors duration-300">
      <div className="mesh-bg"></div>
      {showWipModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="glass-panel rounded-bento p-10 max-w-md w-full text-center transform animate-in fade-in zoom-in-95 duration-300">
            <h3 className="mb-3">
              Disclaimer & Instructions
            </h3>
            <p className="mb-6">
              This application provides educational strength training suggestions for minor muscle tightness or fatigue. It is <strong>not</strong> a substitute for professional medical advice. If you experience acute, sharp, sudden pain, or cannot bear weight, please consult a physician immediately.
            </p>
            <p className="mb-6 text-sm italic opacity-80">
              Instructions: Click on the interactive anatomy map (Front or Back view) to select your target zone and explore recovery programs.
            </p>
            <button
              onClick={() => setShowWipModal(false)}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white px-[1.75rem] py-[0.85rem] rounded-full font-semibold transition-all shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              I Understand & Acknowledge
            </button>
          </div>
        </div>
      )}

      <header className="glass-panel rounded-none border-x-0 border-t-0 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => {
                setSelectedPart(null);
                setSelectedCauseId(null);
              }}
              className="text-sm font-medium text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-500 transition-colors"
            >
              Reset view
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          <div className="flex flex-col gap-6">
            <div className="glass-panel rounded-bento p-10 min-h-[600px] flex flex-col transition-colors duration-300">
              <div className="mb-4">
                <h3 className="mb-2 flex items-center gap-2">
                  <Activity className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                  Locate the Pain
                </h3>
                <p>
                  Click the exact spot on the anatomy map.
                </p>
              </div>

              <ImageMap
                selectedPart={selectedPart}
                onSelect={handlePartSelect}
              />

              <div className="mt-4 text-center">
                <p className="text-xs text-zinc-400 dark:text-zinc-500 italic">
                  Tip: Click on the specific muscle group or joint (e.g., knee
                  cap, shin, hip bone).
                </p>
              </div>
            </div>

            <div className="glass-panel rounded-bento p-6 flex items-start gap-3 shadow-sm transition-colors duration-300 border-blue-500/20 dark:border-blue-500/30 bg-blue-500/5 dark:bg-blue-500/10">
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
                <strong>Note:</strong> This app provides strength training
                suggestions for semi-injured areas. If you have acute, sharp
                pain or cannot walk, please see a doctor immediately.
              </p>
            </div>
          </div>

          <div id="control-panel" className="flex flex-col gap-6 h-full">
            {!selectedPart && (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 glass-panel rounded-bento border-dashed min-h-[300px]">
                <Activity className="w-12 h-12 mb-4 opacity-20 text-apple-secondaryTextLight dark:text-apple-secondaryTextDark" />
                <h3 className="mb-2">
                  Click on the image to begin diagnosis
                </h3>
                <p className="text-sm opacity-60">
                  Try clicking the hips or knees
                </p>
              </div>
            )}

            {selectedPart && !selectedCauseId && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider">
                    STEP 1
                  </span>
                  <h2 className="mb-0">
                    {currentPartData.label}
                  </h2>
                </div>

                <p className="mb-8">
                  {currentPartData.description}
                </p>

                <h3 className="text-xs font-bold text-apple-secondaryTextLight dark:text-apple-secondaryTextDark uppercase tracking-widest mb-4">
                  Select Possible Cause
                </h3>

                <div className="space-y-3">
                  {currentPartData.causes.map((cause) => (
                    <TiltCard
                      key={cause.id}
                      className="w-full text-left p-6 group relative overflow-hidden"
                    >
                      <button onClick={() => handleCauseSelect(cause.id)} className="w-full h-full text-left outline-none cursor-pointer">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-bold text-lg text-apple-primaryTextLight dark:text-apple-primaryTextDark group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {cause.title}
                            </h4>
                            <p className="text-sm mt-1">
                              {cause.description}
                            </p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-apple-secondaryTextLight dark:text-apple-secondaryTextDark group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                        </div>
                      </button>
                    </TiltCard>
                  ))}
                </div>
              </div>
            )}

            {selectedPart && selectedCauseId && currentCauseData && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300 h-full flex flex-col">
                <button
                  onClick={() => setSelectedCauseId(null)}
                  className="self-start text-sm text-apple-secondaryTextLight hover:text-apple-primaryTextLight dark:text-apple-secondaryTextDark dark:hover:text-apple-primaryTextDark flex items-center gap-1 mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to causes
                </button>

                <div className="glass-panel !bg-apple-primaryTextLight dark:!bg-apple-cardDark text-apple-lightBg p-8 rounded-t-bento border-b-0 border-apple-borderLight dark:border-apple-borderDark relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 dark:bg-white/5"></div>
                  <div className="relative flex items-start justify-between">
                    <div>
                      <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2 block">
                        Rehab Plan
                      </span>
                      <h2 className="!text-apple-lightBg dark:!text-apple-primaryTextDark">
                        {currentCauseData.title}
                      </h2>
                    </div>
                    <CheckCircle2 className="w-8 h-8 text-blue-500 opacity-90" />
                  </div>
                </div>

                <div className="glass-panel p-8 rounded-b-bento rounded-t-none flex-grow border-t-0">
                  <div className="mb-6">
                    <h3 className="text-xs font-bold text-apple-secondaryTextLight dark:text-apple-secondaryTextDark uppercase tracking-widest mb-4">
                      Recommended Exercises
                    </h3>
                    <div className="space-y-4">
                      {currentCauseData.exercises.map((ex, idx) => (
                        <ExerciseCard key={idx} exercise={ex} />
                      ))}
                    </div>
                  </div>

                  <div className="glass-panel rounded-bento p-6 flex items-start gap-3 mt-8 border-amber-500/20 bg-amber-500/5 dark:bg-amber-500/10">
                    <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                    <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                      Perform these exercises 2-3 times per week. If pain
                      increases during the exercise, stop immediately and
                      regress to an easier variation.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
