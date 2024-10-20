import * as SecureStore from 'expo-secure-store';
import { SecureStorageKey } from './constants';
import { SecureStorageHook } from './types';

export function useSecureStorage(): SecureStorageHook {
	const setItemAsync = async (key: SecureStorageKey, value: string): Promise<void> => {
		try {
			await SecureStore.setItemAsync(key, value);
		} catch (error) {
			throw error as Error;
		}
	};

	const getItemAsync = async (key: SecureStorageKey): Promise<string | null> => {
		try {
			const value = await SecureStore.getItemAsync(key);
			return value;
		} catch (error) {
			throw error as Error;
		}
	};

	const deleteItemAsync = async (key: SecureStorageKey): Promise<void> => {
		try {
			await SecureStore.deleteItemAsync(key);
		} catch (error) {
			throw error as Error;
		}
	};

	return { setItemAsync, getItemAsync, deleteItemAsync };
}
