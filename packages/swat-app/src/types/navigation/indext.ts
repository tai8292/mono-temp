import { BottomTabParamList } from './BottomTabNavigator';
import { RootParamList } from './RootNavigator';

export * from './BottomTabNavigator';
export * from './RootNavigator';

export type AllParamList = RootParamList & BottomTabParamList;
