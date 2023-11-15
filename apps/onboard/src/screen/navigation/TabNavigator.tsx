import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  BottomTabParamList,
  RootParamList,
} from '../../types/navigation/indext';
import Home from '../home';

const Tab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createStackNavigator<RootParamList>();

const HomeNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        header: () => null,
      }}
      name="Home"
      component={Home}
    />
  </Stack.Navigator>
);

const TabNavigator = (): React.ReactElement => {
  return (
    <Tab.Navigator initialRouteName="TabHome">
      <Tab.Screen name="TabHome" component={HomeNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
