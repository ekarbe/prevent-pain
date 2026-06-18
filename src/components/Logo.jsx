const Logo = () => (
  <div
    className="flex items-center gap-2 group cursor-pointer"
    onClick={() => window.location.reload()}
  >
    <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
      <defs>
        <linearGradient id="flexAlignGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#007AFF" />
          <stop offset="100%" stopColor="#0051C7" />
        </linearGradient>
        <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer circle with gap */}
      <circle
        cx="32"
        cy="32"
        r="24"
        stroke="url(#flexAlignGrad)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeDasharray="112 38"
        transform="rotate(-60 32 32)"
      />

      {/* Middle circle with gap */}
      <circle
        cx="32"
        cy="32"
        r="16"
        stroke="url(#flexAlignGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="76 24"
        transform="rotate(30 32 32)"
        opacity="0.85"
      />

      {/* Inner circle */}
      <circle
        cx="32"
        cy="32"
        r="8"
        stroke="url(#flexAlignGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="38 12"
        transform="rotate(120 32 32)"
        opacity="0.7"
      />

      {/* Pivot Arm */}
      <line
        x1="32"
        y1="32"
        x2="52"
        y2="12"
        stroke="url(#flexAlignGrad)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* Joint Node */}
      <circle
        cx="52"
        cy="12"
        r="5"
        fill="url(#flexAlignGrad)"
        filter="url(#subtleGlow)"
      />
    </svg>
    <div className="flex flex-col">
      <span className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 leading-none">
        Prevent
      </span>
      <span className="text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-500 leading-none">
        Pain
      </span>
    </div>
  </div>
);

export default Logo;
