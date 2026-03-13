/* Design: Dark Cosmos — Interactive real Africa map with country borders and glow effects */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useMemo } from "react";
import { MapPin, Signal } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { africaCountries } from "./africaMapData";

interface CoveredCountry {
  name: string;
  code: string;
  region: string;
}

const coveredCountries: CoveredCountry[] = [
  { name: "Guinea-Bissau", code: "GW", region: "West Africa" },
  { name: "Sierra Leone", code: "SL", region: "West Africa" },
  { name: "Liberia", code: "LR", region: "West Africa" },
  { name: "Ghana", code: "GH", region: "West Africa" },
  { name: "Benin", code: "BJ", region: "West Africa" },
  { name: "Niger", code: "NE", region: "West Africa" },
  { name: "Nigeria", code: "NG", region: "West Africa" },
  { name: "Chad", code: "TD", region: "Central Africa" },
  { name: "South Sudan", code: "SS", region: "East Africa" },
  { name: "DR Congo", code: "CD", region: "Central Africa" },
  { name: "Rwanda", code: "RW", region: "East Africa" },
  { name: "Burundi", code: "BI", region: "East Africa" },
  { name: "Somalia", code: "SO", region: "East Africa" },
  { name: "Kenya", code: "KE", region: "East Africa" },
  { name: "Zambia", code: "ZM", region: "Southern Africa" },
  { name: "Malawi", code: "MW", region: "Southern Africa" },
  { name: "Mozambique", code: "MZ", region: "Southern Africa" },
  { name: "Zimbabwe", code: "ZW", region: "Southern Africa" },
  { name: "Botswana", code: "BW", region: "Southern Africa" },
  { name: "Swaziland", code: "SZ", region: "Southern Africa" },
  { name: "Lesotho", code: "LS", region: "Southern Africa" },
  { name: "Madagascar", code: "MG", region: "Indian Ocean" },
  { name: "La Reunion", code: "RE", region: "Indian Ocean" },
  { name: "Mauritius", code: "MU", region: "Indian Ocean" },
];

const coveredCodes = new Set(coveredCountries.map(c => c.code));
const regions = Array.from(new Set(coveredCountries.map(c => c.region)));

function getRegionForCode(code: string): string | undefined {
  return coveredCountries.find(c => c.code === code)?.region;
}

