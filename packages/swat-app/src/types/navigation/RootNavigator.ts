import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AllParamList } from './indext';

export type RootParamList = {
  MainTab: undefined;
  Home: {
    isAuth: boolean;
  };
};

export type RootNavProp<RouteName extends keyof RootParamList> = {
  navigation: StackNavigationProp<AllParamList, RouteName>;
  route: RouteProp<RootParamList, RouteName>;
};
