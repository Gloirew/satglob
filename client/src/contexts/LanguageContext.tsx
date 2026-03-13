import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type Lang = "en" | "fr";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  ta: (key: string) => string[];
}

const LanguageContext = createContext<LanguageContextType | null>(null);

// Deep get from nested object using dot notation
function deepGet(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path; // fallback to key
    }
  }
  return current;
}

// Import translations
import en from "@/i18n/en";
import fr from "@/i18n/fr";

const translations: Record<Lang, Record<string, unknown>> = { en, fr };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("satglob-lang") as Lang;
      if (saved === "en" || saved === "fr") return saved;
      const browserLang = navigator.language.slice(0, 2);
      return browserLang === "fr" ? "fr" : "en";
    }
    return "en";
  });

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("satglob-lang", newLang);
    document.documentElement.lang = newLang;
  }, []);

  const t = useCallback(
    (key: string): string => {
      const val = deepGet(translations[lang], key);
      return typeof val === "string" ? val : key;
    },
    [lang]
  );

  const ta = useCallback(
    (key: string): string[] => {
      const val = deepGet(translations[lang], key);
      return Array.isArray(val) ? val : [];
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, ta }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
