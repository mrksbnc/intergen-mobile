export type TabRoute = {
	name: string;
	icon: string;
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
		| 'fontisto';
};

export type TabRouteName = 'Home' | 'Learning' | 'Dashboard' | 'Settings';
