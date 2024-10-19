import { AppContextActions, AppState } from '@/app/context/types';
import { AppContextActionType } from './constants';

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
