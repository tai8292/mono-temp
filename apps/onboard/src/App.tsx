import React, { useRef } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Config from 'react-native-config';
import { isEmpty } from 'lodash';
import CodePush from 'react-native-code-push';
import store from './services/redux';
import ApplicationContainer from './screen/ApplicationContainer';
import { defaultTheme } from '@mono-temp/shared/src/base/styles/theme';
import RouteContextProvider from '@mono-temp/shared/src/base/contexts/route';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

const dev = __DEV__;

// CodePush
const codePushKey = Platform.select({
  ios: Config.APPCENTER_CODEPUSH_IOS_API_KEY,
  android: Config.APPCENTER_CODEPUSH_ANDROID_API_KEY,
})?.trim();
export const codePushEnabled = !dev && !isEmpty(codePushKey);

const AppWithRedux = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <RouteContextProvider>
        <View style={styles.root}>
          <SafeAreaProvider>
            <NavigationContainer
              theme={defaultTheme}
            >
              <ApplicationContainer />
            </NavigationContainer>
          </SafeAreaProvider>
        </View>
      </RouteContextProvider>
    </Provider>
  );
};

const CodePushApp = codePushEnabled
  ? CodePush({
      checkFrequency: CodePush.CheckFrequency.MANUAL,
    })(AppWithRedux)
  : AppWithRedux;

export default CodePushApp;
