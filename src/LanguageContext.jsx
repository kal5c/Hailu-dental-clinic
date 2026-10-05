import { createContext, useContext, useEffect, useState } from "react";
import { translate } from "./i18n";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("hailu-lang") === "am" ? "am" : "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang === "am" ? "am" : "en";
    try {
      localStorage.setItem("hailu-lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const t = (key) => translate(lang, key);
  const toggleLang = () => setLang((prev) => (prev === "en" ? "am" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
