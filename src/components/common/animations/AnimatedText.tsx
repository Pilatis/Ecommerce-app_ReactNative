import React from 'react';
import { fadeAnimations } from '@/src/helpers/fadeAnimation';
import Animated from 'react-native-reanimated';
import { AnimatedTextComponentType } from '@/src/types/animatedComponent';

type AnimatedTextProps = AnimatedTextComponentType

const AnimatedText = ({
  children,
  style,
  fadeType = 'FadeInDown',
  delay = 300,
  duration = 300
}: AnimatedTextProps) => {
  const animation = fadeAnimations[fadeType];

  const entering = animation.delay(delay).duration(duration).springify();
  return (
    <Animated.Text style={style} entering={entering}>
      {children}
    </Animated.Text>
  );
};

export default AnimatedText;
