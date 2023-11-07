import { StyleSheet } from 'react-native';
import makeStyles from '../../../styles/make-styles';

const useStyles = makeStyles(theme =>
  StyleSheet.create({
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
  }),
);

export default useStyles;
