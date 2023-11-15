import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './style';
import { HomeScreenProps } from './types';

const Home: React.FC<HomeScreenProps> = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headline}>
        Lumens React Native template home screen!
      </Text>
      <LinearGradient style={{width: '100%', height: 100}} colors={['red', 'green']} />
    </View>
  );
};

export default Home;
