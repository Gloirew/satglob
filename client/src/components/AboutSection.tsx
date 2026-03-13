/* Design: Dark Cosmos — about section with partner logos and key features */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Satellite, Globe, ShieldCheck, Rocket } from "lucide-react";

const partners = [
  { name: "GoConnect", desc: "Exclusive distribution across Africa" },
  { name: "Marlink", desc: "Global leader in satellite connectivity" },
  { name: "Stellar", desc: "Professional management platform" },
  { name: "Starlink Priority", desc: "Enterprise-grade satellite network" },
];

const highlights = [
  { icon: Satellite, title: "Professional Connectivity", desc: "Enterprise-grade satellite internet with priority data handling and dedicated bandwidth allocation." },
  { icon: Globe, title: "Centralized Management", desc: "Single interface to manage all your terminals, subscriptions, and deployments across multiple countries." },
  { icon: ShieldCheck, title: "Advanced Security", desc: "Full data anonymization, encrypted tunnels, private IPs, and military-grade security protocols." },
  { icon: Rocket, title: "Rapid Deployment", desc: "Get connected in under 48 hours with our express integration and ready-to-ship equipment stock." },
];

export default function AboutSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div ref={ref} className={`container relative ${visible ? "visible" : ""}`}>
        {/* Section header */}
        <div className={`max-w-3xl mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase font-[Inter_Tight] mb-4 block">
            About SatGlob
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-[Outfit] leading-tight">
            A Division of{" "}
            <span className="text-gradient">Bridge Sats</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            SatGlob deploys professional-grade satellite connectivity solutions across Africa and internationally. 
            Leveraging Starlink Priority plans and a unified management interface, our service is specifically 
            tailored for enterprises, operational mobility, and multi-site architectures.
          </p>
        </div>

        {/* Partners */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20 stagger-children ${visible ? "visible" : ""}`}>
          {partners.map((p) => (
            <div
              key={p.name}
              className="glow-border rounded-xl p-6 bg-white/[0.02] backdrop-blur-sm text-center"
            >
              <h3 className="text-lg font-bold text-white font-[Outfit] mb-2">{p.name}</h3>
              <p className="text-sm text-gray-400">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className={`grid md:grid-cols-2 gap-6 stagger-children ${visible ? "visible" : ""}`}>
          {highlights.map((h) => (
            <div
              key={h.title}
              className="card-hover glow-border rounded-xl p-8 bg-white/[0.02] backdrop-blur-sm flex gap-5"
            >
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
