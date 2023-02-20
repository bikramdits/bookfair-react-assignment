import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import resources from "assets/translation/resources";

const lng: string = localStorage.getItem("i18nextLng") || "en";
const fallbackLng: string[] = ["en"];

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng,
    fallbackLng,
    keySeparator: false,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
