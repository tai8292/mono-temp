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
const react_native_render_html_1 = __importDefault(require("react-native-render-html"));
const style_1 = __importDefault(require("./style"));
const theme_1 = __importDefault(require("../../../hooks/theme"));
const utils_1 = require("../../../utils");
const with_test_1 = __importDefault(require("../../../hoc/with-test"));
const Text = ({ style, type = 'description', variant = 'none', hyperlinkProps, children: originChildren, center, html, onHtmlAnchorPress, ...props }) => {
    const theme = (0, theme_1.default)();
    const styles = (0, style_1.default)();
    const { width } = (0, react_native_1.useWindowDimensions)();
    const children = (0, react_1.useMemo)(() => {
        if (typeof originChildren === 'string')
            return (0, utils_1.stripHtml)(originChildren);
        return originChildren;
    }, [originChildren]);
    const typeStyle = styles[type];
    const variantStyle = styles[variant];
    const centerStyle = center && styles.center;
    if (html) {
        if (!react_1.default.isValidElement(originChildren) &&
            typeof originChildren === 'string') {
            const commonTagStyle = {
                ...typeStyle,
                ...variantStyle,
            };
            return (react_1.default.createElement(react_native_render_html_1.default, { ...props, contentWidth: width, tagsStyles: {
                    div: {
                        ...commonTagStyle,
                        margin: 0,
                        marginBottom: 4,
                    },
                    p: {
                        ...commonTagStyle,
                        margin: 0,
                        marginBottom: 4,
                    },
                    span: {
                        ...commonTagStyle,
                        margin: 0,
                    },
                    a: {
                        ...commonTagStyle,
                        color: theme.colors.status.blue.dark,
                        textDecorationLine: 'none',
                    },
                    table: {
                        ...commonTagStyle,
                        borderColor: theme.colors.black,
                        textDecorationLine: 'none',
                        borderWidth: 1,
                    },
                    td: {
                        padding: 10,
                        borderColor: theme.colors.black,
                        borderWidth: 1,
                        color: theme.colors.black,
                    },
                    th: {
                        padding: 10,
                        borderColor: theme.colors.black,
                        borderWidth: 1,
                        color: theme.colors.black,
                    },
                }, renderersProps: {
                    ...(props?.renderersProps || {}),
                    a: {
                        ...(props?.renderersProps?.a || {}),
                        ...(onHtmlAnchorPress && {
                            onPress: (_, href) => {
                                onHtmlAnchorPress?.(href);
                            },
                        }),
                    },
                }, systemFonts: [theme.fontFamily.regular], source: { html: originChildren } }));
        }
        console.warn('Html text should be plain string without any nested components.');
    }
    // if (hyperlinkProps) {
    //   return (
    //     <Hyperlink linkDefault linkStyle={styles.link} {...hyperlinkProps}>
    //       <RNText
    //         style={[styles.root, typeStyle, variantStyle, centerStyle, style]}
    //         {...props}
    //       >
    //         {children}
    //       </RNText>
    //     </Hyperlink>
    //   );
    // }
    return (react_1.default.createElement(react_native_1.Text, { style: [styles.root, typeStyle, variantStyle, centerStyle, style], ...props }, children));
};
exports.default = (0, with_test_1.default)({ prefix: 'txt' })(Text);
