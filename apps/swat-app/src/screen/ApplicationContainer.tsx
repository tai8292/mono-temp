import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootStackNavigator from './navigation/RootNavigator';

const ApplicationContainer = (): React.ReactElement => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return <RootStackNavigator />;
};

export default ApplicationContainer;
