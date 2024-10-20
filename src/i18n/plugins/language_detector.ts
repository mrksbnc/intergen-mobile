import { SecureStorageKey } from '@/hooks/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import { ModuleType } from 'i18next';

export const languageDetectorPlugin = {
	type: 'languageDetector' as ModuleType,
	async: true,
	init: () => {},
	detect: async function (callback: (lang: string) => void) {
		try {
			await AsyncStorage.getItem(SecureStorageKey.Language).then((language) => {
				if (language) {
					return callback(language);
				} else {
					return callback(Localization.getLocales()[0]?.languageCode ?? 'en');
				}
			});
		} catch (error) {
			console.error('Error reading language', error);
		}
	},
	cacheUserLanguage: async function (language: string) {
		try {
			await AsyncStorage.setItem(SecureStorageKey.Language, language);
		} catch (error) {
			console.error(error);
		}
	},
};
