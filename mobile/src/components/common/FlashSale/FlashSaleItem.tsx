import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProductType } from '@/src/types/dataMock';
import ProductItem from '../Products/ProductItem';

type Props = {
  item: ProductType;
  index: number
};

const FlashSaleItem = ({ item, index }: Props) => {
  return (
    <View style={styles.container}>
      <ProductItem item={item} productIndex={index} />
    </View>
  );
};

export default FlashSaleItem;

const styles = StyleSheet.create({
  container: {
    marginRight: 20
  }
});
