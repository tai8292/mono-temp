import React from 'react';
import { StyleProp, TextInputProps } from 'react-native';
import { ViewStyle } from 'react-native-phone-input';
import { TextInputMaskProps } from 'react-native-text-input-mask';

export type InputProps = {
  inputStyle?: StyleProp<ViewStyle>;
  label?: string;
  error?: string;
  disabled?: boolean;
  type?: InputType;
  innerInputComponent?: any;
  readOnly?: boolean;
  leftIcon?: React.ComponentType<any>;
  prefixText?: string;
} & TextInputProps &
  TextInputMaskProps;

export type InputType = 'default' | 'mask';

export type InputValidateStates = 'default' | 'error' | 'valid';

export type InputValidateHookOptions = {
  error?: string;
  value?: string;
};

export type InputValidateHook = {
  hasError: boolean;
  isValid: boolean;
  validateIcon: any;
};
