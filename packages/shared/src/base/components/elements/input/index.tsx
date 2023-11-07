import React, { useCallback, useState } from "react";
import { TextInput, View } from "react-native";
import isEmpty from "lodash/isEmpty";
import TextInputMask from "react-native-text-input-mask";
import Text from "../text";
import useStyles from "./style";
import { InputProps } from "./types";
import useInputValidate from "./index.validate.hook";
import Button from "../button";
import useTheme from "../../../hooks/theme";
import withTest from "../../../hoc/with-test";

const EyeIcon = require("./common/icons/eye.svg");
const GreyEyeIcon = require("./common/icons/eye.grey.svg");

const Input: React.FC<InputProps> = React.forwardRef(
  (
    {
      style,
      inputStyle,
      label,
      error,
      value,
      disabled,
      type,
      innerInputComponent,
      readOnly,
      onFocus,
      onBlur,
      leftIcon: LeftIcon,
      secureTextEntry,
      prefixText,
      ...props
    },
    ref
  ) => {
    const styles = useStyles();
    const theme = useTheme();
    const { hasError, validateIcon, isValid } = useInputValidate({
      error,
      value,
    });
    const hasLeftIcon = !!LeftIcon;
    const hasRightIcon = !isEmpty(validateIcon);
    const hasLabel = !isEmpty(label);
    const [focus, setFocus] = useState<boolean>(false);
    const [isSecure, setSecure] = useState<boolean>(secureTextEntry || false);

    const Component = type === "mask" ? TextInputMask : TextInput;
    const SecureIcon = isSecure ? EyeIcon : GreyEyeIcon;

    const handleOnFocus = useCallback(
      (e: any) => {
        setFocus(true);
        onFocus?.(e);
      },
      [onFocus]
    );

    const handleOnBlur = useCallback(
      (e: any) => {
        setFocus(false);
        onBlur?.(e);
      },
      [onBlur]
    );

    const handleOnSecureChange = useCallback(() => {
      setSecure(!isSecure);
    }, [isSecure]);

    return (
      <View style={[styles.root, style]}>
        {hasLabel && (
          <Text
            style={styles.label}
            type="title1"
            variant="grey1"
            testID="labelInput"
          >
            {label}
          </Text>
        )}
        <View
          style={[
            styles.inputWrapper,
            focus && styles.focus,
            hasError && styles.error,
            isValid && styles.isValid,
          ]}
        >
          {!!prefixText && (
            <Text
              type="paragraph1"
              variant="grey1"
              style={styles.prefixText}
              testID="prefixText"
            >
              {prefixText}
            </Text>
          )}
          {hasLeftIcon && (
            <LeftIcon style={styles.leftIcon} width={24} height={24} />
          )}
          <Component
            {...props}
            style={[
              styles.input,
              disabled && styles.disabled,
              hasLeftIcon && styles.leftIconVisible,
              hasRightIcon && styles.rightIconVisible,
              hasError && styles.hasError,
              readOnly && styles.readOnly,
              inputStyle as any,
              isSecure && styles.textSecure,
            ]}
            value={value}
            placeholderTextColor={theme.colors.dark.dark1}
            {...((disabled || readOnly) && {
              editable: false,
            })}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            secureTextEntry={isSecure}
            ref={ref as any}
          />
          {!secureTextEntry && !disabled && !readOnly && validateIcon.Icon && (
            <validateIcon.Icon
              style={styles.validateIcon}
              fill={validateIcon.fill}
              width={validateIcon.width || 24}
              height={validateIcon.height || 24}
            />
          )}
          {secureTextEntry && (
            <Button
              style={styles.rightButton}
              onPress={handleOnSecureChange}
              testID="secure"
            >
              <SecureIcon width={24} height={24} />
            </Button>
          )}
          {innerInputComponent}
        </View>
        {/** always keep space for error */}
        <Text
          style={styles.errorText}
          type="paragraph4"
          variant="error"
          testID="error"
        >
          {hasError ? error : " "}
        </Text>
      </View>
    );
  }
);

export default withTest({ prefix: "txt" })(Input);
