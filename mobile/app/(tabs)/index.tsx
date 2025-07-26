import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import { Link, Stack } from 'expo-router';
import useProducts from '@/src/hooks/useProducts';
import { ProductType } from '@/src/types/dataMock';
import Header from '@/src/components/common/Header';
import ProductList from '@/src/components/common/Products/ProductList';
import Categories from '@/src/components/common/Category/CategoryList';
import useCategory from '@/src/hooks/useCategory';
import FlashSale from '@/src/components/common/FlashSale/FlashSaleList';
import { Colors } from '@/src/constants/Colors';
import ProductItem from '@/src/components/common/Products/ProductItem';
import { AnimatedView } from '@/src/components/common/animations/AnimatedView';

type Props = {};

export default function HomeScreen(props: Props) {
  const { getProducts, getProductsSale, productsSale, products, loading } =
    useProducts();
  const { getCategories, categories, loading: loadingCategory } = useCategory();

  useEffect(() => {
    getProducts();
    getCategories();
    getProductsSale();
    console.log('chamando');
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: true, header: () => <Header /> }} />

      <ScrollView>
        <Categories categories={categories} loading={loadingCategory} />
        <FlashSale productsSale={productsSale} />
        <AnimatedView style={styles.banner} fadeType="FadeInDown" delay={600}>
          <Image
            source={require('@/assets/images/sale-banner.png')}
            style={styles.bannerImage}
          />
        </AnimatedView>
        <ProductList products={products} loading={loading} />
      </ScrollView>
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
