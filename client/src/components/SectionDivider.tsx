/* Design: Dark Cosmos — subtle wave divider between sections */

export function WaveDividerTop() {
  return (
    <div className="relative -mt-1 overflow-hidden">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-8 lg:h-12"
        fill="none"
      >
        <path
          d="M0,0 C360,50 1080,10 1440,40 L1440,60 L0,60 Z"
          fill="rgba(6, 182, 212, 0.03)"
        />
      </svg>
    </div>
  );
}

export function WaveDividerBottom() {
  return (
    <div className="relative -mb-1 overflow-hidden">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-8 lg:h-12 rotate-180"
        fill="none"
      >
        <path
          d="M0,0 C360,50 1080,10 1440,40 L1440,60 L0,60 Z"
          fill="rgba(6, 182, 212, 0.03)"
        />
      </svg>
    </div>
  );
}

export function GlowDivider() {
  return (
    <div className="relative py-2">
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </div>
  );
}
