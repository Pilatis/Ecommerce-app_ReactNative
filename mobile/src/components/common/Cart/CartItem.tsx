import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CartType } from '@/src/types/cartContextType';
import { AnimatedView } from '../animations/AnimatedView';
import { Colors } from '@/src/constants/Colors';

type Props = {
  item: CartType;
  index: number;
};

const CartItem = ({ item, index }: Props) => {
  return (
    <AnimatedView
      fadeType="FadeInDown"
      delay={300 + index * 300}
      style={styles.item}
    >
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemText}>${item.price}</Text>
      </View>
    </AnimatedView>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.lightGray,
    borderRadius: 5
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10
  },
  itemInfo: {
    flex: 1,
    alignSelf: 'flex-start',
    gap: 10
  },
  itemText: {}
});
