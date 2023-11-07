"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const make_styles_1 = __importDefault(require("../../../styles/make-styles"));
const useStyles = (0, make_styles_1.default)(theme => react_native_1.StyleSheet.create({
    root: {
        position: 'relative',
    },
    default: {},
    safeArea: {
        flex: 1,
    },
    safeBottomArea: {
        flex: 1,
    },
    keyboardAvoiding: {},
    page: {
        flex: 1,
    },
    pageWithScroll: {},
    pageWithScrollContentContainer: {},
    lightCard: {
        borderRadius: 8,
        backgroundColor: theme.colors.white,
    },
    darkCard: {
        borderRadius: 8,
        backgroundColor: theme.colors.dark.dark2,
    },
    noneCard: {},
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    defaultVariant: {},
    greyVariant: {
        backgroundColor: theme.colors.brand.background2,
    },
    lightVariant: {
        backgroundColor: theme.colors.brand.background1,
    },
    // shadow
    none: {},
    low: {
        shadowColor: react_native_1.Platform.OS === 'android'
            ? 'rgba(23, 23, 37, 0.4)'
            : 'rgba(23, 23, 37, 0.04)',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowRadius: 18,
        shadowOpacity: 1,
        backgroundColor: theme.colors.background,
        elevation: 12,
    },
    medium: {
        shadowColor: react_native_1.Platform.OS === 'android'
            ? 'rgba(23, 23, 37, 0.4)'
            : 'rgba(23, 23, 37, 0.1)',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowRadius: 18,
        shadowOpacity: 1,
        backgroundColor: theme.colors.background,
        elevation: 12,
    },
    high: {
        shadowColor: react_native_1.Platform.OS === 'android'
            ? 'rgba(34, 43, 69, 0.5)'
            : 'rgba(34, 43, 69, 0.1)',
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowRadius: 40,
        shadowOpacity: 1,
        backgroundColor: theme.colors.background,
        elevation: 20,
    },
    extremeHigh: {
        shadowColor: react_native_1.Platform.OS === 'android'
            ? 'rgba(34, 43, 69, 1)'
            : 'rgba(34, 43, 69, 0.25)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 4,
        shadowOpacity: 1,
        backgroundColor: theme.colors.background,
        elevation: 8,
    },
}));
exports.default = useStyles;
