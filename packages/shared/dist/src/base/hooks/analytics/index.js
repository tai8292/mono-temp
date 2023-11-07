"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable camelcase */
const analytics_1 = __importDefault(require("@react-native-firebase/analytics"));
const lodash_1 = require("lodash");
const react_1 = require("react");
const useAnalytics = () => {
    const logEvent = (0, react_1.useCallback)(async (eventName, params) => {
        try {
            await (0, analytics_1.default)().logEvent((0, lodash_1.snakeCase)(eventName), params);
        }
        catch (ex) { }
    }, []);
    const logLogin = (0, react_1.useCallback)(async ({ method }) => {
        await (0, analytics_1.default)().logLogin({
            method,
        });
    }, []);
    const logSignUp = (0, react_1.useCallback)(async ({ method }) => {
        await (0, analytics_1.default)().logSignUp({ method });
    }, []);
    return {
        logLogin,
        logSignUp,
        logEvent,
    };
};
exports.default = useAnalytics;
