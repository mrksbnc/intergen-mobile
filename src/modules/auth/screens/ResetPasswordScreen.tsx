import BaseButton from '@/components/button/BaseButton';
import { ButtonType, ButtonVariant } from '@/components/button/constants';
import { InputStyle, InputVariant } from '@/components/input/constants';
import InputField from '@/components/input/InputField';
import AuthService from '@/modules/auth/services/auth_service';
import { SignInScreenProps } from '@/modules/auth/types';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ResetPasswordScreen(): React.ReactElement {
	const navigation = useNavigation<SignInScreenProps>();
	const safeArea = useSafeAreaInsets();

	const [email, setEmail] = useState('');

	async function onResetPasswordClick() {
		if (!email) {
			return;
		}

		try {
			await AuthService.instance.resetPassword(email);
			Alert.alert('A password reset email has been sent to your email address');
			navigation.navigate('SignIn');
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<View
			style={{
				top: safeArea.top,
				bottom: safeArea.bottom,
			}}
			className="h-full flex flex-col justify-between px-6 bg-neutral-50  pt-24"
		>
			<View className="flex flex-col justify-center items-center ">
				<Image source={require('../../../../assets/logo.png')} className="shadow-md" />
			</View>
			<Text className="text-sm font-semibold text-gray-950 py-10 font-sans text-center">
				Enter your email address to reset your password!
			</Text>
			<InputField
				label="Email"
				variant={InputVariant.Default}
				inputStyle={InputStyle.Default}
				value={email}
				className="mb-2"
				autoCapitalize="none"
				onChangeText={setEmail}
				keyboardType="email-address"
				error=""
			/>
			<View className="flex flex-col justify-center items-center h-full w-full">
				<BaseButton
					variant={ButtonVariant.Black}
					type={ButtonType.Rounded}
					label="Reset password"
					classes="my-1 flex flex-row items-center"
					onPress={() => onResetPasswordClick()}
				/>
				<BaseButton
					variant={ButtonVariant.OutlineBlack}
					type={ButtonType.Rounded}
					label="Back to sign in"
					onPress={() => navigation.navigate('SignIn')}
				/>
			</View>
		</View>
	);
}
