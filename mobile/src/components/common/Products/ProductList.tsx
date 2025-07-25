import React from 'react';
import { Colors } from '@/src/constants/Colors';
import { ProductType } from '@/src/types/dataMock';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import ProductItem from './ProductItem';

type Props = {
  products: ProductType[] | null;
};

const ProductList = ({ products }: Props) => {
  return (
    <View style={styles.container}>
      {products ? (
        <FlatList
          data={products}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 10
          }}
          keyExtractor={(item: ProductType) => item.id.toString()}
          renderItem={({ index, item }) => (
            <ProductItem key={item.id} item={item} productIndex={index} />
          )}
        />
      ) : (
        <Text style={styles.textError}></Text>
      )}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  textError: {
    fontSize: 18,
    fontWeight: 'semibold',
    textAlign: 'center'
  }
});
