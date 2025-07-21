import { FadeType } from '@/src/types/fadeType';
import React from 'react';
import { StyleProp, StyleSheetProperties, ViewStyle } from 'react-native';
import Animated, { AnimatedStyle, FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,} from 'react-native-reanimated';



type AnimatedViewProps = {
    children: React.ReactNode;
    style?: StyleProp<AnimatedStyle<StyleProp<ViewStyle>>>;
   fadeType?: FadeType;
   duration?: number;
   delay?: number;
}



export const AnimatedView = ({ children, style, fadeType = 'FadeIn', duration = 300, delay = 300 }: AnimatedViewProps) => {

  return (
    <Animated.View style={style} entering={fadeType === 'FadeInDown' ? (FadeInDown.delay(delay).duration(duration)) : (FadeInRight)}>
   {children}
    </Animated.View>
  )
}
