import React, { createContext, ReactNode } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const lang: Lang = isLang(router.locale) ? router.locale : "en";

  const setLang = (l: Lang) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: l });
  };

  return <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>{children}</LangContext.Provider>;
};
