/* eslint-disable no-nested-ternary */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import Text from '../text';
import Touchable from '../touchable';
import useStyles from './style';
import { ButtonProps } from './types';
import useTheme from '../../../hooks/theme';

const Button: React.FC<ButtonProps> = ({
  style,
  textStyle,
  iconSize = 24,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  title,
  type = 'default',
  inverseColor,
  loading,
  disabled,
  touchable = true,
  children,
  fullWidth,
  ...props
}) => {
  const styles = useStyles();
  const theme = useTheme();

  const buttonTypeStyle = styles[type];
  const buttonInverseStyle = inverseColor && styles[`${type}Inverse`];
  const titleTypeStyle = styles[`${type}Title`];
  const buttonDisabledStyle = disabled && styles[`${type}Disabled`];
  const titleDisabledStyle = disabled && styles[`${type}DisabledTitle`];
  const buttonFullWidthStyle = fullWidth && styles.fullWidth;
  const titleWithIconStyle =
    !!title && (!!LeftIcon || !!RightIcon) && styles.titleWithIcon;

  const titleType = type === 'tag' || type === 'link' ? 'paragraph2' : 'title1';
  const titleDefaultVariant =
    type === 'outline' || type === 'link'
      ? 'grey1'
      : disabled
      ? 'grey5'
      : 'white';
  const titleInverseVariant =
    type === 'outline' || type === 'link' ? 'white' : 'grey1';
  const titleVariant = inverseColor ? titleInverseVariant : titleDefaultVariant;

  const indicatorColor =
    type === 'default' || type === 'tag'
      ? theme.colors.white
      : theme.colors.primary;

  return (
    <Touchable
      style={[
        styles.root,
        buttonTypeStyle,
        buttonInverseStyle,
        buttonDisabledStyle,
        buttonFullWidthStyle,
        style,
      ]}
      disabled={!touchable || disabled || loading}
      {...props}
    >
      {LeftIcon && <LeftIcon width={iconSize} height={iconSize} />}
      {loading && (
        <ActivityIndicator animating size={24} color={indicatorColor} />
      )}
      {!!title && (
        <Text
          style={[
            titleTypeStyle,
            titleDisabledStyle,
            titleWithIconStyle,
            textStyle,
          ]}
          type={titleType}
          variant={titleVariant}
          testID={props.testID}
        >
          {title}
        </Text>
      )}
      {RightIcon && <RightIcon width={iconSize} height={iconSize} />}
      {children}
    </Touchable>
  );
};

export default Button;
