import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import { Link, Stack } from 'expo-router';
import useProducts from '@/src/hooks/useProducts';
import { ProductType } from '@/src/types/dataMock';
import Header from '@/src/components/common/Header';
import ProductList from '@/src/components/common/Products/ProductList';
import Categories from '@/src/components/common/Category/CategoryList';
import useCategory from '@/src/hooks/useCategory';

type Props = {};

export default function HomeScreen(props: Props) {
  const { getProducts, products, loading } = useProducts();
  const { getCategories, categories, loading: loadingCategory } = useCategory();

  useEffect(() => {
    getProducts();
    getCategories();
    console.log('chamando');
  }, []);

  return (
    <>
      <Stack.Screen options={{ headerShown: true, header: () => <Header /> }} />
       <Categories categories={categories} loading={loadingCategory} />
      <ProductList products={products} />
    </>
  );
}

const styles = StyleSheet.create({});
