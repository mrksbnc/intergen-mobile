import { AsyncStorageStatic } from '@react-native-async-storage/async-storage';
import { Session, User, WeakPassword } from '@supabase/supabase-js';

export type AsyncStorageBase = {
	isAuthenticated: null;
} & AsyncStorageStatic;

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export type Database = {
	public: {
		Tables: {
			ordo_users: {
				Row: {
					avatar_url: string | null;
					full_name: string | null;
					id: string;
				};
				Insert: {
					avatar_url?: string | null;
					full_name?: string | null;
					id: string;
				};
				Update: {
					avatar_url?: string | null;
					full_name?: string | null;
					id?: string;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

export type SignInResponse = {
	user: User;
	session: Session;
	weakPassword?: WeakPassword;
};

export type SignUpResponse =
	| {
			user: User | null;
			session: Session | null;
	  }
	| {
			user: null;
			session: null;
	  };

export type FileUploadResponse = {
	id: string;
	path: string;
	fullPath: string;
};
