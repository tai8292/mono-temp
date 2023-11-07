"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
const theme_1 = __importDefault(require("../../../hooks/theme"));
const ErrorIcon = require("./common/icons/error.svg");
const SuccessIcon = require("./common/icons/success.svg");
const useInputValidate = (options) => {
    const { error, value } = options;
    const theme = (0, theme_1.default)();
    const hasError = !(0, isEmpty_1.default)(error);
    const isValid = !hasError && !(0, isEmpty_1.default)(value);
    const validateState = (hasError && "error") || (isValid && "valid") || "default";
    const validateIcon = {};
    switch (validateState) {
        case "error":
            validateIcon.Icon = ErrorIcon;
            validateIcon.fill = theme.colors.error;
            validateIcon.width = 20; // fix size of error icon
            validateIcon.height = 20; // fix size of error icon
            break;
        case "valid":
            validateIcon.Icon = SuccessIcon;
            break;
        default:
            break;
    }
    return { hasError, isValid, validateIcon };
};
exports.default = useInputValidate;
