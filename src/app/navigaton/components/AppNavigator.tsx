import { AppContext } from '@/app/context/contexts/app.context';
import { TabContextProvider } from '@/app/context/providers/TabContextProvider';
import { AppContextActionType } from '@/app/context/reducers/constants';
import { RootStack } from '@/app/navigaton/types';
import { SecureStorageKey } from '@/hooks/constants';
import { useSecureStorage } from '@/hooks/use_secure_store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Session, User } from '@supabase/supabase-js';
import React, { useContext, useEffect } from 'react';
import AuthNavigator from './AuthNavigator';
import HomeTabs from './HomeTabs';

const Stack = createStackNavigator<RootStack>();

export default function AppNavigator(): React.ReactElement {
	const {
		state: { isLoading, isAuthenticated },
		dispatch,
	} = useContext(AppContext);

	const { getItemAsync } = useSecureStorage();

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

			let parsedUser: User;
			let parsedSession: Session;

			try {
				parsedUser = JSON.parse(user) as User;
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
		} catch (error) {
			throw error as Error;
		}
	}, [dispatch]);

	return (
		<TabContextProvider>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					{!isLoading && !isAuthenticated ? (
						<Stack.Screen name="Auth" component={AuthNavigator} />
					) : (
						<Stack.Screen name="Main" component={HomeTabs} />
					)}
					{/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
						<Stack.Screen name="Profile" component={} />
					</Stack.Group> */}
				</Stack.Navigator>
			</NavigationContainer>
		</TabContextProvider>
	);
}
