'use client';

import { useAppContext } from '@/context/AppContext';
import { getTranslation } from '@/utils/translations';

export const useTranslation = () => {
  const { locale } = useAppContext();

  const t = (key: string): string => {
    return getTranslation(locale, key);
  };

  return { t, locale };
};
