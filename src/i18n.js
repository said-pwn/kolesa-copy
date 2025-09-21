// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // автоматически определяет язык пользователя
  .use(initReactI18next)
  .init({
    fallbackLng: "ru", // если язык не определился, используем русский
    debug: false,
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    resources: {
      ru: {
        translation: {
          welcome: "Добро пожаловать",
          submit: "Подать объявление",
        },
      },
      en: {
        translation: {
          welcome: "Welcome",
          submit: "Submit Ad",
        },
      },
      uz: {
        translation: {
          welcome: "Xush kelibsiz",
          submit: "E’lon berish",
        },
      },
    },
  });

export default i18n;
