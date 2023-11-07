/* eslint-disable no-unused-vars */
import { StyleProp, ViewStyle } from 'react-native';
import { ReactNativePhoneInputProps } from 'react-native-phone-input';
import { InputProps } from '../types';

export type PhoneInputProps = {
  style?: StyleProp<ViewStyle>;
  label?: string;
  error?: string;
  onPhoneNumberChange?: (phone: string, dialCode: string) => void;
} & Omit<
  ReactNativePhoneInputProps,
  'style' | 'onChangePhoneNumber' | 'onSelectCountry'
> &
  InputProps;
