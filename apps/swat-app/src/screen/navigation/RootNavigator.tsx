import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TabNavigator from './TabNavigator';
import { RootParamList } from '../../types/navigation/RootNavigator';

const Stack = createStackNavigator<RootParamList>();

const RootStackNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={TabNavigator} name="MainTab" />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
