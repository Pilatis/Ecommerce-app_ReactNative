import { useEffect, useState } from 'react';
import { View, StyleSheet, LayoutChangeEvent } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import TabBarButton from './TabBarButton';
import { Colors } from '@/src/constants/Colors';
import { AnimatedView } from '../animations/AnimatedView';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const [dimensions, setDimensions] = useState<{
    height: number;
    width: number;
  }>({ height: 20, width: 100 });

  const buttonWidth = dimensions.width / state.routes.length;

  const onTabBarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width
    });
  };

  const tabPosition = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPosition.value }]
    };
  });

  useEffect(() => {
    tabPosition.value = withTiming(buttonWidth * state.index, {
      duration: 200
    });
  }, [state.index]);

  return (
    <View onLayout={onTabBarLayout} style={styles.tabbar}>
      <AnimatedView
        style={[
          animatedStyle,
          styles.tabItemAnimation,
          { width: buttonWidth / 2 }
        ]}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        // const label =
        //   options.tabBarLabel !== undefined
        //     ? options.tabBarLabel
        //     : options.title !== undefined
        //       ? options.title
        //       : route.name;
        const label = options.title !== undefined ? options.title : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          });
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={
              route.name as
                | 'index'
                | 'explore'
                | 'notification'
                | 'cart'
                | 'profile'
            }
            label={label || ''}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 35,
    backgroundColor: Colors.white
  },
  tabItemAnimation: {
    position: 'absolute',
    backgroundColor: Colors.primary,
    top: 0,
    left: 20,
    height: 2
  }
});
