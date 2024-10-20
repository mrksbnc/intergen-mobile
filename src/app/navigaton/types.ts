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
import { ParamListBase, Route } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TabRouteName } from './constants';

export type AppHeaderProps = StackNavigationProp<RootStack, 'Auth'>;

export type TabRoute = {
	name: string | null;
	icon:
		| typeof Octicons
		| typeof Entypo
		| typeof Zocial
		| typeof Feather
		| typeof Ionicons
		| typeof Fontisto
		| typeof EvilIcons
		| typeof AntDesign
		| typeof Foundation
		| typeof FontAwesome
		| typeof FontAwesome5
		| typeof MaterialIcons
		| typeof SimpleLineIcons
		| typeof MaterialCommunityIcons
		| undefined
		| null;
	type:
		| 'fontawesome5'
		| 'fontawesome'
		| 'octicon'
		| 'material-icons'
		| 'material-community'
		| 'zocial'
		| 'foundation'
		| 'evilicon'
		| 'simple-line-icon'
		| 'entypo'
		| 'antdesign'
		| 'ionicon'
		| 'feather'
		| 'fontisto'
		| null;
};

export type RootStack = {
	Main: MainTab;
	Auth: AuthStack;
	Notifications: undefined;
	Profile: undefined;
};

export type MainTab = {
	Dashboard: undefined;
	Feed: undefined;
	Learning: undefined;
	Settings: undefined;
};

export type AuthStack = {
	AuthRoot: undefined;
	SignIn: undefined;
	SignUp: undefined;
	ForgotPassword: undefined;
	ResetPassword: undefined;
};

export type TabStateHistory = {
	key: string;
	type: string;
};

export type TabBarProps = {
	state: {
		history: TabStateHistory[];
		index: number;
		key: string;
		routeNames: string[];
		routes: Route<TabRouteName, ParamListBase>[];
		stale: boolean;
		type: string;
	};
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	navigation: any;
};

export type TabProps = {
	color: string;
	style?: string;
	routeName: string;
	onPress: () => void;
};

export type TabState = {
	type: string | null;
	icon: string | null;
	name: TabRouteName | string | null;
};
