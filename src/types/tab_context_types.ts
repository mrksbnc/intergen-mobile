import { ActionMap } from './action_map_types';
import { TabBarActionType } from '@/app/context/reducers';

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
