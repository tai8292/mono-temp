import { useTheme } from '@react-navigation/native';
import { Theme } from '../theme/types';
import { GetStylesCallback } from './types';

const makeStyles =
  <T>(getStyles: GetStylesCallback<T>) =>
  (): T => {
    const theme = useTheme();
    return getStyles(theme as Theme);
  };

export default makeStyles;
