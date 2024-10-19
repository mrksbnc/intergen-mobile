import React, { useReducer } from 'react';
import { tabBarReducer } from './reducers';
import { initialBottomBarState, BottomBarContext } from './contexts';

export type BottomBarProviderProps = {
  children: React.ReactNode;
};

export default function BottomBarProvider({ children }: BottomBarProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(tabBarReducer, initialBottomBarState);
  return <BottomBarContext.Provider value={{ state, dispatch }}>{children}</BottomBarContext.Provider>;
}
