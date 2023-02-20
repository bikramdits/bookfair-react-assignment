import translationEn from "assets/translation/locales/en/translation.json";
import translationHi from "assets/translation/locales/hi/translation.json";

const resources: { [key: string]: { translation: object } } = {
  en: {
    translation: translationEn,
  },
  hi: {
    translation: translationHi,
  },
};

export default resources;
