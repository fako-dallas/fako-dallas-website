'use client';

import { useAppContext } from '@/context/AppContext';
import { availableLocales } from '@/utils/translations';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useAppContext();

  return (
    <div className="flex gap-2">
      {availableLocales.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          className={`px-4 py-2 rounded-md transition-colors ${
            locale === lang.code
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
}
