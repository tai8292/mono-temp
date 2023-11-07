"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_swiper_1 = __importDefault(require("react-native-swiper"));
const style_1 = __importDefault(require("./style"));
const theme_1 = __importDefault(require("../../../hooks/theme"));
const Swiper = react_1.default.forwardRef(({ style, children, ...props }, ref) => {
    const styles = (0, style_1.default)();
    const theme = (0, theme_1.default)();
    return (react_1.default.createElement(react_native_swiper_1.default, { ref: ref, style: [styles.root, style], loop: false, showsPagination: true, dotColor: theme.colors.grey.grey6, dotStyle: styles.dot, activeDotColor: theme.colors.grey.grey1, activeDotStyle: styles.activeDot, loadMinimal: true, loadMinimalSize: 1, ...props }, children));
});
exports.default = Swiper;
