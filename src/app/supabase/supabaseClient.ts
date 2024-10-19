import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import type { AsyncStorageBase, Database } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export enum SupabaseTables {
	IntergenUsers = 'intergen_users',
}

export const supabaseClient = createClient<Database>(
	process.env.SUPABASE_URL ?? '',
	process.env.SUPABASE_ANON_KEY ?? '',
	{
		auth: {
			persistSession: true,
			autoRefreshToken: true,
			detectSessionInUrl: false,
			storage: AsyncStorage as AsyncStorageBase,
		},
	},
);
