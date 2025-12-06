import React, { useState, useRef } from 'react';
import { ChevronRight, Activity, ArrowLeft, Info, AlertCircle, CheckCircle2 } from 'lucide-react';

import { bodyData } from './data/content';
import Logo from './components/Logo';
import ImageMap from './components/ImageMap';
import ExerciseCard from './components/ExerciseCard';

const App = () => {
    const [selectedPart, setSelectedPart] = useState(null);
    const [selectedCauseId, setSelectedCauseId] = useState(null);
    const [showWipModal, setShowWipModal] = useState(true);
  
    const handlePartSelect = (partId) => {
      setSelectedPart(partId);
      setSelectedCauseId(null); 
      const panel = document.getElementById('control-panel');
      if (panel && window.innerWidth < 768) {
          setTimeout(() => panel.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    };
  
    const handleCauseSelect = (causeId) => {
      setSelectedCauseId(causeId);
    };
  
    const currentPartData = selectedPart ? bodyData[selectedPart] : null;
    const currentCauseData = currentPartData && selectedCauseId 
      ? currentPartData.causes.find(c => c.id === selectedCauseId) 
      : null;
  
    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
        {showWipModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center transform animate-in fade-in zoom-in-95 duration-300">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">WIP</h2>
              <p className="text-slate-600 mb-6">
                This project is a work in progress! Right now there is no content and only the basic functionality as a proof of concept is available.
              </p>
              <button
                onClick={() => setShowWipModal(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Logo />
            <button 
              onClick={() => {setSelectedPart(null); setSelectedCauseId(null);}}
              className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
            >
              Reset view
            </button>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            
            <div className="flex flex-col gap-4">
               <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 min-h-[600px] flex flex-col">
                  <div className="mb-4">
                      <h2 className="text-lg font-semibold text-slate-800 mb-1 flex items-center gap-2">
                          <Activity className="w-5 h-5 text-blue-600" />
                          Locate the Pain
                      </h2>
                      <p className="text-slate-500 text-sm">Click the exact spot on the anatomy map.</p>
                  </div>
                  
                  <ImageMap selectedPart={selectedPart} onSelect={handlePartSelect} />
                  
                  <div className="mt-4 text-center">
                      <p className="text-xs text-slate-400 italic">
                          Tip: Click on the specific muscle group or joint (e.g., knee cap, shin, hip bone).
                      </p>
                  </div>
               </div>
               
               <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-800">
                      <strong>Note:</strong> This app provides strength training suggestions for semi-injured areas. If you have acute, sharp pain or cannot walk, please see a doctor immediately.
                  </p>
               </div>
            </div>
  
            <div id="control-panel" className="flex flex-col gap-6 h-full">
              
              {!selectedPart && (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-white rounded-xl border border-dashed border-slate-300 text-slate-400">
                      <Activity className="w-12 h-12 mb-4 opacity-20" />
                      <p className="text-lg font-medium">Click on the image to begin diagnosis</p>
                      <p className="text-sm opacity-60 mt-2">Try clicking the hips or knees</p>
                  </div>
              )}
  
              {selectedPart && !selectedCauseId && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="flex items-center gap-2 mb-6">
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold tracking-wide">STEP 1</span>
                          <h2 className="text-2xl font-bold text-slate-800">{currentPartData.label}</h2>
                      </div>
                      
                      <p className="text-slate-600 mb-6">{currentPartData.description}</p>
  
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Select Possible Cause</h3>
                      
                      <div className="space-y-3">
                          {currentPartData.causes.map((cause) => (
                              <button
                                  key={cause.id}
                                  onClick={() => handleCauseSelect(cause.id)}
                                  className="w-full text-left p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md transition-all group relative overflow-hidden"
                              >
                                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                  <div className="flex justify-between items-center">
                                      <div>
                                          <h4 className="font-bold text-slate-800 group-hover:text-blue-700">{cause.title}</h4>
                                          <p className="text-sm text-slate-500 mt-1">{cause.description}</p>
                                      </div>
                                      <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500" />
                                  </div>
                              </button>
                          ))}
                      </div>
                  </div>
              )}
  
              {selectedPart && selectedCauseId && currentCauseData && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300 h-full flex flex-col">
                      <button 
                          onClick={() => setSelectedCauseId(null)}
                          className="self-start text-sm text-slate-500 hover:text-slate-800 flex items-center gap-1 mb-4"
                      >
                          <ArrowLeft className="w-4 h-4" /> Back to causes
                      </button>
  
                      <div className="bg-slate-900 text-white p-6 rounded-t-xl">
                          <div className="flex items-start justify-between">
                              <div>
                                  <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-1 block">Rehab Plan</span>
                                  <h2 className="text-2xl font-bold">{currentCauseData.title}</h2>
                              </div>
                              <CheckCircle2 className="w-8 h-8 text-green-400 opacity-80" />
                          </div>
                      </div>
                      
                      <div className="bg-white border-x border-b border-slate-200 p-6 rounded-b-xl flex-grow shadow-sm">
                          <div className="mb-6">
                              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Recommended Exercises</h3>
                              <div className="space-y-4">
                                  {currentCauseData.exercises.map((ex, idx) => (
                                      <ExerciseCard key={idx} exercise={ex} />
                                  ))}
                              </div>
                          </div>
  
                          <div className="bg-amber-50 border border-amber-100 p-4 rounded-lg flex items-start gap-3 text-sm text-amber-900">
                               <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                               <p>Perform these exercises 2-3 times per week. If pain increases during the exercise, stop immediately and regress to an easier variation.</p>
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
