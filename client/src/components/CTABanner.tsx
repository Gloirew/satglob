/* Design: Dark Cosmos — call-to-action banner before footer */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  ArrowRight,
  Satellite,
  MessageCircle,
} from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

export default function CTABanner() {
  const { ref, visible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-600/5 to-purple-600/5" />

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div
        ref={ref}
        className={`container relative text-center reveal ${
          visible ? "visible" : ""
        }`}
      >
        {/* Icon */}
        <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
          <Satellite className="h-8 w-8 text-cyan-400" />
        </div>

        {/* Title */}
        <h2 className="mx-auto mb-6 max-w-3xl font-[Outfit] text-3xl font-bold leading-tight text-white lg:text-5xl">
          {t("cta.title")}{" "}
          <span className="text-gradient">
            {t("cta.titleHighlight")}
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400">
          {t("cta.description")}
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
          {/* Primary CTA */}
          <a
            href="#contact"
            className="btn-glow inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-[#030712] transition-colors hover:bg-cyan-400 font-[Inter_Tight] group"
          >
            {t("cta.cta1")}

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/243971787744"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-green-500/20 bg-green-500/10 px-8 py-4 text-base font-semibold text-green-400 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-white font-[Inter_Tight]"
          >
            <MessageCircle className="h-5 w-5" />

            <span>Whatsapp</span>
          </a>

          {/* Secondary CTA */}
          <a
            href="mailto:contact@bridgesats.com"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-gray-600 px-8 py-4 text-base font-semibold text-gray-200 transition-all hover:border-cyan-500/50 hover:text-cyan-400 font-[Inter_Tight]"
          >
            {t("cta.cta2")}
          </a>
        </div>
      </div>
    </section>
  );
}