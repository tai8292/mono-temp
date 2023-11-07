import isEmpty from "lodash/isEmpty";
import {
  InputValidateHook,
  InputValidateHookOptions,
  InputValidateStates,
} from "./types";
import useTheme from "../../../hooks/theme";

const ErrorIcon = require("./common/icons/error.svg");
const SuccessIcon = require("./common/icons/success.svg");

const useInputValidate = (
  options: InputValidateHookOptions
): InputValidateHook => {
  const { error, value } = options;
  const theme = useTheme();

  const hasError = !isEmpty(error);
  const isValid = !hasError && !isEmpty(value);
  const validateState: InputValidateStates =
    (hasError && "error") || (isValid && "valid") || "default";
  const validateIcon: any = {};
  switch (validateState) {
    case "error":
      validateIcon.Icon = ErrorIcon;
      validateIcon.fill = theme.colors.error;
      validateIcon.width = 20; // fix size of error icon
      validateIcon.height = 20; // fix size of error icon
      break;
    case "valid":
      validateIcon.Icon = SuccessIcon;
      break;
    default:
      break;
  }

  return { hasError, isValid, validateIcon };
};

export default useInputValidate;
