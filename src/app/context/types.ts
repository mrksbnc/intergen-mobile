import { AppContextActionType, TabBarActionType } from '@/app/context/reducers/constants';
import { Session, User } from '@supabase/supabase-js';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionMap<M extends { [index: string]: any }> = {
	[K in keyof M]: M[K] extends undefined
		? {
				type: K;
			}
		: {
				type: K;
				payload: M[K];
			};
};

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
	[AppContextActionType.SetLoginData]: {
		token: string;
		refreshToken: string;
		session: Session;
		user: User;
	};
	[AppContextActionType.SetRefreshToken]: { refreshToken: string };
};

export type AppContextActions =
	ActionMap<AppContextActionPayloadTypes>[keyof ActionMap<AppContextActionPayloadTypes>];

export type TabState = {
	visible: boolean;
	activeTabIndex: number;
};

export type TabContextProviderProps = {
	children: React.ReactNode;
};

export type BottomBarActionPayloadTypes = {
	[TabBarActionType.SetVisible]: { visible: boolean };
	[TabBarActionType.SetActiveTabIndex]: { activeTabIndex: number };
};

export type TabContextActions =
	ActionMap<BottomBarActionPayloadTypes>[keyof ActionMap<BottomBarActionPayloadTypes>];
