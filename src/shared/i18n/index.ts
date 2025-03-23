import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import English from "./english.json";
import Wookiee from "./wookiee.json";

const resources = {
  en: {
    translation: English,
  },
  woo: {
    translation: Wookiee,
  },
};

i18next.use(initReactI18next)
  .init({
    resources,
    lng: "woo"
  });

export default i18next;