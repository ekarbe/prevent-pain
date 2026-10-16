// Concentric rings with a pivot arm: a joint moving through its range.
export default function Logo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="32"
        cy="32"
        r="24"
        strokeWidth="4.5"
        strokeDasharray="112 38"
        transform="rotate(-60 32 32)"
      />
      <circle
        cx="32"
        cy="32"
        r="16"
        strokeWidth="3.5"
        strokeDasharray="76 24"
        transform="rotate(30 32 32)"
        opacity="0.85"
      />
      <circle
        cx="32"
        cy="32"
        r="8"
        strokeWidth="2.5"
        strokeDasharray="38 12"
        transform="rotate(120 32 32)"
        opacity="0.7"
      />
      <line x1="32" y1="32" x2="52" y2="12" strokeWidth="4.5" />
      <circle cx="52" cy="12" r="5" fill="currentColor" stroke="none" />
    </svg>
  );
}
