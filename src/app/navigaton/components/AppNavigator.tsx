import { AppContext } from '@/app/context/contexts/app.context';
import { TabContextProvider } from '@/app/context/providers/TabContextProvider';
import { RootStack } from '@/app/navigaton/types';
import NotificationModal from '@/modules/notifications/NotificationModal';
import ProfileModal from '@/modules/profile/ProfileModal';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import React, { useContext, useMemo } from 'react';
import AuthNavigator from './AuthNavigator';
import HomeTabs from './HomeTabs';

const Stack = createStackNavigator<RootStack>();

SplashScreen.preventAutoHideAsync();

export default function AppNavigator(): React.ReactElement {
	const { state } = useContext(AppContext);

	const isAuthenticated = useMemo(() => state.isAuthenticated, [state.isAuthenticated]);

	return (
		<TabContextProvider>
			<NavigationContainer independent={true}>
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
					{isAuthenticated && (
						<Stack.Group screenOptions={{ presentation: 'card' }}>
							<Stack.Screen name="Notifications" component={NotificationModal} />
							<Stack.Screen name="Profile" component={ProfileModal} />
						</Stack.Group>
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</TabContextProvider>
	);
}
