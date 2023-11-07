"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const make_styles_1 = __importDefault(require("../../../styles/make-styles"));
const useStyles = (0, make_styles_1.default)(theme => react_native_1.StyleSheet.create({
    root: {
        marginBottom: 40,
    },
    label: {},
    inputWrapper: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: theme.colors.border,
    },
    input: {
        fontFamily: theme.fontFamily[400],
        fontSize: 18,
        height: '100%',
        width: '100%',
        color: theme.colors.grey.grey4,
        textAlignVertical: 'center',
    },
    disabled: {
        backgroundColor: theme.colors.disableInput,
    },
    focus: {
        borderColor: theme.colors.brand.primary,
    },
    leftIconVisible: {
        paddingLeft: 48,
    },
    rightIconVisible: {
        paddingRight: 48,
    },
    hasError: {
        color: theme.colors.status.red.dark,
    },
    error: {
        borderColor: theme.colors.status.red.dark,
    },
    isValid: {
        borderColor: theme.colors.status.green.dark,
    },
    readOnly: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        color: theme.colors.grey.grey5,
        fontSize: 18,
        paddingHorizontal: 0,
        paddingTop: 6,
        paddingBottom: 12,
    },
    prefixText: {
        marginRight: 8,
    },
    leftIcon: {
        position: 'absolute',
        left: 15,
    },
    validateIcon: {
        position: 'absolute',
        right: 15,
    },
    errorText: {
        marginTop: 8,
        marginBottom: 4,
    },
    rightButton: {
        position: 'absolute',
        right: 0,
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
    textSecure: {
    // fontSize: 36,
    // lineHeight: 38,
    // letterSpacing: -4,
    },
}));
exports.default = useStyles;
