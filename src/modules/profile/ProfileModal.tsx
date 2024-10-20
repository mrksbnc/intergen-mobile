import { AppHeaderProps } from '@/app/navigaton/types';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Button, Text, TouchableOpacity, View } from 'react-native';
import AuthService from '../auth/services/auth_service';

export default function ProfileModal(): JSX.Element {
	const navigation = useNavigation<AppHeaderProps>();

	async function onLogoutClick() {
		Alert.alert('Logout', 'Are you sure you want to logout?');
		AuthService.instance.signOut();
	}

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text style={{ fontSize: 30 }}>Profile modal!</Text>
			<Button onPress={() => navigation.goBack()} title="Dismiss" />
			<TouchableOpacity onPress={() => onLogoutClick}>
				<Text style={{ fontSize: 20 }}>Logout</Text>
			</TouchableOpacity>
		</View>
	);
}
