import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import type {SupportedLanguageCode} from '@/lib/languages';
import en from '@/locales/en.json';

const translations: Record<SupportedLanguageCode, Record<string, unknown>> = {
    en,
};

const resources = Object.fromEntries(
    Object.entries(translations).map(([code, translation]) => [code, {translation}]),
);

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
