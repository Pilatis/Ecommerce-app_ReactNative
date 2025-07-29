import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
  ScrollView,
  Text
} from 'react-native';
import { Stack } from 'expo-router';
import useProducts from '@/src/hooks/useProducts';
import Header from '@/src/components/common/Header';
import ProductList from '@/src/components/common/Products/ProductList';
import Categories from '@/src/components/common/Category/CategoryList';
import useCategory from '@/src/hooks/useCategory';
import FlashSale from '@/src/components/common/FlashSale/FlashSaleList';
import { Colors } from '@/src/constants/Colors';
import { AnimatedView } from '@/src/components/common/animations/AnimatedView';
import { globalsStyles } from '@/src/styles/globals';
import StatusHandler from '@/src/components/common/StatusHandler';

type Props = {};

export default function HomeScreen(props: Props) {
  const {
    getProducts,
    getProductsSale,
    productsSale,
    products,
    loading,
    error
  } = useProducts();
  const { getCategories, categories, loading: loadingCategory } = useCategory();

  const notProducts = !products?.length || !productsSale?.length

  useEffect(() => {
    getProducts();
    getCategories();
    getProductsSale();
  }, []);

  return (
    <>
      <Stack.Screen options={{ headerShown: true, header: () => <Header /> }} />

      <StatusHandler loading={loading} error={error} empty={notProducts}>
        <ScrollView>
          <Categories categories={categories} loading={loadingCategory} />
          <FlashSale productsSale={productsSale} loading={loading} />
          <AnimatedView style={styles.banner} fadeType="FadeInDown" delay={600}>
            <Image
              source={require('@/assets/images/sale-banner.png')}
              style={styles.bannerImage}
            />
          </AnimatedView>
          <ProductList products={products} loading={loading} error={error} />
        </ScrollView>
      </StatusHandler>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    marginHorizontal: 20,
    marginBottom: 10
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 15
  }
});
