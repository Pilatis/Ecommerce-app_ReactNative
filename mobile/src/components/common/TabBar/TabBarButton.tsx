import React from 'react';
import {
  Text,
  Pressable,
  GestureResponderEvent,
  StyleSheet,
  View
} from 'react-native';
import { Colors } from '@/src/constants/Colors';
import { icon } from '@/src/constants/Icons';

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
      {routeName === 'cart' && (
        <View style={styles.badgeBox}>
          <Text style={styles.badgeText}>3</Text>
        </View>
      )}
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
  },
  badgeBox: {
    position: 'absolute',
    backgroundColor: Colors.highlight,
    top: -6,
    right: 17,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 10,
    zIndex: 10
  },
  badgeText: {
    color: Colors.baseBlack,
    fontSize: 12,
    fontWeight: 'semibold'
  }
});
