import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

export default function ErrorScreen(): React.ReactElement {
	const navigation = useNavigation();

	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text className="font-bold text-xl text-red-600">Error</Text>
			<Text className="text-gray-500">Something went wrong! Please return to the home screen or restart the app.</Text>

			<Text onPress={() => navigation.goBack()} className="text-gray-500 text-sm">
				Go back
			</Text>
		</View>
	);
}
