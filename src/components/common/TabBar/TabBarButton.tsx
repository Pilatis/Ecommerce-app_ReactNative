import { Colors } from '@/src/constants/Colors';
import { icon } from '@/src/constants/Icons';
import React from 'react';
import {
  Text,
  Pressable,
  GestureResponderEvent,
  StyleSheet
} from 'react-native';

type TabBarButtonProps = {
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
  onLongPress: ((event: GestureResponderEvent) => void) | null | undefined;
  isFocused: boolean;
  label: string;
  routeName: keyof typeof icon;
};

const TabBarButton = ({
  onPress,
  onLongPress,
  isFocused,
  label,
  routeName
}: TabBarButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabBarButton}
    >
      {icon[routeName]({
        color: isFocused ? Colors.primary : Colors.baseBlack
      })}
      <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>{label}</Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  }
});