export default function CoverageMap() {
  const { ref, visible } = useScrollReveal();
  const [hovered, setHovered] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const { t } = useLanguage();

  const filteredCovered = useMemo(() => {
    if (!selectedRegion) return coveredCountries;
    return coveredCountries.filter(c => c.region === selectedRegion);
  }, [selectedRegion]);

  const getRegionLabel = (region: string) => {
    return t(`coverage.regions.${region}`) || region;
  };

  return (
    <section id="coverage" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div ref={ref} className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-12 reveal ${visible ? "visible" : ""}`}>
          <span className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase font-[Inter_Tight] mb-4 block">
            {t("coverage.label")}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-[Outfit]">
            {t("coverage.title")} <span className="text-gradient">{t("coverage.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-400">
            {t("coverage.description")}
          </p>
        </div>

        {/* Region filter */}
        <div className={`flex flex-wrap items-center justify-center gap-2 mb-8 reveal ${visible ? "visible" : ""}`}>
          <button
            onClick={() => setSelectedRegion(null)}
            className={`px-4 py-2 rounded-full text-xs font-medium font-[Inter_Tight] transition-all ${
              !selectedRegion
                ? "bg-cyan-500 text-[#030712]"
                : "bg-white/5 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
            }`}
          >
            {t("coverage.allRegions")}
          </button>
          {regions.map(r => (
            <button
              key={r}
              onClick={() => setSelectedRegion(r === selectedRegion ? null : r)}
              className={`px-4 py-2 rounded-full text-xs font-medium font-[Inter_Tight] transition-all ${
                selectedRegion === r
                  ? "bg-cyan-500 text-[#030712]"
                  : "bg-white/5 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
              }`}
            >
              {getRegionLabel(r)}
            </button>
          ))}
        </div>

        <div className={`relative max-w-4xl mx-auto reveal-scale ${visible ? "visible" : ""}`}>
          <div className="relative bg-white/[0.02] glow-border rounded-2xl p-4 lg:p-8 backdrop-blur-sm">
            {/* SVG Glow filter definitions */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <filter id="glow-active" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="glow-hover" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
            </svg>

            <svg
              viewBox="60 0 780 900"
              className="w-full h-auto"
              style={{ maxHeight: "600px" }}
            >
              {/* Grid lines for spatial feel */}
              {[100, 200, 300, 400, 500, 600, 700, 800].map(y => (
                <line key={`h-${y}`} x1="60" y1={y} x2="840" y2={y} stroke="rgba(6, 182, 212, 0.03)" strokeWidth="0.5" />
              ))}
              {[100, 200, 300, 400, 500, 600, 700, 800].map(x => (
                <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="900" stroke="rgba(6, 182, 212, 0.03)" strokeWidth="0.5" />
              ))}

              {/* All countries */}
              {africaCountries.map((country) => {
                const isCovered = coveredCodes.has(country.code);
                const region = getRegionForCode(country.code);
                const isHoveredCountry = hovered === country.code;
                const isFilteredOut = selectedRegion && (!isCovered || region !== selectedRegion);

                let fillColor = "rgba(255, 255, 255, 0.03)";
                let strokeColor = "rgba(255, 255, 255, 0.08)";
                let strokeWidth = 0.5;
                let opacity = 1;

                if (isCovered) {
                  if (isFilteredOut) {
                    fillColor = "rgba(6, 182, 212, 0.04)";
                    strokeColor = "rgba(6, 182, 212, 0.12)";
                    opacity = 0.5;
                  } else if (isHoveredCountry) {
                    fillColor = "rgba(6, 182, 212, 0.25)";
                    strokeColor = "rgba(6, 182, 212, 0.6)";
                    strokeWidth = 1.5;
                  } else {
                    fillColor = "rgba(6, 182, 212, 0.12)";
                    strokeColor = "rgba(6, 182, 212, 0.35)";
                    strokeWidth = 0.8;
                  }
                } else {
                  fillColor = "rgba(255, 255, 255, 0.03)";
                  strokeColor = "rgba(255, 255, 255, 0.08)";
                  if (selectedRegion) {
                    fillColor = "rgba(255, 255, 255, 0.025)";
                    strokeColor = "rgba(255, 255, 255, 0.12)";
                  }
                  if (isHoveredCountry) {
                    fillColor = "rgba(255, 255, 255, 0.06)";
                    strokeColor = "rgba(255, 255, 255, 0.15)";
                    opacity = 1;
                  }
                }

                return (
                  <g key={country.code}>
                    <path
                      d={country.path}
                      fill={fillColor}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      strokeLinejoin="round"
                      className="transition-all duration-500 cursor-pointer"
                      style={{ opacity, filter: isCovered && isHoveredCountry ? "url(#glow-hover)" : undefined }}
                      onMouseEnter={() => setHovered(country.code)}
                      onMouseLeave={() => setHovered(null)}
                    />
                    {/* Pulsing dot for covered countries */}
                    {isCovered && !isFilteredOut && (
                      <g
                        onMouseEnter={() => setHovered(country.code)}
                        onMouseLeave={() => setHovered(null)}
                        className="cursor-pointer"
                      >
                        <circle
                          cx={country.cx}
                          cy={country.cy}
                          r={isHoveredCountry ? 10 : 6}
                          fill="none"
                          stroke="rgba(6, 182, 212, 0.3)"
                          strokeWidth="1"
                          className="transition-all duration-300"
                          style={{
                            animation: isHoveredCountry ? "glow-ring 2s ease-in-out infinite" : "none",
                          }}
                        />
                        <circle
                          cx={country.cx}
                          cy={country.cy}
                          r={isHoveredCountry ? 5 : 3}
                          fill={isHoveredCountry ? "#06b6d4" : "rgba(6, 182, 212, 0.8)"}
                          className="transition-all duration-300"
                        />
                      </g>
                    )}
                  </g>
                );
              })}

              {/* Connection lines between covered countries */}
              {coveredCountries.map((c, i) => {
                if (i === 0) return null;
                const countryData = africaCountries.find(ac => ac.code === c.code);
                if (!countryData) return null;
                
                // Find nearest covered country
                const previous = coveredCountries.slice(0, i);
                let nearest = previous[0];
                let minDist = Infinity;
                for (const p of previous) {
                  const pd = africaCountries.find(ac => ac.code === p.code);
                  if (!pd) continue;
                  const d = Math.hypot(countryData.cx - pd.cx, countryData.cy - pd.cy);
                  if (d < minDist) {
                    minDist = d;
                    nearest = p;
                  }
                }
                const nearestData = africaCountries.find(ac => ac.code === nearest.code);
                if (!nearestData) return null;

                const isActive = !selectedRegion || (c.region === selectedRegion && nearest.region === selectedRegion);
                
                return (
                  <line
                    key={`conn-${c.code}`}
                    x1={nearestData.cx}
                    y1={nearestData.cy}
                    x2={countryData.cx}
                    y2={countryData.cy}
                    stroke={isActive ? "rgba(6, 182, 212, 0.1)" : "rgba(6, 182, 212, 0.02)"}
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                    className="transition-all duration-500"
                  />
                );
              })}

              {/* Tooltip for hovered country */}
              {hovered && (() => {
                const country = africaCountries.find(c => c.code === hovered);
                if (!country) return null;
                const isCovered = coveredCodes.has(country.code);
                const region = getRegionForCode(country.code);
                const tooltipWidth = 130;
                const tooltipHeight = isCovered ? 36 : 28;
                
                // Adjust tooltip position to stay within viewBox
                let tx = country.cx - tooltipWidth / 2;
                let ty = country.cy - tooltipHeight - 15;
                if (tx < 65) tx = 65;
                if (tx + tooltipWidth > 835) tx = 835 - tooltipWidth;
                if (ty < 5) ty = country.cy + 15;

                return (
                  <g>
                    <rect
                      x={tx}
                      y={ty}
                      width={tooltipWidth}
                      height={tooltipHeight}
                      rx="6"
                      fill="rgba(3, 7, 18, 0.95)"
                      stroke={isCovered ? "rgba(6, 182, 212, 0.4)" : "rgba(255, 255, 255, 0.15)"}
                      strokeWidth="1"
                    />
                    <text
                      x={tx + tooltipWidth / 2}
                      y={ty + (isCovered ? 14 : 17)}
                      textAnchor="middle"
                      fill={isCovered ? "#06b6d4" : "#9ca3af"}
                      fontSize="10"
                      fontFamily="Inter Tight, sans-serif"
                      fontWeight="600"
                    >
                      {country.name}
                    </text>
                    {isCovered && region && (
                      <text
                        x={tx + tooltipWidth / 2}
                        y={ty + 28}
                        textAnchor="middle"
                        fill="#9ca3af"
                        fontSize="8"
                        fontFamily="Inter Tight, sans-serif"
                      >
                        {getRegionLabel(region)}
                      </text>
                    )}
                  </g>
                );
              })()}
            </svg>

            {/* Legend */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 pt-6 border-t border-cyan-500/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-400" />
                <span className="text-sm text-gray-400 font-[Inter_Tight]">{t("coverage.activeCoverage")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Signal className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-400 font-[Inter_Tight]">
                  {filteredCovered.length} {t("coverage.countries")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-400 font-[Inter_Tight]">
                  {selectedRegion ? getRegionLabel(selectedRegion) : t("coverage.allRegions")}
                </span>
              </div>
            </div>
          </div>

          {/* Country list */}
          <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            {coveredCountries.map((c) => {
              const isFiltered = selectedRegion && c.region !== selectedRegion;
              return (
                <div
                  key={c.code}
                  className={`text-center py-2.5 px-3 rounded-lg transition-all cursor-pointer ${
                    isFiltered
                      ? "bg-white/[0.01] border border-white/5 opacity-30"
                      : hovered === c.code
                      ? "bg-cyan-500/10 border border-cyan-500/30"
                      : "bg-white/[0.02] border border-cyan-500/5 hover:border-cyan-500/20"
                  }`}
                  onMouseEnter={() => setHovered(c.code)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className="text-xs text-gray-400 font-[Inter_Tight]">{c.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
