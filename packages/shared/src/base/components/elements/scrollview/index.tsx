import React, { useCallback, useState } from 'react';
import { RefreshControl, ScrollView as RNScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useStyles from './style';
import { ScrollViewProps } from './types';
import usePullToRefresh from '../../../hooks/pull-to-refresh';

const ScrollView: React.FC<ScrollViewProps> = React.forwardRef(
  ({ style, type, onRefresh, ...props }, ref) => {
    const styles = useStyles();
    const { public: publicPullToRefreshEvent } = usePullToRefresh();
    const [refreshing, setRefreshing] = useState(false);

    const handleOnRefresh = useCallback(async () => {
      setRefreshing(true);
      publicPullToRefreshEvent?.();
      await onRefresh?.();
      setTimeout(() => {
        setRefreshing(false);
      }, 500); // delay to prevent display loading indicator at the same time
    }, [onRefresh, publicPullToRefreshEvent]);

    const Component =
      type === 'keyboardAware' ? KeyboardAwareScrollView : RNScrollView;
    let extraProps: any;
    if (type === 'keyboardAware') {
      extraProps = {
        enableOnAndroid: true,
        keyboardShouldPersistTaps: 'handled',
        enableResetScrollToCoords: false,
      };
    }

    return (
      <Component
        style={[styles.root, style]}
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleOnRefresh} />
        }
        {...extraProps}
        {...props}
        ref={ref}
      />
    );
  },
);

export default ScrollView;
