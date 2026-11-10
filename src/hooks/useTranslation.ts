'use client';

import { useMemo } from 'react';
import { translations, type Locale } from '@/lib/translations';

interface TranslationHook {
  t: (key: string) => string;
  locale: Locale;
}

export function useTranslation(locale: Locale): TranslationHook {
  const t = useMemo(() => {
    return (key: string): string => {
      return translations[locale]?.[key] || key;
    };
  }, [locale]);

  return { t, locale };
}