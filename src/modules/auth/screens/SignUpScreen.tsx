import { AppContext } from '@/app/context/contexts/app.context';
import BaseButton from '@/components/button/BaseButton';
import { ButtonType, ButtonVariant } from '@/components/button/constants';
import { InputStyle, InputVariant } from '@/components/input/constants';
import InputField from '@/components/input/InputField';
import AuthService from '@/modules/auth/services/auth_service';
import { SignInScreenProps } from '@/modules/auth/types';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SignUpScreen(): React.ReactElement {
	const safeArea = useSafeAreaInsets();
	const navigation = useNavigation<SignInScreenProps>();

	const { dispatch } = useContext(AppContext);

	const [tabIndex, setTabIndex] = useState(0);

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	function clearFields() {
		setFirstName('');
		setLastName('');
		setEmail('');
		setPassword('');
		setConfirmPassword('');
	}

	async function signUp() {
		try {
			if (password !== confirmPassword) {
				Alert.alert('Error', 'Passwords do not match');
				return;
			}

			await AuthService.instance.signUp({ email, password, firstName, lastName, dispatch });
		} catch (error) {
			const e = error as Error;
			Alert.alert('Error', e.message ?? 'Something went wrong');
		} finally {
			clearFields();
		}
	}

	return (
		<View
			style={{ top: safeArea.top, bottom: safeArea.bottom }}
			className="flex flex-col justify-between px-6 h-[90%] w-full"
		>
			<View className="flex flex-col h-auto w-full">
				<View className="flex flex-col justify-center items-center pt-20">
					<Image source={require('../../../../assets/logo.png')} className="shadow-md" />
				</View>
				<Text className="text-sm font-semibold text-gray-950 pb-10 pt-10 font-sans text-center">
					Please enter your details to create an account
				</Text>
				{tabIndex === 0 && (
					<>
						<InputField
							className="mb-2"
							value={firstName}
							label="First name"
							autoCapitalize="none"
							onChangeText={setFirstName}
							keyboardType="name-phone-pad"
							variant={InputVariant.Default}
							inputStyle={InputStyle.Default}
							error=""
						/>
						<InputField
							label="Last name"
							variant={InputVariant.Default}
							inputStyle={InputStyle.Default}
							value={lastName}
							className="mb-2"
							autoCapitalize="none"
							onChangeText={setLastName}
							keyboardType="name-phone-pad"
							error=""
						/>
						<InputField
							label="E-mail"
							variant={InputVariant.Default}
							inputStyle={InputStyle.Default}
							value={email}
							className="mb-2"
							autoCapitalize="none"
							onChangeText={setEmail}
							keyboardType="email-address"
							error=""
						/>
					</>
				)}
				{tabIndex === 1 && (
					<>
						<InputField
							label="Password"
							variant={InputVariant.Default}
							inputStyle={InputStyle.Default}
							value={password}
							className="mb-2"
							secureTextEntry
							autoCapitalize="none"
							onChangeText={setPassword}
							keyboardType="email-address"
							error=""
						/>
						<InputField
							label="Confirm password"
							variant={InputVariant.Default}
							inputStyle={InputStyle.Default}
							value={confirmPassword}
							className="mb-2"
							secureTextEntry
							autoCapitalize="none"
							onChangeText={setConfirmPassword}
							keyboardType="email-address"
							error=""
						/>
					</>
				)}
			</View>
			{tabIndex === 0 && (
				<View className="flex flex-col h-max w-full pb-2">
					<BaseButton
						variant={ButtonVariant.Black}
						type={ButtonType.Rounded}
						label="Next"
						onPress={() => setTabIndex(1)}
						classes="mb-1"
					/>
					<BaseButton
						variant={ButtonVariant.OutlineBlack}
						type={ButtonType.Rounded}
						label="Back to sign in"
						onPress={() => navigation.navigate('SignIn')}
					/>
				</View>
			)}
			{tabIndex === 1 && (
				<View className="flex flex-col pb-2">
					<BaseButton
						variant={ButtonVariant.Black}
						type={ButtonType.Rounded}
						label="Sign up"
						onPress={signUp}
						classes="mb-1"
					/>
					<BaseButton
						variant={ButtonVariant.OutlineBlack}
						type={ButtonType.Rounded}
						label="Back"
						onPress={() => setTabIndex(tabIndex - 1)}
					/>
				</View>
			)}
		</View>
	);
}
