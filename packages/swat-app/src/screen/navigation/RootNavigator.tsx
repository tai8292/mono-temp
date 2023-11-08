import { createStackNavigator } from '@react-navigation/stack';
import { RootParamList } from 'src/types/navigation/RootNavigator';
import React from 'react';
import TabNavigator from './TabNavigator';

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
