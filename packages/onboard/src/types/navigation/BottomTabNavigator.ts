import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { AllParamList } from './indext';

export type HomeStackType = {
  Home: undefined;
};

export type BottomTabParamList = {
  TabHome: undefined;
};

export type BottomTabNavProp<RouteName extends keyof BottomTabParamList> = {
  navigation: BottomTabNavigationProp<AllParamList, RouteName>;
  route: RouteProp<BottomTabParamList, RouteName>;
};
