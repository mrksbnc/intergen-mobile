import { AppContext } from '@/app/context/contexts/app.context';
import React, { useContext } from 'react';
import { Text, View } from 'react-native';

export default function DashboardScreen(): React.ReactElement {
	const { state } = useContext(AppContext);

	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text>{JSON.stringify(state.user)}</Text>
		</View>
	);
}
