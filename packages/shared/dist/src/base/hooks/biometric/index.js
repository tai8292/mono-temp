"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_biometrics_1 = __importDefault(require("react-native-biometrics"));
const useBiometric = () => {
    const rnBiometricsRef = (0, react_1.useRef)(new react_native_biometrics_1.default({
        allowDeviceCredentials: true,
    }));
    const simplePrompt = (0, react_1.useCallback)(async () => {
        const { success } = await rnBiometricsRef.current.simplePrompt({
            promptMessage: "Please verify to continue.",
        });
        console.log('success', success);
        return success;
    }, []);
    return {
        simplePrompt,
    };
};
exports.default = useBiometric;
