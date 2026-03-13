/* Design: Dark Cosmos — ISP/Telecom operator dedicated section */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Radio, Server, Users, Database, MonitorCog, ArrowRight } from "lucide-react";

const ispFeatures = [
  { icon: Radio, title: "Multi-Antenna Base Station", desc: "Deploy centralized infrastructure integrating multiple Starlink High Performance terminals for ISP-grade operations." },
  { icon: Server, title: "Satellite Backhaul", desc: "SatGlob provides upstream satellite connectivity while you manage your own distribution network (fiber, wireless, microwave)." },
  { icon: Users, title: "Multi-Client Management", desc: "Professional tools to manage heterogeneous client fleets across multiple sites and countries from a single interface." },
  { icon: Database, title: "Data Pooling", desc: "Consolidate your global data envelope and dynamically distribute bandwidth across different antennas (available from 50+ active lines)." },
  { icon: MonitorCog, title: "Centralized Supervision", desc: "Full visibility over your network with real-time monitoring, alerts, and performance analytics for all connected terminals." },
];

export default function ISPSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="isps" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.03] to-transparent" />

      <div ref={ref} className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className={`reveal-left ${visible ? "visible" : ""}`}>
            <span className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase font-[Inter_Tight] mb-4 block">
              For ISPs & Telecom Operators
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-[Outfit] leading-tight">
              Scale Your Network with{" "}
              <span className="text-gradient">Satellite Backhaul</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              SatGlob's architecture is purpose-built for ISPs and integrators, offering 
              professional-grade tools to manage heterogeneous client fleets across multiple 
              sites and countries. You retain full control of your commercial policy, pricing, 
              and subscriber management.
            </p>
            <a
              href="#contact"
              className="btn-glow inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-[#030712] font-semibold rounded-lg font-[Inter_Tight] hover:bg-cyan-400 transition-colors group"
            >
              Request ISP Partnership
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right features */}
          <div className={`space-y-4 stagger-children ${visible ? "visible" : ""}`}>
            {ispFeatures.map((f) => (
              <div
                key={f.title}
                className="card-hover glow-border rounded-xl p-6 bg-white/[0.02] backdrop-blur-sm flex gap-5"
              >
                <div className="shrink-0 w-11 h-11 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-[Outfit] mb-1.5">{f.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
