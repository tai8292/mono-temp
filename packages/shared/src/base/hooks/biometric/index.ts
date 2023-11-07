import { useCallback, useRef } from "react";
import ReactNativeBiometrics from "react-native-biometrics";
import { BiometricHook } from "./types";

const useBiometric = (): BiometricHook => {
  const rnBiometricsRef = useRef(
    new ReactNativeBiometrics({
      allowDeviceCredentials: true,
    })
  );

  const simplePrompt = useCallback(async (): Promise<boolean> => {
    const { success } = await rnBiometricsRef.current.simplePrompt({
      promptMessage: "Please verify to continue.",
    });
    console.log('success', success)
    return success;
  }, []);

  return {
    simplePrompt,
  };
};

export default useBiometric;
