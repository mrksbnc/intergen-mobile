import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ResetPasswordScreen(): React.ReactElement {
	const navigation = useNavigation();

	return (
		<SafeAreaView className="flex-1 items-center justify-center bg-white">
			<Text>Reset password</Text>
			<TouchableOpacity className="pt-2 pb-2 font-sans" onPress={() => navigation.goBack()}>
				<Text className="text-xs font-medium  text-gray-800 font-sans">Go back</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
