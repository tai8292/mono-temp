"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_keyboard_aware_scroll_view_1 = require("react-native-keyboard-aware-scroll-view");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const style_1 = __importDefault(require("./style"));
const Container = ({ style, horizontal, type = "default", variant = "default", center = false, shadow = "none", cardStyle = "none", children, ...props }) => {
    const styles = (0, style_1.default)();
    const { bottom: insetBottom } = (0, react_native_safe_area_context_1.useSafeAreaInsets)();
    const customStyle = {};
    const typeStyle = styles[type];
    const variantStyle = styles[`${variant}Variant`];
    const shadowStyle = styles[shadow];
    const cardStyles = styles[`${cardStyle}Card`];
    let ContainerView;
    let extraProps;
    switch (type) {
        case "safeArea":
            ContainerView = react_native_1.SafeAreaView;
            break;
        case "safeBottomArea":
            ContainerView = react_native_1.View;
            customStyle.paddingBottom = insetBottom;
            break;
        case "page":
        case "keyboardAvoiding":
            ContainerView = react_native_1.KeyboardAvoidingView;
            extraProps = react_native_1.Platform.OS === "ios" && {
                behavior: "padding",
                keyboardVerticalOffset: 110,
            };
            break;
        case "pageWithScroll":
            ContainerView = react_native_keyboard_aware_scroll_view_1.KeyboardAwareScrollView;
            extraProps = {
                enableOnAndroid: true,
                keyboardShouldPersistTaps: "handled",
                enableResetScrollToCoords: false,
                contentContainerStyle: {
                    ...styles.pageWithScrollContentContainer,
                    ...(center && styles.center),
                },
                ...(react_native_1.Platform.OS === "ios" && {
                    behavior: "padding",
                    keyboardVerticalOffset: 115,
                }),
            };
            break;
        default:
            ContainerView = react_native_1.View;
            break;
    }
    return (react_1.default.createElement(ContainerView, { style: [
            styles.root,
            typeStyle,
            variantStyle,
            shadowStyle,
            cardStyles,
            customStyle,
            horizontal && styles.horizontal,
            center && !extraProps?.contentContainerStyle && styles.center,
            style,
        ], ...extraProps, ...props }, children));
};
exports.default = Container;
