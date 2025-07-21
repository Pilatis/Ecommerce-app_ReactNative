import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Colors } from '../../constants/Colors';
import { router } from 'expo-router';

export const CloseTab = () => {
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <Ionicons name="close" size={24} color={Colors.baseBlack} />
    </TouchableOpacity>
  );
};
