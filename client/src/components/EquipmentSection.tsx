/* Design: Dark Cosmos — equipment showcase for Starlink terminals */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Smartphone, Building, Factory, Check } from "lucide-react";

const equipment = [
  {
    name: "Starlink Mini",
    icon: Smartphone,
    tagline: "Ultimate Portability",
    desc: "Designed for extreme mobility and short-duration installations. Perfect for field teams, intervention units, and temporary sites.",
    useCases: ["Field operations", "Emergency response", "Mobile teams", "Temporary installations"],
    specs: ["Compact & lightweight", "Quick setup", "Battery compatible", "Portable design"],
    highlight: "Ideal for mobility",
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/20 hover:border-emerald-500/40",
    accentColor: "text-emerald-400",
    bgAccent: "bg-emerald-500/10",
  },
  {
    name: "Starlink Standard",
    icon: Building,
    tagline: "Professional Reliability",
    desc: "Adapted for SMEs, professional office environments, and permanent installations with moderate bandwidth requirements.",
    useCases: ["Office connectivity", "SME networks", "Branch offices", "Retail locations"],
    specs: ["Solid performance", "Easy installation", "Weather resistant", "Gen 2 & 3 compatible"],
    highlight: "Best for offices",
    color: "from-cyan-500/20 to-cyan-500/5",
    borderColor: "border-cyan-500/20 hover:border-cyan-500/40",
    accentColor: "text-cyan-400",
    bgAccent: "bg-cyan-500/10",
  },
  {
    name: "Starlink High Performance",
    icon: Factory,
    tagline: "Maximum Power",
    desc: "Required for harsh environments, ISP infrastructure, and base stations. Superior stability during peak loads and extreme temperatures.",
    useCases: ["Mining sites", "ISP base stations", "Industrial zones", "Critical infrastructure"],
    specs: ["Superior throughput", "Thermal resilience", "Multi-antenna ready", "Priority optimized"],
    highlight: "Recommended for Africa",
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/20 hover:border-blue-500/40",
    accentColor: "text-blue-400",
    bgAccent: "bg-blue-500/10",
  },
];

export default function EquipmentSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="equipment" className="relative py-24 lg:py-32">
      <div ref={ref} className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase font-[Inter_Tight] mb-4 block">
            Equipment
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-[Outfit]">
            Starlink <span className="text-gradient">Terminal Range</span>
          </h2>
          <p className="text-lg text-gray-400">
            Choose the right terminal for your deployment. Our platform supports the entire 
            Starlink range with immediate availability from stock.
          </p>
        </div>

        <div className={`grid lg:grid-cols-3 gap-6 stagger-children ${visible ? "visible" : ""}`}>
          {equipment.map((e) => (
            <div
              key={e.name}
              className={`card-hover rounded-2xl border ${e.borderColor} bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-500`}
            >
              {/* Header gradient */}
              <div className={`h-2 bg-gradient-to-r ${e.color}`} />

              <div className="p-8">
                {/* Icon & name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl ${e.bgAccent} flex items-center justify-center`}>
                    <e.icon className={`w-7 h-7 ${e.accentColor}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-[Outfit]">{e.name}</h3>
                    <p className={`text-sm font-medium ${e.accentColor} font-[Inter_Tight]`}>{e.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{e.desc}</p>

                {/* Badge */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${e.bgAccent} mb-6`}>
                  <span className={`text-xs font-semibold ${e.accentColor} font-[Inter_Tight]`}>{e.highlight}</span>
                </div>

                {/* Specs */}
                <div className="space-y-2.5 mb-6">
                  {e.specs.map((s) => (
                    <div key={s} className="flex items-center gap-2.5">
                      <Check className={`w-4 h-4 ${e.accentColor} shrink-0`} />
                      <span className="text-sm text-gray-300">{s}</span>
                    </div>
                  ))}
                </div>

                {/* Use cases */}
                <div className="pt-5 border-t border-white/5">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-[Inter_Tight]">Use Cases</p>
                  <div className="flex flex-wrap gap-2">
                    {e.useCases.map((u) => (
                      <span key={u} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-400">
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
