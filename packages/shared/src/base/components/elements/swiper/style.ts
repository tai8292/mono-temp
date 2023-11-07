import { StyleSheet } from 'react-native';
import makeStyles from '../../../styles/make-styles';

const useStyles = makeStyles(() =>
  StyleSheet.create({
    root: {},
    dot: {
      width: 8,
      height: 8,
      opacity: 0.3,
    },
    activeDot: {
      width: 8,
      height: 8,
    },
  }),
);

export default useStyles;
