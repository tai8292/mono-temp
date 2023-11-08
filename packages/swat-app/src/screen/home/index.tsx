import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';
import { HomeScreenProps } from './types';

const Home: React.FC<HomeScreenProps> = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headline}>
        Lumens React Native template home screen!
      </Text>
    </View>
  );
};

export default Home;
