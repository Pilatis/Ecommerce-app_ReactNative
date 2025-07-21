import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { fadeAnimations } from '@/src/helpers/fadeAnimation';
import { FadeType } from '@/src/types/fadeType';
import Animated, {
  AnimatedStyle,
} from 'react-native-reanimated';

type AnimatedViewProps = {
  children: React.ReactNode;
  style?: StyleProp<AnimatedStyle<StyleProp<ViewStyle>>>;
  fadeType?: FadeType;
  duration?: number;
  delay?: number;
};

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
