import { ImageResourceUrl } from '@/assets/constants';
import BaseButton from '@/components/button/BaseButton';
import { ButtonType, ButtonVariant } from '@/components/button/constants';
import Divider from '@/components/divider/Divider';
import BaseTextInput from '@/components/input/InputField';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';

import { AppContext } from '@/app/context/contexts/app.context';
import { AppContextActionType } from '@/app/context/reducers/constants';
import { InputStyle, InputVariant } from '@/components/input/constants';
import { SecureStorageKey } from '@/hooks/constants';
import { useSecureStorage } from '@/hooks/use_secure_store';
import '@/modules/auth/login.css';
import { useNavigation } from '@react-navigation/native';
import SignInResponse from '../models/login_response.model';
import AuthService from '../services/auth_service';
import { SignInScreenProps } from '../types';

export default function SignInScreen(): React.ReactElement {
	const { t } = useTranslation();
	const { dispatch } = useContext(AppContext);
	const navigation = useNavigation<SignInScreenProps>();

	const { setItemAsync } = useSecureStorage();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	function clearFields() {
		setEmail('');
		setPassword('');
	}

	async function signInUser() {
		try {
			setIsLoading(true);

			const { user, session, error }: SignInResponse = await AuthService.instance.signIn({
				email,
				password,
			});

			if (!user || !session || error) {
				Alert.alert(t('auth.login.failedLoginAttempt'), t('auth.login.failedLoginAttemptMessage'));
				return;
			}

			dispatch({
				type: AppContextActionType.SetLoginData,
				payload: {
					user,
					session,
					token: session.access_token,
					refreshToken: session.refresh_token,
				},
			});

			const stringifiedUser = JSON.stringify(user);
			const stringifiedSession = JSON.stringify(session);

			await setItemAsync(SecureStorageKey.User, stringifiedUser);
			await setItemAsync(SecureStorageKey.Token, session.access_token);
			await setItemAsync(SecureStorageKey.Session, stringifiedSession);

			dispatch({ type: AppContextActionType.SetUser, payload: { user } });
			dispatch({ type: AppContextActionType.SetUserSession, payload: { session } });
			dispatch({
				type: AppContextActionType.SetUserToken,
				payload: { token: session.access_token },
			});
			dispatch({
				type: AppContextActionType.SetIsAuthenticated,
				payload: { isAuthenticated: true },
			});
			dispatch({
				type: AppContextActionType.SetRefreshToken,
				payload: { refreshToken: session.refresh_token },
			});
		} catch (error) {
			console.log(error);
			Alert.alert(t('auth.login.failedLoginAttempt'), t('auth.login.failedLoginAttemptMessage'));
		} finally {
			clearFields();
			setIsLoading(false);
		}
	}

	return (
		<View className="flex-1 items-center h-screen justify-between py-10 px-6 bg-neutral-200">
			<View className="flex flex-col justify-center items-center pt-20">
				<Text className="text-5xl font-light text-gray-950 tracking-widest pt-10 pb-3 font-sans">
					{t('app.name')}
				</Text>
			</View>
			<View key={'contentWrapperKey'} className="w-full">
				<BaseTextInput
					value={email}
					className="mb-2"
					autoCapitalize="none"
					onChangeText={setEmail}
					keyboardType="email-address"
					variant={InputVariant.Dark}
					textContentType="emailAddress"
					label={t('auth.login.emailLabel')}
					inputStyle={InputStyle.Underline}
				/>
				<BaseTextInput
					secureTextEntry
					value={password}
					autoCapitalize="none"
					keyboardType="default"
					variant={InputVariant.Dark}
					onChangeText={setPassword}
					textContentType="password"
					inputStyle={InputStyle.Underline}
					label={t('auth.login.passwordLabel')}
				/>
				<View className="flex flex-row items-center justify-end ">
					<TouchableOpacity className="pt-2 pb-2 font-sans">
						<Text className="text-xs font-medium  text-gray-800 font-sans">
							{t('auth.login.forgotPassword')}
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View className="flex flex-col justify-center pb-1 w-full">
				<View className="flex flex-col justify-center items-center ">
					<BaseButton
						type={ButtonType.Rounded}
						variant={ButtonVariant.Black}
						label={t('auth.login.signInLabel')}
						classes="my-1 flex flex-row items-center"
						disabled={isLoading}
						onPress={signInUser}
					/>
					<BaseButton
						variant={ButtonVariant.Black}
						type={ButtonType.Rounded}
						disabled={isLoading}
						label="Continue with Apple"
						classes="my-1 flex flex-row items-center"
					>
						<Image
							source={{
								uri: ImageResourceUrl.AppleLogoWhite,
							}}
							className="w-5 h-5 mr-3"
						/>
					</BaseButton>
					<BaseButton
						variant={ButtonVariant.Black}
						disabled={isLoading}
						type={ButtonType.Rounded}
						label="Continue with Google"
						classes="my-1 flex flex-row items-center"
					>
						<Image
							source={{
								uri: ImageResourceUrl.GoogleLogo,
							}}
							className="w-5 h-5 mr-3"
						/>
					</BaseButton>
				</View>
				<Divider classes="bg-black" />
				<View className="flex flex-col justify-center items-center my-1">
					<BaseButton
						variant={ButtonVariant.OutlineBlack}
						type={ButtonType.Rounded}
						disabled={isLoading}
						label={t('auth.login.notregisteredLabel')}
						onPress={() => navigation.navigate('SignUp')}
					/>
				</View>
			</View>
		</View>
	);
}
