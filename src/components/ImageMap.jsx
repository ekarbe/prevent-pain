import React, { useState, useRef } from 'react';
import { Crosshair } from 'lucide-react';
import { bodyZones } from '../data/content';

const ImageMap = ({ selectedPart, onSelect }) => {
    const [clickCoords, setClickCoords] = useState(null);
    const imgRef = useRef(null);
  
    const imgSrc = "anatomy.png";
    const fallbackSrc = "https://media.gettyimages.com/id/188057891/de/vektor/diagram-illustrating-muscle-groups-on-front-of-human-legs.webp?s=612x612&w=gi&k=20&c=sW0RfSlzalBYB4dBk92LWgrR_11AP4tl1vAx08ar3BY=";
  
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
  
      // 4. Check which zone was clicked
      const foundZone = bodyZones.find(
        (z) => xPct >= z.xMin && xPct <= z.xMax && yPct >= z.yMin && yPct <= z.yMax
      );
  
      if (foundZone) {
        onSelect(foundZone.id);
      } else {
        // Optional: Deselect if clicked outside any zone
        // onSelect(null);
      }
  
      // Debugging: Log coordinates to help map new zones
      console.log(`Clicked at X: ${xPct.toFixed(1)}%, Y: ${yPct.toFixed(1)}%`);
    };
  
    return (
      <div className="relative w-full h-full min-h-[500px] flex items-center justify-center bg-slate-100 rounded-xl border border-slate-200 overflow-hidden group">
        <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur px-2 py-1 rounded text-xs font-semibold text-slate-500 uppercase tracking-widest shadow-sm border border-slate-200 flex items-center gap-1">
          <Crosshair className="w-3 h-3" /> Interactive Map
        </div>
        
        <div className="relative h-full w-full max-w-[300px] cursor-crosshair" onClick={handleImageClick}>
          <img 
            ref={imgRef}
            src={imgSrc}
            onError={(e) => e.currentTarget.src = fallbackSrc}
            alt="Anatomy Map" 
            className="w-full h-full object-contain mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity"
          />
          
          {clickCoords && (
            <div 
              className="absolute w-6 h-6 -ml-3 -mt-3 border-2 border-blue-600 bg-blue-500/30 rounded-full animate-ping pointer-events-none"
              style={{ left: `${clickCoords.x}%`, top: `${clickCoords.y}%` }}
            />
          )}
          {clickCoords && (
             <div 
               className="absolute w-3 h-3 -ml-1.5 -mt-1.5 bg-blue-600 rounded-full shadow-lg pointer-events-none transition-all duration-300"
               style={{ left: `${clickCoords.x}%`, top: `${clickCoords.y}%` }}
             />
          )}
  
          {bodyZones.map((zone) => (
            <div
              key={zone.id}
              title={zone.id}
              className={`absolute transition-colors duration-200 ${selectedPart === zone.id ? 'bg-blue-500/20 border-blue-500' : 'hover:bg-blue-500/10'}`}
              style={{
                left: `${zone.xMin}%`,
                width: `${zone.xMax - zone.xMin}%`,
                top: `${zone.yMin}%`,
                height: `${zone.yMax - zone.yMin}%`,
                // border: '3px dashed rgba(0,0,0,0.1)' //mark zones permanently for debugging
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  export default ImageMap;
