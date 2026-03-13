/* Design: Dark Cosmos — professional footer with scroll-to-top */
import { Satellite, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-cyan-500/10 bg-[#020510]">
      <div className="container py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <Satellite className="w-6 h-6 text-cyan-400 transition-transform group-hover:rotate-12" />
              <span className="text-lg font-bold text-white font-[Outfit]">
                Sat<span className="text-cyan-400">Glob</span>
              </span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              A division of Bridge Sats Sarl. Enterprise satellite connectivity for Africa and beyond.
            </p>
            <div className="space-y-1 text-xs text-gray-600">
              <p>RCCM: CD/GOM/RCCM/24-B-01557</p>
              <p>ID.NAT: 19-J6100-N55328U</p>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold text-white font-[Inter_Tight] tracking-wider uppercase mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Enterprise Connectivity", href: "#solutions" },
                { label: "NGO & Humanitarian", href: "#solutions" },
                { label: "Mining & Energy", href: "#solutions" },
                { label: "Telecom Operators", href: "#isps" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white font-[Inter_Tight] tracking-wider uppercase mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Coverage Map", href: "#coverage" },
                { label: "Equipment", href: "#equipment" },
                { label: "Network Security", href: "#security" },
                { label: "FAQ", href: "#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white font-[Inter_Tight] tracking-wider uppercase mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:contact@bridgesats.com" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">
                  contact@bridgesats.com
                </a>
              </li>
              <li>
                <a href="mailto:gloirew@bridgesats.com" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">
                  gloirew@bridgesats.com
                </a>
              </li>
              <li>
                <a href="https://bridgesats.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">
                  bridgesats.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} SatGlob by Bridge Sats Sarl. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-600">Powered by</span>
              {["GoConnect", "Marlink", "Stellar"].map((p) => (
                <span key={p} className="text-xs text-gray-500 font-[Inter_Tight]">{p}</span>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-white/5 border border-cyan-500/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
