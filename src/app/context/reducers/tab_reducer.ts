import { TabContextActions, TabState } from '@/app/context/types';
import { TabBarActionType } from './constants';

export const tabBarReducer = (state: TabState, action: TabContextActions) => {
	switch (action.type) {
		case TabBarActionType.SetVisible:
			return {
				...state,
				visible: action.payload.visible,
			};
		case TabBarActionType.SetActiveTabIndex:
			return {
				...state,
				activeTabIndex: action.payload.activeTabIndex,
			};
		default:
			return state;
	}
};
