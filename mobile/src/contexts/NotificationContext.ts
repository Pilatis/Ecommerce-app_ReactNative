import { createContext } from 'react';
import { NotificationContextType } from '../types/notificationContexType';

const NotificationContext = createContext<NotificationContextType>(
  {} as NotificationContextType
);

export default NotificationContext;
