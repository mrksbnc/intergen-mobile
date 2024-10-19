import React, { useReducer } from 'react';
import { appReducer } from '@/app/context/reducers';
import type { AppContextProviderProps } from '@/app/__types__';
import { AppContext, initialState } from '@/app/context/contexts';

export default function AppContextProvider({ children }: AppContextProviderProps): JSX.Element {
	const [state, dispatch] = useReducer(appReducer, initialState);

	return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}
