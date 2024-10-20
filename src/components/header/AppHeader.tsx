import { AppContext } from '@/app/context/contexts/app.context';
import { AppHeaderProps } from '@/app/navigaton/types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function AppHeader(props: BottomTabHeaderProps): React.ReactElement {
	const hasNotifications = false;

	const { state } = useContext(AppContext);
	const navigation = useNavigation<AppHeaderProps>();

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
							source={require('../../../assets/avatar-placeholder.jpg')}
							className="w-8 h-8  rounded-full"
						/>
					</TouchableOpacity>
					<View className="flex flex-col ml-2 items-start">
						<Text className="text-gray-500 text-xs font-semibold m-0 p-0">Welcome,</Text>
						<Text className="text-midnight text-xs font-semibold m-0 p-0">
							{state.appUser?.fullName ?? state.user?.email ?? ''}
						</Text>
					</View>
				</View>
				<TouchableOpacity className="pr-4" onPress={handleNotificationsPress}>
					<MaterialCommunityIcons
						name={hasNotifications ? 'bell-badge' : 'bell'}
						size={22}
						color="#2B2C3D"
					/>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
