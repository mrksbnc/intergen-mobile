import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import type { AsyncStorageBase, Database } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SupabaseEnvKey } from './constants';

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
