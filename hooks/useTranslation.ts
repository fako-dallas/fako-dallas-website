'use client';

import { useAppContext } from '@/context/AppContext';
import { getTranslation } from '@/utils/translations';

/**
 * Custom hook for accessing translations with namespace support
 * @param namespace - The namespace for the translations (e.g., 'home', 'common', 'components')
 */
export const useTranslation = (namespace: string = 'common') => {
  const { locale } = useAppContext();

  const t = (key: string): string => {
    return getTranslation(locale, namespace, key);
  };

  return { t, locale };
};

