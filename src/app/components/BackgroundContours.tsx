export function BackgroundContours() {
  return (
    <div className="pointer-events-none absolute inset-0 w-full h-full" aria-hidden="true">
      {/* Orange left-to-right gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(234,94,40,0.18) 0%, rgba(234,94,40,0.08) 30%, rgba(234,94,40,0.02) 60%, transparent 100%)",
        }}
      />
      {/* Grain overlay via SVG feTurbulence */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" mode="overlay" result="blend" />
          <feComposite in="blend" in2="SourceGraphic" operator="in" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" opacity="0.09" />
      </svg>
    </div>
  );
}
