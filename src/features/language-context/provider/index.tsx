import React, { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

export const LanguageContext = createContext(undefined);

export const LanguageContextProvider = ({ children }) => {
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
