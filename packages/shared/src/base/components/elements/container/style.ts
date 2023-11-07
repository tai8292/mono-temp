import { Platform, StyleSheet } from 'react-native';
import makeStyles from '../../../styles/make-styles';

const useStyles = makeStyles(theme =>
  StyleSheet.create({
    root: {
      position: 'relative',
    },
    default: {},
    safeArea: {
      flex: 1,
    },
    safeBottomArea: {
      flex: 1,
    },
    keyboardAvoiding: {},
    page: {
      flex: 1,
    },
    pageWithScroll: {},
    pageWithScrollContentContainer: {},
    lightCard: {
      borderRadius: 8,
      backgroundColor: theme.colors.white,
    },
    darkCard: {
      borderRadius: 8,
      backgroundColor: theme.colors.dark.dark2,
    },
    noneCard: {},
    horizontal: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    defaultVariant: {},
    greyVariant: {
      backgroundColor: theme.colors.brand.background2,
    },
    lightVariant: {
      backgroundColor: theme.colors.brand.background1,
    },
    // shadow
    none: {},
    low: {
      shadowColor:
        Platform.OS === 'android'
          ? 'rgba(23, 23, 37, 0.4)'
          : 'rgba(23, 23, 37, 0.04)',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowRadius: 18,
      shadowOpacity: 1,
      backgroundColor: theme.colors.background,
      elevation: 12,
    },
    medium: {
      shadowColor:
        Platform.OS === 'android'
          ? 'rgba(23, 23, 37, 0.4)'
          : 'rgba(23, 23, 37, 0.1)',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowRadius: 18,
      shadowOpacity: 1,
      backgroundColor: theme.colors.background,
      elevation: 12,
    },
    high: {
      shadowColor:
        Platform.OS === 'android'
          ? 'rgba(34, 43, 69, 0.5)'
          : 'rgba(34, 43, 69, 0.1)',
      shadowOffset: {
        width: 0,
        height: 20,
      },
      shadowRadius: 40,
      shadowOpacity: 1,
      backgroundColor: theme.colors.background,
      elevation: 20,
    },
    extremeHigh: {
      shadowColor:
        Platform.OS === 'android'
          ? 'rgba(34, 43, 69, 1)'
          : 'rgba(34, 43, 69, 0.25)',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowRadius: 4,
      shadowOpacity: 1,
      backgroundColor: theme.colors.background,
      elevation: 8,
    },
  }),
);

export default useStyles;
