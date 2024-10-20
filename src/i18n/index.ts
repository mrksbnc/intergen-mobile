import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { languageDetectorPlugin } from './plugins/language_detector';
import { de, en } from './translations';

const resources = {
	en: {
		translation: en,
	},
	de: {
		translation: de,
	},
};

i18n
	.use(initReactI18next)
	.use(languageDetectorPlugin)
	.init({
		resources,
		fallbackLng: 'en',
		compatibilityJSON: 'v3',
		interpolation: {
			escapeValue: false,
		},
		react: {
			useSuspense: false,
		},
	});

export default i18n;
