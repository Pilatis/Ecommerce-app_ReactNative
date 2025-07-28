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
          tabBarIcon: icon.index
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: icon.explore
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: 'Notificações',
          tabBarIcon: icon.notification
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Carrinho',
          tabBarIcon: icon.cart
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
