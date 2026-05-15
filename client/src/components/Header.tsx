import { useState, useEffect } from "react";
import {
  Satellite,
  Menu,
  X,
  Globe,
} from "lucide-react";

import { useLanguage, type Lang } from "@/contexts/LanguageContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      label: t("nav.solutions"),
      href: "#solutions",
    },
    {
      label: t("nav.coverage"),
      href: "#coverage",
    },
    {
      label: t("nav.equipment"),
      href: "#equipment",
    },
    {
      label: t("nav.security"),
      href: "#security",
    },
    {
      label: t("nav.isps"),
      href: "#isps",
    },
    {
      label: t("nav.faq"),
      href: "#faq",
    },
  ];

  const languages: {
    code: Lang;
    label: string;
    flag: string;
  }[] = [
    {
      code: "en",
      label: "English",
      flag: "EN",
    },
    {
      code: "fr",
      label: "Français",
      flag: "FR",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#030712]/90 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-cyan-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
        >
          <div className="relative">
            <Satellite className="w-7 h-7 text-cyan-400 transition-transform duration-300 group-hover:rotate-12" />

            <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-white font-[Outfit]">
              Sat<span className="text-cyan-400">Glob</span>
            </h1>

            <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-cyan-400/60 -mt-1">
              by Bridge Sats
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-[Inter_Tight] group"
            >
              {link.label}

              <span className="absolute left-1/2 bottom-0 h-[2px] w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-3/4" />
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all font-[Inter_Tight]"
            >
              <Globe className="w-4 h-4" />

              <span className="font-semibold">
                {lang.toUpperCase()}
              </span>
            </button>

            {langOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangOpen(false)}
                />

                <div className="absolute right-0 top-full mt-2 z-50 min-w-[150px] overflow-hidden rounded-xl border border-cyan-500/15 bg-[#0a0f1e]/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/5">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all font-[Inter_Tight] ${
                        lang === l.code
                          ? "bg-cyan-500/10 text-cyan-400"
                          : "text-gray-400 hover:bg-white/5 hover:text-cyan-400"
                      }`}
                    >
                      <span className="w-6 text-xs font-bold">
                        {l.flag}
                      </span>

                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>


          {/* Contact Button */}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg bg-cyan-500 text-[#030712] hover:bg-cyan-400 transition-all duration-300 text-sm font-semibold tracking-wide font-[Inter_Tight]"
          >
            {t("nav.contact")}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen
            ? "max-h-[700px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2 border-t border-cyan-500/10 bg-[#030712]/95 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all font-[Inter_Tight]"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Languages */}
          <div className="flex items-center gap-2 px-4 py-3">
            <Globe className="w-4 h-4 text-gray-500" />

            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all font-[Inter_Tight] ${
                  lang === l.code
                    ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {l.flag}
              </button>
            ))}
          </div>

          {/* Mobile Contact */}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 px-4 py-3 rounded-lg bg-cyan-500 text-[#030712] text-center font-semibold"
          >
            {t("nav.contact")}
          </a>
        </div>
      </div>
    </header>
  );
}