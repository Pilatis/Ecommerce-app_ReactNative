import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { Link, Stack } from 'expo-router';
import useProducts from '@/src/hooks/useProducts';
import { ProductType } from '@/src/types/dataMock';
import Header from '@/src/components/common/Header';
import ProductItem from '@/src/components/common/ProductItem';

type Props = {};

export default function HomeScreen(props: Props) {
  const { getProducts, products, loading } = useProducts();

  useEffect(() => {
    getProducts();
    console.log('chamando');
  }, []);

  return (
    <>
      <Stack.Screen options={{ headerShown: true, header: () => <Header /> }} />
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>For you</Text>
        </View>
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  title: {}
});
