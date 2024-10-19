import { AppContext, initialState } from '@/app/context/contexts/app.context';
import { appReducer } from '@/app/context/reducers/app_reducer';
import type { AppContextProviderProps } from '@/app/context/types';
import React, { useReducer } from 'react';

export default function AppContextProvider({ children }: AppContextProviderProps): React.ReactElement {
	const [state, dispatch] = useReducer(appReducer, initialState);

	return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}
