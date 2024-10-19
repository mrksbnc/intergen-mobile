import React from 'react';
import { ActionMap } from '../__types__/action_map.types';
import { User, Session } from '@supabase/supabase-js';
import { AppContextActionType, TabBarActionType } from '@/app/context/reducers';

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

export type BottomBarState = {
	visible: boolean;
	activeTabIndex: number;
};

export type BottomBarContextProviderProps = {
	children: React.ReactNode;
};

export type BottomBarActionPayloadTypes = {
	[TabBarActionType.SetVisible]: { visible: boolean };
	[TabBarActionType.SetActiveTabIndex]: { activeTabIndex: number };
};

export type BottomBarContextActions =
	ActionMap<BottomBarActionPayloadTypes>[keyof ActionMap<BottomBarActionPayloadTypes>];
