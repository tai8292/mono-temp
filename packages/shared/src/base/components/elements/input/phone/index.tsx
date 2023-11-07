import { debounce } from "lodash";
import React, { useRef } from "react";
import { Platform } from "react-native";
import useStyles from "./style";
import { PhoneInputProps } from "./types";
import Container from "../../container";
import Input from "..";

const PhoneInput: React.FC<PhoneInputProps> = ({
  style,
  value,
  onPhoneNumberChange,
  ...props
}) => {
  const styles = useStyles();
  const isInitRef = useRef(true);

  const initialized = debounce(() => {
    isInitRef.current = false;
  }, 200);

  const onChangeText = (formatted: string, extracted: string): void => {
    // prevent redundant calls on mount if enable autoFocus
    if (Platform.OS === "ios") {
      if (isInitRef.current) {
        initialized();
        return;
      }
    }
    onPhoneNumberChange?.(extracted || "", "65" || "");
  };

  return (
    <Container style={[styles.root, style]}>
      <Input
        {...props}
        style={styles.inputWrapper}
        autoCorrect={false}
        keyboardType="phone-pad"
        underlineColorAndroid="transparent"
        onChangeText={onChangeText as any}
        type="mask"
        mask="[0000] [0000]"
        placeholder="0000 0000"
        value={value}
        prefixText="+65"
      />
    </Container>
  );
};

export default PhoneInput;
