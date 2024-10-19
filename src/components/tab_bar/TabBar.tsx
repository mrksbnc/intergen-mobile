import { TabContext } from '@/app/context/contexts/tab.context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { TabBarActionType } from './constants';
import Tab from './Tab';

export default function TabBar(props: BottomTabBarProps): React.ReactElement {
	const { state, navigation } = props;

	const { routes } = state;
	const [selected, setSelected] = useState('Home');

	const tabContext = useContext(TabContext);
	const animation = useRef(new Animated.Value(0)).current;

	const getColor = (currentTab: string) => (currentTab === selected ? 'white' : 'gray');
	const getStyle = (currentTab: string) => (currentTab === selected ? 'bg-indigo-600 rounded-full' : '');

	const handlePress = (activeTab: string, index: number) => {
		if (state.index !== index) {
			setSelected(activeTab);
			tabContext.dispatch({ type: TabBarActionType.SetActiveTabIndex, payload: { activeTabIndex: index } });
			navigation.navigate(activeTab);
		}
	};

	const toggleBottomBarAnimation = () => {
		if (tabContext.state.visible) {
			Animated.timing(animation, {
				toValue: 0,
				duration: 200,
				useNativeDriver: true,
			}).start();
		} else {
			Animated.timing(animation, {
				toValue: 100,
				duration: 200,
				useNativeDriver: true,
			}).start();
		}
	};

	useEffect(() => {
		toggleBottomBarAnimation();
	}, [tabContext.state.visible]);

	return (
		<Animated.View className="bg-gray-800 flex flex-row justify-around shadow-md w-full p-4 pb-8">
			{routes.map((route, index) => (
				<Tab
					key={route.key}
					routeName={route.name}
					color={getColor(route.name)}
					style={getStyle(route.name)}
					onPress={() => handlePress(route.name, index)}
				/>
			))}
		</Animated.View>
	);
}
