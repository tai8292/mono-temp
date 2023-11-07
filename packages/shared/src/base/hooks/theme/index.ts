import { useTheme as useDefaultTheme } from '@react-navigation/native';
import { Theme } from '../../styles/theme/types';

const useTheme = (): Theme => {
  const theme = useDefaultTheme();
  return theme as Theme;
};

export default useTheme;
