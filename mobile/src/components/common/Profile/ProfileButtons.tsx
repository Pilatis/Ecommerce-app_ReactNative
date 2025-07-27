import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ProfileInfoTypes } from '@/src/types/userContextType';
import { Colors } from '@/src/constants/Colors';

type Props = {
  iconType: ProfileInfoTypes;
  text: string;
};

type IoniconsName =
  | 'person-outline'
  | 'heart-outline'
  | 'card-outline'
  | 'log-out-outline'
  | undefined;

const ProfileButtons = ({ text, iconType }: Props) => {
  const handleIconsButton = (): { iconName: IoniconsName } => {
    let iconName: IoniconsName;

    switch (iconType) {
      case 'orders':
        {
          iconName = 'person-outline';
        }
        break;
      case 'wishlist':
        {
          iconName = 'heart-outline';
        }
        break;
      case 'paymentHistory':
        {
          iconName = 'card-outline';
        }
        break;
      case 'logout':
        {
          iconName = 'log-out-outline';
        }
        break;
      default: {
        iconName = undefined;
      }
    }

    return { iconName };
  };

  const { iconName } = handleIconsButton();
  return (
    <TouchableOpacity style={styles.button}>
      <Ionicons name={iconName} size={20} />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default ProfileButtons;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    gap: 6,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.baseBlack,
    borderRadius: 5
  }
});
