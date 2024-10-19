import { AuthStack } from '@/app/navigaton/types';
import AuthRootScreen from '@/modules/auth/screens/AuthRootScreen';
import SignInScreen from '@/modules/auth/screens/SignInScreen';
import SignUpScreen from '@/modules/auth/screens/SignUpScreen';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator<AuthStack>();

export default function AuthNavigator(): React.ReactElement {
	return (
		<Stack.Navigator
			initialRouteName="AuthRoot"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="AuthRoot"
				component={AuthRootScreen}
				options={{
					title: 'Auth landing',
					cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
				}}
			/>
			<Stack.Screen
				name="SignIn"
				component={SignInScreen}
				options={{
					title: 'Sign in',
				}}
			/>
			<Stack.Screen
				name="SignUp"
				component={SignUpScreen}
				options={{
					title: 'Sign up',
					cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
				}}
			/>
		</Stack.Navigator>
	);
}
