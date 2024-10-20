import { AppHeaderProps } from '@/app/navigaton/types';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function NotificationModal(): JSX.Element {
	const navigation = useNavigation<AppHeaderProps>();

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text style={{ fontSize: 30 }}>Notifications modal!</Text>
			<Button onPress={() => navigation.goBack()} title="Dismiss" />
		</View>
	);
}
