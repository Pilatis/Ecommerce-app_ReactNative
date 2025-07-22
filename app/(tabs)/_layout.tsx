import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/src/components/common/HapticTab';
import TabBarBackground from '@/src/components/ui/TabBarBackground';
import { Colors } from '@/src/constants/Colors';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import Ionicons from '@react-native-vector-icons/ionicons';
import { TabBar } from '@/src/components/common/TabBar/TabBar';
import { icon } from '@/src/constants/Icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute'
          },
          default: {}
        })
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons size={22} name="home-outline" color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <Ionicons size={22} name="search-outline" color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: 'Notificações',
          tabBarIcon: ({ color }) => (
            <Ionicons size={22} name="notifications" color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Carrinho',
          tabBarBadge: 3,
          tabBarIcon: ({ color }) => (
            <Ionicons size={22} name="cart-outline" color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: icon.profile
        }}
      />
    </Tabs>
  );
}
