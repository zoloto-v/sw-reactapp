import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations/english.json";
import woo from "./translations/wookiee.json";

export const resources = {
  en: { translation: en },
  woo: { translation: woo },
};

i18next.use(initReactI18next)
  .init({
    resources,
    lng: "en"
  });

export default i18next;