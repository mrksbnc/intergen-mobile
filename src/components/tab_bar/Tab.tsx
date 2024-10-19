import { getTabRoute } from '@/app/navigaton/constants';
import type { TabProps, TabRoute } from '@/app/navigaton/types';
import {
	AntDesign,
	Entypo,
	EvilIcons,
	Feather,
	FontAwesome,
	FontAwesome5,
	Fontisto,
	Foundation,
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
	Octicons,
	SimpleLineIcons,
	Zocial,
} from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

export default function Tab({ onPress, color, style, routeName }: TabProps): React.ReactElement {
	const [tab, setTab] = useState<TabRoute>({
		type: null,
		name: null,
		icon: null,
	});

	useEffect(() => {
		const tab = getTabRoute(routeName) ?? {
			type: undefined,
			icon: undefined,
			name: undefined,
		};

		setTab(tab as TabRoute);
	}, [routeName]);

	if (tab.icon === null) {
		return <></>;
	}

	return (
		<TouchableOpacity onPress={onPress} className="items-center content-center">
			<View className={`${style}flex flex-col items-center p-2 rounded-full`}>
				{tab.type === 'octicon' && <Octicons name={tab.icon} size={24} color={color} />}
				{tab.type === 'entypo' && <Entypo name={tab.icon} size={24} color={color} />}
				{tab.type === 'zocial' && <Zocial name={tab.icon} size={24} color={color} />}
				{tab.type === 'feather' && <Feather name={tab.icon} size={24} color={color} />}
				{tab.type === 'ionicon' && <Ionicons name={tab.icon} size={24} color={color} />}
				{tab.type === 'fontisto' && <Fontisto name={tab.icon} size={24} color={color} />}
				{tab.type === 'evilicon' && <EvilIcons name={tab.icon} size={24} color={color} />}
				{tab.type === 'antdesign' && <AntDesign name={tab.icon} size={24} color={color} />}
				{tab.type === 'foundation' && <Foundation name={tab.icon} size={24} color={color} />}
				{tab.type === 'fontawesome' && <FontAwesome name={tab.icon} size={24} color={color} />}
				{tab.type === 'fontawesome5' && <FontAwesome5 name={tab.icon} size={24} color={color} />}
				{tab.type === 'material-icons' && <MaterialIcons name={tab.icon} size={24} color={color} />}
				{tab.type === 'simple-line-icon' && <SimpleLineIcons name={tab.icon} size={24} color={color} />}
				{tab.type === 'material-community' && <MaterialCommunityIcons name={tab.icon} size={24} color={color} />}
			</View>
		</TouchableOpacity>
	);
}
