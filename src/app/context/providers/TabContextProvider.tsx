import { initialTabState, TabContext } from '@/app/context/contexts/tab.context';
import { tabBarReducer } from '@/app/context/reducers/tab_reducer';
import { TabContextProviderProps } from '@/app/context/types';
import React, { useReducer } from 'react';

export function TabContextProvider({ children }: TabContextProviderProps): React.ReactElement {
	const [state, dispatch] = useReducer(tabBarReducer, initialTabState);
	return <TabContext.Provider value={{ state, dispatch }}>{children}</TabContext.Provider>;
}
