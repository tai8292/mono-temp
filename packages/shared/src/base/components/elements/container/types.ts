import { KeyboardAvoidingViewProps, ViewProps } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';

export type ContainerType =
  | 'default'
  | 'safeArea'
  | 'safeBottomArea'
  | 'keyboardAvoiding'
  | 'page'
  | 'pageWithScroll';

export type ContainerVariant = 'default' | 'grey' | 'light';

export type ContainerShadow =
  | 'none'
  | 'low'
  | 'medium'
  | 'high'
  | 'extremeHigh';
export type ContainerCardStyle = 'none' | 'light' | 'dark';

export type ContainerProps = {
  horizontal?: boolean;
  type?: ContainerType;
  center?: boolean;
  variant?: ContainerVariant;
  shadow?: ContainerShadow;
  cardStyle?: ContainerCardStyle;
} & ViewProps &
  KeyboardAvoidingViewProps &
  SafeAreaViewProps;
