/* Design: Dark Cosmos — FAQ accordion section */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-medium text-gray-200 group-hover:text-cyan-400 transition-colors pr-4 font-[Inter_Tight]">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180 text-cyan-400" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-gray-400 leading-relaxed pr-8">{a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const { ref, visible } = useScrollReveal();
  const { t } = useLanguage();

  const faqs = [
    {
      category: t("faq.categories.performance"),
      items: [
        { q: t("faq.items.speeds.q"), a: t("faq.items.speeds.a") },
        { q: t("faq.items.constant.q"), a: t("faq.items.constant.a") },
      ],
    },
    {
      category: t("faq.categories.comparison"),
      items: [
        { q: t("faq.items.difference.q"), a: t("faq.items.difference.a") },
        { q: t("faq.items.whyChoose.q"), a: t("faq.items.whyChoose.a") },
      ],
    },
    {
      category: t("faq.categories.plans"),
      items: [
        { q: t("faq.items.subscriptionPlans.q"), a: t("faq.items.subscriptionPlans.a") },
        { q: t("faq.items.unlimited.q"), a: t("faq.items.unlimited.a") },
        { q: t("faq.items.adjust.q"), a: t("faq.items.adjust.a") },
      ],
    },
    {
      category: t("faq.categories.mobility"),
      items: [
        { q: t("faq.items.moveTerminal.q"), a: t("faq.items.moveTerminal.a") },
        { q: t("faq.items.international.q"), a: t("faq.items.international.a") },
      ],
    },
    {
      category: t("faq.categories.security"),
      items: [
        { q: t("faq.items.dataAnonymous.q"), a: t("faq.items.dataAnonymous.a") },
        { q: t("faq.items.securityFeatures.q"), a: t("faq.items.securityFeatures.a") },
      ],
    },
    {
      category: t("faq.categories.equipment"),
      items: [
        { q: t("faq.items.whichTerminal.q"), a: t("faq.items.whichTerminal.a") },
        { q: t("faq.items.existingEquipment.q"), a: t("faq.items.existingEquipment.a") },
      ],
    },
  ];

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div ref={ref} className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase font-[Inter_Tight] mb-4 block">
            {t("faq.label")}
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-[Outfit]">
            {t("faq.title")}{" "}
            <span className="text-gradient">{t("faq.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-400">
            {t("faq.description")}
          </p>
        </div>

        <div className={`max-w-4xl mx-auto space-y-8 stagger-children ${visible ? "visible" : ""}`}>
          {faqs.map((cat, i) => (
            <div key={i} className="glow-border rounded-xl bg-white/[0.02] backdrop-blur-sm p-6 lg:p-8">
              <h3 className="text-lg font-bold text-cyan-400 font-[Outfit] mb-4">{cat.category}</h3>
              {cat.items.map((item, j) => (
                <FAQItem key={j} q={item.q} a={item.a} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
