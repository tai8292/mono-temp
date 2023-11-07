import { Theme as RNTheme } from '@react-navigation/native';
import { StatusBarStyle as RNStatusBarStyle } from 'react-native';

export type FontFamilies = {
  thin: string;
  light: string;
  regular: string;
  medium: string;
  semibold: string;
  bold: string;
  extrabold: string;
  black: string;
  '100': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
};

export type BrandColors = {
  primary: string;
  secondary: string;
  background1: string;
  background2: string;
  background3: string;
};

export type GreyColors = {
  grey1: string;
  grey2: string;
  grey3: string;
  grey4: string;
  grey5: string;
  grey6: string;
  grey7: string;
  grey01: string;
};

export type DarkColors = {
  dark1: string;
  dark2: string;
  dark3: string;
  dark4: string;
  dark5: string;
  dark20: string;
};

export type StatusColor = {
  dark: string;
  light: string;
};

export type StatusColors = {
  green: StatusColor;
  red: StatusColor;
  yellow: StatusColor;
  purple: StatusColor;
  blue: StatusColor;
  pink: StatusColor;
  orange: StatusColor;
  gold: StatusColor;
};

export type StatusBarStyle = RNStatusBarStyle;

export type TierColor = {
  platinum: string;
  gold: string;
  star: string;
  silver: string;
};

export type Theme = {
  fontFamily: FontFamilies;
  colors: {
    brand: BrandColors;
    grey: GreyColors;
    dark: DarkColors;
    secondary: string;
    white: string;
    black: string;
    status: StatusColors;
    background: string;
    headerBackground: string;
    text: string;
    secondaryText: string;
    disableText: string;
    disableInput: string;
    border: string;
    success: string;
    error: string;
    disable: string;
    divider: string;
    tabActive: string;
    tireColor: TierColor;
    error05: string;
  };
  statusBarStyle: StatusBarStyle;
} & Omit<RNTheme, 'color'>;
