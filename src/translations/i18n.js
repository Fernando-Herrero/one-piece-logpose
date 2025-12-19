import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import { local } from "@/helpers/storage";
import translationEN from "@/translations/locales/en.json";
import translationES from "@/translations/locales/es.json";
import translationJA from "@/translations/locales/ja.json";
import { initReactI18next } from "react-i18next";

const savedLang = local.get("lang") || "es";

i18n
    // .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ["es", "en", "ja"],
        lng: savedLang,
        resources: {
            es: { translation: translationES },
            en: { translation: translationEN },
            ja: { translation: translationJA },
        },
        fallbackLng: "es",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
