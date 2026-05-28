import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Lang, Translation, translations, isLang } from "../common/constants/locales";

export type { Lang, Translation };

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translation;
};

export const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("vi-lang") : null;
    if (isLang(stored)) setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("vi-lang", l);
  };

  return <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>{children}</LangContext.Provider>;
};
