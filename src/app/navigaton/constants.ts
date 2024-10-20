import type { TabRoute } from '@/app/navigaton/types';

export enum TabRouteName {
	Dashboard = 'Dashboard',
	Learning = 'Learning',
	Feed = 'Feed',
	Settings = 'Settings',
}

export const tabRoutes: Record<TabRouteName, TabRoute> = {
	[TabRouteName.Dashboard]: {
		name: TabRouteName.Dashboard,
		icon: 'layer-group',
		type: 'fontawesome5',
	},
	[TabRouteName.Learning]: {
		name: TabRouteName.Learning,
		icon: 'book',
		type: 'material-icons',
	},
	[TabRouteName.Feed]: {
		name: TabRouteName.Feed,
		icon: 'insert-chart',
		type: 'material-icons',
	},
	[TabRouteName.Settings]: {
		name: TabRouteName.Settings,
		icon: 'cog',
		type: 'fontawesome5',
	},
};

export function getTabRoute(routeName: string): TabRoute | null {
	const route = Object.values(tabRoutes).find((tab) => tab.name === routeName);

	if (!route) {
		return null;
	}

	return route;
}
