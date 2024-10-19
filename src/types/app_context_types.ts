import React from 'react';
import { ActionMap } from './action_map_types';
import { User, Session } from '@supabase/supabase-js';
import { AppContextActionType } from '@/app/context/reducers';

export type AppState = {
	user: User | null;
	isLoading: boolean;
	token: string | null;
	session: Session | null;
	isAuthenticated: boolean;
	refreshToken: string | null;
};

export type AppContextProviderProps = {
	children: React.ReactNode;
};

export type AppContextActionPayloadTypes = {
	[AppContextActionType.Logout]: undefined;
	[AppContextActionType.SetUser]: { user: User };
	[AppContextActionType.ClearSession]: undefined;
	[AppContextActionType.RestoreToken]: { token: string };
	[AppContextActionType.SetUserToken]: { token: string };
	[AppContextActionType.SetSession]: { session: Session };
	[AppContextActionType.RestoreSession]: { session: Session };
	[AppContextActionType.SetUserSession]: { session: Session };
	[AppContextActionType.SetIsLoading]: { isLoading: boolean };
	[AppContextActionType.SetIsAuthenticated]: { isAuthenticated: boolean };
	[AppContextActionType.SetLoginData]: { token: string; refreshToken: string; session: Session; user: User };
	[AppContextActionType.SetRefreshToken]: { refreshToken: string };
};

export type AppContextActions = ActionMap<AppContextActionPayloadTypes>[keyof ActionMap<AppContextActionPayloadTypes>];
