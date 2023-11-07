"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const make_styles_1 = __importDefault(require("../../../styles/make-styles"));
const useStyles = (0, make_styles_1.default)(() => react_native_1.StyleSheet.create({
    root: {},
    dot: {
        width: 8,
        height: 8,
        opacity: 0.3,
    },
    activeDot: {
        width: 8,
        height: 8,
    },
}));
exports.default = useStyles;
