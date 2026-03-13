import { useState, useEffect } from "react";
import { Satellite, Menu, X, Globe } from "lucide-react";
import { useLanguage, type Lang } from "@/contexts/LanguageContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav.solutions"), href: "#solutions" },
    { label: t("nav.coverage"), href: "#coverage" },
    { label: t("nav.equipment"), href: "#equipment" },
    { label: t("nav.security"), href: "#security" },
    { label: t("nav.isps"), href: "#isps" },
    { label: t("nav.faq"), href: "#faq" },
  ];

  const languages: { code: Lang; label: string; flag: string }[] = [
    { code: "en", label: "English", flag: "EN" },
    { code: "fr", label: "Français", flag: "FR" },
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

        {/* CTA + Language Switcher */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors font-[Inter_Tight] rounded-lg hover:bg-white/5"
            >
              <Globe className="w-4 h-4" />
              <span className="font-semibold">{lang.toUpperCase()}</span>
            </button>
            {langOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                <div className="absolute right-0 top-full mt-2 z-50 bg-[#0a0f1e]/95 backdrop-blur-xl border border-cyan-500/15 rounded-lg shadow-xl shadow-cyan-500/5 overflow-hidden min-w-[140px]">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-[Inter_Tight] transition-colors ${
                        lang === l.code
                          ? "text-cyan-400 bg-cyan-500/10"
                          : "text-gray-400 hover:text-cyan-400 hover:bg-white/5"
                      }`}
                    >
                      <span className="text-xs font-bold w-6">{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <a
            href="#contact"
            className="btn-glow px-5 py-2.5 bg-cyan-500 text-[#030712] font-semibold text-sm rounded-lg font-[Inter_Tight] tracking-wide hover:bg-cyan-400 transition-colors"
          >
            {t("nav.contact")}
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
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
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

          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-2 px-4 py-3">
            <Globe className="w-4 h-4 text-gray-500" />
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                }}
                className={`px-3 py-1.5 text-sm rounded-md font-[Inter_Tight] font-medium transition-all ${
                  lang === l.code
                    ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {l.flag}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 mt-2 bg-cyan-500 text-[#030712] font-semibold text-center rounded-lg"
          >
            {t("nav.contact")}
          </a>
        </div>
      </div>
    </header>
  );
}
