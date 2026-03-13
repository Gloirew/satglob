/* Design: Dark Cosmos — security section with shield imagery */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { EyeOff, ShieldCheck, Lock, Wifi, RefreshCw, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SECURITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663343090953/9xL6vwxuoA9jRDBPW3ncAk/satglob-security-9sxazjbz65kGwxrmVFiH8C.webp";

export default function SecuritySection() {
  const { ref, visible } = useScrollReveal();
  const { t } = useLanguage();

  const securityFeatures = [
    { icon: EyeOff, title: t("security.items.anonymization.title"), desc: t("security.items.anonymization.desc") },
    { icon: ShieldCheck, title: t("security.items.architecture.title"), desc: t("security.items.architecture.desc") },
    { icon: Lock, title: t("security.items.privateIp.title"), desc: t("security.items.privateIp.desc") },
    { icon: Globe, title: t("security.items.encryption.title"), desc: t("security.items.encryption.desc") },
    { icon: Wifi, title: t("security.items.aggregation.title"), desc: t("security.items.aggregation.desc") },
    { icon: RefreshCw, title: t("security.items.failover.title"), desc: t("security.items.failover.desc") },
  ];

  return (
    <section id="security" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={SECURITY_IMG} alt="Cybersecurity visualization" className="w-full h-full object-cover opacity-10" loading="lazy" />
        <div className="absolute inset-0 bg-[#030712]/90" />
      </div>

      <div ref={ref} className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase font-[Inter_Tight] mb-4 block">
            {t("security.label")}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-[Outfit]">
            {t("security.title")}{" "}
            <span className="text-gradient">{t("security.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-400">
            {t("security.description")}
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children ${visible ? "visible" : ""}`}>
          {securityFeatures.map((f, i) => (
            <div key={i} className="security-card glow-border rounded-xl p-7 bg-white/[0.03] backdrop-blur-sm">
              <div className="w-11 h-11 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-5">
                <f.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white font-[Outfit] mb-3">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
