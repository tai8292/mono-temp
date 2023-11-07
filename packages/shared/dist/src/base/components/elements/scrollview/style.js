"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const make_styles_1 = __importDefault(require("../../../styles/make-styles"));
const useStyles = (0, make_styles_1.default)(() => react_native_1.StyleSheet.create({
    root: {},
}));
exports.default = useStyles;
