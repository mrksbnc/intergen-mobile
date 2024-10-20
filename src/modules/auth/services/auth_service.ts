import { useSupabase } from '@/app/supabase';
import { supabaseClient } from '@/app/supabase/supabase_client';
import { SecureStorageKey } from '@/hooks/constants';
import { useSecureStorage } from '@/hooks/use_secure_store';
import SignInResponse from '@/modules/auth/models/login_response.model';
import type { SignInArgs, SignUpArgs } from '@/modules/auth/types';
import AppUser from '../models/app_user';

let instance: AuthService;

const { deleteItemAsync } = useSecureStorage();

export default class AuthService {
	private readonly supabase = useSupabase();

	static get instance() {
		if (!instance) {
			instance = new AuthService();
		}
		return instance;
	}

	public signIn = async ({ email, password }: SignInArgs): Promise<SignInResponse> => {
		const response = await this.supabase.signInWithPassword(email, password);
		return response;
	};

	public signUp = async ({ email, password, fullName }: SignUpArgs) => {
		try {
			const { error } = await supabaseClient.auth.signUp({
				email,
				password,
				options: {
					data: {
						full_name: fullName,
					},
				},
			});

			if (error) {
				throw new Error(error.message);
			}
		} catch (error) {
			throw error as Error;
		}
	};

	public signOut = async () => {
		try {
			await supabaseClient.auth.signOut();
			await deleteItemAsync(SecureStorageKey.User);
			await deleteItemAsync(SecureStorageKey.Token);
			await deleteItemAsync(SecureStorageKey.Session);
		} catch (error) {
			throw error as Error;
		}
	};

	public getCurrentUser = async (): Promise<AppUser | null> => {
		try {
			const { data } = await supabaseClient.auth.getUser();

			if (!data || !data.user) {
				return null;
			}

			const metadata = data.user.user_metadata;

			return new AppUser({
				id: data.user.id,
				email: data.user.email ?? '',
				firstName: metadata?.first_name ?? '',
				lastName: metadata?.last_name ?? '',
				age: metadata?.age ?? null,
				avatarUrl: metadata?.avatar_url ?? null,
			});
		} catch (error) {
			throw error as Error;
		}
	};
}
