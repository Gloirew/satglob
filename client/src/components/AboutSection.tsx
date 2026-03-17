/* Design: Dark Cosmos — about section with partner logos and key features */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Satellite, Globe, ShieldCheck, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { ref, visible } = useScrollReveal();
  const { t } = useLanguage();

  const partners = [
    { name: "GoConnect", logo: "/logos/goconnect.africa.png", url: "https://goconnect.africa" },
    { name: "Marlink", logo: "/logos/ok marlink.png", url: "https://marlink.com" },
    { name: "Stellar", logo: "/logos/stellar.png", url: "https://stellar.tc" },
    { name: "Starlink Priority", logo: "/logos/starlink.png", url: "https://starlink.com" },
  ];

  const highlights = [
    { icon: Satellite, title: t("about.highlight1Title"), desc: t("about.highlight1Desc") },
    { icon: Globe, title: t("about.highlight2Title"), desc: t("about.highlight2Desc") },
    { icon: ShieldCheck, title: t("about.highlight3Title"), desc: t("about.highlight3Desc") },
    { icon: Rocket, title: t("about.highlight4Title"), desc: t("about.highlight4Desc") },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div ref={ref} className={`container relative ${visible ? "visible" : ""}`}>
        <div className={`max-w-3xl mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase font-[Inter_Tight] mb-4 block">
            {t("about.label")}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-[Outfit] leading-tight">
            {t("about.title1")}{" "}
            <span className="text-gradient">{t("about.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            {t("about.description")}
          </p>
        </div>

        {/* Partners Section - Version Vite/Standard */}
        <div className={`mb-16 reveal ${visible ? "visible" : ""}`}>
          <h3 className="text-sm font-semibold text-gray-500 tracking-[0.2em] uppercase font-[Inter_Tight] mb-6 text-center">
            {t("about.partnersTitle")}
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((partner) => (
              <a 
                key={partner.name} 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-xl p-2 backdrop-blur-sm flex items-center justify-center transition-all group"
              >
                <div className="relative w-full h-24 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className={`grid md:grid-cols-2 gap-6 stagger-children ${visible ? "visible" : ""}`}>
          {highlights.map((h) => (
            <div key={h.title} className="card-hover glow-border rounded-xl p-8 bg-white/[0.02] backdrop-blur-sm flex gap-5">
              <div className="shrink-0 w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <h.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-[Outfit] mb-2">{h.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}