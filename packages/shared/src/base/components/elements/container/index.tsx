import React from "react";
import {
  KeyboardAvoidingView,
  View,
  SafeAreaView,
  Platform,
  ViewStyle,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useStyles from "./style";
import { ContainerProps } from "./types";

const Container: React.FC<ContainerProps> = ({
  style,
  horizontal,
  type = "default",
  variant = "default",
  center = false,
  shadow = "none",
  cardStyle = "none",
  children,
  ...props
}) => {
  const styles = useStyles();
  const { bottom: insetBottom } = useSafeAreaInsets();

  const customStyle: ViewStyle = {};
  const typeStyle = styles[type];
  const variantStyle = styles[`${variant}Variant`];
  const shadowStyle = styles[shadow];
  const cardStyles = styles[`${cardStyle}Card`];
  let ContainerView: React.ComponentType<any>;
  let extraProps: any;
  switch (type) {
    case "safeArea":
      ContainerView = SafeAreaView;
      break;
    case "safeBottomArea":
      ContainerView = View;
      customStyle.paddingBottom = insetBottom;
      break;
    case "page":
    case "keyboardAvoiding":
      ContainerView = KeyboardAvoidingView;
      extraProps = Platform.OS === "ios" && {
        behavior: "padding",
        keyboardVerticalOffset: 110,
      };
      break;
    case "pageWithScroll":
      ContainerView = KeyboardAwareScrollView;
      extraProps = {
        enableOnAndroid: true,
        keyboardShouldPersistTaps: "handled",
        enableResetScrollToCoords: false,
        contentContainerStyle: {
          ...styles.pageWithScrollContentContainer,
          ...(center && styles.center),
        },
        ...(Platform.OS === "ios" && {
          behavior: "padding",
          keyboardVerticalOffset: 115,
        }),
      };
      break;
    default:
      ContainerView = View;
      break;
  }

  return (
    <ContainerView
      style={[
        styles.root,
        typeStyle,
        variantStyle,
        shadowStyle,
        cardStyles,
        customStyle,
        horizontal && styles.horizontal,
        center && !extraProps?.contentContainerStyle && styles.center,
        style,
      ]}
      {...extraProps}
      {...props}
    >
      {children}
    </ContainerView>
  );
};

export default Container;
