import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { AnimatedStyle } from 'react-native-reanimated';
import { FadeType } from './fadeType';

export interface AnimatedViewComponentType {
  children?: React.ReactNode;
  style?: StyleProp<AnimatedStyle<StyleProp<ViewStyle>>>;
  fadeType?: FadeType;
  duration?: number;
  delay?: number;
}

export interface AnimatedTextComponentType {
  children?: React.ReactNode;
  style?: StyleProp<AnimatedStyle<StyleProp<TextStyle>>>;
  fadeType?: FadeType;
  duration?: number;
  delay?: number;
}
