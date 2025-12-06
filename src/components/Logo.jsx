import React from 'react';

const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.location.reload()}>
    <svg width="60" height="60" viewBox="0 0 95 80" className="text-blue-600">
      <text
        x="0" y="65"
        fontFamily="Times New Roman, Times, serif"
        fontSize="80" fontWeight="bold" fill="currentColor"
      >PP</text>
    </svg>
    <div className="flex flex-col">
      <span className="text-2xl font-bold tracking-tight text-slate-800 leading-none">Prevent</span>
      <span className="text-2xl font-bold tracking-tight text-blue-600 leading-none">Pain</span>
    </div>
  </div>
);

export default Logo;
