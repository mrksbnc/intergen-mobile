import { AppContext } from '@/app/context/contexts/app.context';
import { AppContextActionType } from '@/app/context/reducers/constants';
import { AppHeaderProps } from '@/app/navigaton/types';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileModal(): JSX.Element {
	const { dispatch } = useContext(AppContext);

	const navigation = useNavigation<AppHeaderProps>();

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text style={{ fontSize: 30 }}>Profile modal!</Text>
			<Button onPress={() => navigation.goBack()} title="Dismiss" />
			<TouchableOpacity onPress={() => dispatch({ type: AppContextActionType.Logout })}>
				<Text style={{ fontSize: 20 }}>Logout</Text>
			</TouchableOpacity>
		</View>
	);
}
