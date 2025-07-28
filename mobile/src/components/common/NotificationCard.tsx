import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NotificationType } from '@/src/types/notificationContexType';
import { AnimatedView } from './animations/AnimatedView';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/src/constants/Colors';

type Props = {
  item: NotificationType;
  index: number;
};

const NotificationCard = ({ item, index }: Props) => {
  return (
    <AnimatedView
      fadeType="FadeInDown"
      delay={300 + index * 100}
      style={styles.notificationContainer}
    >
      <Ionicons name="notifications" size={22} color={Colors.gray} />
      <View style={styles.notificationBox}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
      </View>
      <View style={styles.timestampBox}>
        <Text style={styles.timestampText}>{item.timestamp}</Text>
      </View>
    </AnimatedView>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  notificationContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.extraLightGray,
    borderRadius: 10,
    gap: 10
  },
  notificationBox: {
    justifyContent: 'flex-start',
    gap: 10
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'semibold',
    letterSpacing: 0.6
  },
  notificationMessage: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.gray
  },
  notificationInfo: {},
  timestampBox: {
    position: 'absolute',
    left: 10,
    top: 15
  },
  timestampText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.gray
  }
});
