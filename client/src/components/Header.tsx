import { useState, useEffect } from "react";
import { Satellite, Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Solutions", href: "#solutions" },
    { label: "Coverage", href: "#coverage" },
    { label: "Equipment", href: "#equipment" },
    { label: "Security", href: "#security" },
    { label: "For ISPs", href: "#isps" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#030712]/90 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-cyan-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative">
            <Satellite className="w-7 h-7 text-cyan-400 transition-transform duration-300 group-hover:rotate-12" />
            <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight font-[Outfit] text-white">
              Sat<span className="text-cyan-400">Glob</span>
            </span>
            <span className="hidden sm:block text-[10px] text-cyan-400/60 tracking-[0.2em] uppercase -mt-1">
              by Bridge Sats
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium font-[Inter_Tight] relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-3/4" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="btn-glow px-5 py-2.5 bg-cyan-500 text-[#030712] font-semibold text-sm rounded-lg font-[Inter_Tight] tracking-wide hover:bg-cyan-400 transition-colors"
          >
            Contact Sales
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#030712]/95 backdrop-blur-xl border-t border-cyan-500/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-lg transition-all font-[Inter_Tight]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 mt-2 bg-cyan-500 text-[#030712] font-semibold text-center rounded-lg"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </header>
  );
}
