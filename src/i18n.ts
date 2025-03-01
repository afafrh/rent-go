import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import es from "./locales/es.json";
import it from "./locales/it.json";

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Initializes react-i18next
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      it: { translation: it },
    },
    fallbackLng: "en", // Default language
    interpolation: { escapeValue: false },
  });

export default i18n;
