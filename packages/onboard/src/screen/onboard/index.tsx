import React, { useMemo } from 'react';
import Onboarding from 'src/base/components/layouts/onboarding';
import Icons from 'src/resources/icons';
import useStyles from './style';
import { OnboardingScreenProps, OnboardingTypes } from './types';
import Container from '@mono-temp/shared/src/base/components/elements/container';
import useBiometric from '@mono-temp/shared/src/base/hooks/biometric';

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  const styles = useStyles();
  const { simplePrompt } = useBiometric();

  const onboards = useMemo<OnboardingTypes>(
    () => ({
      biometricEnable: [
        {
          icon: Icons.Svg.FaceID,
          title: 'Biometric Authentication',
          description:
            'Unlock LYLO with you Face ID, quick and secured by allowing to use biometric for faster login.',
          buttonTopTitle: 'Skip',
          onButtonTopClick: async () => {
            navigation.navigate('MainTab');
          },

          buttonTitle: 'Enable',
          onButtonClick: async () => {
            const result = await simplePrompt();
            if(result){
              navigation.navigate('MainTab');
            }else{
              alert('Biometric fail')
            }
          },
        },
      ],
    }),
    [],
  );

  return (
    <Container style={[styles.root]}>
      <Onboarding data={onboards?.['biometricEnable']} />
    </Container>
  );
};

export default OnboardingScreen;
