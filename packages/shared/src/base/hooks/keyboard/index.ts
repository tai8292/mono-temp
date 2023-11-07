import { useCallback, useEffect, useState } from 'react';
import { Keyboard, Platform } from 'react-native';
import { KeyboardDidHideCallback, KeyboardHook } from './types';

const useKeyboard = (): KeyboardHook => {
  const [isKeyboardShow, setKeyboardShow] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardShow(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardShow(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const hideKeyboard = useCallback(
    (callback?: KeyboardDidHideCallback): void => {
      if (isKeyboardShow) {
        if (Platform.OS === 'android') {
          // android has trouble with isKeyboardShow, so use timeout instead
          setTimeout(() => {
            callback?.();
          }, 500);
        } else {
          const listener = Keyboard.addListener('keyboardDidHide', () => {
            callback?.();
            listener.remove();
          });
        }
        Keyboard.dismiss();
      } else {
        callback?.();
      }
    },
    [isKeyboardShow],
  );

  return { isKeyboardShow, hideKeyboard };
};

export default useKeyboard;
