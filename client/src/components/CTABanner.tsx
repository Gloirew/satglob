/* Design: Dark Cosmos — call-to-action banner before footer */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Satellite } from "lucide-react";

export default function CTABanner() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-600/5 to-purple-600/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div ref={ref} className={`container relative text-center reveal ${visible ? "visible" : ""}`}>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/10 mb-8">
          <Satellite className="w-8 h-8 text-cyan-400" />
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-[Outfit] max-w-3xl mx-auto leading-tight">
          Ready to Transform Your{" "}
          <span className="text-gradient">Connectivity?</span>
        </h2>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Join hundreds of enterprises across Africa that trust SatGlob for their 
          mission-critical satellite connectivity needs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="btn-glow inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-[#030712] font-semibold rounded-lg text-base font-[Inter_Tight] hover:bg-cyan-400 transition-colors group"
          >
            Get Started Today
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="mailto:contact@bridgesats.com"
            className="inline-flex items-center gap-2 px-8 py-4 border border-gray-600 text-gray-200 font-semibold rounded-lg text-base font-[Inter_Tight] hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
          >
            Email Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
