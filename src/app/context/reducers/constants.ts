export enum AppContextActionType {
	Logout = 'logout',
	SetUser = 'set_user',
	SetAppUser = 'set_app_user',
	SetLoading = 'set_loading',
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

export enum TabBarActionType {
	SetVisible = 'set_visible',
	SetActiveTabIndex = 'set_active_tab_index',
}
