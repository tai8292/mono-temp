"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("@react-navigation/native");
const react_1 = require("react");
const react_native_1 = require("react-native");
const types_1 = require("./types");
const usePullToRefresh = (callback, options) => {
    const isMountRef = (0, react_1.useRef)(false);
    const isFocused = (0, native_1.useIsFocused)();
    const publicEvent = (0, react_1.useCallback)(() => {
        react_native_1.DeviceEventEmitter.emit('pullToRefreshEvent');
    }, []);
    const handleCallback = (0, react_1.useCallback)((callbackOptions) => {
        if (!isFocused)
            return;
        callback?.(callbackOptions);
    }, [callback, isFocused]);
    // on screen is focused
    const onFocusCallback = (0, react_1.useCallback)(() => {
        const isMounting = !isMountRef.current;
        isMountRef.current = true;
        if (isMounting && options?.enabledOnInit === false)
            return;
        if (options?.enabledOnFocus === false)
            return;
        handleCallback({
            type: isMounting
                ? types_1.PullToRefreshEventType.INIT
                : types_1.PullToRefreshEventType.FOCUS,
        });
    }, [handleCallback, options?.enabledOnInit, options?.enabledOnFocus]);
    (0, native_1.useFocusEffect)(onFocusCallback);
    // on user pulls to refresh
    (0, react_1.useEffect)(() => {
        if (options?.enabledOnPullToRefresh === false)
            return undefined;
        if (!callback)
            return undefined;
        const listener = react_native_1.DeviceEventEmitter.addListener('pullToRefreshEvent', () => handleCallback({
            type: types_1.PullToRefreshEventType.PULL_TO_REFRESH,
        }));
        return () => listener?.remove();
    }, [handleCallback, callback, options?.enabledOnPullToRefresh]);
    // on app is switched from background to foreground
    (0, react_1.useEffect)(() => {
        if (options?.enabledOnAppStateChanged === false)
            return undefined;
        if (!callback)
            return undefined;
        const listener = react_native_1.AppState.addEventListener('change', state => {
            if (state === 'active') {
                handleCallback?.({
                    type: types_1.PullToRefreshEventType.ACTIVE_FROM_BACKGROUND,
                });
            }
        });
        return () => listener?.remove();
    }, [handleCallback, callback, options?.enabledOnAppStateChanged]);
    return {
        public: publicEvent,
    };
};
exports.default = usePullToRefresh;
