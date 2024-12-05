import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Shion Ideals": "Shion Ideals",
      Home: "Home",
      "About Us": "About Us",
      Services: "Services",
      "Contact Us": "Contact Us",
      Language: "Language",
    },
  },
  jp: {
    translation: {
      "Shion Ideals": "シオンアイデアル",
      Home: "ホーム",
      "About Us": "私たちについて",
      Services: "サービス",
      "Contact Us": "お問い合わせ",
      Language: "言語",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
