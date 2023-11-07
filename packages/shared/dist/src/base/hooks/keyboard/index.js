"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const useKeyboard = () => {
    const [isKeyboardShow, setKeyboardShow] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const showSubscription = react_native_1.Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardShow(true);
        });
        const hideSubscription = react_native_1.Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardShow(false);
        });
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);
    const hideKeyboard = (0, react_1.useCallback)((callback) => {
        if (isKeyboardShow) {
            if (react_native_1.Platform.OS === 'android') {
                // android has trouble with isKeyboardShow, so use timeout instead
                setTimeout(() => {
                    callback?.();
                }, 500);
            }
            else {
                const listener = react_native_1.Keyboard.addListener('keyboardDidHide', () => {
                    callback?.();
                    listener.remove();
                });
            }
            react_native_1.Keyboard.dismiss();
        }
        else {
            callback?.();
        }
    }, [isKeyboardShow]);
    return { isKeyboardShow, hideKeyboard };
};
exports.default = useKeyboard;
