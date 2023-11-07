"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
const react_native_text_input_mask_1 = __importDefault(require("react-native-text-input-mask"));
const text_1 = __importDefault(require("../text"));
const style_1 = __importDefault(require("./style"));
const index_validate_hook_1 = __importDefault(require("./index.validate.hook"));
const button_1 = __importDefault(require("../button"));
const theme_1 = __importDefault(require("../../../hooks/theme"));
const with_test_1 = __importDefault(require("../../../hoc/with-test"));
const EyeIcon = require("./common/icons/eye.svg");
const GreyEyeIcon = require("./common/icons/eye.grey.svg");
const Input = react_1.default.forwardRef(({ style, inputStyle, label, error, value, disabled, type, innerInputComponent, readOnly, onFocus, onBlur, leftIcon: LeftIcon, secureTextEntry, prefixText, ...props }, ref) => {
    const styles = (0, style_1.default)();
    const theme = (0, theme_1.default)();
    const { hasError, validateIcon, isValid } = (0, index_validate_hook_1.default)({
        error,
        value,
    });
    const hasLeftIcon = !!LeftIcon;
    const hasRightIcon = !(0, isEmpty_1.default)(validateIcon);
    const hasLabel = !(0, isEmpty_1.default)(label);
    const [focus, setFocus] = (0, react_1.useState)(false);
    const [isSecure, setSecure] = (0, react_1.useState)(secureTextEntry || false);
    const Component = type === "mask" ? react_native_text_input_mask_1.default : react_native_1.TextInput;
    const SecureIcon = isSecure ? EyeIcon : GreyEyeIcon;
    const handleOnFocus = (0, react_1.useCallback)((e) => {
        setFocus(true);
        onFocus?.(e);
    }, [onFocus]);
    const handleOnBlur = (0, react_1.useCallback)((e) => {
        setFocus(false);
        onBlur?.(e);
    }, [onBlur]);
    const handleOnSecureChange = (0, react_1.useCallback)(() => {
        setSecure(!isSecure);
    }, [isSecure]);
    return (react_1.default.createElement(react_native_1.View, { style: [styles.root, style] },
        hasLabel && (react_1.default.createElement(text_1.default, { style: styles.label, type: "title1", variant: "grey1", testID: "labelInput" }, label)),
        react_1.default.createElement(react_native_1.View, { style: [
                styles.inputWrapper,
                focus && styles.focus,
                hasError && styles.error,
                isValid && styles.isValid,
            ] },
            !!prefixText && (react_1.default.createElement(text_1.default, { type: "paragraph1", variant: "grey1", style: styles.prefixText, testID: "prefixText" }, prefixText)),
            hasLeftIcon && (react_1.default.createElement(LeftIcon, { style: styles.leftIcon, width: 24, height: 24 })),
            react_1.default.createElement(Component, { ...props, style: [
                    styles.input,
                    disabled && styles.disabled,
                    hasLeftIcon && styles.leftIconVisible,
                    hasRightIcon && styles.rightIconVisible,
                    hasError && styles.hasError,
                    readOnly && styles.readOnly,
                    inputStyle,
                    isSecure && styles.textSecure,
                ], value: value, placeholderTextColor: theme.colors.dark.dark1, ...((disabled || readOnly) && {
                    editable: false,
                }), onFocus: handleOnFocus, onBlur: handleOnBlur, secureTextEntry: isSecure, ref: ref }),
            !secureTextEntry && !disabled && !readOnly && validateIcon.Icon && (react_1.default.createElement(validateIcon.Icon, { style: styles.validateIcon, fill: validateIcon.fill, width: validateIcon.width || 24, height: validateIcon.height || 24 })),
            secureTextEntry && (react_1.default.createElement(button_1.default, { style: styles.rightButton, onPress: handleOnSecureChange, testID: "secure" },
                react_1.default.createElement(SecureIcon, { width: 24, height: 24 }))),
            innerInputComponent),
        react_1.default.createElement(text_1.default, { style: styles.errorText, type: "paragraph4", variant: "error", testID: "error" }, hasError ? error : " ")));
});
exports.default = (0, with_test_1.default)({ prefix: "txt" })(Input);
