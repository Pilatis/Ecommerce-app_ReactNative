export type ProfileInfoTypes =
  | 'orders'
  | 'wishlist'
  | 'paymentHistory'
  | 'logout';

export interface ProfileItem {
  id: number;
  text: string;
  iconType: ProfileInfoTypes;
}

export interface User {
    userId: string;
    username: string;
    email: string
}

export interface UserContextType {

}
