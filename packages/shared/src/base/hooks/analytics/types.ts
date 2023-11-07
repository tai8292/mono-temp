/* eslint-disable no-unused-vars */
import { FirebaseAnalyticsTypes } from '@react-native-firebase/analytics/lib';

export type LogLoginParams = FirebaseAnalyticsTypes.LoginEventParameters;
export type LogSignUpParams = FirebaseAnalyticsTypes.SignUpEventParameters;

export type AnalyticsHook = {
  logLogin: (parms: LogLoginParams) => Promise<void>;
  logSignUp: (params: LogSignUpParams) => Promise<void>;
  logEvent: (eventName: string, params?: { [key: string]: any }) => Promise<void>;
};
