/* eslint-disable no-unused-vars */
import { StyleProp, TextProps as RNTextProps, TextStyle } from 'react-native';
import { RenderHTMLProps } from 'react-native-render-html';

export type TextProps = {
  type?: TextTypes;
  variant?: TextVariants;
  hyperlinkProps?: HyperlinkProps;
  center?: boolean;
  html?: boolean;
  onHtmlAnchorPress?: (href: string) => Promise<void> | void;
} & RNTextProps &
  Omit<RenderHTMLProps, 'source'>;

export type TextTypes =
  | 'title'
  | 'subTitle'
  | 'smallTitle'
  | 'description'
  | 'note'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'paragraph1'
  | 'paragraph2'
  | 'paragraph3'
  | 'paragraph4'
  | 'warning';

export type TextVariants =
  | 'none'
  | 'default'
  | 'primary'
  | 'error'
  | 'success'
  | 'disable'
  | 'white'
  | 'black'
  | 'grey1'
  | 'grey2'
  | 'grey3'
  | 'grey4'
  | 'grey5'
  | 'dark1'
  | 'dark2'
  | 'dark3'
  | 'dark4'
  | 'dark5'
  | 'blueDark'
  | 'blueLight'
  | 'redDark'
  | 'redLight'
  | 'greenDark'
  | 'greenLight'
  | 'yellowDark'
  | 'yellowLight'
  | 'purpleDark'
  | 'purpleLight';

export type HyperlinkProps = {
  linkDefault?: boolean;
  linkify?: any;
  linkStyle?: StyleProp<TextStyle>;
  linkText?: string | ((text: string) => string);
  onPress?: (url: string, text: string) => void;
  onLongPress?: (url: string, text: string) => void;
};
