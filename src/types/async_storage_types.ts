import { AsyncStorageStatic } from '@react-native-async-storage/async-storage';

export type SecureStorageKey = 'session' | 'user' | 'token';

export type AsyncStorageBase = {
	isAuthenticated: null;
} & AsyncStorageStatic;
