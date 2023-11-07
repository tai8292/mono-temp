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
const lodash_1 = require("lodash");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const style_1 = __importDefault(require("./style"));
const container_1 = __importDefault(require("../../container"));
const __1 = __importDefault(require(".."));
const PhoneInput = ({ style, value, onPhoneNumberChange, ...props }) => {
    const styles = (0, style_1.default)();
    const isInitRef = (0, react_1.useRef)(true);
    const initialized = (0, lodash_1.debounce)(() => {
        isInitRef.current = false;
    }, 200);
    const onChangeText = (formatted, extracted) => {
        // prevent redundant calls on mount if enable autoFocus
        if (react_native_1.Platform.OS === "ios") {
            if (isInitRef.current) {
                initialized();
                return;
            }
        }
        onPhoneNumberChange?.(extracted || "", "65" || "");
    };
    return (react_1.default.createElement(container_1.default, { style: [styles.root, style] },
        react_1.default.createElement(__1.default, { ...props, style: styles.inputWrapper, autoCorrect: false, keyboardType: "phone-pad", underlineColorAndroid: "transparent", onChangeText: onChangeText, type: "mask", mask: "[0000] [0000]", placeholder: "0000 0000", value: value, prefixText: "+65" })));
};
exports.default = PhoneInput;
