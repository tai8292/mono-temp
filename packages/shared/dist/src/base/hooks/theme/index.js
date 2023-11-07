"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("@react-navigation/native");
const useTheme = () => {
    const theme = (0, native_1.useTheme)();
    return theme;
};
exports.default = useTheme;
