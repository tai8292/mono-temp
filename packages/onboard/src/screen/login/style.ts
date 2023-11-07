import makeStyles from '@mono-temp/shared/src/base/styles/make-styles';
import { Platform, StyleSheet } from 'react-native';

const useStyles = makeStyles(theme =>
  StyleSheet.create({
    root: {
      paddingHorizontal: 24,
      paddingTop: 8,
    },
    form: {
      flex: 1,
    },
    forgotButton: {
      marginBottom: 0,
    },
    createNewAccountButton: {
      marginTop: -12,
      marginBottom: 24,
    },
    header: {
      padding: 0,
      marginBottom: 40,
    },
    linkGroup: {
      marginBottom: Platform.OS === 'android' ? -110 : 0,
    },

    bioButton: {
      marginTop: -36,
      marginBottom: 24,
    },
    bioButtonText: {
      color: theme.colors.grey.grey4,
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400',
      marginLeft: 3,
    },
    modal: {
      backgroundColor: 'white',
      alignItems: 'center',
      paddingBottom: 24,
      paddingTop: 12,
      borderTopEndRadius: 12,
      borderTopStartRadius: 12,
    },
    buttonAccount: {
      marginVertical: 12,
    },
    wrapModal: {
      margin: 0,
      justifyContent: 'flex-end',
    },
  }),
);

export default useStyles;
