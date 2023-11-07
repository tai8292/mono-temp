import { ScrollViewProps as RNScrollViewProps } from 'react-native';
import { KeyboardAwareScrollViewProps } from 'react-native-keyboard-aware-scroll-view';

export type ScrollViewType = 'default' | 'keyboardAware';

export type ScrollViewProps = {
  type?: ScrollViewType;
  onRefresh?: () => Promise<void> | void;
  [key: string]: any;
} & RNScrollViewProps &
  KeyboardAwareScrollViewProps;
