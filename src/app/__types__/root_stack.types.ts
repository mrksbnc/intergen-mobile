import { MainTab } from './main_tabs.types';
import { AuthStack } from './auth_stack_params.types';

export type RootStack = {
	Main: MainTab;
	Auth: AuthStack;
	Notifications: undefined;
	Profile: undefined;
};
