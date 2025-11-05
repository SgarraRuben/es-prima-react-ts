import 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationIT from './locales/it/translation.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      en: typeof translationEN;
      it: typeof translationIT;
    };
  }
}