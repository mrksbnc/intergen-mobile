import { AppContext } from '@/app/context/contexts/app.context';
import { useString } from '@/hooks/use_string';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import type { AppHeaderProps } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export default function AppHeader(props: any): React.ReactElement {
	const [fullName, setFullName] = useState('');
	const hasNotifications = false;

	const { capitalize } = useString();
	const { state } = useContext(AppContext);
	const navigation = useNavigation<AppHeaderProps>();

	useEffect(() => {
		if (state?.user?.user_metadata?.full_name) {
			setFullName(state?.user?.user_metadata?.full_name);
		}
	}, [state]);

	const handleProfilePress = () => {
		navigation.navigate('Profile');
	};

	const handleNotificationsPress = () => {
		navigation.navigate('Notifications');
	};

	return (
		<SafeAreaView className="w-full bg-white">
			<View className="flex flex-row items-center h-14 justify-between bg-white border-b-0.5 border-gray-300 mx-2">
				<View className="flex flex-row items-center justify-center pl-2">
					<TouchableOpacity onPress={handleProfilePress}>
						<Image
							source={{
								uri: 'https://via.placeholder.com/300/09f.png/fff ',
							}}
							className="w-12 h-12 rounded-full"
						/>
					</TouchableOpacity>
					<View className="flex flex-col ml-2 items-start">
						<Text className="text-gray-500 text-xs font-semibold m-0 p-0">Welcome,</Text>
						<Text className="text-midnight text-md font-semibold m-0 p-0">{capitalize(fullName)}</Text>
					</View>
				</View>
				<TouchableOpacity className="pr-4" onPress={handleNotificationsPress}>
					<MaterialCommunityIcons name={hasNotifications ? 'bell-badge' : 'bell'} size={22} color="#2B2C3D" />
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
