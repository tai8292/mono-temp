import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import Container from '@mono-temp/shared/src/base/components/elements/container';
import useStyles from './style';
import { LoginScreenProps } from './types';
import { InputProps } from '@mono-temp/shared/src/base/components/elements/input/types';
import useKeyboard from '@mono-temp/shared/src/base/hooks/keyboard';
import ScrollView from '@mono-temp/shared/src/base/components/elements/scrollview';
import PhoneInput from '@mono-temp/shared/src/base/components/elements/input/phone';
import Button from '@mono-temp/shared/src/base/components/elements/button';
import Text from '@mono-temp/shared/src/base/components/elements/text';
import Input from '@mono-temp/shared/src/base/components/elements/input';

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [buttonState, setButtonState] = useState('next');
  const scrollViewRef = useRef<any>();
  const passwordInputRef = useRef<InputProps>();
  const timerRef = useRef<any>();
  const styles = useStyles();

  const { isKeyboardShow } = useKeyboard();


  const onPasswordFocus = (): void => {
    setButtonState('signin');
    scrollViewRef?.current?.scrollToEnd({ animated: true });
  };

  const handleNext = useCallback((): void => {
    if (buttonState === 'next') {
      (passwordInputRef?.current as any)?.focus();
      scrollViewRef?.current?.scrollToEnd({ animated: true });
    }
  }, [buttonState]);

  const onLogin = useCallback(async (values: any): Promise<void> => {
    navigation.navigate('Onboard');
  }, []);

  useEffect(() => {
    if (isKeyboardShow && buttonState === 'signin') {
      scrollViewRef?.current?.scrollToEnd({ animated: true });
    }
    return () => clearTimeout(timerRef.current);
  }, [isKeyboardShow, buttonState]);

  return (
    <Container type="page" style={styles.root} keyboardVerticalOffset={-110}>
          <Container style={styles.form}>
            <ScrollView
              bounces={false}
              showsVerticalScrollIndicator={false}
              ref={scrollViewRef}
            >

              <Container style={{marginTop: 100, alignItems: 'center', justifyContent: 'center', marginBottom: 50}}>
                <Text type='heading3' variant='black' center>Welcome to Monotemp</Text>
              </Container>

              <PhoneInput
                onPhoneNumberChange={(
                  phoneNumber: string,
                  dialCode: string,
                ) => {
                  console.log('phone number', phoneNumber);
                  console.log('dialCode', dialCode)
                }}
                label="Phone Number"
                onFocus={() => setButtonState('next')}
                testID="phoneNumber"
                accessible
              />
              <Input
                ref={passwordInputRef}
                onChangeText={(text: string) => {
                  console.log('text', text);
                }}
                placeholder="Password"
                label="Password"
                onFocus={onPasswordFocus}
                testID="password"
                accessible
              />
            </ScrollView>
            <Button
              onPress={
                buttonState === 'signin' ? onLogin  : handleNext
              }
              title={buttonState === 'signin' ? 'Sign in' : 'Next'}
              testID="signIn"
            />

            <View style={isKeyboardShow && styles.linkGroup}>
              <Button
                onPress={() => {}}
                title="Forgot password?"
                type="link"
                style={[styles.forgotButton]}
                testID="forgotPassword"
              />

              <Button
                onPress={() => {}}
                title="Register an account"
                type="link"
                style={[styles.createNewAccountButton]}
                testID="registerAnAccount"
              />
            </View>
          </Container>
    </Container>
  );
};

export default LoginScreen;
