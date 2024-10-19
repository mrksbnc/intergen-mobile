import { MainTab } from '@/app/navigaton/types';
import AppHeader from '@/components/header/AppHeader';
import TabBar from '@/components/tab_bar/TabBar';
import DashboardScreen from '@/modules/dashboard/screens/DashboardScreen';
import FeedScreen from '@/modules/feed/screens/FeedScreen';
import LearningScreen from '@/modules/learning/screens/LearningScreen';
import SettingsScreen from '@/modules/settings/screens/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

const Tab = createBottomTabNavigator<MainTab>();

export default function MainTabs(): React.ReactElement {
	return (
		<Tab.Navigator initialRouteName="Dashboard" tabBar={(props) => <TabBar {...props} />}>
			<Tab.Screen
				name="Dashboard"
				component={DashboardScreen}
				options={{ header: (props) => <AppHeader {...props} /> }}
			/>
			<Tab.Screen
				name="Learning"
				component={LearningScreen}
				options={{ header: (props) => <AppHeader {...props} /> }}
			/>
			<Tab.Screen name="Feed" component={FeedScreen} options={{ header: (props) => <AppHeader {...props} /> }} />
			<Tab.Screen
				name="Settings"
				component={SettingsScreen}
				options={{ header: (props) => <AppHeader {...props} /> }}
			/>
		</Tab.Navigator>
	);
}
