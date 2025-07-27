import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet } from 'react-native';

type ColorType = {
  color: string;
};

export const icon = {
  index: ({ color }: ColorType) => (
    <Ionicons name="home-outline" size={22} color={color} />
  ),
  explore: ({ color }: ColorType) => (
    <Ionicons name="search-outline" size={22} color={color} />
  ),
  notification: ({ color }: ColorType) => (
    <Ionicons name="notifications" size={22} color={color} />
  ),
  cart: ({ color }: ColorType) => (
    <Ionicons name="cart-outline" size={22} color={color} />
  ),
  profile: () => (
    // <Ionicons name="person-outline" size={22} color={color} />
    <Image source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=male' }} style={styles.userImage}/>
  )
};

const styles = StyleSheet.create({
  userImage: {
    height: 24,
    width: 24,
    borderRadius: 20
  }
})
