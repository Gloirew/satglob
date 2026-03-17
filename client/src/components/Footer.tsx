/* Design: Dark Cosmos — professional footer with social icons + scroll-to-top */
import { Satellite, ArrowUp, Linkedin, Facebook } from "lucide-react";
import { SiX } from "react-icons/si";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com",
    },
    {
      name: "X",
      icon: SiX,
      url: "https://x.com",
    },
  ];

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
              {t("footer.brand")}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-4">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all group"
                    aria-label={s.name}
                  >
                    <Icon className="w-4 h-4 text-white/80 group-hover:text-cyan-400 transition-colors" />
                  </a>
                );
              })}
            </div>

            <div className="space-y-1 text-xs text-gray-600">
              <p>RCCM: CD/GOM/RCCM/24-B-01557</p>
              <p>ID.NAT: 19-J6100-N55328U</p>
              <p>Impôts : A2425191J</p>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold text-white font-[Inter_Tight] tracking-wider uppercase mb-4">
              {t("footer.solutions")}
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: t("footer.enterpriseConn"), href: "#solutions" },
                { label: t("footer.ngoHumanitarian"), href: "#solutions" },
                { label: t("footer.miningEnergy"), href: "#solutions" },
                { label: t("footer.telecomOps"), href: "#isps" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-cyan-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white font-[Inter_Tight] tracking-wider uppercase mb-4">
              {t("footer.resources")}
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: t("footer.coverageMap"), href: "#coverage" },
                { label: t("footer.equipmentLink"), href: "#equipment" },
                { label: t("footer.securityLink"), href: "#security" },
                { label: t("footer.faqLink"), href: "#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-cyan-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white font-[Inter_Tight] tracking-wider uppercase mb-4">
              {t("footer.contactTitle")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:contact@bridgesats.com"
                  className="text-sm text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  contact@bridgesats.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:gloirew@bridgesats.com"
                  className="text-sm text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  gloirew@bridgesats.com
                </a>
              </li>
              <li>
                <a
                  href="https://bridgesats.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  bridgesats.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-600">
                {t("footer.poweredBy")}
              </span>
              {["GoConnect", "Marlink", "Stellar"].map((p) => (
                <span
                  key={p}
                  className="text-xs text-gray-500 font-[Inter_Tight]"
                >
                  {p}
                </span>
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