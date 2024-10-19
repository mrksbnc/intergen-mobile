import { TabContextActions, TabState } from '@/app/context/types';
import { createContext } from 'react';

export const initialTabState: TabState = {
	visible: true,
	activeTabIndex: 1,
};

export const TabContext = createContext<{
	state: TabState;
	dispatch: React.Dispatch<TabContextActions>;
}>({
	state: initialTabState,
	dispatch: () => null,
});
