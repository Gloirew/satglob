/* Design: Dark Cosmos — equipment showcase for Starlink terminals */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Smartphone, Building, Factory, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function EquipmentSection() {
  const { ref, visible } = useScrollReveal();
  const { t, ta } = useLanguage();

  const equipment = [
    {
      name: t("equipment.mini.title"),
      icon: Smartphone,
      tagline: t("equipment.mini.subtitle"),
      desc: t("equipment.mini.desc"),
      useCases: ta("equipment.mini.cases"),
      specs: ta("equipment.mini.features"),
      highlight: t("equipment.mini.badge"),
      useCasesLabel: t("equipment.mini.useCases"),
      color: "from-emerald-500/20 to-emerald-500/5",
      borderColor: "border-emerald-500/20 hover:border-emerald-500/40",
      accentColor: "text-emerald-400",
      bgAccent: "bg-emerald-500/10",
    },
    {
      name: t("equipment.standard.title"),
      icon: Building,
      tagline: t("equipment.standard.subtitle"),
      desc: t("equipment.standard.desc"),
      useCases: ta("equipment.standard.cases"),
      specs: ta("equipment.standard.features"),
      highlight: t("equipment.standard.badge"),
      useCasesLabel: t("equipment.standard.useCases"),
      color: "from-cyan-500/20 to-cyan-500/5",
      borderColor: "border-cyan-500/20 hover:border-cyan-500/40",
      accentColor: "text-cyan-400",
      bgAccent: "bg-cyan-500/10",
    },
    {
      name: t("equipment.hp.title"),
      icon: Factory,
      tagline: t("equipment.hp.subtitle"),
      desc: t("equipment.hp.desc"),
      useCases: ta("equipment.hp.cases"),
      specs: ta("equipment.hp.features"),
      highlight: t("equipment.hp.badge"),
      useCasesLabel: t("equipment.hp.useCases"),
      color: "from-blue-500/20 to-blue-500/5",
      borderColor: "border-blue-500/20 hover:border-blue-500/40",
      accentColor: "text-blue-400",
      bgAccent: "bg-blue-500/10",
    },
  ];

  return (
    <section id="equipment" className="relative py-24 lg:py-32">
      <div ref={ref} className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase font-[Inter_Tight] mb-4 block">
            {t("equipment.label")}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-[Outfit]">
            {t("equipment.title")} <span className="text-gradient">{t("equipment.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-400">
            {t("equipment.description")}
          </p>
        </div>

        <div className={`grid lg:grid-cols-3 gap-6 stagger-children ${visible ? "visible" : ""}`}>
          {equipment.map((e, i) => (
            <div key={i} className={`card-hover rounded-2xl border ${e.borderColor} bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-500`}>
              <div className={`h-2 bg-gradient-to-r ${e.color}`} />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl ${e.bgAccent} flex items-center justify-center`}>
                    <e.icon className={`w-7 h-7 ${e.accentColor}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-[Outfit]">{e.name}</h3>
                    <p className={`text-sm font-medium ${e.accentColor} font-[Inter_Tight]`}>{e.tagline}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{e.desc}</p>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${e.bgAccent} mb-6`}>
                  <span className={`text-xs font-semibold ${e.accentColor} font-[Inter_Tight]`}>{e.highlight}</span>
                </div>
                <div className="space-y-2.5 mb-6">
                  {e.specs.map((s, si) => (
                    <div key={si} className="flex items-center gap-2.5">
                      <Check className={`w-4 h-4 ${e.accentColor} shrink-0`} />
                      <span className="text-sm text-gray-300">{s}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-5 border-t border-white/5">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-[Inter_Tight]">{e.useCasesLabel}</p>
                  <div className="flex flex-wrap gap-2">
                    {e.useCases.map((u, ui) => (
                      <span key={ui} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-400">{u}</span>
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
