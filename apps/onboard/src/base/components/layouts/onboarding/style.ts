import makeStyles from '@mono-temp/shared/src/base/styles/make-styles';
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const halfWidth = width / 2;

const useStyles = makeStyles(theme =>
  StyleSheet.create({
    root: {},
    pagination: {
      alignItems: 'flex-start',
      top: 275,
    },
    item: {
      position: 'relative',
      height: '100%',
      paddingHorizontal: 24,
      paddingBottom: 40,
    },
    itemBackground: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.colors.primary,
    },
    itemBackgroundTop: {
      height: '45%',
      backgroundColor: theme.colors.background,
      borderBottomLeftRadius: halfWidth,
      borderBottomRightRadius: halfWidth,
    },
    itemInfo: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {},
    itemTitle: {
      marginTop: 32,
      textAlign: 'center',
      color: theme.colors.grey.grey1,
      marginBottom: 8,
    },
    itemDescription: {
      marginTop: 8,
      textAlign: 'center',
      color: theme.colors.grey.grey4,
    },
    buttonTop: {
      marginBottom: 16,
    },
    smallDesc: {
      marginTop: 40,
    },
  }),
);

export default useStyles;
