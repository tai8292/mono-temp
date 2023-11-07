"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const make_styles_1 = __importDefault(require("../../../../styles/make-styles"));
const useStyles = (0, make_styles_1.default)(theme => react_native_1.StyleSheet.create({
    root: {},
    inputWrapper: {},
    dialCodeWrapper: {},
    phoneInput: {
        width: 30,
    },
    flag: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    dialCode: {
        width: 40,
        marginRight: 2,
    },
    divider: {
        marginLeft: 8,
        height: 29,
        width: 2,
        backgroundColor: theme.colors.border,
    },
}));
exports.default = useStyles;
