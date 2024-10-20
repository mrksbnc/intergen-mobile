import '@/styles/index.css';

import AppContextProvider from '@/app/context/providers/AppContextProvider';
import AppNavigator from '@/app/navigaton/components/AppNavigator';
import { SecureStorageKey } from '@/hooks/constants';
import { useSecureStorage } from '@/hooks/use_secure_store';
import AppUser from '@/modules/auth/models/app_user';
import { Session, User } from '@supabase/supabase-js';
import * as SplashScreen from 'expo-splash-screen';
import React, { useContext, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContext } from './context/contexts/app.context';
import { AppContextActionType } from './context/reducers/constants';

SplashScreen.preventAutoHideAsync();

export default function App(): React.ReactElement {
	const { getItemAsync } = useSecureStorage();

	const { dispatch } = useContext(AppContext);

	useEffect(() => {
		const bootstrapAsync = async (): Promise<void> => {
			const user: User | null = await getItemAsync(SecureStorageKey.User).then((user) =>
				user ? JSON.parse(user) : null,
			);
			const session: Session | null = await getItemAsync(SecureStorageKey.Session).then(
				(session) => (session ? JSON.parse(session) : null),
			);

			if (session && user) {
				const token = session.access_token;
				const refreshToken = session.refresh_token;

				const appUser = new AppUser({
					id: user.id,
					email: user.email ?? '',
					firstName: user.user_metadata?.first_name ?? '',
					lastName: user.user_metadata?.last_name ?? '',
					age: user.user_metadata?.age ?? null,
					avatarUrl: user.user_metadata?.avatar_url ?? null,
				});

				dispatch({
					type: AppContextActionType.SetLoginData,
					payload: {
						token,
						refreshToken,
						user: user,
						appUser,
						session: session,
					},
				});
				dispatch({ type: AppContextActionType.SetUser, payload: { user: user } });
				dispatch({ type: AppContextActionType.SetAppUser, payload: { appUser } });
				dispatch({
					type: AppContextActionType.SetUserSession,
					payload: { session: session },
				});
				dispatch({
					type: AppContextActionType.SetIsAuthenticated,
					payload: { isAuthenticated: true },
				});
			}
		};

		bootstrapAsync()
			.then(() => {
				SplashScreen.hideAsync();
			})
			.catch((error) => {
				console.error('error', error);
			});
	}, [dispatch]);

	return (
		<SafeAreaProvider>
			<AppContextProvider>
				<AppNavigator />
			</AppContextProvider>
		</SafeAreaProvider>
	);
}
