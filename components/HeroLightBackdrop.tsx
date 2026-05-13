/**
 * Abstract "illumination" backdrop for the homepage hero.
 * Pure CSS + inline SVG, no raster assets. Respects prefers-reduced-motion.
 */
const HeroLightBackdrop = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Layer 1 — dark canvas behind everything (so light reads) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#141414] to-[#080808]" />

      {/* Layer 2 — main warm spotlight, pushed further off-screen top-right */}
      <div
        className="absolute inset-0 motion-safe:animate-[lumenBreath_11s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 95% -5%, rgba(255,236,180,0.55) 0%, rgba(255,225,140,0.28) 22%, rgba(255,210,100,0.10) 45%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Layer 3 — neon-yellow brand core, tighter and dimmer */}
      <div
        className="absolute inset-0 motion-safe:animate-[lumenBreath_13s_ease-in-out_infinite_0.5s]"
        style={{
          background:
            "radial-gradient(circle 18% at 96% -2%, rgba(225,255,0,0.30) 0%, rgba(225,255,0,0.08) 40%, rgba(225,255,0,0) 70%)",
        }}
      />

      {/* Layer 4 — diagonal volumetric light rays (subtler) */}
      <svg
        className="absolute inset-0 w-full h-full motion-safe:animate-[lumenBreath_15s_ease-in-out_infinite_1s]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMaxYMin slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="rayGradient" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF4C2" stopOpacity="0.45" />
            <stop offset="40%" stopColor="#FFE89A" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FFE89A" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g style={{ mixBlendMode: "screen" }}>
          <polygon points="1440,0 1440,50 200,900 80,900" fill="url(#rayGradient)" opacity="0.35" />
          <polygon points="1440,40 1440,90 460,900 360,900" fill="url(#rayGradient)" opacity="0.25" />
          <polygon points="1440,140 1440,190 700,900 620,900" fill="url(#rayGradient)" opacity="0.18" />
          <polygon points="1440,280 1440,320 940,900 880,900" fill="url(#rayGradient)" opacity="0.12" />
        </g>
      </svg>

      {/* Layer 5 — readability scrim on the left where headline sits */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(8,8,8,0.70) 0%, rgba(8,8,8,0.40) 40%, rgba(8,8,8,0.10) 70%, rgba(8,8,8,0) 100%)",
        }}
      />

      {/* Layer 6 — bottom fade to background */}
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,15,15,0) 0%, hsl(var(--background)) 100%)",
        }}
      />
    </div>
  );
};

export default HeroLightBackdrop;
