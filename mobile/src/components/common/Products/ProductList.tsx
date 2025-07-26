import React from 'react';
import { Colors } from '@/src/constants/Colors';
import { ProductType } from '@/src/types/dataMock';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import ProductItem from './ProductItem';

type Props = {
  products: ProductType[] | null;
  loading: boolean;
};

const ProductList = ({ products, loading }: Props) => {
  return (
    <View style={styles.container}>
      {products && !loading ? (
        <View>
          <View style={styles.titleHeader}>
            <Text style={styles.title}>Para você</Text>
            <TouchableOpacity>
              <Text style={styles.titleButton}>Ver tudo</Text>
            </TouchableOpacity>
          </View>

          {/* <FlatList
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
     */}
          <View style={styles.productList}>
            {products.map((product: ProductType, index: number) => (
              <View key={product.id} style={styles.product}>
                <ProductItem item={product} productIndex={index} />
              </View>
            ))}
          </View>
        </View>
      ) : (
        <Text style={styles.textError}>
          Não foi possível carregar os produtos
        </Text>
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
    textAlign: 'center',
    marginTop: 20
  },
  titleHeader: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.6,
    color: Colors.baseBlack
  },
  titleButton: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.6,
    color: Colors.baseBlack
  },
  productList: {
    width: '100%',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  product: {
    width: '47.5%',
    paddingLeft: 0,
    marginBottom: 20
  }
});
