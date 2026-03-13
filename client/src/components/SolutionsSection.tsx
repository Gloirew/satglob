/* Design: Dark Cosmos — solutions cards with imagery */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Building2, Heart, Pickaxe, Radio } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ENTERPRISE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663343090953/9xL6vwxuoA9jRDBPW3ncAk/satglob-solutions-enterprise-avsBfLfZjYRXJppHbuztYn.webp";
const NGO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663343090953/9xL6vwxuoA9jRDBPW3ncAk/satglob-ngo-DjhC6Rc8pTruf2PGqvrsqf.webp";
const MINING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663343090953/9xL6vwxuoA9jRDBPW3ncAk/satglob-solutions-mining-hpRQ8UuDuLfoZSbeW5aNcS.webp";

export default function SolutionsSection() {
  const { ref, visible } = useScrollReveal();
  const { t, ta } = useLanguage();

  const solutions = [
    {
      icon: Building2,
      title: t("solutions.enterprise.title"),
      desc: t("solutions.enterprise.desc"),
      features: ta("solutions.enterprise.features"),
      image: ENTERPRISE_IMG,
      alt: "Modern office with satellite connectivity",
    },
    {
      icon: Heart,
      title: t("solutions.ngo.title"),
      desc: t("solutions.ngo.desc"),
      features: ta("solutions.ngo.features"),
      image: NGO_IMG,
      alt: "Humanitarian camp with satellite connectivity",
    },
    {
      icon: Pickaxe,
      title: t("solutions.mining.title"),
      desc: t("solutions.mining.desc"),
      features: ta("solutions.mining.features"),
      image: MINING_IMG,
      alt: "Mining site with satellite equipment",
    },
    {
      icon: Radio,
      title: t("solutions.telecom.title"),
      desc: t("solutions.telecom.desc"),
      features: ta("solutions.telecom.features"),
      image: null as string | null,
      alt: "",
    },
  ];

  return (
    <section id="solutions" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />

      <div ref={ref} className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase font-[Inter_Tight] mb-4 block">
            {t("solutions.label")}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-[Outfit]">
            {t("solutions.title")}{" "}
            <span className="text-gradient">{t("solutions.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-400">
            {t("solutions.description")}
          </p>
        </div>

        <div className={`space-y-8 stagger-children ${visible ? "visible" : ""}`}>
          {solutions.map((s, i) => (
            <div
              key={i}
              className={`card-hover glow-border rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-sm ${
                s.image ? "grid lg:grid-cols-2" : ""
              }`}
            >
              {s.image && (
                <div className={`relative h-64 lg:h-auto overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={s.image}
                    alt={s.alt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/60 to-transparent" />
                </div>
              )}

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6">
                  <s.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white font-[Outfit] mb-4">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{s.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  {s.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
