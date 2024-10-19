import { MainTabsParamList } from './main_tabs_param_list_types';
import { AuthStackParamList } from './auth_stack_param_list_types';

export type RootStackParamList = {
	Main: MainTabsParamList;
	Auth: AuthStackParamList;
	Notifications: undefined;
	Profile: undefined;
};
