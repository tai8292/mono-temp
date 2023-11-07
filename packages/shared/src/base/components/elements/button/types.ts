import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { TouchableProps } from '../touchable/types';

export type ButtonProps = {
  textStyle?: StyleProp<TextStyle>;
  leftIcon?: React.ComponentType<any>;
  rightIcon?: React.ComponentType<any>;
  iconSize?: number;
  title?: string;
  type?: ButtonType;
  loading?: boolean;
  disabled?: boolean;
  touchable?: boolean;
  inverseColor?: boolean;
  fullWidth?: boolean;
  variant?: 'default' | 'rounded';
} & TouchableProps;

export type ButtonType = 'default' | 'outline' | 'icon' | 'tag' | 'link';
