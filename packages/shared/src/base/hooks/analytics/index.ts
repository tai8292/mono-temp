/* eslint-disable camelcase */
import analytics from "@react-native-firebase/analytics";
import { snakeCase } from "lodash";
import { useCallback } from "react";
import { AnalyticsHook, LogLoginParams, LogSignUpParams } from "./types";

const useAnalytics = (): AnalyticsHook => {
  const logEvent = useCallback(
    async (eventName: string, params?: { [key: string]: any }) => {
      try {
        await analytics().logEvent(snakeCase(eventName), params);
      } catch (ex) {}
    },
    []
  );

  const logLogin = useCallback(
    async ({ method }: LogLoginParams): Promise<void> => {
      await analytics().logLogin({
        method,
      });
    },
    []
  );

  const logSignUp = useCallback(
    async ({ method }: LogSignUpParams): Promise<void> => {
      await analytics().logSignUp({ method });
    },
    []
  );

  return {
    logLogin,
    logSignUp,
    logEvent,
  };
};

export default useAnalytics;
