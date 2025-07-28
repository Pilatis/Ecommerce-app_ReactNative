import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Stack } from 'expo-router';
import { globalsStyles } from '@/src/styles/globals';
import AnimatedText from '@/src/components/common/animations/AnimatedText';
import { useNotification } from '@/src/hooks/useNotification';
import { Colors } from '@/src/constants/Colors';
import NotificationCard from '@/src/components/common/NotificationCard';
import { NotificationType } from '@/src/types/notificationContexType';

type Props = {};

const Notification = (props: Props) => {
  const { getNotifications, notifications, loading } = useNotification();

  useEffect(() => {
    getNotifications();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }
  return (
    <>
      {notifications ? (
        <View style={styles.container}>
          <AnimatedText
            fadeType="FadeInDown"
            style={[globalsStyles.headerTitle, { textAlign: 'center' }]}
          >
            Notification
          </AnimatedText>
          <FlatList
            data={notifications}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({
              item,
              index
            }: {
              item: NotificationType;
              index: number;
            }) => <NotificationCard item={item} index={index} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 15 }}
          />
        </View>
      ) : (
        <Text style={[globalsStyles.textError, { textAlign: 'center' }]}>
          Não foi possível exibir suas notificações
        </Text>
      )}
    </>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 35,
    justifyContent: 'center',
    paddingBottom: 30
  },
  notificationList: {
    justifyContent: 'center',
    gap: 5
  }
});
