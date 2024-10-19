import '@/styles/index.css';

import AppContextProvider from '@/app/context/providers/AppContextProvider';
import AppNavigator from '@/app/navigaton/components/AppNavigator';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App(): React.ReactElement {
	return (
		<SafeAreaProvider>
			<AppContextProvider>
				<AppNavigator />
			</AppContextProvider>
		</SafeAreaProvider>
	);
}
