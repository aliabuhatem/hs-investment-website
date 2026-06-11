// Lightweight static globe used as the reduced-motion / no-WebGL fallback.
// Pure SVG — no JS, no animation.
export function StaticGlobe({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Stylized globe showing HS Investment Group's network across UAE, China, Turkey, Egypt, Yemen and Canada"
    >
      <defs>
        <radialGradient id="g-core" cx="40%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#1c2d38" />
          <stop offset="100%" stopColor="#0a1219" />
        </radialGradient>
        <radialGradient id="g-atmo" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="rgba(237,82,37,0)" />
          <stop offset="100%" stopColor="rgba(237,82,37,0.18)" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="180" fill="url(#g-atmo)" />
      <circle cx="200" cy="200" r="150" fill="url(#g-core)" />
      {/* Longitude / latitude lines */}
      <g stroke="#3a4a55" strokeWidth="1" fill="none" opacity="0.35">
        <ellipse cx="200" cy="200" rx="150" ry="150" />
        <ellipse cx="200" cy="200" rx="60" ry="150" />
        <ellipse cx="200" cy="200" rx="110" ry="150" />
        <ellipse cx="200" cy="200" rx="150" ry="55" />
        <ellipse cx="200" cy="200" rx="150" ry="105" />
      </g>
      {/* Capital-flow arcs */}
      <g stroke="#ED5225" strokeWidth="1.5" fill="none" opacity="0.7">
        <path d="M120 150 Q200 60 280 150" />
        <path d="M150 250 Q230 300 290 220" />
        <path d="M110 210 Q160 140 250 130" />
      </g>
      {/* Nodes */}
      <g fill="#ED5225">
        <circle cx="120" cy="150" r="5" />
        <circle cx="280" cy="150" r="5" />
        <circle cx="150" cy="250" r="5" />
        <circle cx="290" cy="220" r="5" />
        <circle cx="250" cy="130" r="5" />
        <circle cx="110" cy="210" r="5" />
      </g>
    </svg>
  );
}
