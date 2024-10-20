import { AppContextActionType } from '@/app/context/reducers/constants';
import { AppContextActions } from '@/app/context/types';
import { useSupabase } from '@/app/supabase';
import { supabaseClient } from '@/app/supabase/supabase_client';
import { SecureStorageKey } from '@/hooks/constants';
import { useSecureStorage } from '@/hooks/use_secure_store';
import SignInResponse from '@/modules/auth/models/login_response.model';
import type { SignInArgs, SignUpArgs } from '@/modules/auth/types';
import { User } from '@supabase/supabase-js';
import AppUser from '../models/app_user';

const { deleteItemAsync } = useSecureStorage();

let instance: AuthService;

export default class AuthService {
	private readonly supabase = useSupabase();

	static get instance() {
		if (!instance) {
			instance = new AuthService();
		}
		return instance;
	}

	async signIn({ email, password }: SignInArgs): Promise<SignInResponse> {
		const response = await this.supabase.signInWithPassword(email, password);
		return response;
	}

	async signUp({ email, password, firstName, lastName, dispatch }: SignUpArgs) {
		try {
			const { error, data } = await supabaseClient.auth.signUp({
				email,
				password,
				options: {
					data: {
						first_name: firstName,
						last_name: lastName,
					},
				},
			});

			if (error) {
				throw new Error(error.message);
			}

			if (!data.user || !data.session) {
				throw new Error('No data returned from signUp request');
			}

			const appUser = new AppUser({
				id: data.user.id,
				email: data.user.email ?? '',
				firstName: data.user.user_metadata?.first_name ?? '',
				lastName: data.user.user_metadata?.last_name ?? '',
				age: data.user.user_metadata?.age ?? null,
				avatarUrl: data.user.user_metadata?.avatar_url ?? null,
			});

			dispatch({
				type: AppContextActionType.SetUser,
				payload: { user: data.user },
			});
			dispatch({
				type: AppContextActionType.SetAppUser,
				payload: { appUser: appUser },
			});
			dispatch({
				type: AppContextActionType.SetUserSession,
				payload: { session: data.session },
			});
			dispatch({
				type: AppContextActionType.SetIsAuthenticated,
				payload: { isAuthenticated: true },
			});
		} catch (error) {
			throw error as Error;
		}
	}

	async signOut(dispatch: React.Dispatch<AppContextActions>): Promise<void> {
		try {
			await supabaseClient.auth.signOut();
			await deleteItemAsync(SecureStorageKey.User);
			await deleteItemAsync(SecureStorageKey.Token);
			await deleteItemAsync(SecureStorageKey.Session);

			dispatch({ type: AppContextActionType.ClearSession });

			dispatch({
				type: AppContextActionType.SetIsAuthenticated,
				payload: { isAuthenticated: false },
			});
		} catch (error) {
			throw error as Error;
		}
	}

	async getCurrentUser(jwt: string): Promise<User | null> {
		try {
			const {
				data: { user },
			} = await supabaseClient.auth.getUser(jwt);

			if (!user) {
				return null;
			}

			return user;
		} catch (error) {
			throw error as Error;
		}
	}

	async resetPassword(email: string): Promise<void> {
		try {
			await supabaseClient.auth.resetPasswordForEmail(email);
		} catch (error) {
			throw error as Error;
		}
	}
}
