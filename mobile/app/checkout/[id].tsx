import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import useProducts from '@/src/hooks/useProducts'
import { ProductType } from '@/src/types/dataMock'
import { Colors } from '@/src/constants/Colors'
import CartSummary from '@/src/components/common/CartSummary'
import PaymentMethods from '@/src/components/common/PaymentMethods'

type Props = {}

const CheckoutScreen = (props: Props) => {
    const { id, source, color, size } = useLocalSearchParams<{ id: string;
        source: string;
        color: string;
        size: string
     }>();
     const {getProductDetails } = useProducts();
     const router = useRouter();
    const [product, setProduct] = useState<ProductType | null>(null);
      const [selectedPayment, setSelectedPayment] = useState<'card' | 'pix' | 'money' | null>(null);
  const [cardInfo, setCardInfo] = useState({
    number: '',
    expiry: '',
    cvv: '',
  });

  const handleProductType = source === 'sale' ? 'saleProducts' : 'products';

    useEffect(() => {
    const fetch = async () => {
      const data = await getProductDetails(handleProductType, Number(id));
      setProduct(data);
    };

    fetch();
  }, []);
  return (
 <>
      <Stack.Screen options={{ title: 'Finalizar Compra', headerTitleAlign: 'center' }} />
      <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {product && (
            <View style={styles.container}>
          <Text>Finalizar Pedido</Text>
          <CartSummary item={product} />

         </View>
        )}
      </ScrollView>
        <PaymentMethods selected={selectedPayment} onSelect={setSelectedPayment} cardInfo={cardInfo} onCardChange={setCardInfo} />
        </View>
    </>
  )
}

export default CheckoutScreen

const styles = StyleSheet.create({
     container: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
    scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

})