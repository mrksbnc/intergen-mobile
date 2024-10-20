import type { AppContextActions, AppState } from '@/app/context/types';
import { createContext } from 'react';

export const initialState: AppState = {
	user: null,
	appUser: null,
	token: null,
	session: null,
	isLoading: false,
	refreshToken: null,
	isAuthenticated: false,
};

export const AppContext = createContext<{
	state: AppState;
	dispatch: React.Dispatch<AppContextActions>;
}>({
	state: initialState,
	dispatch: () => null,
});
