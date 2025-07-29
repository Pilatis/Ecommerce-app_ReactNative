import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import useProducts from '@/src/hooks/useProducts';
import { Colors } from '@/src/constants/Colors';
import { globalsStyles } from '@/src/styles/globals';
import ProductList from '@/src/components/common/Products/ProductList';
import { categoryNameMap } from '@/src/helpers/categoryNameMap';
import StatusHandler from '@/src/components/common/StatusHandler';
import { useHeaderHeight } from '@react-navigation/elements';

type Props = {};

const CategoryProducts = (props: Props) => {
  const { category } = useLocalSearchParams();
  const {
    getProducts,
    getProductsSale,
    productsSale,
    products,
    loading,
    error
  } = useProducts();

  const headerHeight = useHeaderHeight();

  useEffect(() => {
    if (!products || !productsSale) {
      getProducts();
      getProductsSale();
    }
  }, []);

  const categoryName = typeof category === 'string' ? category : '';
  const markedProducts = (products || []).map((product) => ({ ...product, source: 'products' }));
  const markedSaleProducts = (productsSale || []).map((product) => ({ ...product, source: 'sale' }))
  const allProducts = [...markedProducts, ...markedSaleProducts];

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: `${categoryNameMap[categoryName]}`,
          headerTitleAlign: 'center',
        }}
        
      />

      <StatusHandler
        loading={loading}
        error={error}
        empty={!products?.length || !productsSale?.length}
      >
        <View style={styles.container}>
          <ScrollView>
            <ProductList
              products={allProducts.filter(
                (product) => product.category.name === categoryName
              )}
              loading={loading}
              error={error}
            />
          </ScrollView>
        </View>
      </StatusHandler>
    </>
  );
};

export default CategoryProducts;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: 20
  }
});
