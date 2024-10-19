import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';
import { SupabaseEnvKey } from './constants';
import type { AsyncStorageBase, Database } from './types';

export const supabaseClient = createClient<Database>(
	process.env[SupabaseEnvKey.SupabaseUrl] ?? '',
	process.env[SupabaseEnvKey.SupabaseAnonKey] ?? '',
	{
		auth: {
			persistSession: true,
			autoRefreshToken: true,
			detectSessionInUrl: false,
			storage: AsyncStorage as AsyncStorageBase,
		},
	},
);
