'use client';

import { useSettings } from '@/context/SettingsContext';
import { translations, TranslationKey } from '@/lib/translations';

export function useTranslation() {
  const { settings } = useSettings();
  const lang = settings.language || 'en';

  const t = (key: TranslationKey): string => {
    return translations[lang][key] || translations['en'][key];
  };

  return { t, lang };
}
