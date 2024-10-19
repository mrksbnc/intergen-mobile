import { SecureStorageKey } from './constants';

export type SecureStorageHook = {
	setItemAsync: (key: SecureStorageKey, value: string) => Promise<void>;
	getItemAsync: (key: SecureStorageKey) => Promise<string | null>;
	deleteItemAsync: (key: SecureStorageKey) => Promise<void>;
};
