import * as SecureStore from 'expo-secure-store';
import { SecureStorageHook } from './types';
import { SecureStorageKey } from './constants';
import { ApplicationError } from '@/errors/application_error';

export function useSecureStorage(): SecureStorageHook {
	const setItemAsync = async (key: SecureStorageKey, value: string): Promise<void> => {
		try {
			await SecureStore.setItemAsync(key, value);
		} catch (error) {
			throw new ApplicationError(error);
		}
	};

	const getItemAsync = async (key: SecureStorageKey): Promise<string | null> => {
		try {
			const value = await SecureStore.getItemAsync(key);
			return value;
		} catch (error) {
			throw new ApplicationError(error);
		}
	};

	const deleteItemAsync = async (key: SecureStorageKey): Promise<void> => {
		try {
			await SecureStore.deleteItemAsync(key);
		} catch (error) {
			throw new ApplicationError(error);
		}
	};

	return { setItemAsync, getItemAsync, deleteItemAsync };
}
