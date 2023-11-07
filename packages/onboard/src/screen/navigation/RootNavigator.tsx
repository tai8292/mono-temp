import { createStackNavigator } from '@react-navigation/stack';
import { RootParamList } from 'src/types/navigation/RootNavigator';
import React from 'react';
import TabNavigator from './TabNavigator';
import LoginScreen from '../login';
import OnboardingScreen from '../onboard';

const Stack = createStackNavigator<RootParamList>();

const RootStackNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen component={TabNavigator} name="MainTab" />
      <Stack.Screen component={LoginScreen} name="Login" />
      <Stack.Screen component={OnboardingScreen} name="Onboard" />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
