import React, { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

export const LanguageContext = createContext(undefined);

export const LanguageContextProvider = ({ children }) => {
  const languages = {
    en: { nativeName: "English" },
    woo: { nativeName: "Wookiee" },
  };

  const { t, i18n } = useTranslation();

  const onClickLanguageChange = (e) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
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
