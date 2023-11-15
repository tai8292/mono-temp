import makeStyles from '@mono-temp/shared/src/base/styles/make-styles';
import { StyleSheet } from 'react-native';

const useStyles = makeStyles(() =>
  StyleSheet.create({
    root: {
      width: '100%',
      height: '100%',
    },
  }),
);

export default useStyles;
