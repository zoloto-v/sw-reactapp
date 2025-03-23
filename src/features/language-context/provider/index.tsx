import type { i18n } from "i18next";
import React, { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

interface ILanguageContext {
  t: i18n["t"];
  i18n: i18n;
  onClickLanguageChange: () => void;
  languages: Record<string, Record<string, string>>;
}

export const LanguageContext = createContext<ILanguageContext | null>(null);

export const LanguageContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const languages = {
    en: { nativeName: "English" },
    woo: { nativeName: "Wookiee" },
  };

  const { t, i18n } = useTranslation();

  const onClickLanguageChange = () => {
    const currentLang = i18n.language;
    const langs = Object.keys(i18n.store.data);
    const value = langs.filter((l) => l !== currentLang)?.[0];

    i18n.changeLanguage(value);
  };

  return (
    <LanguageContext.Provider
      value={{ t, i18n, onClickLanguageChange, languages }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
