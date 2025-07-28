export interface NotificationType {
    id: number;
    title: string;
    message: string;
    timestamp: string
}

export interface NotificationContextType {
  getNotifications: () => Promise<void>;
  notifications: NotificationType[] | null;
  loading: boolean;
}