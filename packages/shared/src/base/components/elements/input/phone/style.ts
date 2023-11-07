import { StyleSheet } from 'react-native';
import makeStyles from '../../../../styles/make-styles';

const useStyles = makeStyles(theme =>
  StyleSheet.create({
    root: {},
    inputWrapper: {},
    dialCodeWrapper: {},
    phoneInput: {
      width: 30,
    },
    flag: {
      width: 24,
      height: 24,
      borderRadius: 12,
    },
    dialCode: {
      width: 40,
      marginRight: 2,
    },
    divider: {
      marginLeft: 8,
      height: 29,
      width: 2,
      backgroundColor: theme.colors.border,
    },
  }),
);

export default useStyles;
