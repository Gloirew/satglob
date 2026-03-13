/* Design: Dark Cosmos — FAQ accordion section */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Performance",
    items: [
      {
        q: "What download speeds can I expect?",
        a: "Speeds depend on your geographic location, network load, weather conditions, and plan type. SatGlob aligns with the technical commitments set by the satellite constellation operator. The High Performance terminal delivers superior throughput and stability, especially during peak usage periods.",
      },
      {
        q: "Does SatGlob guarantee constant speeds?",
        a: "While we cannot guarantee constant speeds, our solution dramatically optimizes connection stability and data flow prioritization. Priority plans ensure your traffic receives preferential treatment over standard residential users.",
      },
    ],
  },
  {
    category: "SatGlob vs Starlink Residential",
    items: [
      {
        q: "What makes SatGlob different from Starlink Residential?",
        a: "Starlink Residential is designed for home use. SatGlob deploys structured enterprise solutions with centralized supervision, extended security guarantees, multi-territorial management, simplified scalability, and dedicated support for critical operations.",
      },
      {
        q: "Why choose SatGlob over subscribing directly to Starlink Priority?",
        a: "SatGlob enriches the base offering with a centralized supervision interface, extended security guarantees, multi-territorial management, simplified scalability, and support tailored for critical operations.",
      },
    ],
  },
  {
    category: "Plans & Subscriptions",
    items: [
      {
        q: "What subscription plans are available?",
        a: "We offer Local Priority and Global Priority plans, specifically designed for professional environments, operational missions, and Internet Access Providers (ISPs). Local Priority operates within a single country, while Global Priority enables international roaming.",
      },
      {
        q: "Are there unlimited data plans?",
        a: "No. Our entire catalog is based on precise data quotas. This approach is essential to guarantee consistent quality of service and respect fair usage principles across the network.",
      },
      {
        q: "Can I adjust my subscription?",
        a: "Yes, flexibility is built in. You can adjust your data volume up or down according to your operational requirements at any time.",
      },
    ],
  },
  {
    category: "Mobility",
    items: [
      {
        q: "Can I move my terminal within my country?",
        a: "Absolutely. With Local Priority, you can relocate your terminals anywhere within the national territory without prior notification. This flexibility is ideal for vehicle fleets, intervention units, and temporary sites.",
      },
      {
        q: "What about international mobility?",
        a: "Global Priority authorizes international roaming across multiple regions, subject to effective coverage and local regulatory frameworks.",
      },
    ],
  },
  {
    category: "Security",
    items: [
      {
        q: "Is my data anonymous with SatGlob?",
        a: "Yes. Terminal management operates exclusively through the SatGlob interface, guaranteeing complete separation from public Starlink databases. Your identity and traffic are fully anonymized.",
      },
      {
        q: "What security features are available?",
        a: "Beyond default anonymization, our platform integrates additional security layers: advanced encryption protocols, IP obfuscation, network compartmentalization, and enterprise firewall deployment. The Stellar Globble Orbit router provides native encryption and satellite+cellular link aggregation with automatic failover.",
      },
    ],
  },
  {
    category: "Equipment",
    items: [
      {
        q: "Which Starlink terminal should I choose?",
        a: "Starlink Mini is ideal for extreme mobility. Starlink Standard suits office environments and SMEs. Starlink High Performance is recommended for harsh conditions, ISP infrastructure, and base stations. For African deployments, we strongly recommend the High Performance model for its thermal resilience.",
      },
      {
        q: "Can I use my existing Starlink equipment?",
        a: "Yes. Any Starlink terminal can be migrated and integrated into the SatGlob environment, whether new or currently in service.",
      },
    ],
  },
];

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

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div ref={ref} className="container relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 reveal ${visible ? "visible" : ""}`}>
          <span className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase font-[Inter_Tight] mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-[Outfit]">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-gray-400">
            Everything you need to know about SatGlob's satellite connectivity solutions.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto space-y-8 stagger-children ${visible ? "visible" : ""}`}>
          {faqs.map((cat) => (
            <div key={cat.category} className="glow-border rounded-xl bg-white/[0.02] backdrop-blur-sm p-6 lg:p-8">
              <h3 className="text-lg font-bold text-cyan-400 font-[Outfit] mb-4">{cat.category}</h3>
              {cat.items.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
