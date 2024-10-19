import '@/modules/auth/auth.css';

import { ImageResourceUrl } from '@/assets/constants';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

export default function AuthRootScreen(): React.ReactElement {
	return (
		<View className="auth-root flex-1 items-center justify-center">
			<ImageBackground
				source={{
					uri: ImageResourceUrl.AuthRootBg,
				}}
				resizeMode="cover"
				className="w-full h-full contrast-50"
			/>
			<View className="flex flex-col items-center justify-center absolute">
				<Text className="text-white text-3xl font-semibold">Sign in</Text>
				<Text className="text-white text-xl font-semibold">to continue</Text>
			</View>
		</View>
	);
}
