import { ContainerProps } from '@mono-temp/shared/src/base/components/elements/container/types';
import { RootNavProp } from 'src/types/navigation/indext';

export type OnboardingScreenProps = ContainerProps & RootNavProp<'Onboard'>;

export type OnboardingTypes = {
  [key: string]: any;
};
