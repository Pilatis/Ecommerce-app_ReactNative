import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { CloseTab } from '@/src/components/common/CloseTab';
import useProducts from '@/src/hooks/useProducts';
import ImageSlider from '@/src/components/common/ProductDetails/ImageSlider';
import { globalsStyles } from '@/src/styles/globals';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/src/constants/Colors';
import HeaderProductDetails from '@/src/components/common/ProductDetails/HeaderProductDetails';
import ProductVariation from '@/src/components/common/ProductDetails/ProductVariation';

type Props = {};

const ProductDetails = (props: Props) => {
  const { id, source } = useLocalSearchParams<{ id: string; source: string }>();
  const { getProductDetails, productDetails, loadingProductDetail } =
    useProducts();

  const handleProductType = source === 'sale' ? 'saleProducts' : 'products';

  useEffect(() => {
    getProductDetails(handleProductType, Number(id));
    console.log(productDetails);
  }, []);

  if (loadingProductDetail) {
    return (

      <View>
            <ActivityIndicator size="large" color={Colors.primary} />
          </View>
          )
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Produto',
          headerTitleAlign: 'center',
          //headerRight: () => <CloseTab />
        }}
      />
      <View style={styles.container}>
        {productDetails && !loadingProductDetail ? (
          <View>
            <ImageSlider imageList={productDetails.images} />

            <View style={styles.infosContainer}>
               <HeaderProductDetails productDetails={productDetails} />

                <Text style={styles.description}>{productDetails.description}</Text>

                <ProductVariation />
            </View>
          </View>
        ) : (
          <Text style={[globalsStyles.textError, { textAlign: 'center' }]}>
            Erro ao exibir detalhes do produto.
          </Text>
        )}
      </View>
    </>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: 20
  },
  infosContainer: {
    paddingHorizontal: 20
  },
 
  description: {
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.6,
    lineHeight: 22
  },
});
