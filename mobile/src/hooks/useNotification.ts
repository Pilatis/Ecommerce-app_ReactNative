import React, { useContext } from 'react';
import NotificationContext  from '../contexts/NotificationContext';
import { NotificationContextType } from '../types/notificationContexType';

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);

  return context;
};
