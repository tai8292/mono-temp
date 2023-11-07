import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useCallback, useEffect, useRef } from 'react';
import { AppState, DeviceEventEmitter } from 'react-native';
import {
  PullToRefreshCallback,
  PullToRefreshCallbackOptions,
  PullToRefreshEventType,
  PullToRefreshHook,
  PullToRefreshOptions,
} from './types';

const usePullToRefresh = (
  callback?: PullToRefreshCallback,
  options?: PullToRefreshOptions,
): PullToRefreshHook => {
  const isMountRef = useRef(false);
  const isFocused = useIsFocused();

  const publicEvent = useCallback((): void => {
    DeviceEventEmitter.emit('pullToRefreshEvent');
  }, []);

  const handleCallback = useCallback(
    (callbackOptions: PullToRefreshCallbackOptions) => {
      if (!isFocused) return;

      callback?.(callbackOptions);
    },
    [callback, isFocused],
  );

  // on screen is focused
  const onFocusCallback = useCallback(() => {
    const isMounting = !isMountRef.current;
    isMountRef.current = true;

    if (isMounting && options?.enabledOnInit === false) return;
    if (options?.enabledOnFocus === false) return;

    handleCallback({
      type: isMounting
        ? PullToRefreshEventType.INIT
        : PullToRefreshEventType.FOCUS,
    });
  }, [handleCallback, options?.enabledOnInit, options?.enabledOnFocus]);
  useFocusEffect(onFocusCallback);

  // on user pulls to refresh
  useEffect(() => {
    if (options?.enabledOnPullToRefresh === false) return undefined;
    if (!callback) return undefined;

    const listener = DeviceEventEmitter.addListener('pullToRefreshEvent', () =>
      handleCallback({
        type: PullToRefreshEventType.PULL_TO_REFRESH,
      }),
    );

    return () => listener?.remove();
  }, [handleCallback, callback, options?.enabledOnPullToRefresh]);

  // on app is switched from background to foreground
  useEffect(() => {
    if (options?.enabledOnAppStateChanged === false) return undefined;
    if (!callback) return undefined;

    const listener = AppState.addEventListener('change', state => {
      if (state === 'active') {
        handleCallback?.({
          type: PullToRefreshEventType.ACTIVE_FROM_BACKGROUND,
        });
      }
    });

    return () => listener?.remove();
  }, [handleCallback, callback, options?.enabledOnAppStateChanged]);

  return {
    public: publicEvent,
  };
};

export default usePullToRefresh;
