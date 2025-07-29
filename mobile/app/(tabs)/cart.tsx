import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import useCart from '@/src/hooks/useCart';
import StatusHandler from '@/src/components/common/StatusHandler';
import { CartType } from '@/src/types/cartContextType';
import CartItem from '@/src/components/common/Cart/CartItem';

type Props = {};

const CartScreen = (props: Props) => {
  const { getCartItems, cartItems, loading, error } = useCart();

  useEffect(() => {
    getCartItems();
  }, []);
  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTitle: 'Carrinho', headerTitleAlign: 'center' }} />
      <StatusHandler
        loading={loading}
        error={error}
        emptyText="Nenhum item no carrinho"
        empty={!cartItems}
      >
        <View style={styles.container}>
          <FlatList data={cartItems} keyExtractor={(item: CartType) => item.id.toString()} renderItem={({ item, index }: { item: CartType, index: number }) => (
            <CartItem item={item} index={index} />
          )} />
        </View>
      </StatusHandler>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  }
});
