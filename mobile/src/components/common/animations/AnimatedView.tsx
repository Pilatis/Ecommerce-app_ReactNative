import React from 'react';
import { fadeAnimations } from '@/src/helpers/fadeAnimation';
import Animated from 'react-native-reanimated';
import { AnimatedViewComponentType } from '@/src/types/animatedComponent';

type AnimatedViewProps = AnimatedViewComponentType

export const AnimatedView = ({
  children,
  style,
  fadeType = 'FadeIn',
  duration = 300,
  delay = 300
}: AnimatedViewProps) => {
  const animation = fadeAnimations[fadeType];
  const entering = animation.delay(delay).duration(duration);

  return (
    <Animated.View style={style} entering={entering}>
      {children}
    </Animated.View>
  );
};
