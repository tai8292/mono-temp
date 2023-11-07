import React from 'react';
import RNSwiper from 'react-native-swiper';
import useStyles from './style';
import { SwiperProps } from './types';
import useTheme from '../../../hooks/theme';

const Swiper: React.FC<SwiperProps> = React.forwardRef(
  ({ style, children, ...props }, ref) => {
    const styles = useStyles();
    const theme = useTheme();

    return (
      <RNSwiper
        ref={ref as any}
        style={[styles.root, style]}
        loop={false}
        showsPagination
        dotColor={theme.colors.grey.grey6}
        dotStyle={styles.dot}
        activeDotColor={theme.colors.grey.grey1}
        activeDotStyle={styles.activeDot}
        loadMinimal
        loadMinimalSize={1}
        {...props}
      >
        {children}
      </RNSwiper>
    );
  },
);

export default Swiper;
