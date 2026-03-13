/* Design: Dark Cosmos — Interactive SVG Africa coverage map with glow effects */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { MapPin, Signal } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Country {
  name: string;
  code: string;
  cx: number;
  cy: number;
  region: string;
}

const coveredCountries: Country[] = [
  { name: "Guinea-Bissau", code: "GW", cx: 118, cy: 228, region: "West Africa" },
  { name: "Sierra Leone", code: "SL", cx: 125, cy: 248, region: "West Africa" },
  { name: "Liberia", code: "LR", cx: 132, cy: 260, region: "West Africa" },
  { name: "Ghana", code: "GH", cx: 170, cy: 252, region: "West Africa" },
  { name: "Benin", code: "BJ", cx: 185, cy: 248, region: "West Africa" },
  { name: "Niger", code: "NE", cx: 190, cy: 210, region: "West Africa" },
  { name: "Nigeria", code: "NG", cx: 200, cy: 240, region: "West Africa" },
  { name: "Chad", code: "TD", cx: 240, cy: 205, region: "Central Africa" },
  { name: "South Sudan", code: "SS", cx: 300, cy: 240, region: "East Africa" },
  { name: "DR Congo", code: "CD", cx: 270, cy: 280, region: "Central Africa" },
  { name: "Rwanda", code: "RW", cx: 300, cy: 275, region: "East Africa" },
  { name: "Burundi", code: "BI", cx: 300, cy: 288, region: "East Africa" },
  { name: "Somalia", code: "SO", cx: 365, cy: 235, region: "East Africa" },
  { name: "Kenya", code: "KE", cx: 335, cy: 260, region: "East Africa" },
  { name: "Zambia", code: "ZM", cx: 295, cy: 330, region: "Southern Africa" },
  { name: "Malawi", code: "MW", cx: 325, cy: 325, region: "Southern Africa" },
  { name: "Mozambique", code: "MZ", cx: 335, cy: 355, region: "Southern Africa" },
  { name: "Zimbabwe", code: "ZW", cx: 305, cy: 350, region: "Southern Africa" },
  { name: "Botswana", code: "BW", cx: 280, cy: 365, region: "Southern Africa" },
  { name: "Eswatini", code: "SZ", cx: 315, cy: 380, region: "Southern Africa" },
  { name: "Lesotho", code: "LS", cx: 300, cy: 395, region: "Southern Africa" },
  { name: "Madagascar", code: "MG", cx: 370, cy: 345, region: "Indian Ocean" },
  { name: "Reunion", code: "RE", cx: 395, cy: 370, region: "Indian Ocean" },
  { name: "Mauritius", code: "MU", cx: 405, cy: 355, region: "Indian Ocean" },
];

const regions = Array.from(new Set(coveredCountries.map(c => c.region)));

