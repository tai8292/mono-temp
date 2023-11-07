"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const make_styles_1 = __importDefault(require("../../../styles/make-styles"));
const useStyles = (0, make_styles_1.default)(theme => react_native_1.StyleSheet.create({
    root: {
        fontFamily: theme.fontFamily.regular,
    },
    center: {
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    title: {
        fontSize: 32,
        fontFamily: theme.fontFamily.bold,
        lineHeight: 38,
        color: theme.colors.text,
    },
    subTitle: {
        fontSize: 24,
        fontFamily: theme.fontFamily.bold,
        lineHeight: 30,
        color: theme.colors.text,
    },
    smallTitle: {
        fontSize: 20,
        fontFamily: theme.fontFamily[600],
        lineHeight: 24,
    },
    description: {
        fontSize: 16,
        fontFamily: theme.fontFamily[400],
        lineHeight: 24,
        color: theme.colors.secondaryText,
    },
    note: {
        fontSize: 14,
        fontFamily: theme.fontFamily[400],
        lineHeight: 20,
        color: theme.colors.secondaryText,
    },
    heading1: {
        fontSize: 48,
        lineHeight: 56,
        fontFamily: theme.fontFamily[400],
        color: theme.colors.grey.grey4,
    },
    heading2: {
        fontSize: 40,
        lineHeight: 48,
        fontFamily: theme.fontFamily[400],
        color: theme.colors.grey.grey4,
    },
    heading3: {
        fontSize: 32,
        lineHeight: 40,
        fontFamily: theme.fontFamily[600],
        color: theme.colors.grey.grey4,
    },
    heading4: {
        fontSize: 24,
        lineHeight: 32,
        fontFamily: theme.fontFamily[600],
        color: theme.colors.grey.grey1,
    },
    title1: {
        fontSize: 18,
        lineHeight: 24,
        fontFamily: theme.fontFamily[600],
        color: theme.colors.grey.grey4,
    },
    title2: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: theme.fontFamily[600],
        color: theme.colors.grey.grey4,
    },
    title3: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: theme.fontFamily[600],
        color: theme.colors.grey.grey4,
    },
    paragraph1: {
        fontSize: 18,
        lineHeight: 24,
        fontFamily: theme.fontFamily[400],
        color: theme.colors.grey.grey1,
    },
    paragraph2: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: theme.fontFamily[400],
        color: theme.colors.grey.grey4,
    },
    paragraph3: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: theme.fontFamily[400],
        color: theme.colors.grey.grey4,
    },
    paragraph4: {
        fontSize: 12,
        lineHeight: 20,
        fontFamily: theme.fontFamily[400],
        color: theme.colors.grey.grey4,
    },
    warning: {
        fontSize: 13,
        lineHeight: 16,
        color: theme.colors.grey.grey1,
        fontFamily: theme.fontFamily[400],
    },
    none: {},
    default: {
        color: theme.colors.grey.grey4,
    },
    primary: {
        color: theme.colors.primary,
    },
    secondary: {
        color: theme.colors.secondaryText,
    },
    error: {
        color: theme.colors.status.red.dark,
    },
    success: {
        color: theme.colors.status.green.dark,
    },
    disable: {
        color: theme.colors.disableText,
    },
    white: {
        color: theme.colors.white,
    },
    black: {
        color: theme.colors.black,
    },
    link: {
        color: theme.colors.primary,
    },
    grey1: {
        color: theme.colors.grey.grey1,
    },
    grey2: {
        color: theme.colors.grey.grey2,
    },
    grey3: {
        color: theme.colors.grey.grey3,
    },
    grey4: {
        color: theme.colors.grey.grey4,
    },
    grey5: {
        color: theme.colors.grey.grey5,
    },
    dark1: {
        color: theme.colors.dark.dark1,
    },
    dark2: {
        color: theme.colors.dark.dark2,
    },
    dark3: {
        color: theme.colors.dark.dark3,
    },
    dark4: {
        color: theme.colors.dark.dark4,
    },
    dark5: {
        color: theme.colors.dark.dark5,
    },
    blueDark: {
        color: theme.colors.status.blue.dark,
    },
    blueLight: {
        color: theme.colors.status.blue.light,
    },
    redDark: {
        color: theme.colors.status.red.dark,
    },
    redLight: {
        color: theme.colors.status.red.light,
    },
    greenDark: {
        color: theme.colors.status.green.dark,
    },
    greenLight: {
        color: theme.colors.status.green.light,
    },
    yellowDark: {
        color: theme.colors.status.yellow.dark,
    },
    yellowLight: {
        color: theme.colors.status.yellow.light,
    },
    purpleDark: {
        color: theme.colors.status.purple.dark,
    },
    purpleLight: {
        color: theme.colors.status.purple.light,
    },
}));
exports.default = useStyles;
