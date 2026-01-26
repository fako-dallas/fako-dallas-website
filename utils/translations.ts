import en from '@/locales/en.json';
import es from '@/locales/es.json';
import fr from '@/locales/fr.json';

const translations: Record<string, typeof en> = {
  en,
  es,
  fr,
};

export const getTranslation = (locale: string, key: string): string => {
  const translation = translations[locale] || translations.en;
  
  // Support nested keys like "features.title"
  const keys = key.split('.');
  let value: Record<string, unknown> | string = translation;
  
  for (const k of keys) {
    if (typeof value === 'object' && value !== null) {
      value = value[k] as Record<string, unknown> | string;
    }
  }
  
  return typeof value === 'string' ? value : key;
};

export const availableLocales = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
];