export default function CoverageMap() {
  const { ref, visible } = useScrollReveal();
  const [hovered, setHovered] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const { t } = useLanguage();

  const filteredCountries = selectedRegion
    ? coveredCountries.filter(c => c.region === selectedRegion)
    : coveredCountries;

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
          <div className="relative bg-white/[0.02] glow-border rounded-2xl p-6 lg:p-10 backdrop-blur-sm">
            <svg viewBox="80 140 360 290" className="w-full h-auto" style={{ maxHeight: "550px" }}>
              <path
                d="M155,155 Q175,148 195,150 Q215,148 235,152 Q255,148 275,155 Q295,150 315,158 Q335,155 350,165 Q365,175 372,190 Q378,205 375,220 Q372,235 368,248 Q365,260 358,272 Q355,285 350,298 Q345,310 340,322 Q335,335 328,348 Q320,360 312,372 Q305,382 295,390 Q285,398 275,395 Q265,392 258,382 Q250,372 245,360 Q240,348 235,338 Q230,328 225,318 Q220,308 215,298 Q210,288 202,278 Q195,268 185,260 Q175,252 165,248 Q155,244 148,238 Q140,232 138,222 Q136,212 140,202 Q144,192 150,182 Q155,172 158,162 Z"
                fill="rgba(6, 182, 212, 0.04)"
                stroke="rgba(6, 182, 212, 0.12)"
                strokeWidth="1.5"
                className="transition-all duration-500"
              />
              {[180, 220, 260, 300, 340, 380].map(y => (
                <line key={`h-${y}`} x1="80" y1={y} x2="440" y2={y} stroke="rgba(6, 182, 212, 0.03)" strokeWidth="0.5" />
              ))}
              {[120, 160, 200, 240, 280, 320, 360, 400].map(x => (
                <line key={`v-${x}`} x1={x} y1="140" x2={x} y2="430" stroke="rgba(6, 182, 212, 0.03)" strokeWidth="0.5" />
              ))}
              {coveredCountries.map((c, i) => {
                if (i === 0) return null;
                const nearest = coveredCountries.slice(0, i).reduce((best, other) => {
                  const d = Math.hypot(c.cx - other.cx, c.cy - other.cy);
                  const bd = Math.hypot(c.cx - best.cx, c.cy - best.cy);
                  return d < bd ? other : best;
                });
                const isActive = !selectedRegion || (c.region === selectedRegion && nearest.region === selectedRegion);
                return (
                  <line
                    key={`conn-${c.code}`}
                    x1={nearest.cx} y1={nearest.cy} x2={c.cx} y2={c.cy}
                    stroke={isActive ? "rgba(6, 182, 212, 0.12)" : "rgba(6, 182, 212, 0.03)"}
                    strokeWidth="0.5" strokeDasharray="3 3"
                    className="transition-all duration-500"
                  />
                );
              })}
              {coveredCountries.map((c) => {
                const isFiltered = selectedRegion && c.region !== selectedRegion;
                const isHovered = hovered === c.code;
                return (
                  <g
                    key={c.code}
                    onMouseEnter={() => setHovered(c.code)}
                    onMouseLeave={() => setHovered(null)}
                    className="cursor-pointer"
                    style={{ opacity: isFiltered ? 0.15 : 1, transition: "opacity 0.5s" }}
                  >
                    <circle cx={c.cx} cy={c.cy} r={isHovered ? 14 : 9} fill="none" stroke="rgba(6, 182, 212, 0.25)" strokeWidth="1" className="transition-all duration-300" style={{ animation: isHovered ? "glow-ring 2s ease-in-out infinite" : "none" }} />
                    <circle cx={c.cx} cy={c.cy} r={isHovered ? 8 : 5} fill={isHovered ? "rgba(6, 182, 212, 0.15)" : "rgba(6, 182, 212, 0.05)"} className="transition-all duration-300" />
                    <circle cx={c.cx} cy={c.cy} r={isHovered ? 4.5 : 3} fill={isHovered ? "#06b6d4" : "rgba(6, 182, 212, 0.7)"} className="transition-all duration-300" />
                    {isHovered && (
                      <g>
                        <rect x={c.cx - 55} y={c.cy - 38} width="110" height="28" rx="6" fill="rgba(3, 7, 18, 0.95)" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" />
                        <text x={c.cx} y={c.cy - 24} textAnchor="middle" fill="#06b6d4" fontSize="8.5" fontFamily="Inter Tight" fontWeight="600">{c.name}</text>
                        <text x={c.cx} y={c.cy - 14} textAnchor="middle" fill="#9ca3af" fontSize="6.5" fontFamily="Inter Tight">{getRegionLabel(c.region)}</text>
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>

            <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-cyan-500/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-400" />
                <span className="text-sm text-gray-400 font-[Inter_Tight]">{t("coverage.activeCoverage")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Signal className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-400 font-[Inter_Tight]">
                  {filteredCountries.length} {t("coverage.countries")}
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
