import React, { useEffect } from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { HomeScreenProps } from './types';
import Text from '@mono-temp/shared/src/base/components/elements/text';
import useAnalytics from '@mono-temp/shared/src/base/hooks/analytics';

const Home: React.FC<HomeScreenProps> = () => {

  const { logEvent } = useAnalytics();

  useEffect(() => {
    logEvent('homescreen')
  },[])

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headline}>
        Lumens React Native template home screen!
      </Text>
    </View>
  );
};

export default Home;
