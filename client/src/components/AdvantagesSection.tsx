/* Design: Dark Cosmos — key advantages grid with glowing icons */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShieldCheck, Satellite, MonitorCog, Headphones, CreditCard, HardDrive, Rocket, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AdvantagesSection() {
  const { ref, visible } = useScrollReveal();
  const { t } = useLanguage();

  const advantages = [
    { icon: ShieldCheck, title: t("advantages.items.privacy.title"), desc: t("advantages.items.privacy.desc") },
    { icon: Satellite, title: t("advantages.items.multiProvider.title"), desc: t("advantages.items.multiProvider.desc") },
    { icon: MonitorCog, title: t("advantages.items.management.title"), desc: t("advantages.items.management.desc") },
    { icon: Headphones, title: t("advantages.items.support.title"), desc: t("advantages.items.support.desc") },
    { icon: CreditCard, title: t("advantages.items.plans.title"), desc: t("advantages.items.plans.desc") },
    { icon: HardDrive, title: t("advantages.items.hardware.title"), desc: t("advantages.items.hardware.desc") },
    { icon: Rocket, title: t("advantages.items.deployment.title"), desc: t("advantages.items.deployment.desc") },
    { icon: Lock, title: t("advantages.items.security.title"), desc: t("advantages.items.security.desc") },
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.02] via-transparent to-blue-500/[0.02]" />

      <div ref={ref} className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase font-[Inter_Tight] mb-4 block">
            {t("advantages.label")}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-[Outfit]">
            {t("advantages.title")} <span className="text-gradient">{t("advantages.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-400">
            {t("advantages.description")}
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children ${visible ? "visible" : ""}`}>
          {advantages.map((a, i) => (
            <div key={i} className="card-hover glow-border rounded-xl p-6 bg-white/[0.02] backdrop-blur-sm group">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                <a.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-base font-bold text-white font-[Outfit] mb-2">{a.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
