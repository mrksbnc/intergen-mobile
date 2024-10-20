import { AuthStack } from '@/app/navigaton/types';
import ResetPasswordScreen from '@/modules/auth/screens/ResetPasswordScreen';
import SignInScreen from '@/modules/auth/screens/SignInScreen';
import SignUpScreen from '@/modules/auth/screens/SignUpScreen';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator<AuthStack>();

export default function AuthNavigator(): React.ReactElement {
	return (
		<Stack.Navigator
			initialRouteName="SignIn"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="SignIn"
				component={SignInScreen}
				options={{
					title: 'Sign in',
					cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
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
			<Stack.Screen
				name="ForgotPassword"
				component={ResetPasswordScreen}
				options={{
					title: 'Reset password',
					cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
				}}
			/>
		</Stack.Navigator>
	);
}
