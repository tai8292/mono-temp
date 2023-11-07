import { ButtonProps } from '@mono-temp/shared/src/base/components/elements/button/types';
import React from 'react';
import { SwiperProps } from 'react-native-swiper';

export type OnboardingProps = {
  data: OnboardingItem[];
  type?: OnboardingStyle;
} & SwiperProps;

export type OnboardingItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonTitle: string;
  buttonRightIcon?: React.ComponentType<any>;
  buttonLeftIcon?: React.ComponentType<any>;
  onButtonClick?: () => Promise<boolean> | boolean;
  buttonTopProps?: ButtonProps;
  buttonProps?: ButtonProps;
  smallDescription?: string;
  buttonTopTitle?: string;
  onButtonTopClick?: () => Promise<boolean> | boolean;
};

export type OnboardingStyle = 'default' | 'background';
