import { createContext } from 'react';
import type { BottomBarContextActions, BottomBarState, AppContextActions, AppState } from '@/app/__types__';

export const initialState: AppState = {
	user: null,
	token: null,
	session: null,
	isLoading: false,
	refreshToken: null,
	isAuthenticated: false,
};

export const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<AppContextActions> }>({
	state: initialState,
	dispatch: () => null,
});

export const initialBottomBarState: BottomBarState = {
	visible: true,
	activeTabIndex: 1,
};

export const BottomBarContext = createContext<{
	state: BottomBarState;
	dispatch: React.Dispatch<BottomBarContextActions>;
}>({
	state: initialBottomBarState,
	dispatch: () => null,
});
