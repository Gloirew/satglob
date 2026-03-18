/* Design: Dark Cosmos — professional contact form */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Send, Mail, ExternalLink, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const { ref, visible } = useScrollReveal();
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construction du lien mailto avec les données du formulaire
    const subject = encodeURIComponent(`Nouveau contact de ${formData.name} (${formData.company})`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\n` +
      `Entreprise: ${formData.company}\n` +
      `Pays: ${formData.country}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Redirection vers le client mail
    window.location.href = `mailto:contact@bridgesats.com?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
    toast.success(lang === "fr" ? "Merci ! Votre client mail vient de s'ouvrir." : "Thank you! Your email client has opened.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

      <div ref={ref} className="container relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left info */}
          <div className={`reveal-left ${visible ? "visible" : ""}`}>
            <span className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase font-[Inter_Tight] mb-4 block">
              {t("contact.label")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-[Outfit] leading-tight">
              {t("contact.title")}{" "}
              <span className="text-gradient">{t("contact.titleHighlight")}</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              {t("contact.description")}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white font-[Inter_Tight] mb-1">{t("contact.emailUs")}</h4>
                  <a href="mailto:contact@bridgesats.com" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                    contact@bridgesats.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                  <ExternalLink className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white font-[Inter_Tight] mb-1">{t("contact.supportPortal")}</h4>
                  <a href="https://bridgesats.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                    bridgesats.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className={`reveal-right ${visible ? "visible" : ""}`}>
            {submitted ? (
              <div className="glow-border rounded-2xl bg-white/[0.03] backdrop-blur-sm p-10 text-center">
                <CheckCircle className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white font-[Outfit] mb-3">
                  {lang === "fr" ? "Message envoyé" : "Message Sent"}
                </h3>
                <p className="text-gray-400">
                  {lang === "fr"
                    ? "Merci de nous avoir contactés. Notre équipe commerciale vous répondra dans les 24 heures."
                    : "Thank you for reaching out. Our sales team will get back to you within 24 hours."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glow-border rounded-2xl bg-white/[0.03] backdrop-blur-sm p-8 lg:p-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-[Inter_Tight]">
                      {t("contact.form.name")} {t("contact.form.required")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all outline-none text-sm"
                      placeholder={t("contact.form.namePlaceholder")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-[Inter_Tight]">
                      {t("contact.form.company")} {t("contact.form.required")}
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all outline-none text-sm"
                      placeholder={t("contact.form.companyPlaceholder")}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-[Inter_Tight]">
                      {t("contact.form.country")} {t("contact.form.required")}
                    </label>
                    <input
                      type="text"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all outline-none text-sm"
                      placeholder={t("contact.form.countryPlaceholder")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-[Inter_Tight]">
                      {t("contact.form.email")} {t("contact.form.required")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all outline-none text-sm"
                      placeholder={t("contact.form.emailPlaceholder")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[Inter_Tight]">
                    {t("contact.form.message")} {t("contact.form.required")}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all outline-none text-sm resize-none"
                    placeholder={t("contact.form.messagePlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-glow w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-cyan-500 text-[#030712] font-semibold rounded-lg font-[Inter_Tight] hover:bg-cyan-400 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {t("contact.form.submit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}