/* eslint-disable */
import i18n from "i18next";
import LngDetector from "i18next-browser-languagedetector";

const options = {
  // order and from where user language should be detected
  order: ["querystring", "navigator"],

  // keys or params to lookup language from
  lookupQuerystring: "lng"
};

i18n.use(LngDetector).init({
  // we init with resources
  detection: options,
  debug: false,
  resources: {
    nl: {
      translations: require("../locales/nl-be/translations.json")
    },
    fr: {
      translations: require("../locales/fr-be/translations.json")
    },
    en: {
      translations: require("../locales/en-us/translations.json")
    }
  },
  fallbackLng: "en",

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: ".",

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
