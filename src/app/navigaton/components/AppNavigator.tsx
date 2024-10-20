import { AppContext } from '@/app/context/contexts/app.context';
import { TabContextProvider } from '@/app/context/providers/TabContextProvider';
import { AppContextActionType } from '@/app/context/reducers/constants';
import { RootStack } from '@/app/navigaton/types';
import { SecureStorageKey } from '@/hooks/constants';
import { useSecureStorage } from '@/hooks/use_secure_store';
import AppUser from '@/modules/auth/models/app_user';
import NotificationModal from '@/modules/notifications/NotificationModal';
import ProfileModal from '@/modules/profile/ProfileModal';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Session } from '@supabase/supabase-js';
import * as SplashScreen from 'expo-splash-screen';
import React, { useContext, useEffect } from 'react';
import AuthNavigator from './AuthNavigator';
import HomeTabs from './HomeTabs';

const Stack = createStackNavigator<RootStack>();

SplashScreen.preventAutoHideAsync();

export default function AppNavigator(): React.ReactElement {
	const { getItemAsync } = useSecureStorage();

	const {
		state: { isAuthenticated },
		dispatch,
	} = useContext(AppContext);

	useEffect(() => {
		const bootstrapAsync = async () => {
			let user: string | null;
			let session: string | null;

			try {
				user = await getItemAsync(SecureStorageKey.User);
				session = await getItemAsync(SecureStorageKey.Session);
			} catch (error) {
				console.error(error);
				return;
			}

			if (!session || !user) {
				return;
			}

			let parsedUser: AppUser;
			let parsedSession: Session;

			try {
				parsedUser = JSON.parse(user) as AppUser;
			} catch (error) {
				console.error(error);
				return;
			}

			try {
				parsedSession = JSON.parse(session) as Session;
			} catch (error) {
				console.error(error);
				return;
			}

			if (parsedSession && parsedUser) {
				const token = parsedSession.access_token;
				const refreshToken = parsedSession.refresh_token;

				dispatch({
					type: AppContextActionType.SetLoginData,
					payload: {
						token,
						refreshToken,
						user: parsedUser,
						session: parsedSession,
					},
				});
			}
		};

		try {
			bootstrapAsync();
			SplashScreen.hideAsync();
		} catch (error) {
			throw error as Error;
		}
	}, [dispatch]);

	return (
		<TabContextProvider>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Auth"
					screenOptions={{
						headerShown: false,
					}}
				>
					{!isAuthenticated ? (
						<Stack.Screen name="Auth" component={AuthNavigator} />
					) : (
						<Stack.Screen name="Main" component={HomeTabs} />
					)}
					<Stack.Group screenOptions={{ presentation: 'modal' }}>
						<Stack.Screen name="Notifications" component={NotificationModal} />
						<Stack.Screen name="Profile" component={ProfileModal} />
					</Stack.Group>
				</Stack.Navigator>
			</NavigationContainer>
		</TabContextProvider>
	);
}
