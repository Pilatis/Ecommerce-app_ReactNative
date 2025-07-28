import React, { useCallback, useState } from 'react';
import NotificationContext from '../contexts/NotificationContext';
import useApi from '../hooks/useApi';
import { NotificationType } from '../types/notificationContexType';

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const { api } = useApi();
  const [notifications, setNotifications] = useState<NotificationType[] | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  const getNotifications = useCallback(async () => {
    setLoading(true);

    try {
      const response = await api.get('/notifications');

      if (response.status === 200) {
        setNotifications(response.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <NotificationContext.Provider value={{ getNotifications, notifications, loading }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
