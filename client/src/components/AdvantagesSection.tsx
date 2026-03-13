/* Design: Dark Cosmos — key advantages grid with glowing icons */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShieldCheck, Satellite, MonitorCog, Headphones, CreditCard, HardDrive, Rocket, Lock } from "lucide-react";

const advantages = [
  { icon: ShieldCheck, title: "Data Privacy", desc: "Complete traffic anonymization ensuring the highest level of security and discretion for your operations." },
  { icon: Satellite, title: "Multi-Provider Network", desc: "Access the combined power of GoConnect, Marlink, Stellar, and Starlink Priority satellite networks." },
  { icon: MonitorCog, title: "Centralized Management", desc: "Single platform to supervise, maintain, and manage all your terminals and subscriptions." },
  { icon: Headphones, title: "24/7 Technical Support", desc: "Round-the-clock assistance via intelligent ticketing system and direct email support." },
  { icon: CreditCard, title: "Flexible Data Plans", desc: "Adjustable data volumes with Local Priority and Global Priority options to match your needs." },
  { icon: HardDrive, title: "Hardware Compatibility", desc: "Full support for Starlink Mini, Standard, and High Performance terminals without exception." },
  { icon: Rocket, title: "Fast Deployment", desc: "Express integration of existing fleet in under 48 hours. Immediate equipment availability from stock." },
  { icon: Lock, title: "Advanced Network Security", desc: "Military-grade encryption, IP obfuscation, network compartmentalization, and enterprise firewalls." },
];

export default function AdvantagesSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.02] via-transparent to-blue-500/[0.02]" />

      <div ref={ref} className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase font-[Inter_Tight] mb-4 block">
            Why SatGlob
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-[Outfit]">
            Key <span className="text-gradient">Advantages</span>
          </h2>
          <p className="text-lg text-gray-400">
            Our platform stands apart with exclusive features designed for professional environments.
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children ${visible ? "visible" : ""}`}>
          {advantages.map((a) => (
            <div
              key={a.title}
              className="card-hover glow-border rounded-xl p-6 bg-white/[0.02] backdrop-blur-sm group"
            >
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
