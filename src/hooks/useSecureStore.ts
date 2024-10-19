import * as SecureStore from 'expo-secure-store';

export enum SECURE_STORAGE_KEYS {
	TOKEN = 'token',
	SESSION = 'session',
	USER = 'user',
}

export const useSecureStorage = () => {
	const setItemAsync = async (key: SECURE_STORAGE_KEYS, value: string) => {
		await SecureStore.setItemAsync(key, value);
	};

	const getItemAsync = async (key: SECURE_STORAGE_KEYS) => {
		const value = await SecureStore.getItemAsync(key);
		return value;
	};

	const deleteItemAsync = async (key: SECURE_STORAGE_KEYS) => {
		await SecureStore.deleteItemAsync(key);
	};

	return { setItemAsync, getItemAsync, deleteItemAsync };
};
