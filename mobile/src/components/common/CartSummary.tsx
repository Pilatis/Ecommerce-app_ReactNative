import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProductType } from '@/src/types/dataMock'

type Props = {
    item: ProductType;
}

const CartSummary = ({ item }: Props) => {
  return (
  <View style={styles.cartContainer}>
      <Text style={styles.sectionTitle}>Resumo do Pedido</Text>
      <View style={styles.cartItem}>
        <Image
          source={{ uri: item.images[0] }}
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
      </View>
    </View>
  )
}

export default CartSummary

const styles = StyleSheet.create({
    cartContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  productPrice: {
    fontSize: 14,
    color: '#444',
  },
})