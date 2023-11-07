"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const Touchable = react_1.default.forwardRef(({ activeOpacity = react_native_1.Platform.OS === 'android' ? 0.7 : undefined, useGestureHandlerTouchable, ...props }, ref) => {
    const TouchableOpacity = useGestureHandlerTouchable
        ? react_native_gesture_handler_1.TouchableOpacity
        : react_native_1.TouchableOpacity;
    return (react_1.default.createElement(TouchableOpacity, { ref: ref, activeOpacity: activeOpacity, ...props }));
});
exports.default = Touchable;
