// Import all translations organized by namespace
import commonEn from "@/locales/common/en.json";
import commonEs from "@/locales/common/es.json";
import commonFr from "@/locales/common/fr.json";

import homeEn from "@/locales/home/en.json";
import homeEs from "@/locales/home/es.json";
import homeFr from "@/locales/home/fr.json";

// Translation cache organized by namespace and locale
type TranslationCache = Record<string, Record<string, Record<string, unknown>>>;

const translationCache: TranslationCache = {
  common: {
    en: commonEn,
    es: commonEs,
    fr: commonFr,
  },
  home: {
    en: homeEn,
    es: homeEs,
    fr: homeFr,
  },
  // Add more namespaces here as needed
};

/**
 * Get a translation value for a specific key
 * @param locale - The locale code
 * @param namespace - The namespace (e.g., 'home', 'common')
 * @param key - The translation key (supports nested keys with dot notation)
 */
export const getTranslation = (
  locale: string,
  namespace: string,
  key: string,
): string => {
  const translation = translationCache[namespace]?.[locale];

  if (!translation) {
    console.warn(
      `Translation not found for namespace: ${namespace}, locale: ${locale}`,
    );
    return key;
  }

  // Support nested keys like "features.title"
  const keys = key.split(".");
  let value: Record<string, unknown> | string = translation;

  for (const k of keys) {
    if (typeof value === "object" && value !== null) {
      value = value[k] as Record<string, unknown> | string;
    } else {
      return key;
    }
  }

  return typeof value === "string" ? value : key;
};

export const availableLocales = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
];

/**
 * Register a new namespace with its translations
 * Use this to add translations for new pages/components dynamically
 */
export const registerNamespace = (
  namespace: string,
  translations: Record<string, Record<string, unknown>>,
): void => {
  translationCache[namespace] = translations;
};
