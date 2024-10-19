import type { AppContextActions, AppState, BottomBarContextActions, BottomBarState } from '@/types';

export enum AppContextActionType {
	Logout = 'logout',
	SetUser = 'set_user',
	RestoreToken = 'restore_token',
	SetSession = 'set_session',
	ClearSession = 'clear_session',
	SetUserToken = 'set_user_token',
	SetIsLoading = 'set_is_loading',
	SetLoginData = 'set_login_data',
	RestoreSession = 'restore_session',
	SetUserSession = 'set_user_session',
	SetRefreshToken = 'set_refresh_token',
	SetIsAuthenticated = 'set_is_authenticated',
}
export const appReducer = (state: AppState, action: AppContextActions) => {
	switch (action.type) {
		case AppContextActionType.Logout:
			return {
				...state,
				user: null,
				token: null,
				session: null,
				isAuthenticated: false,
			};
		case AppContextActionType.SetUser:
			return {
				...state,
				user: action.payload.user,
			};
		case AppContextActionType.RestoreToken:
			return {
				...state,
				isAuthenticated: true,
				token: action.payload.token,
			};
		case AppContextActionType.RestoreSession:
			return {
				...state,
				isAuthenticated: true,
				session: action.payload.session,
				user: action.payload.session?.user,
			};
		case AppContextActionType.ClearSession:
			return {
				...state,
				token: null,
				session: null,
				isAuthenticated: false,
			};
		case AppContextActionType.SetUserToken:
			return {
				...state,
				token: action.payload.token,
			};
		case AppContextActionType.SetIsLoading:
			return {
				...state,
				isLoading: action.payload.isLoading,
			};
		case AppContextActionType.SetUserSession:
			return {
				...state,
				session: action.payload.session,
			};
		case AppContextActionType.SetIsAuthenticated:
			return {
				...state,
				isAuthenticated: action.payload.isAuthenticated,
			};
		case AppContextActionType.SetLoginData:
			return {
				...state,
				isAuthenticated: true,
				token: action.payload.token,
				session: action.payload.session,
				refreshToken: action.payload.refreshToken,
			};
		case AppContextActionType.SetRefreshToken:
			return {
				...state,
				refreshToken: action.payload.refreshToken,
			};
		default:
			return state;
	}
};

export enum TabBarActionType {
	SetVisible = 'set_visible',
	SetActiveTabIndex = 'set_active_tab_index',
}

export const tabBarReducer = (state: BottomBarState, action: BottomBarContextActions) => {
	switch (action.type) {
		case TabBarActionType.SetVisible:
			return {
				...state,
				visible: action.payload.visible,
			};
		case TabBarActionType.SetActiveTabIndex:
			return {
				...state,
				activeTabIndex: action.payload.activeTabIndex,
			};
		default:
			return state;
	}
};
