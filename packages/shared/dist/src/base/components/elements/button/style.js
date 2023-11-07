"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const make_styles_1 = __importDefault(require("../../../styles/make-styles"));
const useStyles = (0, make_styles_1.default)(theme => react_native_1.StyleSheet.create({
    root: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 4,
    },
    title: {
        textAlign: 'center',
    },
    titleWithIcon: {
        marginLeft: 4,
    },
    // default
    default: {
        backgroundColor: theme.colors.grey.grey1,
        borderColor: theme.colors.grey.grey1,
        borderWidth: 1,
    },
    defaultTitle: {},
    defaultDisabled: {
        backgroundColor: theme.colors.dark.dark2,
        borderColor: theme.colors.dark.dark2,
        borderWidth: 1,
        shadowOpacity: 0,
    },
    defaultDisabledTitle: {},
    defaultInverse: {
        backgroundColor: theme.colors.background,
        borderColor: theme.colors.background,
        borderWidth: 1,
    },
    // outline
    outline: {
        borderColor: theme.colors.grey.grey1,
        borderWidth: 1,
    },
    outlineTitle: {},
    outlineDisabled: {},
    outlineDisabledTitle: {},
    outlineInverse: {
        borderColor: theme.colors.background,
    },
    // tag
    tag: {
        backgroundColor: theme.colors.grey.grey1,
        borderRadius: 32,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    tagTitle: {
        fontFamily: theme.fontFamily[400],
        fontSize: 14,
    },
    tagDisabled: {},
    tagDisabledTitle: {},
    tagInverse: {},
    // icon
    icon: {
        backgroundColor: 'transparent',
        padding: 12,
    },
    iconTitle: {},
    iconDisabled: {},
    iconDisabledTitle: {},
    iconInverse: {},
    // link
    link: {
        padding: 16,
    },
    linkTitle: {
        fontFamily: theme.fontFamily[400],
        color: theme.colors.status.blue.dark,
    },
    linkDisabled: {},
    linkDisabledTitle: {},
    linkInverse: {},
    fullWidth: {
        width: '100%',
    },
}));
exports.default = useStyles;
