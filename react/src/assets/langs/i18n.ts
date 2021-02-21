import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './translation.en.json';
import translationKo from './translation.ko.json';

const resource = {
    en: { translation: translationEn },
    ko: { translation: translationKo },
};

const currentLang = localStorage.getItem('lang');

i18n.use(initReactI18next).init({
    resources: resource,
    lng: currentLang ? currentLang : 'ko',
    fallbackLng: 'ko',
    debug: true,
    keySeparator: false,
    interpolation: { escapeValue: false },
});

export default i18n;
