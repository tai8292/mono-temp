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
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_keyboard_aware_scroll_view_1 = require("react-native-keyboard-aware-scroll-view");
const style_1 = __importDefault(require("./style"));
const pull_to_refresh_1 = __importDefault(require("../../../hooks/pull-to-refresh"));
const ScrollView = react_1.default.forwardRef(({ style, type, onRefresh, ...props }, ref) => {
    const styles = (0, style_1.default)();
    const { public: publicPullToRefreshEvent } = (0, pull_to_refresh_1.default)();
    const [refreshing, setRefreshing] = (0, react_1.useState)(false);
    const handleOnRefresh = (0, react_1.useCallback)(async () => {
        setRefreshing(true);
        publicPullToRefreshEvent?.();
        await onRefresh?.();
        setTimeout(() => {
            setRefreshing(false);
        }, 500); // delay to prevent display loading indicator at the same time
    }, [onRefresh, publicPullToRefreshEvent]);
    const Component = type === 'keyboardAware' ? react_native_keyboard_aware_scroll_view_1.KeyboardAwareScrollView : react_native_1.ScrollView;
    let extraProps;
    if (type === 'keyboardAware') {
        extraProps = {
            enableOnAndroid: true,
            keyboardShouldPersistTaps: 'handled',
            enableResetScrollToCoords: false,
        };
    }
    return (react_1.default.createElement(Component, { style: [styles.root, style], scrollEventThrottle: 1, showsHorizontalScrollIndicator: false, refreshControl: react_1.default.createElement(react_native_1.RefreshControl, { refreshing: refreshing, onRefresh: handleOnRefresh }), ...extraProps, ...props, ref: ref }));
});
exports.default = ScrollView;
