"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-nested-ternary */
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const text_1 = __importDefault(require("../text"));
const touchable_1 = __importDefault(require("../touchable"));
const style_1 = __importDefault(require("./style"));
const theme_1 = __importDefault(require("../../../hooks/theme"));
const Button = ({ style, textStyle, iconSize = 24, leftIcon: LeftIcon, rightIcon: RightIcon, title, type = 'default', inverseColor, loading, disabled, touchable = true, children, fullWidth, ...props }) => {
    const styles = (0, style_1.default)();
    const theme = (0, theme_1.default)();
    const buttonTypeStyle = styles[type];
    const buttonInverseStyle = inverseColor && styles[`${type}Inverse`];
    const titleTypeStyle = styles[`${type}Title`];
    const buttonDisabledStyle = disabled && styles[`${type}Disabled`];
    const titleDisabledStyle = disabled && styles[`${type}DisabledTitle`];
    const buttonFullWidthStyle = fullWidth && styles.fullWidth;
    const titleWithIconStyle = !!title && (!!LeftIcon || !!RightIcon) && styles.titleWithIcon;
    const titleType = type === 'tag' || type === 'link' ? 'paragraph2' : 'title1';
    const titleDefaultVariant = type === 'outline' || type === 'link'
        ? 'grey1'
        : disabled
            ? 'grey5'
            : 'white';
    const titleInverseVariant = type === 'outline' || type === 'link' ? 'white' : 'grey1';
    const titleVariant = inverseColor ? titleInverseVariant : titleDefaultVariant;
    const indicatorColor = type === 'default' || type === 'tag'
        ? theme.colors.white
        : theme.colors.primary;
    return (react_1.default.createElement(touchable_1.default, { style: [
            styles.root,
            buttonTypeStyle,
            buttonInverseStyle,
            buttonDisabledStyle,
            buttonFullWidthStyle,
            style,
        ], disabled: !touchable || disabled || loading, ...props },
        LeftIcon && react_1.default.createElement(LeftIcon, { width: iconSize, height: iconSize }),
        loading && (react_1.default.createElement(react_native_1.ActivityIndicator, { animating: true, size: 24, color: indicatorColor })),
        !!title && (react_1.default.createElement(text_1.default, { style: [
                titleTypeStyle,
                titleDisabledStyle,
                titleWithIconStyle,
                textStyle,
            ], type: titleType, variant: titleVariant, testID: props.testID }, title)),
        RightIcon && react_1.default.createElement(RightIcon, { width: iconSize, height: iconSize }),
        children));
};
exports.default = Button;
