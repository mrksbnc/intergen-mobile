import { ParamListBase, NavigationRoute } from '@react-navigation/native';

export type BottomBarStateHistory = {
  key: string;
  type: string;
};

export type BottomBarProps = {
  state: {
    history: BottomBarStateHistory[];
    index: number;
    key: string;
    routeNames: string[];
    routes: NavigationRoute<ParamListBase, string>[];
    stale: boolean;
    type: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
};
