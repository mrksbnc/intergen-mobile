import * as SecureStore from 'expo-secure-store';
import { SecureStorageKey } from './constants';
import { SecureStorageHook } from './types';

export function useSecureStorage(): SecureStorageHook {
	const setItemAsync = async (key: SecureStorageKey, value: string): Promise<void> => {
		try {
			await SecureStore.setItemAsync(key, value);
		} catch (error) {
			const e: Error = error as Error;
			throw new Error(e.message);
		}
	};

	const getItemAsync = async (key: SecureStorageKey): Promise<string | null> => {
		try {
			const value = await SecureStore.getItemAsync(key);
			return value;
		} catch (error) {
			const e: Error = error as Error;
			throw new Error(e.message);
		}
	};

	const deleteItemAsync = async (key: SecureStorageKey): Promise<void> => {
		try {
			await SecureStore.deleteItemAsync(key);
		} catch (error) {
			const e: Error = error as Error;
			throw new Error(e.message);
		}
	};

	return { setItemAsync, getItemAsync, deleteItemAsync };
}
