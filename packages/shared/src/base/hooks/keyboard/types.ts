/* eslint-disable no-unused-vars */
export type KeyboardHook = {
    isKeyboardShow: boolean;
    hideKeyboard: (callback?: KeyboardDidHideCallback) => void;
  };
  
  export type KeyboardDidHideCallback = () => void;
  