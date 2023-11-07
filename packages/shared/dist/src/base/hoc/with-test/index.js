"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const lodash_1 = require("lodash");
const withTest = (options) => (WrappedComponent) => react_1.default.forwardRef((props, ref) => {
    const { testID: originalTestID } = props;
    const { prefix } = options;
    const testID = (0, lodash_1.snakeCase)(`${prefix}${(0, lodash_1.capitalize)((0, lodash_1.snakeCase)(originalTestID))}`);
    return (react_1.default.createElement(WrappedComponent, { ...props, ref: ref, testID: testID, accessible: true }));
});
exports.default = withTest;
