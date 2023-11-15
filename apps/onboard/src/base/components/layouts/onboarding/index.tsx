import React, { useRef } from 'react';
import { isEmpty } from 'lodash';
import useStyles from './style';
import { OnboardingProps, OnboardingItem } from './types';
import Container from '@mono-temp/shared/src/base/components/elements/container';
import Text from '@mono-temp/shared/src/base/components/elements/text';
import Button from '@mono-temp/shared/src/base/components/elements/button';
import Swiper from '@mono-temp/shared/src/base/components/elements/swiper';
import { SwiperProps } from '@mono-temp/shared/src/base/components/elements/swiper/types';

const Onboarding: React.FC<OnboardingProps> = ({
  style,
  type,
  data,
  ...props
}) => {
  const styles = useStyles();
  const ref = useRef<SwiperProps>();

  const moveToNextItem = (): void => {
    if (ref.current) {
      (ref.current as any).scrollBy(1);
    }
  };

  const renderItem = (item: OnboardingItem): React.ReactNode => {
    const {
      icon: Icon,
      title,
      description,
      buttonTopTitle,
      onButtonTopClick,
      buttonTitle,
      onButtonClick,
      buttonRightIcon: ButtonRightIcon,
      buttonTopProps,
      buttonProps,
      smallDescription,
    } = item;
    const hasBackground = type === 'background';
    const titleVariant = hasBackground ? 'white' : 'grey1';
    const descriptionVariant = hasBackground ? 'white' : 'grey4';

    const handleOnButtonClick = async (): Promise<void> => {
      if (onButtonClick) {
        const shouldMoveToNextItem = await onButtonClick();
        if (!shouldMoveToNextItem) return;
      }

      moveToNextItem();
    };

    return (
      <Container style={styles.item} key={title}>
        {hasBackground && (
          <Container style={styles.itemBackground}>
            <Container style={styles.itemBackgroundTop} />
          </Container>
        )}
        <Container style={styles.itemInfo}>
          <Icon width={280} height={240} style={styles.icon} />
          <Text style={styles.itemTitle} type="heading3" variant={titleVariant}>
            {title}
          </Text>
          <Text
            style={styles.itemDescription}
            type="paragraph1"
            variant={descriptionVariant}
          >
            {description}
          </Text>
          {!isEmpty(smallDescription) && (
            <Text style={styles.smallDesc} type="paragraph3">
              {smallDescription}
            </Text>
          )}
        </Container>
        {!!buttonTopTitle && (
          <Button
            style={styles.buttonTop}
            title={buttonTopTitle}
            onPress={onButtonTopClick}
            type="outline"
            {...buttonTopProps}
          />
        )}

        {!!buttonTitle && (
          <Button
            title={buttonTitle}
            inverseColor={hasBackground}
            onPress={handleOnButtonClick}
            rightIcon={ButtonRightIcon}
            {...buttonProps}
          />
        )}
      </Container>
    );
  };

  return (
    <Swiper
      ref={ref}
      style={[styles.root, style]}
      paginationStyle={styles.pagination}
      {...props}
    >
      {data && data.map(renderItem)}
    </Swiper>
  );
};

export default Onboarding;
